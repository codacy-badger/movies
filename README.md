# Movies

I am a big movie fan and I watched just in cinema 100 movies in 10 years.

## 📚 Study plan

This project and my [study plan](study-plan.md) show what I learnt about React, JavaScript and other tools.

## 📦 Deployment

App uses [Netlify](https://docs.netlify.com/) to build from `master` branch and deploy on: <https://movies.krsiak.cz/>

[![Netlify Status](https://api.netlify.com/api/v1/badges/ffdb97fb-1b98-4b1f-843b-f79ca6a0e1e0/deploy-status)](https://app.netlify.com/sites/movies-krsiak/deploys)

## 🔨 Scripts

[Makefile](Makefile) provides following scripts.

### React

Run app on <http://localhost:3000/>

```
make start
```

Build the app in `/build/` folder.

```
make build
```

### Prettier

Command to format files uses options from [.prettierrc](.prettierrc).

```
make prettier
```

> Made by [Krsiak Daniel](https://krsiak.cz/)
