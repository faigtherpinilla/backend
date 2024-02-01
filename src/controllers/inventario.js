const misProductos = require ("../routes/products.router");

const getProductosId = async (Id) => {
    try {
        const producto = await misProductos.find(item => item.Id === Id);
       return producto;
    } catch (error) {
        console.error('Error al obtener el producto por ID:', error);
        throw error;
    }
};

module.export = misProductos 