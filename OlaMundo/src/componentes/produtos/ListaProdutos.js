import React from 'react'
import { Text } from 'react-native'
import Style from '../styles'
import produtos from './produtos'

import Produtos from './produtos'

export default props => {
    function obterLista() {
        return produtos.map(p => {
            return <Text key={p.id}>- {p.id} {p.nome} R${p.preco}</Text>
        })
    }
    return (
        <>
            <Text style={Style.fontG}>
                Lista de Produtos
            </Text>

            {obterLista()}
        </>
    )
}