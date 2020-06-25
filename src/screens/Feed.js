import React, { Component } from 'react'
import {
    StyleSheet,
    FlatList,
    View
} from 'react-native'
import Header from '../components/Header'
import Post from '../components/Post'

export default class AddComment extends Component {

    state = {
        posts: [{
            id: Math.random(),
            nickname: 'Rafael Filho',
            email: 'rafael@email.com',
            image: require('../../assets/img/papagaio.jpg'),
            comments: [{
                nickname: 'Jony Wall',
                comment: 'Show!'
            }, {
                nickname: 'Ana Julia',
                comment: 'Muito Bacana!'
            }]
        }]
    }

}