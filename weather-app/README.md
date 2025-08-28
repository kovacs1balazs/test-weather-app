# Weather App

Next.js 15 alkalmazás, amely a megadott város időjárását jeleníti meg az OpenWeather API segítségével.  

## Telepítés és futtatás

1. Klónozd a repót és lépj be a mappába:
```bash

git clone <repo-url>
cd <repo-folder>
git checkout release

```

2.	Telepítsd a függőségeket:
``` bash

yarn install
# vagy
npm install

```

3. Hozd létre a .env.local fájlt a gyökérben:
``` bash
OPENWEATHER_API_KEY=efcc996def1f929c8cd1f54c35e4bcf2
```

4. Futtatás fejlesztői módban:
``` bash

yarn dev
# vagy
npm run dev

```

5.	Nyisd meg a http://localhost:3000 címen.
