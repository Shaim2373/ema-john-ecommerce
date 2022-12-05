import { getStoredCart } from "../utilities/fakedb";

export const Loaders = async() => {
    const productsData = await fetch('products.json');
    const products = await productsData.json();


    const savedCart = getStoredCart();
    const previousCart = [];
    // console.log('saveCart', savedCart)
    for(const id in savedCart){
        // console.log(id)
        const addedProduct = products.find(product => product.id === id)
        if(addedProduct){
            const quantity = savedCart[id]
            addedProduct.quantity = quantity
            previousCart.push(addedProduct)
        }
    }

    return {products, previousCart};
}