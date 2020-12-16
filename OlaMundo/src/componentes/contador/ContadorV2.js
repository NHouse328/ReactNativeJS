import React, { useState } from 'react'
import { Text } from 'react-native'
import Style from '../styles'

import ContadorBotoes from './ContadorBotoes'
import ContadorDisplay from './ContadorDisplay'

export default props => {

    const [num, setNum] = useState(0)

    const inc = () => setNum(num + 1)
    const dec = () => setNum(num - 1)

    return (
        <>
            <Text style={Style.fontG}>
                ContadorV2
            </Text>
            <ContadorDisplay num={num} />
            <ContadorBotoes inc={inc} dec={dec}/>
        </>
    )
}