const stripe = Stripe("pk_test_51TLUN8BabioeI2X3kWZ40BqzoiG9upqR6WYdR5gN1yjptEVhed0B8ZdZM772kNA3yHtxDFUVHxcIQW4RaLggWT7s00548u1hER");

let elements = null;
let clientSecret = null;

const startButton = document.getElementById("start-payment");
const paymentArea = document.getElementById("payment-area");
const messageBox = document.getElementById("message");
const form = document.getElementById("payment-form");

startButton.addEventListener("click", async () => {
  messageBox.textContent = "";

  const amount = document.getElementById("amount").value;

  if (!amount || Number(amount) < 5) {
    messageBox.textContent = "Skriv inn et gyldig beløp på minst 5 kr.";
    return;
  }

  try {
    const response = await fetch("/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ amount: amount })
    });

    const data = await response.json();

    if (data.error) {
      messageBox.textContent = data.error;
      return;
    }

    clientSecret = data.clientSecret;

    if (elements) {
      document.getElementById("payment-element").innerHTML = "";
    }

    elements = stripe.elements({
      clientSecret: clientSecret
    });

    const paymentElement = elements.create("payment");
    paymentElement.mount("#payment-element");

    paymentArea.style.display = "block";
  } catch (error) {
    messageBox.textContent = "Noe gikk galt ved opprettelse av betaling.";
    console.log(error);
  }
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  messageBox.textContent = "";

  const { error } = await stripe.confirmPayment({
    elements,
    confirmParams: {
      return_url: "http://localhost:3000/success.html"
    }
  });

  if (error) {
    messageBox.textContent = error.message;
  }
});