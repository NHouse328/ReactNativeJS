import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import Mega from './componentes/mega/Mega'


//import FlaxboxV1 from './componentes/layout/FlaxboxV1'
//import FlaxboxV2 from './componentes/layout/FlaxboxV2'
//import FlexboxV3 from './componentes/layout/FlexboxV3'
//import FlexboxV4 from './componentes/layout/FlexboxV4'

//import Quadrado from './componentes/layout/Quadrado'
//import DigiteSeuNome from './componentes/DigiteSeuNome'
//import ListaProdutosV2 from './componentes/produtos/ListaProdutosV2'
//import ListaProdutos from './componentes/produtos/ListaProdutos'
//import ContadorV2 from './componentes/contador/ContadorV2'
//import ParImpar from './componentes/ParImpar'
//import Pai from './componentes/indireta/Pai'
//import Pai from './componentes/direta/Pai'
//import Contador from './componentes/Contador'
//import Botao from './componentes/Botao'
//import Titulo from './componentes/Titulo'
//import Aleatorio from './componentes/Aleatorio'
// import MinMax from './componentes/MinMax'
// import OutroNome, { Comp2, Comp3 }from './componentes/Multi'
// import Blabla from './componentes/Primeiro'

export default function App(){
    return <View style={style.App}> 

        <Mega qtdNumeros={7}/>

        {/* <FlexboxV4 />

        <FlexboxV3 />

        <FlaxboxV2 />

        <FlaxboxV1 />

        <DigiteSeuNome />

        <ListaProdutosV2 />

        <ParImpar num={12}/>

        <ContadorV2 />

        <Pai />
        
        <Contador inicial={62} passo={1} />
        <Contador />

        <Botao/>

        <Titulo principal="Aprendendo" secundario="React-Native"/>

        <Aleatorio min={1} max={60}/> 

        <MinMax min="3" max="20"/>
        <MinMax min={2} max={25}/>

        <OutroNome />
        <Comp2 />
        <Comp3 />

        <Blabla></Blabla> */}
    </View>
}

const style = StyleSheet.create({
    App: {
        backgroundColor:    '#ddd'  ,
        flexGrow:           1       ,
        justifyContent:     "center",
        alignItems:         "center",
        padding:            20
    }
})
