export const getAllFuelsReducer = (state = {fuels:[]}, action) => {

    switch (action.type) {
        case 'GET_FUEL_REQUEST': return {
            loading:true,
            ...state
        }
        case 'GET_FUEL_SUCCESS': return {
            loading:false,
            fuels: action.payload
        }
        case 'GET_FUEL_FAILURE': return {
            error: action.payload,
            loading:false
        }
        default: return state
    }
}