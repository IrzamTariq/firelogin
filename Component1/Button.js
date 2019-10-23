import React, {Component} from 'react';
import {Text, View,Dimensions,TouchableOpacity,ActivityIndicator,StyleSheet} from 'react-native';
import firebase from 'react-native-firebase'

var {height, width} = Dimensions.get('window');

export default class Button extends Component {
  constructor(props)
    {
      super(props);
      this.state = {
          load:false,
    }}

  _Press=()=>{
    this.setState({load:true})
    console.warn(this.props.first+"::"+this.props.last+"::"+this.props.email+"::"+this.props.phone+"::"+this.props.address)
  firebase.firestore().collection("TODOTABLE").add({
    firstname:this.props.first,
    last:this.props.last,
    email:this.props.email,
    phone:this.props.phone,
    address:this.props.address
  })
  .then((res)=>{
    console.warn(res)
    this.setState({load:false},()=>this.props.nav("Detail"))
  }).catch(()=>{this.setState({load:false})})
  }

  render() {

    return (
      this.state.load===false?
      <TouchableOpacity
      onPress={this._Press} 
      style={styles.Button}>
          <Text style={styles.label}>REGISTER</Text>
      </TouchableOpacity>
      :<ActivityIndicator/>
    
    );
  }
}

const styles = StyleSheet.create({
  Button: {
    height:40,width:290,justifyContent:'center',
      borderRadius:25,margin:8,backgroundColor:'#235EF5',alignItems:'center'
    },
    label:{
      color:'#fff',fontWeight:'bold',fontSize:16
    }
});