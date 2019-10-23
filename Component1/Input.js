import React, {Component} from 'react';
import {Text, View,Dimensions,TextInput,StyleSheet} from 'react-native';


export default class Input extends Component {

  _Change=(text)=>{
    this.props.ChangeText(text)
  }
  render() {
    return (
      <View 
      style={styles.InputView}>
      <TextInput 
      onChangeText={(text)=>this._Change(text)}
      style={styles.Input}
      placeholder={this.props.placeholder}
      placeholderTextColor="#235EF5"
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  InputView: {
    height:40,width:290,justifyContent:'center',borderRadius:25,borderWidth:1,borderColor:'#235EF5',margin:8
    },
    Input:{
      height:'100%',width:'100%',paddingLeft:8,color:'#235EF5'
    }
});