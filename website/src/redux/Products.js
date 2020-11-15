export const estadoInicialProducts = {
    objects_products: [],
};  
export function reducerProducts(state, action) {
switch (action.type) {
    case "ProductSet":
    return {
        ...state.count,
        objects_products: [
        {
            name: action.product_name,
            price: action.product_price,
            img_path: action.img_path,
            ref_id: action.id,
        },
        ...state.objects_products,
        ],
    };
    case "Clear":
    return {
        objects_products: [],
    };
}
}
