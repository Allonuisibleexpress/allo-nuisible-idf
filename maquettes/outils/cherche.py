# cherche.py "requête" ["requête"...] : recherche de photos Commons (jpg), 15 résultats par requête
import sys,json,time,urllib.request,urllib.parse
UA={'User-Agent':'AlloNuisibleSite/1.0 (https://allonuisibleidf.fr)'}
for q in sys.argv[1:]:
    u='https://commons.wikimedia.org/w/api.php?action=query&list=search&srnamespace=6&srlimit=15&format=json&srsearch='+urllib.parse.quote(q+' filetype:bitmap')
    try: r=json.load(urllib.request.urlopen(urllib.request.Request(u,headers=UA)))['query']['search']
    except Exception as e: print('==',q,'ERREUR',e); time.sleep(5); continue
    print('==',q); [print('  '+m['title'][5:]) for m in r]; time.sleep(2)
