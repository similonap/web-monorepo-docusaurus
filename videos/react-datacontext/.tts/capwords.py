import json,re
M=[("data context punt provider","DataContext.Provider"),("data provider punt tsx","DataProvider.tsx"),
   ("data context","DataContext"),("data provider","DataProvider"),("use context","useContext"),("use effect","useEffect"),
   ("create context","createContext"),("create post","createPost"),("reload button","ReloadButton"),
   ("post list","PostList"),("post form","PostForm"),("user id","userId"),("json placeholder","JSONPlaceholder"),
   ("context api","Context API"),("use fetch","useFetch"),("post array","Post[]")]
M=[(k.split(),v) for k,v in M]; M.sort(key=lambda x:-len(x[0]))
d=json.load(open('audio_meta.json'))
norm=lambda s:re.sub(r'[^\w]','',s.lower())
for v in d['voices']:
    w=v['words'];out=[];i=0
    while i<len(w):
        for ks,rep in M:
            seg=w[i:i+len(ks)]
            if len(seg)==len(ks) and all(norm(a['text'])==b for a,b in zip(seg,ks)) and all(not re.search(r'[.,:?!]$',a['text']) for a in seg[:-1]):
                tail=re.search(r'[.,:?!]*$',seg[-1]['text']).group()
                out.append({'id':seg[0]['id'],'text':rep+tail,'start':seg[0]['start'],'end':seg[-1]['end']});i+=len(ks);break
        else:
            t=w[i]['text']; t='tsx' if t=='tsx.' else t
            out.append(dict(w[i]));i+=1
    v['words']=out
    print(v['frame'],' '.join(x['text'] for x in out if x['text'][0].isupper() and any(c.isupper() for c in x['text'][1:]) or '.' in x['text'][1:-1] or x['text'][:3] in('use','cre')))
json.dump(d,open('.tts/audio_meta.captions.json','w'),indent=2)
