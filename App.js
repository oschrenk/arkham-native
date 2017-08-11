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
        <Text>-</Text>
        <Text>+</Text>
        <Text>{this.props.counter}</Text>
      </Image>
    )
  }
}

const counterStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    width: 110,
    height: 80
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
