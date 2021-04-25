import React from "react";
import {StyleSheet, Text, View,Button} from 'react-native';  
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';  
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import Icon from 'react-native-vector-icons/Ionicons'; 
import Bar from './src/Bar'
import Line from './src/Line'
import Pie from './src/Pie'
import Sbar from './src/Sbar'

const TabNavigator = createMaterialBottomTabNavigator(  
  {  
      Bar: { screen: Bar,  
          navigationOptions:{  
              tabBarLabel:'Bar',  
              tabBarIcon: ({ tintColor }) => (  
                  <View>  
                      <Icon style={[{color: tintColor}]} size={25} name={'bar-chart'}/>  
                  </View>),  
          }  
      },  
      Line: { screen: Line,  
          navigationOptions:{  
              tabBarLabel:'Line',  
              tabBarIcon: ({ tintColor }) => (  
                  <View>  
                      <Icon style={[{color: tintColor}]} size={25} name={'arrow-up-sharp'}/>  
                  </View>),  
              activeColor: '#f60c0d',  
              inactiveColor: '#f65a22',  
              barStyle: { backgroundColor: '#f69b31' },  
          }  
      },  
      Sbar: { screen: Sbar,  
          navigationOptions:{  
              tabBarLabel:'Sbar',  
              tabBarIcon: ({ tintColor }) => (  
                  <View>  
                      <Icon style={[{color: tintColor}]} size={25} name={'stats-chart'}/>  
                  </View>),  
              activeColor: '#615af6',  
              inactiveColor: '#46f6d7',  
              barStyle: { backgroundColor: '#67baf6' },  
          }  
      },  
      Pie: {  
          screen: Pie,  
          navigationOptions:{  
              tabBarLabel:'Pie',  
              tabBarIcon: ({ tintColor }) => (  
                  <View>  
                      <Icon style={[{color: tintColor}]} size={25} name={'pie-chart'}/>  
                  </View>),  
          }  
      },  
  },  
  {  
    initialRouteName: "Bar",  
    activeColor: '#f0edf6',  
    inactiveColor: '#226557',  
    barStyle: { backgroundColor: '#3BAD87' },  
  },  
);  

// const DrawerNavigator = createDrawerNavigator({
//   Calculation:{
//     screen:Calculation,
//   },
//   Set:{
//     screen:Set,
//   },
//   Date:{
//     screen:Date,
//   },
//   Currency:{
//     screen:Currency,
//   },
  
// })

// export default createAppContainer(DrawerNavigator)
export default createAppContainer(TabNavigator);  