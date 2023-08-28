import * as React from 'react';
import { View, Alert, ImageBackground, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Styles from '../constants/Styles';
import AlphaTestIntro from '../components/AlphaTestIntro';
import PoppinsText from '../components/PoppinsText';
import { Text, TextInput } from '../components/Themed';
import Button from '../components/Button';
import InputText from '../components/InputText';

export default function Welcome({ navigation }) {

    const image = {
        uri:
            // '../assets/welcome.jpg'
            'https://legacy.reactjs.org/logo-og.png'
    };

    const [editableUsername, onChangeUsername] = React.useState('kp');

    return (
        <View style={styles.container}>
            {/* <ImageBackground
                source={image} resizeMode="cover"
                style={styles.imageContainer}
                imageStyle={styles.image}
            > */}

            <Image source={require('../assets/appicon.png')} style={styles.avatar} />

            <View>
                <PoppinsText bold={true} style={styles.title}>
                    Welcome !
                </PoppinsText>
                <PoppinsText regular={true} style={[styles.text]}>
                    Empower your community with decentralized solutions for Nostr Relays, Bitcoin, AI tools, and expert consulting.
                </PoppinsText>
            </View>

            <Button
                bgColor={Styles.colors.yellow2}
                text='Log in'
                onPress={() => {
                    navigation.navigate('Login')
                    // console.log("aaa :: ", editableUsername)
                }} />

            <Button bgColor={Styles.colors.blue1} text='Sign up' onPress={() => { navigation.navigate('Signup') }} />

            {/* </ImageBackground> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
        alignItems: 'center',
        alignContent: 'center'
    },
    imageContainer: {
        flex: 1,
        backgroundColor: 'blue'
    },
    image: {
        flex: 1,
        width: '100%',
        resizeMode: 'cover',
    },
    avatar: {
        width: 120,
        height: 120,
    },
    title: {
        color: Styles.colors.gray500,
        fontSize: 27,
        // lineHeight: 32,
        marginBottom: Styles.spacing.padding,
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    text: {
        color: Styles.colors.white,
        fontSize: 14,
        // lineHeight: 23.46,
        textAlign: 'center',
        fontFamily: "Poppins-SemiBold",
        marginBottom: 50
    },
    inputContainer: {
        marginBottom: Styles.spacing.padding * 2
    },
    inputLabel: {
        color: Styles.colors.green600
    },
    input: {
        color: Styles.colors.white,
        fontSize: 18,
        paddingVertical: Styles.spacing.padding * 0.25,
        borderBottomWidth: 1,
        borderColor: Styles.colors.white,
        borderStyle: 'solid'
    },
});