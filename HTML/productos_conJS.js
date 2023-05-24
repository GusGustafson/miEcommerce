function inicializar () {
    
    const divCard = document.getElementById("miTarjeta");

    for (const item of productos) {
    divCard.innerHTML += `<div class="card">
    <img
    src="${item.imagen}"
    alt="bicicleta"
    width=300px
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
};

const productos = [{
    imagen: src="https://contents.mediadecathlon.com/p2208604/k$570a020384fb82f684ea684471411ac8/sq/8400336.jpg?format=auto&f=800x0",
    titulo: "<h5>Bicicleta Rock Ridee</h5>",
    precio: 399.50,
    valoracion: 8
}, 
{
    imagen: src="https://contents.mediadecathlon.com/p2208604/k$570a020384fb82f684ea684471411ac8/sq/8400336.jpg?format=auto&f=800x0",
    titulo: "<h5>Bicicleta Rock Ridee</h5>",
    precio: 399.50,
    valoracion: 8
},
{
    imagen: src="https://contents.mediadecathlon.com/p2208604/k$570a020384fb82f684ea684471411ac8/sq/8400336.jpg?format=auto&f=800x0",
    titulo: "<h5>Bicicleta Rock Ridee</h5>",
    precio: 399.50,
    valoracion: 8
}];

/*
<img
                    src="https://contents.mediadecathlon.com/p2208604/k$570a020384fb82f684ea684471411ac8/sq/8400336.jpg?format=auto&f=800x0"
                    alt="bicicleta"
                />
                <div class="contenido-producto">
                    <div class="card-titulo">
                    <h5>Bicicleta Rock Ridee</h5>
                    <div class="precio">399,50<i class="bi bi-currency-euro main-color"></i></div>
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
                </div>
                */

