# Container commands for app.orcasagent.com GTM website

.PHONY: help build up down logs clean ps shell dev

help: ## Show this help message
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

build: ## Build the Docker image
	docker compose build

up: ## Start the container (production mode)
	docker compose up -d

down: ## Stop and remove containers
	docker compose down

logs: ## Follow container logs
	docker compose logs -f app

ps: ## List running containers
	docker compose ps

shell: ## Open a shell inside the running container
	docker exec -it orcasagent-gtm sh

clean: ## Remove containers, networks, and images
	docker compose down --rmi all --volumes --remove-orphans

dev: ## Run in development mode (if using next dev)
	docker compose -f docker-compose.yml -f docker-compose.dev.yml up -d