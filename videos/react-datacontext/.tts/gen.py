import json,re,subprocess,base64,sys,os
txt=open('SCRIPT.md').read()
lines=re.findall(r'## Line (\d+)[^\n]*\n(?:.*?\n)*?\n    (.+)\n',txt)
voices=[]
for n,t in lines:
    n=int(n); f=f'.tts/vo-{n:02d}.json'
    if not os.path.exists(f):
        r=subprocess.run(['elevenlabs','text-to-speech','convert_with_timestamps','--voice-id','8OezxDDjGa2d9W45o5Qs','--model-id','eleven_v4','--voice-settings.stability','0.5','--output-format','mp3_44100_128','--text',t,'--format','json'],capture_output=True,text=True)
        if r.returncode: print(n,r.stderr[:300]); sys.exit(1)
        open(f,'w').write(r.stdout)
    d=json.load(open(f)); a=d['alignment']
    open(f'audio/vo-{n:02d}.mp3','wb').write(base64.b64decode(d['audio_base64']))
    ch,st,en=a['characters'],a['character_start_times_seconds'],a['character_end_times_seconds']
    words=[];cur='';s=None;e=None
    for c,a0,a1 in zip(ch,st,en):
        if c.isspace():
            if cur: words.append((cur,s,e)); cur=''
            continue
        if not cur: s=a0
        cur+=c; e=a1
    if cur: words.append((cur,s,e))
    w=[{'id':f'w{i}','text':x,'start':round(p,2),'end':round(q,2)} for i,(x,p,q) in enumerate(words)]
    json.dump(w,open(f'audio/vo-{n:02d}.words.json','w'),indent=1)
    dur=float(subprocess.run(['ffprobe','-v','error','-show_entries','format=duration','-of','csv=p=0',f'audio/vo-{n:02d}.mp3'],capture_output=True,text=True).stdout)
    voices.append({'frame':n,'path':f'audio/vo-{n:02d}.mp3','duration_s':round(dur,2),'words':w})
    print(n,round(dur,2),len(w))
json.dump({'bgm':None,'bgm_pending':False,'voices':voices,'sfx':[]},open('audio_meta.json','w'),indent=2)
print('total',round(sum(v['duration_s'] for v in voices),1))
