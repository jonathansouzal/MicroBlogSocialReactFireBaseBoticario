import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Image,
    Dimensions
} from 'react-native'
import Author from './Author'
import Comments from './Comments'
import AddComment from './AddComment'

export default function Post(props) {
    return (
        <View style={styles.container}>
            <Image source={props.imagePost} style={styles.image} />
            <Author email='teste@gmail.com' nickname='Fulano o autor' />
            <Comments comments={props.comments} />
            <AddComment />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * 3 / 4,
        resizeMode: 'contain'
    }
})