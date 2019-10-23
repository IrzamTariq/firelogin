import React, {Component} from 'react';
import {StyleSheet,View,Dimensions} from 'react-native';
import Input from '../Component1/Input';
import OrLayer from '../Component1/OrLayer';
import Button from '../Component1/Button';
import SocialLogin from '../Component1/SocialLogin';

var {height, width} = Dimensions.get('window');
export default class Main extends Component {

    constructor(props)
    {
      super(props);
      this.state = {
          firstName:'',
          Last:'',
          Email:'',
          Phone:'',
          Address:'',
    }}
    _First=(res)=>{this.setState({firstName:res})}
    _Last=(res)=>{this.setState({Last:res})}
    _Email=(res)=>{this.setState({Email:res})}
    _Phone=(res)=>{this.setState({Phone:res})}
    _Address=(res)=>{this.setState({Address:res})}
    _Navigations=(res)=>{
        this.props.navigation.navigate('Detail' ,{first:this.state.firstName,last:this.state.Last,
        Email:this.state.Email,Phone:this.state.Phone,Address:this.state.Address})
        console.warn(res)
    }

  render() {
    return (
        <View style={{width:width,alignItems:'center',backgroundColor:'#fff',height:height}}>
      <View style={styles.containerStyle} >
      <View style={styles.sliderContainerStyle} >
        <View style={styles.slider}/>
      </View>
    </View>
      <Input ChangeText={this._First.bind()} placeholder="First Name"/>
      <Input ChangeText={this._Last.bind()} placeholder="Last Name"/>
      <Input ChangeText={this._Email.bind()} placeholder="Email ID"/>
      <Input ChangeText={this._Phone.bind()} placeholder="Phone Number"/>
      <Input ChangeText={this._Address.bind()} placeholder="Address"/>
      <Button 
      nav={this._Navigations.bind()}
      first={this.state.firstName}
      last={this.state.Last}
      email={this.state.Email}
      phone={this.state.Phone}
      address={this.state.Address}
      />
      <OrLayer/>
      <SocialLogin/>
    </View>
    );
  }
}

const styles = StyleSheet.create({
    cone: {
        width: '100%',
        height: 50,
        borderBottomLeftRadius:width,
        borderBottomRightRadius:width
      },
      containerStyle: {
        alignItems: 'center',
        width: width,
        overflow: 'hidden',
        height: width / 2.6,backgroundColor:'#fff',marginBottom:35
    },
    sliderContainerStyle: {
        borderRadius: width,
        width: width * 1.25,
        height: width * 2,
        marginLeft: -(width / 2),
        position: 'absolute',
        bottom: 0,
        overflow: 'hidden',backgroundColor:'#225DF5'
    },
    slider: {
        height: width / 1.7,
        width: width,
        position: 'absolute',
        bottom: 0,
        marginLeft: width / 2,
        backgroundColor: '#225DF5'
    }
  });
  

  
