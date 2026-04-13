💳 Stripe Betalingsløsning (Node.js + JavaScript)

Dette prosjektet er en enkel og moderne betalingsløsning laget med Stripe Payment Element, Node.js og JavaScript.

Brukeren kan skrive inn ønsket beløp og gjennomføre betaling direkte på siden.

🚀 Funksjoner
💰 Velg eget beløp (dynamisk betaling)
💳 Betal med kort (Stripe test)
🔒 Sikker håndtering via Stripe
⚡ Interaktiv betalingsside (ikke redirect)
🔙 Tilbake-knapp etter betaling
✅ Success-side etter fullført betaling
🛠️ Teknologi
Node.js
Express
Stripe API
HTML / CSS / JavaScript
📁 Prosjektstruktur
bettaling/
│
├── server.js
├── .env
│
└── public/
    ├── index.html
    ├── app.js
    ├── success.html
🔐 Oppsett
1. Installer avhengigheter
npm install
2. Lag .env fil
STRIPE_SECRET_KEY=sk_test_your_secret_key
3. Sett inn public key

I public/app.js:

const stripe = Stripe("pk_test_your_public_key");
4. Start server
node server.js
5. Åpne i nettleser
http://localhost:3000
💳 Testkort

Bruk dette kortet:

4242 4242 4242 4242
12/34
123
⚠️ Viktig
Ikke del dine Stripe nøkler offentlig
Bruk test mode under utvikling
Bytt til live keys for ekte betaling
📌 Om prosjektet

Dette prosjektet er laget som en del av læring innen webutvikling og betalingssystemer.
Det demonstrerer hvordan man kan integrere Stripe i en enkel webapplikasjon.

👤 Forfatter

Dahir Kilwe
Bachelor i IT og informasjonssystemer
Oslo, Norge# Stripe-Betalingsl-sning
