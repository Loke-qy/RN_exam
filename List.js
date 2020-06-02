import React, { Component } from 'react'
import { Text, View, Button, Modal } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ViewPager from '@react-native-community/viewpager';
import Home from './Home'
const Drawer = createDrawerNavigator()
const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

export default class List extends React.Component {
    render() {
      return <Stack.Navigator>
        <Stack.Screen name="ItemList" component={ItemList} />
        <Stack.Screen name="ItemDetail" component={ItemDetail} />
      </Stack.Navigator>
    }
}
class ItemList extends React.Component {
  _showDetail = () => {
    this.props.navigation.navigate("ItemDetail")
  }
  render() {
    return <View>
      <Text>ItemList</Text>
      <Button title="查看详情" onPress={this._showDetail} />
    </View>
  }
}

class ItemDetail extends React.Component {

  render() {
    return <Text>ItemDetail</Text>
  }
}
  