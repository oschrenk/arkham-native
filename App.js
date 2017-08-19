import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  Font,
  AppLoading
} from 'expo'
import NumberPicker from './components/Number'

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      fontLoaded: false
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      "arkham": require('./assets/fonts/arkham.ttf')
    })
    this.setState({ fontLoaded: true })
  }

  render() {
    if (!this.state.fontLoaded) {
      console.log('font loaded')
      return <AppLoading />
    }
    return (
      <Image source={require('./assets/img/background.png')} style={styles.backgroundImage}>
        <View style={styles.container}>
          <Text>Stuff</Text>
        </View>
        <View style={styles.container}>
          <NumberPicker counter='5' backgroundImage={require('./assets/img/damage-vertical.png')}/>
          <NumberPicker counter='5' backgroundImage={require('./assets/img/damage-vertical.png')}/>
        </View>
        <View style={styles.container}>
          <NumberPicker counter='5' backgroundImage={require('./assets/img/damage-vertical.png')}/>
        </View>
        <View style={styles.container}>
          <NumberPicker counter='5' backgroundImage={require('./assets/img/damage-vertical.png')}/>
          <NumberPicker counter='5' backgroundImage={require('./assets/img/damage-vertical.png')}/>
          <NumberPicker counter='5' backgroundImage={require('./assets/img/damage-vertical.png')}/>
        </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
  },
});
