import React, {Component} from 'react';
import {Text, View,Dimensions,Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Gradients from 'react-native-linear-gradient'

var {height, width} = Dimensions.get('window');
export default class IconImage extends Component {

  render() {
    
    return (
      <View>
        {this.props.color==='gray'?
      <Gradients
      colors={['#CA1D7E', '#E35157', '#F2703F']}
  start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
      style={{height:30,width:30,borderRadius:30,margin:20,backgroundColor:this.props.color,
      justifyContent:'center',alignItems:'center'}}>
        <Icon name={this.props.iconname} color="#fff" size={28}/>
      </Gradients>
      :
      <View
      style={{height:30,width:30,borderRadius:30,margin:20,backgroundColor:this.props.color,
      justifyContent:'center',alignItems:'center'}}>
        <Icon name={this.props.iconname} color="#fff" size={28}/>
      </View>
      }
      </View>
    );
  }
}