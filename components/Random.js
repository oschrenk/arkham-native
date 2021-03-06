import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

const HIDDEN_TOKEN = "e"

export default class RandomPicker extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      token: HIDDEN_TOKEN,
      lastResults: [],
      bag: ["+1", "+1", "0", "0", "0", "-1", "-1", "-1", "-2", "-2", "s", "s", "c" , "t" , "f", "e" ]
    };
  }

  randomize(){
    if (this.isHidden()) {
      var index = Math.floor(Math.random() * this.state.bag.length);
      var oldToken = this.state.token;
      var oldResults = this.state.lastResults;
      var oldBag = this.state.bag;
      var newToken = this.state.bag[index];

      this.setState({
        token: newToken,
        lastResults: oldResults,
        bag: oldBag
      })
    } else {
      var oldResults = this.state.lastResults;
      if (oldResults.length >= 3) {
        oldResults.shift();
      }
      var oldToken = this.state.token;
      var newResults = oldResults
      newResults.push(oldToken);

      var oldBag = this.state.bag;
      var newToken = this.state.bag[index];

      this.setState({
        token: HIDDEN_TOKEN,
        lastResults: newResults,
        bag: oldBag
      })

    }
  }

  isHidden(){
    return this.state.token == HIDDEN_TOKEN;
  }

  pretty(){
    let pretty = "";
    for(let i = 0; i <= this.state.lastResults.length -1; i++) {
      pretty += this.state.lastResults[i];
      if (i != this.state.lastResults.length - 1) {
        pretty += ", ";
      }
    }
    return pretty;
  }

  render() {
    return (
      <View style={randomStyles.container}>
        <Text style={randomStyles.main} onPress={this.randomize.bind(this)}>{this.state.token}</Text>
        <Text style={randomStyles.last}>{this.pretty()}</Text>
      </View>
    )
  }
}

const randomStyles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: 90,
    alignItems: 'center',
  },
  main:{
    flex: 1,
    fontSize: 60,
    fontFamily: 'arkham'
  },
  last: {
    fontSize: 20,
    fontFamily: 'arkham'
  }
})

