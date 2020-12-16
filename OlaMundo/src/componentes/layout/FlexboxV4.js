import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default props => {
    return (
        <View style={style.FlaxV4}>
            <View style={style.V0} />
            <View style={style.V1} />
            <View style={style.V2} />
        </View>
    )
}

const style = StyleSheet.create({
    FlaxV4: {
        flexGrow:           1,
        width:              100,
        backgroundColor:    '#000'
    },
    V0: {
        backgroundColor:    '#F00',
        height:             100
    },
    V1: {
        backgroundColor:    '#0F0',
        flexGrow:           1
    },
    V2: {
        backgroundColor:    '#00F',
        flexGrow:           1
    }
})