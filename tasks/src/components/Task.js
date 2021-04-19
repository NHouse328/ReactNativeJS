import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default props => {
    return (
        <View>
            <Text>{props.desc}</Text>
            <Text>{props.estimateAt + ""}</Text>
            <Text>{props.doneAt + ""}</Text>
        </View>
    )
}