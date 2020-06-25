import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Platform,
    Image
} from 'react-native'
import logo from '../../assets/img/logobcactus.png'

export default function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.rowContainer}>
                <Image source={logo} style={styles.logo} />
                <Text style={styles.title}>CactosSocialBlog</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 20 : 10,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#0C4700'
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        height: 30,
        width: 30,
        resizeMode: 'contain',
        padding: 4
    },
    title: {
        color: '#0D4A4D',
        fontFamily: Platform.OS === 'ios' ? 'Josefin Sans' : 'JosefinSans-Regular',
        fontSize: 24,
        padding: 10
    }
})