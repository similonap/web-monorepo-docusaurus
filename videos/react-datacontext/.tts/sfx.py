import json,re,subprocess
sb=open('STORYBOARD.md').read()
dur={f:round(float(subprocess.run(['ffprobe','-v','error','-show_entries','format=duration','-of','csv=p=0',f'assets/sfx/{f}.mp3'],capture_output=True,text=True).stdout),2) for f in ['click','click-soft','key-press','pop','typing','whoosh-short']}
sfx=[]
for m in re.finditer(r'## Frame (\d+).*?\n- sfx: ([^\n]+)',sb,re.S):
    for name,t in re.findall(r'([\w-]+) @([\d.]+)',m.group(2)):
        sfx.append({'frame':int(m.group(1)),'file':f'assets/sfx/{name}.mp3','offset_s':float(t),'duration_s':dur[name],'volume':0.35,'source':'host'})
d=json.load(open('audio_meta.json'));d['sfx']=sfx;json.dump(d,open('audio_meta.json','w'),indent=2);print('sfx',len(sfx),'voices',len(d['voices']))
