import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <Image source={require('./img/background.png')} style={styles.backgroundImage}>
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes yofoooou make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
          <NumberPicker counter='5'/>
        </View>
      </Image>
    );
  }
}

class NumberPicker extends React.Component {

  render() {
    return (
      <Image source={require('./img/damage-vertical.png')} style={counterStyles.container}>
        <Text style={{flex: 1, textAlign: 'left'}}>-</Text>
        <Text style={{flex: 1, textAlign: 'right'}}>+</Text>
        <Text style={counterStyles.overlay}>{this.props.counter}</Text>
      </Image>
    )
  }
}

const counterStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 110,
    height: 80,
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    left: 0,
    top: 30,
    right: 0,
    bottom: 0,
    textAlign: 'center',

  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
  },
});
