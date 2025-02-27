import { addToCart } from "./action";

const initialState: any[] = [];

export const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case addToCart:
            return [...state, action.data];
        default:
            return state; 
    }
};