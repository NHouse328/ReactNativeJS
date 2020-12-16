import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Style from '../styles'
import Quadrado from './Quadrado'

export default props => {
    return (
        <View style={style.FlaxV3}>
            <Quadrado cor='#F0F'/>
            <Quadrado cor='#F00'/>
            <Quadrado cor='#0F0'/>
            <Quadrado cor='#00F'/>
        </View>
    )
}

const style = StyleSheet.create({
    FlaxV3: {
        flexDirection:      "row",
        flex:               1,
        width:              '100%',
        alignItems:         "center",
        justifyContent:     "space-evenly",
        alignItems:         "center",
        backgroundColor:    '#000'
    }
})