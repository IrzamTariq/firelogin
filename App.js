import React from 'react';
import {StyleSheet,View,Dimensions} from 'react-native';
import Main from './src/Main';
import Detail from './src/Detail'
import {createAppContainer,createSwitchNavigator} from 'react-navigation'

const Switch=createSwitchNavigator({
  Main:{screen:Main},
  Detail:{screen:Detail},
})

const Contain=createAppContainer(Switch)
const App= () => {
  return (
    <Contain/>
  );
};


export default App;


// <Header head1="Demo" head2="Garage"/>
//       <Swiper/>
//       <FeatureList/>