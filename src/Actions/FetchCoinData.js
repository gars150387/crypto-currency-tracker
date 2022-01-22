import axios from 'axios'
import {apiBaseURL} from './../Utils/Constants'
import { apiBaseURL } from './../Utils/Constants'
import {FETCHING_COIN_DATA,FETCHING_COIN_DATA_SUCCESS, FETCHING_COIN_DATA_FAIL} from './../Utils/ActionTypes'

export const FetchCoinData =()=> {
    return async dispatch =>{
        dispatch({type: FETCHING_COIN_DATA})

        try {
            const res = await axios.get(`${apiBaseURL}/v1/cryptocurrency/listing/lastest?CMC_PRO_API_KEY=` + apiKey)
            return dispatch({ type: FETCHING_COIN_DATA_SUCCESS, payload: res.data })
            console.log('dispatch',res.data)
        } catch (error) {
            return dispatch({ type: FETCHING_COIN_DATA_FAIL, payload: error })
        }
    }
}