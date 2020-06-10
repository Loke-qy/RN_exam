import React, { Component } from 'react'
import { Text, View, TouchableHighlight, StyleSheet, Image } from 'react-native'
import Video from 'react-native-video'
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"

var p = 0
export default class music extends Component {
    constructor() {
        super()
        this.state = {
            playlist: true,
            name: 'control-play',
            albums: [],
            music: '',
            singer: '蒲提-爱我 (男生版)',
            img: 'http://118.25.250.106/qypicture/aiwopic.jpg'
        }
    }
    componentDidMount() {
        fetch("http://118.25.250.106:3200/qyalbums", { method: 'GET' })
            .then(resp => resp.json())
            .then(albums => {
                console.log(albums[p].audioPath)
                this.setState({ albums: albums })
            })
    }
    last = () => {
        p--
        let videoPath = this.state.albums[p].audioPath
        let singerPath = this.state.albums[p].name
        let imgPath = this.state.albums[p].imagePath
        this.setState({
            music: videoPath,
            singer: singerPath,
            img: imgPath,
            name: 'control-play',
            playlist: true
        })
    }
    stop = () => {
        if (this.state.playlist === true) {
            let videoPath = this.state.albums[p].audioPath
            let singerPath = this.state.albums[p].name
            let imgPath = this.state.albums[p].imagePath
            this.setState({ playlist: false, name: 'control-pause', music: videoPath, singer: singerPath, img: imgPath })
        } else {
            this.setState({ playlist: true, name: 'control-play' })
        }
    }
    next = () => {
        // alert(2)
        p++
        let videoPath = this.state.albums[p].audioPath
        let singerPath = this.state.albums[p].name
        let imgPath = this.state.albums[p].imagePath
        this.setState({
            music: videoPath,
            singer: singerPath,
            img: imgPath,
            name: 'control-play',
            playlist: true
        })
    }
    render() {
        return (
            <View style={styles.bottom}>
                <View style={styles.bottom_t}>
                    <Image style={{ width: 60, height: 60 }} source={{ uri: this.state.img }} />
                    <Text style={{ lineHeight: 55, marginRight: 15 }}>{this.state.singer}</Text>
                </View>
                <View style={{ marginTop: 15 }}>

                    <View style={{ flexDirection: "row", alignItems: "center" }}>

                        <Video source={{ uri: this.state.music }} paused={this.state.playlist}></Video>

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

            </View>



        )
    }
}
const styles = StyleSheet.create({
    container: { justifyContent: 'space-around' },
    top: { height: 800 },
    bottom: { height: 65, flexDirection: "row", backgroundColor: 'white' },
    bottom_t: { flexGrow: 1, flexDirection: "row", justifyContent: "space-around" },
    bf: { marginBottom: 10, marginRight: 15 }
})