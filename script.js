
function openModal(title, plan){
  document.getElementById('modalTitle').innerText = title;
  document.getElementById('modalPlan').value = plan;
  document.getElementById('modalOverlay').style.visibility='visible';
  document.getElementById('modalOverlay').style.opacity='1';
}
function closeModal(){
  document.getElementById('modalOverlay').style.opacity='0';
  setTimeout(()=>{document.getElementById('modalOverlay').style.visibility='hidden'},200);
}
function copyText(id){
  const text = document.getElementById(id).innerText;
  navigator.clipboard.writeText(text).then(()=>{ alert('Adresa copiata: '+text); });
}
document.querySelectorAll(".plan-btn").forEach(btn => {
    btn.addEventListener("click", function(e) {
        e.preventDefault();

        const planName = this.parentElement.querySelector("h2").innerText;
        const modalId = this.getAttribute("data-modal"); // Obține ID-ul modalului

        document.getElementById("modalTitle").innerText = planName;
        document.getElementById("modalPlanName").value = planName;

        document.getElementById(modalId).style.display = "flex"; // Deschide modalul corect
    });
});

document.getElementById("closeModal").addEventListener("click", () => {
    document.getElementById("plan1Modal").style.display = "none"; // Închide modalul corect
});
