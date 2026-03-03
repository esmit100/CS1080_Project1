// Small JS enhancements (not required by the project, but nice to have)

(function () {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Home page tip toggle
  const toggleBtn = document.getElementById("toggleTipBtn");
  const tip = document.getElementById("planningTip");

  if (toggleBtn && tip) {
    toggleBtn.addEventListener("click", () => {
      const isHidden = tip.hasAttribute("hidden");
      if (isHidden) {
        tip.removeAttribute("hidden");
        toggleBtn.textContent = "Hide the planning tip";
      } else {
        tip.setAttribute("hidden", "");
        toggleBtn.textContent = "Show a planning tip";
      }
    });
  }

  // Learn page quiz
  const quizForm = document.getElementById("quizForm");
  const quizResult = document.getElementById("quizResult");

  if (quizForm && quizResult) {
    quizForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const q1 = new FormData(quizForm).get("q1");
      const q2 = new FormData(quizForm).get("q2");

      let score = 0;
      if (q1 === "b") score++;
      if (q2 === "a") score++;

      quizResult.removeAttribute("hidden");
      quizResult.textContent =
        score === 2
          ? "Nice! 2/2. Cracking is a red flag, and prevention is the best strategy."
          : `You got ${score}/2. Review the red flags list and remember: prevention comes first.`;
    });
  }
})();