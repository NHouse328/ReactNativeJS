/* import React, { useState } from 'react'
import { Button, Text, View, StyleSheet } from 'react-native'
import style from '../styles'

export default ({funcao, inicial = 0, passo = 1}) => {

    const [min, setMin] = useState(inicial)
    const [max, setMax] = useState(inicial)

    const inc1 = () => setMin(min + passo)
    const dec1 = () => setMin(min - passo)

    const inc2 = () => setMax(max + passo)
    const dec2 = () => setMax(max - passo)
    
    return <View style={Style1.App}>
        <View style={Style2.App}>
            <Text style={style.fontM}>{min}</Text>
            <Button title="+" onPress={inc1}/>
            <Button title="-" onPress={dec1}/>
        </View>
        <View style={Style2.App}> 
            <Text style={style.fontM}>{max}</Text>
            <Button title="+" onPress={inc2}/>
            <Button 
                title="-" 
                onPress={function() {
                    funcao(dec2())
                }}/>
        </View>
    </View>
}

const Style1 = StyleSheet.create({
    App: {
        backgroundColor:    '#ddd'  ,
        flexGrow:           0       ,
        justifyContent:     "center",
        alignItems:         "center",
        padding:            20      ,
        flexDirection:      'row'
    }
})

const Style2 = StyleSheet.create({
    App: {
        backgroundColor:    '#ddd'  ,
        flexGrow:           0       ,
        justifyContent:     "center",
        alignItems:         "center",
        padding:            20      ,
    }
}) */