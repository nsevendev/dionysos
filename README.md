# Dionysos

## Prérequis

-   cloner le projet
- creer le fichier `install-deps.sh` dans le dossier `scripts`

## Code `install-deps.sh`

- pour windows copier coller le code dans notepad avant de le copier coller dans le fichier.

```bash
#!/bin/sh
set -e

# Check if node_modules is empty
if [ -z "$(ls -A 'node_modules' 2>/dev/null)" ]; then
    echo "node_modules est vide, lancement npm install..."
    npm ci
else
    echo "node_modules est déjà installé..."
fi

exec "$@"
```

## utilisation des containers (sans maker)

```shell
# lancer le container de dev
docker compose up

# arreter le container de dev
docker compose down
```
