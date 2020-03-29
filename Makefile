default:
	cat Makefile

start:
	yarn start

build:
	yarn build

prettier:
	yarn prettier --write "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}"
