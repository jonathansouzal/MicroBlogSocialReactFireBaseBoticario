
import React from 'react'
import { Provider } from 'react-redux'
import storeConfig from './src/store/storeConfig'
import { AppRegistry } from 'react-native'
import Navigation from './src/Navigation'
import { name as appName } from './app.json'

const store = storeConfig()
const Redux = () => (
    <Provider store={store}>
        <Navigation />
    </Provider>
)

AppRegistry.registerComponent(appName, () => Redux)
