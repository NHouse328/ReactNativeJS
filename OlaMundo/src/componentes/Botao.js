import React from 'react'
import { Button } from 'react-native'
import style from './styles'

export default props => {

    function run() {
        console.warn('Funcionou #01 !')
    }

    return (
        <>
            <Button 
                title="Run #01"
                onPress={run}
            />

            <Button 
                title="Run #02"
                onPress={function() {
                    console.warn('Funcionou #02')
                }}
            />

            <Button 
                title="Run #03"
                onPress={() =>
                    console.warn('Funcionou #03')
                }
            />
        </>
    )
}