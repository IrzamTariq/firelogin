import React, {Component} from 'react';
import {StyleSheet,View,Dimensions,Text,TouchableOpacity} from 'react-native';

var {height, width} = Dimensions.get('window');
export default class Detail extends Component {


  render() {
      const {first,last,Email,Phone,Address}=this.props.navigation.state.params;
    return (
        <View style={styles.Screen}>
            <View style={{height:50,width:'100%'}}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Main')}>
                <Text style={styles.Back}>Back</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.pad}>{first}</Text>
            <Text style={styles.pad}>{last}</Text>
            <Text style={styles.pad}>{Email}</Text>
            <Text style={styles.pad}>{Phone}</Text>
            <Text style={styles.pad}>{Address}</Text>
    </View>
    );
  }
}

const styles = StyleSheet.create({
    pad: {
        padding:10,color:'#3C5A99',fontSize:24,fontWeight:'bold'
      },
      Screen:{
        width:width,alignItems:'center',backgroundColor:'#fff',height:height
      },
      Back:{
        padding:10,color:'#3C5A99',fontSize:18,fontWeight:'bold'
      }
  });