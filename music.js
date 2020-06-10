import React, { Component } from 'react'
import { Text, View, TouchableHighlight } from 'react-native'
import Video from 'react-native-video'
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
export default class music extends Component {
    constructor() {
        super()
        this.state = {
            playlist: true,
            name: 'control-play',
            albums:[]
        }
    }
    componentDidMount() {
        fetch("http://118.25.250.106:3200/qyalbums", { method: 'GET' })
            .then(resp => resp.json())
            .then(albums => {
                // console.log(albums)
                this.setState({ albums: albums })
            })
    }
    last = () => {
        alert(1)
    }
    stop = () => {
        if (this.state.playlist === true) {
            this.setState({ playlist: false, name: 'control-pause' })
        } else {
            this.setState({ playlist: true, name: 'control-play' })
        }
    }
    next = () => {
        alert(2)
    }
    render() {
        return (
            <View style={{ marginTop: 22 }}>
                <Video source={{ uri: '' }} paused={this.state.playlist}></Video>
                <View style={{ flexDirection: "row", alignItems: "center" }}>

                    <TouchableHighlight underlayColor="none" activeOpacity={0.1}
                        onPress={this.last}>
                        {/* name="control-play" */}
                        <SimpleLineIcons style={{ marginBottom: 10, marginRight: 15 }} name="control-start" size={23} color="green" />
                    </TouchableHighlight>

                    <TouchableHighlight underlayColor="none" activeOpacity={0.1}
                        onPress={this.stop}>
                        {/* name="control-play" */}
                        <SimpleLineIcons style={{ marginBottom: 10, marginRight: 15 }}
                            name={this.state.name}
                            size={23} color="green" />
                    </TouchableHighlight>

                    <TouchableHighlight underlayColor="none" activeOpacity={0.1}
                        onPress={this.next}>
                        {/* name="control-play" */}
                        <SimpleLineIcons style={{ marginBottom: 10, marginRight: 15 }} name="control-end" size={23} color="green" />
                    </TouchableHighlight>

                </View>
            </View>
        )
    }
}
