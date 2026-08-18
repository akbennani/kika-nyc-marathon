// TODO: vul jullie eigen contactgegevens en betaallink in
const TEAM_EMAIL = "team@voorbeeld.nl";
const TIKKIE_LINK = "https://tikkie.me/pay/voorbeeld";

let selectedPakket = null;
let selectedPrijs = null;

document.querySelectorAll(".kies-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".ticket-card");
    selectedPakket = card.dataset.pakket;
    selectedPrijs = card.dataset.prijs;

    document.getElementById("selectedPakket").textContent =
      `Gekozen pakket: ${selectedPakket} voor €${selectedPrijs}`;

    document.getElementById("inschrijven").scrollIntoView({ behavior: "smooth" });
  });
});

document.getElementById("inschrijfForm").addEventListener("submit", (event) => {
  event.preventDefault();

  if (!selectedPakket) {
    alert("Kies eerst een pakket bij 'Kies je loten' hierboven.");
    return;
  }

  const naam = document.getElementById("naam").value;
  const email = document.getElementById("email").value;
  const telefoon = document.getElementById("telefoon").value;

  const subject = encodeURIComponent(`Loterij inschrijving: ${naam}`);
  const body = encodeURIComponent(
    `Naam: ${naam}\nE-mail: ${email}\nTelefoon: ${telefoon}\nPakket: ${selectedPakket} (€${selectedPrijs})`
  );

  window.location.href = `mailto:${TEAM_EMAIL}?subject=${subject}&body=${body}`;

  setTimeout(() => {
    alert(
      `Bedankt ${naam}! Rond je betaling van €${selectedPrijs} af via Tikkie: ${TIKKIE_LINK}`
    );
  }, 500);
});
