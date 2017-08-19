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
      bag: ["+1", "+1", "0", "0", "0", "-1", "-1", "-1", "-2", "-2", "s", "s", "c" , "t" , "f", "e" ]
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
        <Text style={randomStyles.main}>s</Text>
        <Text style={randomStyles.last}>e</Text>
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
  main:{
    flex: 1,
    fontSize: 40,
    fontFamily: 'arkham'
  },
  last: {
    fontSize: 20,
    fontFamily: 'arkham'
  }
})

