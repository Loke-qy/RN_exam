import React, { Component } from 'react'
import { Text, View, Button, Modal } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ViewPager from '@react-native-community/viewpager';
import Home from './Home'
import List from './List'
import About from './About'
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
// import Ionicons from 'react-native-vector-icons/Ionicons';
const Drawer = createDrawerNavigator()
const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()
export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = { visible: true }
  }
  _hide = () => {
    this.setState({ visible: false })
  }
  render() {
    return (
      <NavigationContainer>
        {/* 广告 */}
        {/* <Modal visible={this.state.visible}>
          <ViewPager style={{flex:1}} initialPage={0}>
            <View key="1">
              <Text>First page</Text>
            </View>
            <View key="2">
              <Text>Second page</Text>
              <Button title="关闭" onPress={this._hide}/>
            </View>
          </ViewPager>
        </Modal> */}
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              
              if (route.name === 'Home') {
                iconName = focused
                  ? 'home'
                  : 'home';
              } else if (route.name === 'List') {
                iconName = focused ? 'list' : 'list';
              }else if (route.name === 'About') {
                iconName = focused ? 'user' : 'user';
              }

              // You can return any component that you like here!
              return <SimpleLineIcons name={iconName} size={20} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}

        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="List" component={List} />
          <Tab.Screen name="About" component={About} />
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}

// class Main extends React.Component {

//   render() {
//     return <Tab.Navigator>
//       <Tab.Screen name="Home" component={Home} />
//       <Tab.Screen name="Buy" component={Buy} />
//       <Tab.Screen name="FAQ" component={Faq} />
//     </Tab.Navigator>
//   }
// }

// class Setting extends React.Component {
//   render() {
//     return <Text>Setting</Text>
//   }
// }



