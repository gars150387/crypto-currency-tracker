import axios from 'axios'
import { apiBaseURL } from './../Utils/Constants'
import { apiBaseURL } from './../Utils/Constants'
import { FETCHING_COIN_DATA, FETCHING_COIN_DATA_SUCCESS, FETCHING_COIN_DATA_FAIL } from './../Utils/ActionTypes'

export const FetchCoinData = () => {
    return dispatch => {
        dispatch({ type: FETCHING_COIN_DATA })
        console.log('fetching coin data', FETCHING_COIN_DATA)

        const res = axios.get(`${apiBaseURL}/v1/cryptocurrency/listing/lastest?CMC_PRO_API_KEY=${apiKey}`)
        return dispatch({ type: FETCHING_COIN_DATA_SUCCESS, payload: res.data },
            console.log('response', res.data))
        
            .catch(error)
        return dispatch({ type: FETCHING_COIN_DATA_FAIL, payload: error },
            console.log('error', error))
        
    }
}