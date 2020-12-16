import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Style from '../styles'
import Quadrado from './Quadrado'

export default props => {
    return (
        <View style={style.FlaxV1}>
            <Quadrado cor='#F0F'/>
            <Quadrado cor='#F00'/>
            <Quadrado cor='#0F0'/>
            <Quadrado cor='#00F'/>
        </View>
    )
}

const style = StyleSheet.create({
    FlaxV1: {
        flex:               1,
        justifyContent:     "space-between",
        backgroundColor:    '#000'
    }
})