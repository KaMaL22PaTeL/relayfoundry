import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Styles from '../constants/Styles';
import Button from '../components/Button';
import Card from '../components/Card';
import { TextInput } from '../components/Themed';
import InputText from '../components/InputText';

export default function RelaysInfo({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Your Relays</Text>


            {/* <Button
                style={{ width: '90%' }}
                text="Create Relay"
                bgColor={Styles.colors.yellow2}
                onPress={() => navigation.navigate('AccountSetup')}
            /> */}






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

    heading: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 13,
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        paddingVertical: 45,
        paddingHorizontal: 25,
        width: '100%',
        marginVertical: 10,
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    elevation: {
        elevation: 20,
        shadowColor: '#52006A',
    },


});