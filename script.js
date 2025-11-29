// Deschide modalul corect cu titlu și plan
function openModal(title, plan) {
  // Actualizează titlul și planul
  document.getElementById('modalTitle').innerText = title;
  document.getElementById('modalPlanName').value = plan;
  
  // Deschide modalul corect
  const modal = document.getElementById(plan); // Folosește ID-ul planului pentru a deschide modalul
  modal.style.visibility = 'visible';
  modal.style.opacity = '1';
}

// Închide modalul
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.opacity = '0';
  setTimeout(() => {
    modal.style.visibility = 'hidden';
  }, 200);
}

// Funcția pentru copierea textului
function copyText(id) {
  const text = document.getElementById(id).innerText;
  navigator.clipboard.writeText(text).then(() => {
    alert('Adresa copiată: ' + text);
  });
}

// Deschiderea modalurilor pe baza butoanelor
document.querySelectorAll(".plan-btn").forEach(btn => {
  btn.addEventListener("click", function(e) {
    e.preventDefault();

    const planName = this.parentElement.querySelector("h2").innerText;
    const modalId = this.getAttribute("data-modal"); // Obține ID-ul modalului

    // Deschide modalul folosind funcția openModal
    openModal(planName, modalId);
  });
});

// Închiderea modalurilor
document.querySelectorAll(".closeModal").forEach(closeBtn => {
  closeBtn.addEventListener("click", function() {
    const modalId = this.getAttribute("data-modal");
    closeModal(modalId);
  });
});


