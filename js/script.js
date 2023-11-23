// Hay que traer los datos desde el servidor (peticion asincronica a la API)
if (!window.localStorage.getItem('provincias')) {
  const datos = {
    cantidad: 24,
    inicio: 0,
    parametros: {},
    provincias: [
      {
        centroide: { lat: -26.8753965086829, lon: -54.6516966230371 },
        id: '54',
        nombre: 'Misiones'
      },
      {
        centroide: { lat: -33.7577257449137, lon: -66.0281298195836 },
        id: '74',
        nombre: 'San Luis'
      },
      {
        centroide: { lat: -30.8653679979618, lon: -68.8894908486844 },
        id: '70',
        nombre: 'San Juan'
      },
      {
        centroide: { lat: -32.0588735436448, lon: -59.2014475514635 },
        id: '30',
        nombre: 'Entre Ríos'
      },
      {
        centroide: { lat: -48.8154851827063, lon: -69.9557621671973 },
        id: '78',
        nombre: 'Santa Cruz'
      },
      {
        centroide: { lat: -40.4057957178801, lon: -67.229329893694 },
        id: '62',
        nombre: 'Río Negro'
      },
      {
        centroide: { lat: -43.7886233529878, lon: -68.5267593943345 },
        id: '26',
        nombre: 'Chubut'
      },
      {
        centroide: { lat: -32.142932663607, lon: -63.8017532741662 },
        id: '14',
        nombre: 'Córdoba'
      },
      {
        centroide: { lat: -34.6298873058957, lon: -68.5831228183798 },
        id: '50',
        nombre: 'Mendoza'
      },
      {
        centroide: { lat: -29.685776298315, lon: -67.1817359694432 },
        id: '46',
        nombre: 'La Rioja'
      },
      {
        centroide: { lat: -27.3358332810217, lon: -66.9476824299928 },
        id: '10',
        nombre: 'Catamarca'
      },
      {
        centroide: { lat: -37.1315537735949, lon: -65.4466546606951 },
        id: '42',
        nombre: 'La Pampa'
      },
      {
        centroide: { lat: -27.7824116550944, lon: -63.2523866568588 },
        id: '86',
        nombre: 'Santiago del Estero'
      },
      {
        centroide: { lat: -28.7743047046407, lon: -57.8012191977913 },
        id: '18',
        nombre: 'Corrientes'
      },
      {
        centroide: { lat: -30.7069271588117, lon: -60.9498369430241 },
        id: '82',
        nombre: 'Santa Fe'
      },
      {
        centroide: { lat: -26.9478001830786, lon: -65.3647579441481 },
        id: '90',
        nombre: 'Tucumán'
      },
      {
        centroide: { lat: -38.6417575824599, lon: -70.1185705180601 },
        id: '58',
        nombre: 'Neuquén'
      },
      {
        centroide: { lat: -24.2991344492002, lon: -64.8144629600627 },
        id: '66',
        nombre: 'Salta'
      },
      {
        centroide: { lat: -26.3864309061226, lon: -60.7658307438603 },
        id: '22',
        nombre: 'Chaco'
      },
      {
        centroide: { lat: -24.894972594871, lon: -59.9324405800872 },
        id: '34',
        nombre: 'Formosa'
      },
      {
        centroide: { lat: -23.3200784211351, lon: -65.7642522180337 },
        id: '38',
        nombre: 'Jujuy'
      },
      {
        centroide: { lat: -34.6144934119689, lon: -58.4458563545429 },
        id: '02',
        nombre: 'Ciudad Autónoma de Buenos Aires'
      },
      {
        centroide: { lat: -36.6769415180527, lon: -60.5588319815719 },
        id: '06',
        nombre: 'Buenos Aires'
      },
      {
        centroide: { lat: -82.52151781221, lon: -50.7427486049785 },
        id: '94',
        nombre: 'Tierra del Fuego, Antártida e Islas del Atlántico Sur'
      }
    ],
    total: 24
  }
  window.localStorage.setItem('provincias', JSON.stringify(datos.provincias))
}
// Traemos los datos desde el local storage parseandolos para convertir JSON --> JS
const datosProvincias = JSON.parse(window.localStorage.getItem('provincias'))

if (datosProvincias.length > 0) {
  const gridProvincias = document.querySelector('#grid-provincias')
  datosProvincias.forEach((provincia) => {
    // 1- creamos un elemento <div> para cada provincia
    const gridItem = document.createElement('article')
    // 2- agregar la clase grid-item para darle estilo
    gridItem.classList.add('grid-item')
    // 3- agregamos un h4 con el texto de la provincia
    gridItem.innerHTML = `<h4>${provincia.nombre}</h4>`
    // 4- funcionalidad para cuando le hagamos click al elemento
    gridItem.addEventListener('click', () => mostrarDetallesProvincia(provincia.id))
    // 5- agregamos el elemento creado al nodo ya existente
    gridProvincias.appendChild(gridItem)
  })
}

function mostrarDetallesProvincia (id) {
  // Redireccionar a otra pagina para mostrar los detalles
  window.location.href = `provincia.html?id=${id}`
}
