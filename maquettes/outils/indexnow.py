# indexnow.py [url ...] : signale à Bing (IndexNow) les URL données, ou toutes celles du sitemap si aucune.
# Clé : public/b6507961d2cce4dcd2a19daf88fa5fc0.txt (28/11/2026). Une seule requête, sans charge pour le site.
import sys,json,re,urllib.request
K='b6507961d2cce4dcd2a19daf88fa5fc0'; H='allonuisibleidf.fr'
urls=sys.argv[1:] or re.findall(r'<loc>([^<]+)</loc>',urllib.request.urlopen('https://'+H+'/sitemap.xml').read().decode())
for i in range(0,len(urls),10000):
    d=json.dumps({'host':H,'key':K,'keyLocation':f'https://{H}/{K}.txt','urlList':urls[i:i+10000]}).encode()
    r=urllib.request.urlopen(urllib.request.Request('https://api.indexnow.org/indexnow',data=d,headers={'Content-Type':'application/json; charset=utf-8','User-Agent':'AlloNuisibleSite/1.0 (https://allonuisibleidf.fr)'}))
    print(len(urls[i:i+10000]),'URL envoyées, réponse',r.status)
