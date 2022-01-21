import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay'
import FetchCoinData from './../Actions/FetchCoinData'
import { CoinCard } from './CoinCard'
import { useEffect } from 'react'
import { render } from 'react-dom'

const CryptoContainer = () => {

    useEffect({
        Fetch(FetchCoinData)
    }
        .catch(error => console.log(error)))

    const renderCoinCard = () => {
        const crypto = this.props;
        return (
            <>
                {crypto.data.map((coin) => {
                    <CoinCard
                        key={coin.name}
                        symbol={coin.symbol}
                        priceUsd={coin.priceUsd}
                        percentChange24hr={coin.percentChange24hr}
                        percentChange7d={coin.percentChange7d}
                    />
                })}
            </>
        )

    }

    function render(){
        const crypto = this.props;
        const {contentContainer} = styles;

        if(crypto.isFetching){
            return(
                <View>
                    <Spinner
                    visible={crypto.isFetching}
                    textContent={'Loading...'}
                    textStyle={{color: '#253145'}}
                    animation='fade'
                    />
                </View>
            )
        }

        return (
            <ScrollView contentContainerStyle={contentContainer}>
                {renderCoinCard()}
            </ScrollView>
        )
    }

}

const styles ={
    contentContainer: {
        paddingBottom: 100,
        paddingTop: 55
    }
}

function mapStateToProp(state){
    return {
        crypto: state.crypto
    }
}

export default connect(mapStateToProp, {FetchCoinData})(CryptoContainer)