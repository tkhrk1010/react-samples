up:
	docker-compose up -d

down:
	docker-compose down

restart:
	docker-compose down
	docker-compose up -d

build:
	docker-compose build

test:
	docker-compose run web npm test

eject:
	docker-compose run web npm run eject

dev: # build in local for dev in web/
	npm run build --prefix web/

local: # auto-build in local for dev in web/
	npm start --prefix web/