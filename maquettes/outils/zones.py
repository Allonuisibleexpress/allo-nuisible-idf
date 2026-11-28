# zones.py <slug> : secteurs d'une page dératisation refondue (photo ou non) + fichiers Commons des catégories de la ville
import re,sys,json,time,urllib.request,urllib.parse
slug=sys.argv[1]; s=open('lib/refonte-deratisation.ts').read()
i=s.index(f"REFONTE_DERATISATION['{slug}']") if f"REFONTE_DERATISATION['{slug}']" in s else s.index(f"'{slug}': {{")
j=s.find("REFONTE_DERATISATION['",i+10); bloc=s[i:j if j>0 else None]
z=bloc[bloc.index('zones: ['):bloc.index('intervention')]
for m in re.finditer(r"nom: '([^']*)'(.*?)(?=\n      \},)",z,re.S): print(('PHOTO ' if 'photo:' in m.group(2) else '----- ')+m.group(1))
if len(sys.argv)>2:
    UA={'User-Agent':'AlloNuisibleSite/1.0 (https://allonuisibleidf.fr)'}
    def cat(c,d=0,vus=set()):
        if c in vus or d>2: return
        vus.add(c); time.sleep(1.5)
        u='https://commons.wikimedia.org/w/api.php?action=query&list=categorymembers&cmlimit=200&format=json&cmtitle='+urllib.parse.quote('Category:'+c)
        for m in json.load(urllib.request.urlopen(urllib.request.Request(u,headers=UA)))['query']['categorymembers']:
            t=m['title']
            if t.startswith('File:') and re.search(r'\.(jpe?g)$',t,re.I): print('  '*d+t[5:])
            elif t.startswith('Category:') and not re.search(r'People|Maps|Symbols|signs|Election|Politic|Coats|Flags|Logos|Vehicles|Population|by year',t): print('  '*d+'['+t[9:]+']'); cat(t[9:],d+1,vus)
    cat(sys.argv[2])
