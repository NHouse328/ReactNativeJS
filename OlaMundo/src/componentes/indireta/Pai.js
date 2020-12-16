import React, { useState } from 'react'
import Style from '../styles'
import { Text } from 'react-native'
import Filho from './Filho'
import Contador from './Contador'

export default props => {

    const [num, setNum] = useState(0)
    /* const [min, setMin] = useState(0)
    const [numMax, setMax] = useState(0) */

    function exibirValor(numero) {
        setNum(numero)
    }

    /* function minMax(n) {
        setMax(n)
    } */

    return (
        <>   
            <Text style={Style.fontG}>{num}</Text> 
            <Filho 
                min={1} 
                max={50} 
                funcao={exibirValor}
            />
            {/* <Contador 
                funcao={minMax}
            /> */}
        </>
    )
}