
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
