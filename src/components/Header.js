import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Gravatar } from 'react-native-gravatar'
import {
    StyleSheet,
    Text,
    View,
    Platform,
    Image
} from 'react-native'
import logo from '../../assets/img/godzilla.png'

class Header extends Component {
    render() {
        const name = this.props.name || 'Anonymous'
        const gravatar = this.props.email ?
            <Gravatar options={{ email: this.props.email, secure: true }}
                style={styles.avatar} />
            : null
        return (
            <View style={styles.container}>
                <View style={styles.rowContainer}>
                    <Image source={logo} style={styles.image} />
                    <Text style={styles.title}>Bezilla Family</Text>
                </View>
                <View style={styles.userContainer}>
                    <Text style={styles.user}>{name}</Text>
                    {gravatar}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 20 : 10,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#0C4700',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
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
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    user: {
        fontSize: 10,
        color: '#888',
    },
    avatar: {
        width: 30,
        height: 30,
        marginLeft: 10
    }
})

const mapStateToProps = ({ user }) => {
    return {
        email: user.email,
        name: user.name,
    }
}

export default connect(mapStateToProps)(Header)