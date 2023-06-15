import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Fuel from '../components/Fuel'
import { getAllFuels } from '../actions/fuelActions'
import Loading from '../components/Loading'
import Error from '../components/Error'
export default function Homepage() {

    const dispatch = useDispatch()
    const fuelsState = useSelector(state => state.getAllFuelsReducer)
    const { fuels, error, loading } = fuelsState

    useEffect(() => {
        dispatch(getAllFuels())
    }, [])
    return (
        <div>
            <div className="row justify-content-center">

                {loading ? (
                    <Loading/>
                ) : error ? (
                    <Error error='Something went wrong'/>) : (

                    fuels.map((fuel)=> {
                        return <div className="col-md-3 m-3" key={fuel._id}>
                            <div>
                                <Fuel fuel={fuel} />
                            </div>
                        </div>
                        
                    })
                )}
            </div>
        </div>
    )
}