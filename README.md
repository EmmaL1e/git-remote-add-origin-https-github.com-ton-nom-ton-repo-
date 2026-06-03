Instructions pour lancer le projet localement

Ouvrez un terminal dans le dossier du projet (le dossier contenant `index.html`).

Options recommandées :

- Avec Python 3 (fonctionne sur Windows/macOS/Linux si Python est installé) :

```bash
python -m http.server 8000
```

- Avec Node (si `npx` est disponible) :

```bash
npx http-server -p 8000
```

Ensuite, ouvrez dans votre navigateur :

http://localhost:8000

Remarques :
- Si vous ouvrez `index.html` directement avec le protocole `file:///`, le navigateur bloque parfois les requêtes `fetch()` vers des fichiers locaux. Utilisez un serveur local pour permettre le chargement des JSON externes situés dans le dossier `5 jeux/`.
- J'ai ajouté une bannière visible dans la page qui s'affiche si la page est ouverte via `file:///`, avec la commande Python prête à être copiée.
