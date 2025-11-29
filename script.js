// Deschide modalul corect cu titlu și plan
function openModal(title, plan){
  document.getElementById('modalTitle').innerText = title;
  document.getElementById('modalPlanName').value = plan;
  document.getElementById('modalOverlay').style.visibility = 'visible';
  document.getElementById('modalOverlay').style.opacity = '1';
}

// Închide modalul
function closeModal(){
  document.getElementById('modalOverlay').style.opacity = '0';
  setTimeout(() => {
    document.getElementById('modalOverlay').style.visibility = 'hidden';
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
    openModal(planName, planName);
  });
});

// Închidere modal
document.getElementById("closeModal").addEventListener("click", closeModal);

