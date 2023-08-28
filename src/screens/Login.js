import * as React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import InputText from '../components/InputText';
import Styles from '../constants/Styles';
import Button from '../components/Button';
import Card from '../components/Card';

export default function Login({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Log in</Text>
            <Image source={require('../assets/login.png')} style={styles.avatar} />
            <Card>
                <InputText
                    label="Email"
                    value={""}
                />
                <InputText
                    label="Password"
                    value={""}
                />
            </Card>
            <Button
                style={{ width: '80%' }}
                text="Log in"
                bgColor={Styles.colors.yellow2}
                onPress={() => navigation.navigate('CCode')}
            />
            <Text style={styles.textForgetpassword}>Forgot Password?</Text>
            <View style={styles.bottomview}>
                <Text>Don’t have account? </Text>
                <Text onPress={() => { navigation.navigate('Signup') }} style={styles.textSignup}>Sign Up Now.</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: Styles.colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
        alignItems: 'center',
        alignContent: 'center'
    },
    headerText: {
        width: '100%',
        fontSize: 30,
        fontFamily: "Poppins-Bold"
    },
    avatar: {
        width: 220,
        height: 220,
    },
    inputview: {
        width: '100%',
        backgroundColor: 'white',
        padding: 20
    },
    textForgetpassword: {
        marginTop: 10,
        fontFamily: "Poppins-SemiBold"
    },
    bottomview: {
        flexDirection: "row",
        marginTop: 4,
        alignItems: 'baseline'
    },
    textSignup: {
        color: Styles.colors.blue2,
        fontFamily: "Poppins-SemiBold"
    },
});