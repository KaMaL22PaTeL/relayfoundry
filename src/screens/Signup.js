import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InputText from '../components/InputText';
import Styles from '../constants/Styles';
import Button from '../components/Button';
import Card from '../components/Card';

export default function Signup({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}></Text>
            <Card>
                <InputText
                    label="Email"
                    value={""}
                />
                <InputText
                    label="Phone no"
                    value={""}
                />
                <InputText
                    label="Password"
                    value={""}
                />
            </Card>
            <Button
                style={{ width: '90%' }}
                text="Sign Up"
                bgColor={Styles.colors.yellow2}
                onPress={() => navigation.navigate('Welcome')}
            />

            <Text style={{ marginTop: 10 }}>By signing up, you agree to RelayFoundry’s </Text>
            <View style={styles.bottomview}>
                <Text onPress={() => { navigation.navigate('TermsOfService') }} style={styles.textSignup}>Terms of Service</Text>
                <Text> and </Text>
                <Text onPress={() => { navigation.navigate('PrivacyPolicy') }} style={styles.textSignup}>Privacy Policy.</Text>
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
        marginTop: 2,
        alignItems: 'baseline'
    },
    textSignup: {
        color: Styles.colors.blue2,
        fontFamily: "Poppins-SemiBold"
    },
});