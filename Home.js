import React, { Component } from 'react'
import { Text, View, Button, Modal, StyleSheet, ScrollView, TouchableHighlight, Image } from 'react-native'
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import Music from './music'
import { TextInput } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import yq from './leson'
const Stack = createStackNavigator()

function Ho() {
    return (
        <Stack.Navigator initialRouteName="Home">
            {/* initialRouteName 设置主页 第一个页面 */}
            <Stack.Screen name="Home" component={Home} options={{ title: 'music' }} />
            <Stack.Screen name="yq" component={yq} options={{ title: 'leson' }} />
        </Stack.Navigator>
    );
}
export default Ho
class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            albums: [],
            img:'http://118.25.250.106/qypicture/huamulanpic.jpg'
        }
    }
    componentDidMount() {
        fetch("http://118.25.250.106:3200/qyalbums", { method: 'GET' })
            .then(resp => resp.json())
            .then(albums => {
                // console.log(albums[p].audioPath)
                this.setState({ albums: albums })
            })
    }
    _go() {
        let params = this.state.albums[5]
        this.props.navigation.navigate('yq',params)
    }
    _go1() {
        let params = this.state.albums[3]
        this.props.navigation.navigate('yq',params)
    }
    _go2() {
        let params = this.state.albums[9]
        this.props.navigation.navigate('yq',params)
    }
    _go3() {5
        let params = this.state.albums[15]
        this.props.navigation.navigate('yq',params)
    }
    _go4() {
        let params = this.state.albums[19]
        this.props.navigation.navigate('yq',params)
    }
    _go5() {
        let params = this.state.albums[26]
        this.props.navigation.navigate('yq',params)
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.top}>
                    <View style={styles.top_no}></View>
                    <View style={styles.top_input}>
                        <TextInput style={styles.input}></TextInput>
                        <SimpleLineIcons style={{ marginBottom: 10, marginLeft: 10, marginTop: 20 }} name="list" size={23} color="#ccc" />
                    </View>
                    <View style={styles.top_img}>
                        <Image style={{ width: '100%', height: '100%', borderRadius: 18 }} source={{ uri: this.state.img }}></Image>
                    </View>
                    {/* <View style={styles.solid}></View> */}
                    <View style={{ margin: 10 }}>
                        <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                            <Text style={{ fontWeight: "300" }}>歌曲推荐</Text>
                            <Text style={{ color: '#ccc' }}>更多 ></Text>
                        </View>
                        <View style={{ height: 220, flexDirection: 'row', flexWrap: "wrap", marginTop: 10 }}>

                            <TouchableHighlight onPress={() => this._go()} underlayColor='white'>
                                <View style={styles.box}>
                                    <Image style={{ width: '100%', height: '100%', borderRadius: 6 }} source={{ uri: 'http://118.25.250.106/qypicture/duanqiaocanxuepic.jpg' }}></Image>
                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight onPress={() => this._go1()} underlayColor='white'>
                                <View style={styles.box}>
                                    <Image style={{ width: '100%', height: '100%', borderRadius: 6 }} source={{ uri: 'http://118.25.250.106/qypicture/chengfupic.jpg' }}></Image>
                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight onPress={() => this._go2()} underlayColor='white'>
                                <View style={styles.box}>
                                    <Image style={{ width: '100%', height: '100%', borderRadius: 6 }} source={{ uri: 'http://118.25.250.106/qypicture/huantingpic.jpg' }}></Image>
                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight onPress={() => this._go3()} underlayColor='white'>
                                <View style={styles.box}>
                                    <Image style={{ width: '100%', height: '100%', borderRadius: 6 }} source={{ uri: 'http://118.25.250.106/qypicture/ruguodangshipic.jpg' }}></Image>
                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight onPress={() => this._go4()} underlayColor='white'>
                                <View style={styles.box}>
                                    <Image style={{ width: '100%', height: '100%', borderRadius: 6 }} source={{ uri: 'http://118.25.250.106/qypicture/tanfupic.jpg' }}></Image>
                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight onPress={() => this._go5()} underlayColor='white'>
                                <View style={styles.box}>
                                    <Image style={{ width: '100%', height: '100%', borderRadius: 6 }} source={{ uri: 'http://118.25.250.106/qypicture/zhaomopic.jpg' }}></Image>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
                <Music></Music>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: { justifyContent: 'space-around' },
    top: { height: 800 },
    bottom: { height: 80, flexDirection: "row" },
    bottom_t: { flexGrow: 1, backgroundColor: 'yellow' },
    bf: { marginBottom: 10, marginRight: 15 },
    top_no: { height: 67, backgroundColor: '#ccc' },
    top_img: { height: 200, margin: 10 ,marginTop:5 },
    top_input: { height: 60, flexDirection: 'row' },
    input: { borderWidth: 1, height: 35, borderColor: '#ccc', marginTop: 15, borderRadius: 18, width: '85%', marginLeft: 10 },
    solid: { height: 1, backgroundColor: 'black', width: '100%', marginTop: 10 },
    box: { width: 93, height: 90, margin: 10 }
})