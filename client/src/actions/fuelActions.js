import axios from "axios";
export const getAllFuels = () => async dispatch => {

    dispatch({ type: 'GET_FUEL_REQUEST' })

    try {
        const response = await axios.get('/api/fuels/getallfuels')
        console.log(response);
        dispatch({ type: 'GET_FUEL_SUCCESS', payload: response.data })
    } catch (error) {
        dispatch({ type: 'GET_FUEL_FAILED', payload: error })
    }
}