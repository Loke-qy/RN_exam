import React, { Component } from 'react'
import { Text, View, Button, Modal ,StyleSheet , ScrollView} from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ViewPager from '@react-native-community/viewpager';

import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"

export default class Home extends React.Component {

    render() {
      return(
            <View style={styles.container}>
                <View style={styles.top}></View>
                <View style={styles.bottom}>
                    <View style={styles.bottom_t}>

                    </View>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <SimpleLineIcons style={styles.bf} name="control-start" size={23} color="green"/>
                        <SimpleLineIcons style={styles.bf} name="control-play" size={23} color="green"/>
                        <SimpleLineIcons style={styles.bf} name="control-end" size={23} color="green"/>
                    </View>
                </View>
            </View>
      )
    }
}
const styles = StyleSheet.create({
    // container:{color:'red'},content:{color:'green'},
    // button:{backgroundColor:'#5C9DE5',width:50,height:30,borderRadius:5,textAlign:"center",textAlignVertical:'center'},
    // con:{color:'yellow'},
    // tex:{marginLeft:5,marginRight:5,marginTop:0}
    container:{justifyContent:'space-around'},
    top:{height:800,backgroundColor:'#ccc'},
    bottom:{height:80,backgroundColor:"pink",flexDirection:"row"},
    bottom_t:{flexGrow:1,backgroundColor:'yellow'},
    bf:{marginBottom:10,marginRight:15}
})