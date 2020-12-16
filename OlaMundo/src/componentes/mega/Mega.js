import React, { Component } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import Style from '../styles'
import Numero from './Numero'

export default class Mega extends Component {

    state = {
        qtdNumeros: this.props.qtdNumeros,
        numeros: []
    }

    altQtdNumero = (qtd) => {
        this.setState({ qtdNumeros: +qtd})
    }

    gerarNumero = nums => {
        const novo = parseInt(Math.random() * 60) + 1
        return nums.includes(novo) ? this.gerarNumero(nums) : novo
    }

    gerarNumeros = () => {
        const numeros = Array(this.state.qtdNumeros)
            .fill()
            .reduce(nums => [...nums, this.gerarNumero(nums)], [])
            .sort((a, b) => a - b)
        this.setState({ numeros })
    }

    exibirNumeros = () => {
        const nums = this.state.numeros
        return nums.map(num => {
            return <Numero key={num} num={num} />
        })
    }

    render() {
        return (
            <>
                <Text style={Style.fontM}>
                    Gerador Mega-Sena
                </Text>

                <TextInput 
                    keyboardType={'numeric'}
                    style={{borderBottomWidth: 1}}
                    placeholder="Qtade de Números"
                    value={this.state.qtdNumeros}
                    onChangeText={this.altQtdNumero}
                />

                <Button 
                    title='Gerar'
                    onPress={this.gerarNumeros}
                />

                <View 
                    style={{
                        marginTop:      20,
                        flexDirection:  "row",
                        flexWrap:       'wrap',
                        justifyContent: "center"
                    }}>
                    {this.exibirNumeros()}  
                </View>
            </>
        )
    }
}