💳 Stripe Betalingsløsning (Node.js + JavaScript)

Dette prosjektet er en enkel betalingsløsning med Stripe der brukeren kan skrive inn beløp og betale direkte på siden.

🚀 Funksjoner
💰 Velg eget beløp
💳 Betal med kort (Stripe)
🔒 Sikker betaling (Stripe håndterer alt)
⚡ Interaktiv betaling (ingen redirect)
🔙 Tilbake-knapp etter betaling
🛠️ Teknologi
Node.js
Express
Stripe API
HTML / CSS / JavaScript
📁 Prosjektstruktur
bettaling/
│
├── server.js
├── .env        (skal lages selv - ikke i GitHub)
│
└── public/
    ├── index.html
    ├── app.js
    ├── success.html
🔐 Viktig om .env

.env er ikke inkludert i prosjektet av sikkerhetsgrunner.

Du må lage den selv.

⚙️ Oppsett
1. Installer avhengigheter
npm install
2. Lag .env fil (VELDIG VIKTIG)

Lag en ny fil i samme mappe som server.js og kall den:

.env

Skriv inn:

STRIPE_SECRET_KEY=sk_test_din_stripe_key

👉 Du finner denne i Stripe Dashboard:

Gå til Stripe
Developers → API keys
Kopier Secret key (sk_test_...)
3. Sett inn public key

Åpne public/app.js og legg inn:

const stripe = Stripe("pk_test_din_public_key");

👉 Denne finner du også i Stripe Dashboard.

4. Start server
node server.js
5. Åpne i nettleser
http://localhost:3000
💳 Testkort


Dette prosjektet viser hvordan man integrerer Stripe betaling i en webapplikasjon.

👤 Forfatter

Dahir Kilwe
Bachelor i IT og informasjonssystemer
Oslo, Norge
