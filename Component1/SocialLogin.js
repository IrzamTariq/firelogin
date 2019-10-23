import React, {Component} from 'react';
import {Text, View,Dimensions,Image} from 'react-native';
import Icons from './IconImage'

var {height, width} = Dimensions.get('window');
export default class SocialLogin extends Component {

  render() {
    return (
      <View 
      style={{height:50,width:width,justifyContent:'center',flexDirection:'row',alignItems:'center'}}>
      <Icons
      color='#3C5A99'
      iconname="facebook"/>
      <Icons
      color="#33CCFF"
      iconname="twitter"/>
      <Icons
      color="gray"
      iconname="instagram"/>
      </View>
    );
  }
}