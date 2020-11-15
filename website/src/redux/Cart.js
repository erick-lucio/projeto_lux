export const estadoInicialCart = {
    cart_products: [],
  };
export function reducerCart(state, action) {
switch (action.type) {
    case "CartAdd":
    return {
        ...state.count,
        cart_products: [
        {
            name: action.product_name,
            price: action.product_price,
            img_path: action.img_path,
            ref_id: action.id,
        },
        ...state.cart_products,
        ],
    };
    case "CartRemove":
    return {
        ...state,
        cart_products: state.cart_products.filter(
        (item) => item.ref_id !== action.id
        ),
    };
    case "Clear":
    return {
        cart_products: [],
    };
}
}
