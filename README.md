# Beardman Club

Site web du Beardman Club.

Créer avec [SvelteKit](https://kit.svelte.dev).

Link demo : https://beardmans-club.netlify.app

## Routes

```bash
├── __error.svelte
├── index.svelte
└── __layout.svelte
```

- Index : Page principale
- __layout : Gabarit principal (header + footer)
- __error : Page d'erreur

## Components tree

```bash
├── Beardman
│    ├── BeardmanCard.svelte
│    └── BeardmansGrid.svelte
├── Footer.svelte
├── Logo.svelte
├── Navbar.svelte
├── Social.svelte
└── UI
    ├── Button.svelte
    └── Text.svelte
```

- UI/ : Répertoire des composants atomiques
- Beardman/ : Composantes de la Grille et des Cartes Beardmans

## Stores

- beardmans.store.ts : Interface et données de la première génération des beardmans.

## Developing

Installation : `npm install` (or `pnpm install` or `yarn`)

Start a development server :

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Netlify adapter. 

Config file : `netlify.toml`

```bash
npm run build
```
