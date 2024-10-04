# Makefile

.PHONY: help up down clean test exec

SERVICE_NAME=dionysos-front
DE=docker exec -it $(SERVICE_NAME)
DC=docker-compose

# Générer automatiquement l'aide en utilisant les commentaires ##
help: ## Afficher la liste des commandes disponibles
	@echo "Commandes disponibles :"
	@awk 'BEGIN {FS = ":.*##"} /^[a-zA-Z_-]+:.*##/ {printf "  make %-15s %s\n", $$1, $$2}' $(MAKEFILE_LIST)

up: ## Lancer les conteneurs avec docker-compose up
	@echo "Lancement des conteneurs..."
	$(DC) up -d

down: ## Fermer les conteneurs avec docker-compose down
	@echo "Arrêt des conteneurs..."
	$(DC) down

clean: ## Fermer les conteneurs et supprimer les images Docker
	@echo "Arrêt des conteneurs et suppression des images..."
	$(DC) down --rmi all

test: ## Lancer les tests avec npm run test
	@echo "Lancement des tests..."
	$(DE) npm run test

exec: ## Ouvrir un terminal interactif dans le conteneur
	@echo "Ouverture d'un terminal dans le conteneur..."
	$(DE) bash

run: ## Lancer une commande personnalisée dans le conteneur CMD="commande"
	@echo "Exécution de la commande dans le conteneur..."
	$(DE) $(CMD)
