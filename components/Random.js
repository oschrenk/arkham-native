import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class RandomPicker extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      token: " ",
      lastResults: [],
      bag: this.tokenBag
    };
  }

  randomize(){
    if (this.hidden()) {
      var index = Math.floor(Math.random() * this.bag.length);
      this.token = this.bag[index];
    } else {
      if (this.lastResults.length >= 3) {
        this.lastResults.shift();
      }
      this.lastResults.push(this.token);
      this.token = " ";
    }
  }

  hidden(){
    return this.token == " ";
  }


  render() {
    return (
        <View style={randomStyles.container}>
          <Text>Random</Text>
        </View>
    )
  }
}

const randomStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 110,
    height: 80,
    alignItems: 'center',
  },
  half:{
    flex: 1,
    fontSize: 40,
    fontFamily: 'arkham'
  },
  left: {
    textAlign: 'left'
  },
  right: {
    textAlign: 'right'
  },
  overlay: {
    fontSize: 40,
    fontFamily: 'arkham',
    position: 'absolute',
    left: 0,
    top: 20,
    right: 0,
    bottom: 0,
    textAlign: 'center'
  }
})

