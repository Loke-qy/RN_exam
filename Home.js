import React, { Component } from 'react'
import { Text, View, Button, Modal, StyleSheet, ScrollView, TouchableHighlight } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ViewPager from '@react-native-community/viewpager';
import Video from 'react-native-video'

import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import Music from './music'
export default class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            playlist: true,
            name: 'control-play',
        }
    }
 
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.top}></View>
                <View style={styles.bottom}>
                    <View style={styles.bottom_t}>
                    </View>
                    <Music></Music>
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
    container: { justifyContent: 'space-around' },
    top: { height: 800 },
    bottom: { height: 80, flexDirection: "row" },
    bottom_t: { flexGrow: 1, backgroundColor: 'yellow' },
    bf: { marginBottom: 10, marginRight: 15 }
})