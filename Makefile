up:
    docker-compose up -d #to start dev mode

down:
	docker-compose down #to stop dev mode

up-prod:
	docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d 
# to run in production mode

#Go to command line and run `make up`
#Go to command line and run `make down`
#Go to command line and run `make up-prod`