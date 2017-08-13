import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class NumberPicker extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: parseInt(this.props.counter),
    };
  }

  decrement(){
    this.setState({ counter: this.state.counter - 1})
  }

  increment(){
    this.setState({ counter: this.state.counter + 1})
  }

  render() {
    return (
      <Image source={require('../img/damage-vertical.png')} style={counterStyles.container}>
        <Text style={[counterStyles.half, counterStyles.left]} onPress={this.decrement.bind(this)}>-</Text>
        <Text style={[counterStyles.half, counterStyles.right]} onPress={this.increment.bind(this)}>+</Text>
        <Text pointerEvents="none" style={counterStyles.overlay} >{this.state.counter}</Text>
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

