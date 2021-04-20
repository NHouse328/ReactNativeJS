import React, { Component } from 'react'
import { View, Text, ImageBackground, StyleSheet, FlatList } from 'react-native'

import todayImage from '../../assets/imgs/today.jpg'
import commonStyles from '../commonStyles.js'

import moment from 'moment'
import 'moment/locale/pt-br'

import Task from '../components/Task'

export default class TaskList extends Component {
    state = {
        tasks: [{
            id: Math.random(),
            desc: 'Teste 3',
            estimateAt: new Date(),
            doneAt: new Date(),
        }, {
            id: Math.random(),
            desc: 'Teste 4',
            estimateAt: new Date(),
            doneAt: null,
        }]
    }

    render() {
        const today = moment().local('pt-br').format('ddd, D [de] MMMM')
        return(
            <View style={styles.container}>
                <ImageBackground 
                    source={todayImage}
                    style={styles.background}
                >
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>Hoje</Text>
                        <Text style={styles.subTitle}>{today}</Text>
                    </View>
                </ImageBackground>
                <View style={styles.taskList}>
                    <FlatList data={this.state.tasks}
                        keyExtractor={item => `${item.id}`}
                        renderItem={({item}) => <Task {...item} />} />
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    background: {
        flex: 3
    },
    taskList: {
        flex: 7
    },
    titleBar: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    title: {
        fontFamily: commonStyles.fontFamily,
        fontSize: 50,
        color:commonStyles.colors.secundary,
        marginLeft: 20,
        marginBottom: 20,
    },
    subTitle: {
        fontFamily: commonStyles.fontFamily,
        fontSize: 20,
        color:commonStyles.colors.secundary,
        marginLeft: 20,
        marginBottom: 30,
    }
})