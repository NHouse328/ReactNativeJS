import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import params from './src/params'
import MineField from './src/components/MineField'
import LevelSelection from './src/screens/LevelSelection'
import {
  createMinedBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
  invertFlag,
  flagsUsed,
} from './src/functions'
import Header from './src/components/Header';

import admob, { MaxAdContentRating } from '@react-native-firebase/admob';
import { InterstitialAd, RewardedAd, BannerAd, TestIds } from '@react-native-firebase/admob';
import { BannerAdSize, } from '@react-native-firebase/admob';
import { AdEventType } from '@react-native-firebase/admob';

const adUnitId02 = __DEV__ ? TestIds.INTERSTITIAL : 'ca-app-pub-7683931401076141/3512027539';
const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-7683931401076141/7670840370';

const interstitial = InterstitialAd.createForAdRequest(adUnitId02, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ['fashion', 'clothing'],
});


export default class App extends Component {

  componentDidMount() {
    admob()
      .setRequestConfiguration({
        // Update all future requests suitable for parental guidance
        maxAdContentRating: MaxAdContentRating.PG,

        // Indicates that you want your content treated as child-directed for purposes of COPPA.
        tagForChildDirectedTreatment: true,

        // Indicates that you want the ad request to be handled in a
        // manner suitable for users under the age of consent.
        tagForUnderAgeOfConsent: true,
      })
      .then(() => {
        // Request config successfully set!
      });
  }

  constructor(props) {
    super(props)
    this.state = this.createState()
  }

  minesAmount = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return Math.ceil(cols * rows * params.difficultLevel)
  }

  createState = () => {
    interstitial.load();
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return {
      board: createMinedBoard(rows, cols, this.minesAmount()),
      won: false,
      lost: false,
      showLevelSelection: false,
    }
  }

  onOpenField = (row, column) => {
    const board = cloneBoard(this.state.board)
    openField(board, row, column)
    const lost = hadExplosion(board)
    const won = wonGame(board)

    if (lost) {
      showMines(board)
      Alert.alert('Perdeu !')
      interstitial.show();
    }

    if (won) {
      Alert.alert('Ganhou !')
    }

    this.setState({ board, lost, won })
  }

  onSelectField = (row, column) => {
    const board = cloneBoard(this.state.board)
    invertFlag(board, row, column)
    const won = wonGame(board)

    if (won) {
      Alert.alert('Ganhou !')
    }

    this.setState({ board, won })
  }

  onLevelSelected = level => {
    params.difficultLevel = level
    this.setState(this.createState())
  }

  render() {
    return (
      <View style={styles.container}>
        <LevelSelection isVisible={this.state.showLevelSelection}
          onLevelSelected={this.onLevelSelected}
          onCancel={() => this.setState({ showLevelSelection: false })} />
        <Header flagsLeft={this.minesAmount() - flagsUsed(this.state.board)}
          onNewGame={() => this.setState(this.createState())}
          onFlagPress={() => this.setState({ showLevelSelection: true })} />
        <View style={styles.board}>
          <MineField board={this.state.board}
            onOpenField={this.onOpenField}
            onSelectField={this.onSelectField} />
        </View>
        <BannerAd 
          unitId={adUnitId} 
          size={BannerAdSize.FULL_BANNER} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 5,
  }
})