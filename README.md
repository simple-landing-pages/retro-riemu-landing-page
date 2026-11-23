# 🎉 Retroriemu - Landing Page

> Moderni, tyylikäs ja responsiivinen one-page landing page premium tapahtuma- ja elämyspalvelulle.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![GDPR Compliant](https://img.shields.io/badge/GDPR-Compliant-green)](https://gdpr.eu/)

---

## 📖 Kuvaus

**Retroriemu** on staattinen landing page -sivusto, joka on suunniteltu premium-tasoiselle tapahtuma- ja elämyspalvelulle. Sivusto on rakennettu puhtaalla HTML:llä, CSS:llä ja JavaScriptillä - ilman raskaita frameworkeja tai build-työkaluja.

### ✨ Pääominaisuudet

- 🎨 **Tyylikäs design** - Retro + luksus + moderni -yhdistelmä
- 📱 **Täysin responsiivinen** - Toimii täydellisesti kaikilla laitteilla
- 🍪 **GDPR-yhteensopiva** - Eväste-ilmoitus ja -hallinta
- 📊 **Google Analytics 4** - Integroitu analytiikka evästeiden kanssa
- ⚡ **Nopea** - Ei turhia kirjastoja, optimoitu suorituskyky
- ✉️ **Yhteydenottolomake** - Validointi ja Netlify Forms -integraatio
- ♿ **Saavutettava** - Semanttinen HTML, hyvä kontrastisuhde

---

## 🛠️ Teknologiat

| Teknologia | Käyttötarkoitus |
|------------|-----------------|
| **HTML5** | Semanttinen rakenne, SEO-optimointi |
| **CSS3** | Tyylittely, responsiivinen design, animaatiot |
| **JavaScript (ES6)** | Lomakevalidointi, smooth scroll, evästehallinta |
| **Google Fonts** | Playfair Display (otsikot), Open Sans (leipäteksti) |
| **Google Analytics 4** | Kävijäseuranta (valinnainen) |

**Ei frameworkeja • Ei build-työkaluja • Ei riippuvuuksia**

---

## 📂 Projektin Rakenne

```
retroriemu-landing-page/
│
├── index.html              # Pääsivu (kaikki osiot)
├── styles.css              # Kaikki tyylit ja responsiivisuus
├── script.js               # JavaScript-toiminnallisuudet
├── kiitos.html            # Kiitossivu lomakkeen lähetyksen jälkeen
├── tietosuoja.html        # Tietosuojaseloste
├── sitemap.xml            # Sivukartta hakukoneille
├── robots.txt             # Hakukonerobottien ohjeet
├── GA4_OHJEET.txt         # Google Analytics 4 käyttöönotto-ohjeet
├── NETLIFY_FORMS_OHJEET.txt  # Netlify Forms käyttöönotto-ohjeet
├── CLAUDE.md              # Tekninen dokumentaatio kehittäjille
├── README.md              # Tämä tiedosto
│
└── Kuvat/
    ├── vankkuriauto_logo1.png        # Hero-osion taustakuva
    ├── vankkuriauto_kuvake1.png      # Favicon
    └── vankkuriauto_haatapahtuma1.png  # Hääosion kuva
```

---

## 🚀 Pika-aloitus

### 1. Lataa Projekti

```bash
git clone https://github.com/KÄYTTÄJÄNIMI/retroriemu-landing-page.git
cd retroriemu-landing-page
```

### 2. Avaa Selaimessa

```bash
# Avaa index.html suoraan selaimessa
# TAI käytä yksinkertaista HTTP-palvelinta:

# Python 3
python -m http.server 8000

# Node.js (npx http-server)
npx http-server

# Avaa: http://localhost:8000
```

### 3. Muokkaa Sisältöä

Muokkaa `index.html`, `styles.css` ja `script.js` tarpeidesi mukaan.

---

## 🍪 Eväste-asetukset ja GDPR

Sivusto sisältää valmiin GDPR-yhteensopivan evästeilmoituksen:

- ✅ Ilmestyy automaattisesti ensikäynnillä (1s viiveellä)
- ✅ Käyttäjä voi **hyväksyä** tai **hylätä** evästeet
- ✅ Valinta tallennetaan `localStorage`-muistiin
- ✅ Google Analytics latautuu **vain** jos evästeet hyväksytään
- ✅ Täysin responsiivinen (desktop + mobiili)

### Miten se toimii?

| Käyttäjän valinta | Google Analytics | Tietosuoja |
|-------------------|------------------|------------|
| Hyväksyy evästeet | ✅ Ladataan ja aktivoidaan | Seuranta käytössä |
| Hylkää evästeet | ❌ Ei ladattaan | Täysi yksityisyys |

---

## 📊 Google Analytics 4 Käyttöönotto

### Vaiheet:

1. **Lue ohjeet**: Avaa `GA4_OHJEET.txt` - sisältää yksityiskohtaiset vaihe-vaiheelta ohjeet suomeksi

2. **Luo GA4-tili**:
   - Mene: https://analytics.google.com
   - Luo tili ja ominaisuus
   - Hanki mittaustunnus (muotoa `G-XXXXXXXXXX`)

3. **Lisää tunnus koodiin**:

   Korvaa `G-XXXXXXXXXX` omalla tunnuksellasi **kahdessa tiedostossa**:

   **index.html** (2 kohtaa):
   ```html
   <!-- Rivi ~30 -->
   script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';

   <!-- Rivi ~38 -->
   gtag('config', 'G-XXXXXXXXXX');
   ```

   **script.js** (2 kohtaa):
   ```javascript
   // Rivi ~221
   gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';

   // Rivi ~228
   gtag('config', 'G-XXXXXXXXXX');
   ```

4. **Testaa**:
   - Avaa sivusto selaimessa
   - Hyväksy evästeet
   - Avaa konsoli (F12): Näet viestin "Google Analytics 4 initialized"
   - Tarkista Google Analytics -raporteista 24-48h kuluttua

---

## 🎨 Muokkaus ja Personointi

### Värit

Muokkaa `styles.css`-tiedoston `:root`-osiota:

```css
:root {
    --color-bg: #F5F1E8;           /* Tausta */
    --color-white: #FEFDFB;        /* Valkoinen */
    --color-gold: #D4AF37;         /* Kultainen korostus */
    --color-text: #2C2C2C;         /* Teksti */
}
```

### Sisältö

Muokkaa `index.html`:
- **Otsikot ja tekstit**: Muuta suoraan HTML-tiedostosta
- **Sähköpostiosoite**: Päivitä yhteydenottolomakkeen kohdalla ja footerissa
- **Hinnat**: Päivitä hinnoitteluosio
- **Palvelut**: Lisää tai poista palvelukortteja

### Kuvat

Vaihda `Kuvat/`-kansiossa olevat kuvat:
- `vankkuriauto_logo1.png` → Hero-osion taustakuva
- `vankkuriauto_kuvake1.png` → Favicon

---

## 📱 Responsiivisuus

Sivusto on optimoitu kaikille näyttöko'oille:

| Laite | Breakpoint | Ominaisuudet |
|-------|------------|--------------|
| 🖥️ **Desktop** | > 992px | Täysi grid-layout, laajat välit |
| 💻 **Tabletti** | 768px - 992px | Mukautettu grid, pienemmät välit |
| 📱 **Puhelin** | 480px - 768px | Yksipalstainen, kompakti |
| 📱 **Pieni puhelin** | < 480px | Erittäin tiivistetty, optimoitu |

---

## ✉️ Yhteydenottolomake

Lomake käyttää **client-side validointia** ja **Netlify Formsia**:

- ✅ Ei vaadi omaa backend-palvelinta
- ✅ Reaaliaikainen validointi suomeksi
- ✅ Viesti lähetetään suoraan Netlifyyn, ja käyttäjä ohjataan kiitossivulle (`kiitos.html`)
- ✅ Roskapostisuojaus (honeypot-kenttä)
- ℹ️ Lomake toimii vain julkaistulla sivustolla, ei paikallisesti

Käyttöönotto- ja ilmoitusasetukset: katso `NETLIFY_FORMS_OHJEET.txt`.

### Validointisäännöt:
- **Nimi**: Vähintään 2 merkkiä
- **Sähköposti**: Kelvollinen sähköpostiosoite
- **Viesti**: Vähintään 10 merkkiä

---

## 🌐 Selainyht eensopivuus

| Selain | Tuettu versio |
|--------|---------------|
| Google Chrome | ✅ Viimeisimmät |
| Mozilla Firefox | ✅ Viimeisimmät |
| Safari | ✅ Viimeisimmät |
| Microsoft Edge | ✅ Viimeisimmät |
| Internet Explorer | ❌ Ei tuettu |

**Vaatimukset**:
- CSS Grid ja Flexbox -tuki
- localStorage-tuki
- ES6 JavaScript

---

## 📄 Lisenssi

Tämä projekti on vapaasti käytettävissä ja muokattavissa.

---

## 🤝 Yhteystiedot

**Retroriemu**
📧 Email: info@retroriemu.fi
📍 Helsinki, Suomi

---

## 🙏 Kiitokset

- [Google Fonts](https://fonts.google.com/) - Playfair Display & Open Sans
- [Google Analytics](https://analytics.google.com/) - Kävijäseuranta
- Kaikki avoimien lähdekoodien yhteisöt

---

## 📚 Dokumentaatio Kehittäjille

Katso `CLAUDE.md` -tiedosto yksityiskohtaisesta teknisestä dokumentaatiosta:
- Täydelliset implementaatioyksityiskohdat
- Arkkitehtuuripäätökset
- Cookie consent -logiikka
- GA4-integraation tekniikka
- Responsiivisen designin breakpointit
- Suorituskykyoptimoinnit

---

<div align="center">

**Tehty ❤️ llä Suomessa**

⭐ **Tykkäsitkö projektista? Anna tähti GitHubissa!** ⭐

</div>
