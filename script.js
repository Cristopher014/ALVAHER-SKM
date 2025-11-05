 // Comportamiento mínimo: alertas simuladas y enlaces "Leer más"
document.addEventListener('DOMContentLoaded', function () {
  // "Leer más" noticias
  document.querySelectorAll('.read-more').forEach(a => {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      const id = this.dataset.id || '0';
      alert('Abrir noticia ID: ' + id);
    });
  });

  // Botones de contacto y pagos
  const btnContact = document.getElementById('btn-contact');
  const btnPay = document.getElementById('btn-pay');
  if (btnContact) btnContact.addEventListener('click', () => alert('Ir a contacto'));
  if (btnPay) btnPay.addEventListener('click', () => alert('Ir a pagos'));

  // Botón "Ver más" en la primera tarjeta
  const verMas1 = document.getElementById('ver-mas-1');
  if (verMas1) verMas1.addEventListener('click', () => alert('Ver más - Centro Tecnológico'));
});
