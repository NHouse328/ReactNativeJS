import React from 'react'
import { View, Text } from 'react-native'
import style from './styles'

export default props => {

    return (
        <>
            <View>
                <Text style={style.fontG}>
                   {props.principal}
                </Text>
                <Text style={style.fontM}>
                   {props.secundario}
                </Text>
            </View>

            <Text>Pode ser assim também</Text>
        </>
        
    )
}