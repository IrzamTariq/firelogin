import React, {Component} from 'react';
import {Text, View,Dimensions,StyleSheet} from 'react-native';

var {height, width} = Dimensions.get('window');
export default class OrLayer extends Component {

  render() {
    return (
      <View 
      style={styles.Views}>
      <View style={styles.Line}></View>
      <Text style={styles.Text}>OR</Text>
      <View style={styles.Line}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Line: {
    height:1,width:width/3,backgroundColor:'#235EF5',margin:5
    },
    Text:{padding:5,color:'#235EF5'
    },
    Views:{
      height:45,width:width,justifyContent:'center',flexDirection:'row',alignItems:'center'
    }
});