default:
	cat Makefile

start:
	yarn start

build:
	yarn build

prettier:
	yarn prettier --write "./src/**/*.js" && prettier --write "./src/**/*.tsx"
