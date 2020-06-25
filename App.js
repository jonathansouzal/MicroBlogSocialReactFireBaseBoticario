import React, { Component } from 'react'
import Header from './src/components/Header'
import Post from './src/components/Post'
import { View } from 'react-native'

export default class App extends Component {
  render() {

    const comments = [
      {
        nickname: 'João Silva',
        comment: 'Excelente foto, parabéns!'
      }, {
        nickname: 'Carla Souza',
        comment: 'Podia ser melhor hein!'
      }
    ]

    return (
      <View style={{ flex: 1 }}>
        <Header />
        <Post 
          imagePost={require('./assets/img/turismo-rural-paraguai.jpg')} 
          comments={comments} />
      </View>
    )
  }
}
