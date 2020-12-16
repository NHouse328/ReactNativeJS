import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Style from '../styles'

export default props => {

    
    return (
        <View style={style.Display}>
            <Text style={[Style.fontG, style.DisplayText]}>
                {props.num}
            </Text>
        </View>   
    )
}

const style = StyleSheet.create({
    Display: {
        backgroundColor:    '#000',
        padding:            20,
    },
    DisplayText: {
        color:              '#FFF'
    }
})