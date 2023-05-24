function inicializar () {

    const divCard = document.getElementById("miTarjeta");

    for (const item of productos) {
        divCard.innerHTML += `<div class="card">
        <img
        src="${item.imagen}"
        alt="bicicleta"
        width=500px
        />
        <div class="contenido-producto">
            <div class="card-titulo">
            <h5>${item.titulo}</h5>
            <div class="precio">${item.precio}<i class="bi bi-currency-euro main-color"></i></div>
            </div>
            <div class="rating">
                <i class="bi bi-star-fill main-color"></i>
                <i class="bi bi-star-fill main-color"></i>
                <i class="bi bi-star-fill main-color"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
            </div>
            <p>Los actos generosos no han de ser reprimidos por fríos consejos.</p>
            <div class="card-actions">
            <button type="button" class="button anadir">Añadir al carrito</button>
            <a href="detallesProducto.html" name="verDetalles" class="button button-secundario">Ver</a>
            </div>
        </div>`
    }

    // Ahora renderizamos el menú principal
    const menu = new Menu([
        {url: "productos.html", name: "productos", label: "Todos los productos"},
        {url: "nosotros.html", name: "indice", label: "Sobre nosotros"},
        {url: "contacto.html", name: "contacto", label: "Contacto"},
        {url: "gadgets.html", name: "gadgets", label: "Gadgets"},
        {url: "ofertas.html", name: "ofertas", label: "Ofertas"},
        {url: "#misPedidos", name: "misPedidos", label: "Mis pedidos"},
        {url: "index.html", name: "logout", label: "Logout"},
    ]);
    menu.render();
};

const productos = [{
    imagen: "https://contents.mediadecathlon.com/p2208604/k$570a020384fb82f684ea684471411ac8/sq/8400336.jpg?format=auto&f=800x0",
    titulo: "<h5>Bicicleta Rock Ridee</h5>",
    precio: "399,50"
}, 
{
    imagen: "https://contents.mediadecathlon.com/p2208604/k$570a020384fb82f684ea684471411ac8/sq/8400336.jpg?format=auto&f=800x0",
    titulo: "<h5>Bicicleta Rock Ridee</h5>",
    precio: "399,50"
},
{
    imagen: "https://contents.mediadecathlon.com/p2208604/k$570a020384fb82f684ea684471411ac8/sq/8400336.jpg?format=auto&f=800x0",
    titulo: "<h5>Bicicleta Rock Ridee</h5>",
    precio: "399,50"
}];

function Menu(links) {
    // propiedades
    this.links = links;
    
    // métodos
    this.render = function() {
        let menuDiv = document.getElementById("navegacion");
        menuDiv.innerHTML = "<ul>";
        for (const item of this.links) {
          menuDiv.innerHTML += `<li><a href='${item.url}' name='${item.name}'>${item.label}</a></li> `;
        }
        menuDiv.innerHTML += "</ul>";
        menuDiv.render();
    }
  };
  