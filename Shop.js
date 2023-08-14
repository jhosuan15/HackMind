function carrito(precio,producto){
    let confirmar = prompt('Estas seguro que deseas hacer el pedido escribe(Si o No)')
    if (confirmar === 'Si' || confirmar === 'si' || confirmar === 'SI'){
        window.open(`mailto:jhosuanaligonzalez1@icloud.com?subject=Orden de compra&body=Deseo comprar el producto: ${producto} con el precio: ${precio}`);
    }
}