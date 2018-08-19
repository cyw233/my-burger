import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

// action creators
export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    };
};

export const removeIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    };
};

export const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    };
};

export const fetchIngredientsFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    }
}

// the 'dispatch' can be used in the functin body due to 'react-thunk', which means that
// in the function body we can execute async code(link to axios), then it will dispatch a 
// new action whenever the async code(link to axios) is done
export const initIngredients = () => {
    return dispatch => {
        axios.get('https://react-my-burger-e77cf.firebaseio.com/ingredients.json')
            .then(response => {
                dispatch(setIngredients(response.data));
            })
            .catch(error => {
                dispatch(fetchIngredientsFailed());
            });
    };
}