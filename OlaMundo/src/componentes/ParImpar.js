import React from 'react'
import { Text, View } from 'react-native'
import Style from './styles'

export default ({num = 0}) => {
    return (
        <View>
            <Text style={Style.fontG}>{num} é:</Text>
            {num % 2 === 0
                ? <Text style={Style.fontG}>Par</Text>
                : <Text style={Style.fontG}>Impar</Text>
            }
        </View>
    )
}