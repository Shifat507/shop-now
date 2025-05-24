const getStoredCartItems = () => {
    const storedCartItemsStr = localStorage.getItem('cart-item');
    if (storedCartItemsStr) {
        const cartItems = JSON.parse(storedCartItemsStr);
        return cartItems;
    }
    else {
        return [];
    }
}

const addToStoredCartItems = (id) => {
    const storedCartItems = getStoredCartItems();

    storedCartItems.push(id);
    const storedCartItemsStr = JSON.stringify(storedCartItems);
    localStorage.setItem('cart-item', storedCartItemsStr);

}

const deleteItem = (id) => {
    const storedCartItems = getStoredCartItems();
    const updatedCartItems = storedCartItems.filter(itemId => parseInt(itemId) !== id);
    localStorage.setItem('cart-item', JSON.stringify(updatedCartItems));
}

export { addToStoredCartItems, getStoredCartItems, deleteItem }