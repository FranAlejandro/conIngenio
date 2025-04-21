
document.getElementById('toggleMode').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

document.getElementById('form-contacto').addEventListener('submit', function (e) {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const servicio = document.getElementById('servicio').value;
  const mensaje = document.getElementById('mensaje').value;

  if (!nombre || !servicio || !mensaje) {
    alert('Por favor complete todos los campos.');
    return;
  }

  console.log('Formulario enviado:', { nombre, servicio, mensaje });
  alert('Formulario enviado correctamente. Ver consola.');
  this.reset();
});

fetch('https://ciisa.coningenio.cl/v1/services/', {
  headers: { Authorization: 'Bearer ciisa' }
})
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('servicios-content');
    data.forEach(servicio => {
      const div = document.createElement('div');
      div.innerHTML = `<h3>${servicio.nombre}</h3><p>${servicio.descripcion}</p>`;
      container.appendChild(div);
    });
  });

fetch('https://ciisa.coningenio.cl/v1/about-us/', {
  headers: { Authorization: 'Bearer ciisa' }
})
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('nosotros-content');
    container.innerHTML = `<h3>Misión</h3><p>${data.mision}</p><h3>Visión</h3><p>${data.vision}</p><h3>Valores</h3><p>${data.valores}</p>`;
  });
