import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import {images} from '../Utils/CoinIcons'

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        marginBottom: 20,
        borderBottomColor: '#e5e5e5',
        borderBottomWidth: 3,
        padding: 20
    },
    upperRow: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 15
    },
    coinSymbol: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 5,
        fontWeight: 'bold'
    },
    coinName:{
        marginTop: 10,
        marginLeft: 20,
        marginRight: 5
    },
    separator:{
        marginTop: 10
    },
    coinPrice:{
        marginTop: 10,
        marginLeft:'auto',
        marginRight: 10,
        fontWeight: 'bold' 
    },
    image:{
        width: 35,
        height: 35
    },
    moneySymbol:{
        fontWeight: 'bold'
    },
    statisticsContainer:{
        display: 'flex',
        borderTopColor: '#fafafa',
        borderTopWidth: 2,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    percentChangePlus:{
        color: '#00bfa5',
        fontWeight: 'bold',
        marginLeft: 5
    },
    percentChangeMinus:{
        color: '#dd2c00',
        fontWeight: 'bold',
        marginLeft: 5
    }
})

const {
    container,
    image,
    moneySymbol,
    upperRow,
    coinSymbol,
    coinName,
    coinPrice,
    statisticsContainer,
    separator,
    percentChangeMinus,
    percentChangePlus
} = styles

const CoinCard = ({symbol, coinName, priceUsd, percentChange24hr, percentChange7d}) =>{
    return (
        <>
                <View style={container}>
            <View style={upperRow}>
                <Image style={styles.image} source={{ url: images[symbol]}} />
                <Text style={coinSymbol}>{symbol}</Text>
                <Text style={separator}>|</Text>
                <Text style={coinName}>{coinName}</Text>
                <Text style={coinPrice}><Text style={priceUsd}> $ </Text></Text>
            </View>
        </View>

        <View style={statisticsContainer}>
            <Text>24Hr:
                <Text style={percentChange24hr < 0 ? percentChangeMinus : percentChangePlus}>{percentChange24hr} %</Text> 
            </Text>

            <Text>7D:
                <Text style={percentChange7d < 0 ? percentChangeMinus : percentChangePlus}>{percentChange7d} %</Text> 
            </Text>
        </View>
        </>
    )
}