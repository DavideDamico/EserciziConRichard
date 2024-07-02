1. npm i typescript
2. npx tsc
3. npx tsc --init
4. mettere nel file package.json nel campo scripts aggiungere , "build": "tsc --noEmit && tsc --outDir build" e fare npm run build nel terminale ogni volta che si vuole tradurre
5. fare git init se non già collegato git,creare un file .gitignore e metterci node_modules/ e build/
