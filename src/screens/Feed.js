import React, { Component } from 'react'
import {
    StyleSheet,
    FlatList,
    View
} from 'react-native'
import Header from '../components/Header'
import Post from '../components/Post'

export default class Feed extends Component {

    state = {
        posts: [{
            id: Math.random(),
            nickname: 'Rafael Filho',
            email: 'rafael@email.com',
            imagePost: require('../../assets/img/papagaio.jpg'),
            comments: [{
                nickname: 'Jony Wall',
                comment: 'Show!'
            }, {
                nickname: 'Ana Julia',
                comment: 'Muito Bacana!'
            }]
        },
        {
            id: Math.random(),
            nickname: 'Gustavo tech',
            email: 'gustavo@email.com',
            imagePost: require('../../assets/img/turismo-rural-paraguai.jpg'),
            comments: [{
                nickname: 'João Wall',
                comment: 'Show!'
            }, {
                nickname: 'Maria Julia',
                comment: 'Muito Bacana mesmo!'
            }]
        }]
    }

    render() {
        return (
            <View tyle={styles.container}>
                <Header />
                <FlatList 
                    data={this.state.posts} 
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) => <Post key={item.id} {...item} /> }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
})