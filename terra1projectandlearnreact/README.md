# Janiweb.eu

Ezt a weboldalt a régi weboldalam le cserélésére készítettem amiben benne vannak a minden féle tartalmaim a Youtube csatornám és a régi weboldalaim is ezzel nem csak az új Janiwebemet készítettem hanem tanultam ezzel együtt a React kódot is.

![A Janiweb.eu logója](src/assets/janiweb.png)

## Tartalom

- [Funkciók](#funkciók)
- [Technológiák](#technológiák)
- [Futtatás fejlesztés közben](#futtatás-fejlesztés-közben)
- [Éles build készítése](#éles-build-készítése)
- [A buildelt HTML és fájlok](#a-buildelt-html-és-fájlok)
- [Oldalak és útvonalak](#oldalak-és-útvonalak)
- [Projekt felépítése](#projekt-felépítése)
- [Ellenőrzés](#ellenőrzés)

## Funkciók

- Kezdőlap bemutatkozó szöveggel és Janiweb-logóval.
- Navigációs menü kártyákkal és külön oldalakkal.
- Prezentációs oldal letölthető PowerPoint-fájllal és videós előnézettel.
- Korábbi weboldalakra mutató hivatkozások.
- YouTube-csatorna és beágyazott videók.
- Reszponzív kártyaelrendezés, animált oldalváltások és interaktív elemek.

## Technológiák

- **React 19** – felhasználói felület és komponensek.
- **React Router** – kliensoldali útvonalkezelés `HashRouter`-rel.
- **Vite** – fejlesztői szerver és optimalizált build.
- **ESLint** – kódellenőrzés.

## Futtatás fejlesztés közben

Szükséges a [Node.js](https://nodejs.org/) és az npm. A parancsokat a projekt mappájában futtasd:

```bash
npm install
npm run dev
```

A Vite kiírja a helyi címet, általában `http://localhost:5173`. Nyisd meg ezt a címet a böngészőben. A fejlesztői szerver automatikusan frissíti az oldalt a forrásfájlok módosításakor.

## Éles build készítése

Optimalizált, statikus webes változat létrehozása:

```bash
npm run build
```

A Vite az elkészült fájlokat a `dist/` mappába írja. A build helyi ellenőrzéséhez indítsd el az előnézeti szervert:

```bash
npm run preview
```

Az előnézeti szerver címét a parancs kiírja, alapértelmezésben ez `http://localhost:4173`. Ez a buildelt változatot szolgálja ki, nem a fejlesztői szervert.

## A buildelt HTML és fájlok

A build fő belépési pontja a `dist/index.html`. Ez az HTML tölti be a Vite által összeállított JavaScript- és CSS-fájlokat. A React alkalmazás tartalma a böngészőben, a `#root` elembe renderelődik.

```text
dist/
├── index.html          # HTML belépési pont
├── assets/             # Összeállított JavaScript, CSS és importált képek
├── menu.svg            # public/ mappából átmásolt fájlok
├── presetation.svg
├── weboldalak.svg
├── youtube.svg
└── ...                 # további public fájlok, például videó és prezentáció
```

Fontos tudnivalók a buildről:

- A `dist/index.html` önmagában nem tartalmazza az egész alkalmazást. A teljes `dist/` mappát kell együtt közzétenni.
- A `public/` fájljai változatlan néven kerülnek a buildbe; a `src/assets/` fájljait a Vite feldolgozza és az `assets/` mappába teszi.
- A `vite.config.js` relatív `base: './'` útvonalat állít be, így a build használható gyökérdomainen kívüli almappából is.
- Az útvonalak hash-alapúak, például `/#/menu`. Emiatt statikus tárhelyen nem kell külön szerveroldali útvonal-átirányítás a React-oldalakhoz.
- A `dist/` generált kimenet: a forrás módosítása után futtasd újra a `npm run build` parancsot.

Statikus tárhelyen a buildelés után a **`dist/` mappa teljes tartalmát** kell feltölteni. A weboldal helyes működéséhez ne csak az `index.html` fájlt másold fel.

## Oldalak és útvonalak

| Útvonal | Tartalom |
|---|---|
| `/#/` | Kezdőlap és bemutatkozás |
| `/#/menu` | Navigációs menü |
| `/#/powerpoint` | Prezentáció és letöltés |
| `/#/weboldalak` | Korábbi weboldalak gyűjteménye |
| `/#/youtube` | YouTube-csatorna és beágyazott videók |

## Projekt felépítése

```text
.
├── index.html             # Vite HTML belépési pont
├── public/                # Közvetlenül kiszolgált képek, videók és letöltések
├── src/
│   ├── assets/             # A komponensekből importált képek
│   ├── App.jsx             # Oldalak, komponensek és útvonalak
│   ├── App.css             # Az alkalmazás megjelenése
│   ├── index.css           # Globális stílusok
│   └── main.jsx            # React belépési pont
├── package.json            # Parancsok és függőségek
└── vite.config.js           # Vite beállítások
```

## Ellenőrzés

```bash
npm run lint
npm run build
```

Az első parancs lefuttatja az ESLint ellenőrzést, a második elkészíti az éles buildet a `dist/` mappába.
