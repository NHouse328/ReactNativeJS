import React from 'react'
import { FlatList, Text } from 'react-native'
import Style from '../styles'
import produtos from './produtos'

import Produtos from './produtos'

export default props => {
    const produtoRender = (({ item: p}) => {
        return <Text>{p.id}</Text>
    })
    return (
        <>
            <Text style={Style.fontG}>
                Lista de Produtos
            </Text>
            <FlatList 
                data={produtos}
                keyExtractor={i => '${i.id}'}
                renderItem={produtoRender}
            />
        </>
    )
}