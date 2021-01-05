import { Dimensions } from 'react-native'

const params = {
    getBlockSize() {
        const width = Dimensions.get('window').width
        return Math.floor(width / 10)
    },
    blockSize:      30,
    borderSize:     5,
    fontSize:       15,
    headerRatio:    0.15, //Proporção do painel superior na tela
    difficultLevel: 0.1,
    getColumnsAmount() {
        //const width = Dimensions.get('window').width
        //return Math.floor(width / this.blockSize)
        return 10
    },
    getRowsAmount() {
        //const totalHeight = Dimensions.get('window').height
        //const boardHeight = totalHeight * (1 - this.headerRatio)
        //return Math.floor(boardHeight / this.blockSize)
        return 15
    }
}

export default params