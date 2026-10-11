# Allo Nuisible IDF (allonuisibleidf.fr)

Site vitrine d'une entreprise de lutte contre les nuisibles en Île-de-France.
Stack : Next.js 14 (App Router), Tailwind, TypeScript. Aucune variable d'environnement, aucune clé secrète.

## Lancer et publier
- Installer : `npm install`
- Développement : `npm run dev` (http://localhost:3000)
- Mise en ligne : `npm run build && vercel --prod --yes` (le domaine allonuisibleidf.fr suit automatiquement le nouveau déploiement).
- Si la personne dit « aucun changement » après une mise en ligne, c'est presque toujours le cache du navigateur : Cmd + Shift + R ou navigation privée.

## Domaine
- allonuisibleidf.fr est enregistré chez Hostinger (DNS Hostinger).
- Enregistrements en place : `A @ 76.76.21.21` et `CNAME www cname.vercel-dns.com`. Ne pas les modifier.

## Organisation du code
- `app/` : pages (accueil, `services/`, `blog/`, `tarifs/`, `professionnels/`, `sitemap.ts`).
- `components/ServicePageTemplate.tsx` : modèle commun des pages services.
- `components/PestIcons.tsx` : icônes SVG maison (punaise, cafard, souris, fourmi, guêpe, oiseau, dératisation, désinfection).
- `components/Hero.tsx` : hero de l'accueil.
- Page de référence pour le style : `app/services/fourmis/page.tsx`.

## Règles éditoriales et de design
- Direction visuelle : « sombre premium », noir + orange `#E8441A`.
- Aucun emoji pictographique : utiliser les icônes de `PestIcons.tsx`.
- Aucun prix affiché : tout est « Sur devis ».
- Pas de tiret long « — » dans les textes (perçu comme un texte écrit par une IA) : virgules ou parenthèses à la place.
- Aucune fausse preuve sociale (« 3 techniciens disponibles », « Untel vient de demander un devis »…).
- Ne jamais inventer de chiffres ou statistiques : uniquement des données sourcées.
- Produits biocides : ne jamais écrire « naturel », « non toxique », « sans danger » (article 72 du règlement biocides).
- Titres et méta-descriptions : 40 à 60 caractères, chiffre concret quand c'est possible.
- Un mot-clé = une page (éviter que deux pages visent la même requête).
