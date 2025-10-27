function analyzeFood() {
  const resultBox = document.getElementById("result");
  const freshness = ["Fresh & Hygienic", "1 Day Old – Okay", "Spoiled / Unsafe"];
  const tip = ["✅ Safe to Eat", "⚠️ Eat Soon", "❌ Don’t Eat"];
  const random = Math.floor(Math.random() * 3);

  resultBox.innerHTML = `
    <h3>🍽️ Result:</h3>
    <p><strong>Status:</strong> ${freshness[random]}</p>
    <p><strong>Suggestion:</strong> ${tip[random]}</p>
  `;
}
