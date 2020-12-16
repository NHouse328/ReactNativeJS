import React from 'react'
import { Text } from 'react-native'
import style from './styles'

export default ({ min, max })/*props*/ => {

    //const { min, max } = props
    const delta = max - min + 1
    const aleatorio = parseInt(Math.random() * delta + min)

    return (
        <Text style={style.fontM}>
            O valor aleatório é {aleatorio}
        </Text>
    )
}