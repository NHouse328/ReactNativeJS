import React from 'react'
import { Text } from 'react-native'
import style from './styles'

function Comp1() {
    return <Text style={style.fontG}>Comp #1</Text>
}

function Comp2() {
    return <Text style={style.fontG}>Comp #2</Text>
}

function Comp3() {
    return <Text style={style.fontG}>Comp #3</Text>
}

export default Comp1
export {Comp2, Comp3}