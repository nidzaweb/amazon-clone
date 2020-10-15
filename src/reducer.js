
export const initialState = {
    basket: [],
    user: null,
};



export default function reducer(state, action) {

    switch (action.type) {
        case "ADD_TO_BASKET":
            return { ...state, basket: [...state.basket, action.item] };
            break;

        case "REMOVE_FROM_BASKET":
            let newBasket = [...state.basket];
            const index = state.basket.findIndex(item => item.id === action.item.id);

            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(`Cant remove product (id: ${action.id}) as its not existing in your basket list`);
            }
            return { ...state, basket: newBasket };


            // return {...state, basket: state.basket.filter(item => item.id !== action.item.id)};
            break;

        case "IS_LOGGED":
            return { ...state, user: action.user };
            break;

        default:
            return state;
            break;
    }

}