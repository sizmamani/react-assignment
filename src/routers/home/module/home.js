import request from "../../../services/request"
import constants from "./actionConstants";

const {
    FETCH_DATA,
    SELECT_SHOP
} = constants


export function fetchData() {
    //CAN IMPLEMENT LOADING AND ERROR HANDLING ACTIONS AS WELL LATER
    return (dispatch) => {
        request.get('comparison.json', (data) => {
            dispatch({
                type: FETCH_DATA,
                data
            });
        })
    };
}

export function selectShop(index) {
    return (dispatch) => {
        dispatch({
            type: SELECT_SHOP,
            index
        })
    }
}



const ACTION_HANDLERS = {
    FETCH_DATA: handleFetchData,
    SELECT_SHOP: handleSelectShop
}


function handleFetchData(state, action) {
    return {
        ...state, shops: action.data
    }
}

function handleSelectShop(state, action) {
    return {
        ...state, selectedShopIndex: action.index
    }
}

const initialState = {
    shops: [],
    selectedShopIndex: null
};

export default function homeReducer(state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
}
