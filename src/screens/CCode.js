import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InputText from '../components/InputText';
import Styles from '../constants/Styles';
import Button from '../components/Button';
import { TextInput } from '../components/Themed';

export default function CCode({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Enter Confirmation Code</Text>
            <Text style={[{ width: '100%', fontSize: 14, marginTop: 10, marginBottom: 20 }]}>Enter the 4 digits code that we have sent through your e-mail.</Text>

            <View style={{ flexDirection: 'row', alignContent: 'space-between' }}>
                <TextInput
                    keyboardType="default"
                    // value={props.value}
                    // onChangeText={(v: string) => props.onChageValue}
                    style={{
                        color: Styles.colors.inputtext,
                        fontSize: 14,
                        padding: Styles.spacing.padding * 0.8,
                        // margin: Styles.spacing.margin * 0.8,
                        borderWidth: 0.5,
                        borderColor: Styles.colors.gray600,
                        borderRadius: 10,
                        borderStyle: 'solid',
                        backgroundColor: Styles.colors.gray500,
                    }}
                />
                <TextInput
                    keyboardType="default"
                    // value={props.value}
                    // onChangeText={(v: string) => props.onChageValue}
                    style={{
                        color: Styles.colors.inputtext,
                        fontSize: 14,
                        padding: Styles.spacing.padding * 0.8,
                        // margin: Styles.spacing.margin * 0.8,
                        borderWidth: 0.5,
                        borderColor: Styles.colors.gray600,
                        borderRadius: 10,
                        borderStyle: 'solid',
                        backgroundColor: Styles.colors.gray500,
                    }}
                />
                <TextInput
                    keyboardType="default"
                    // value={props.value}
                    // onChangeText={(v: string) => props.onChageValue}
                    style={{
                        color: Styles.colors.inputtext,
                        fontSize: 14,
                        padding: Styles.spacing.padding * 0.8,
                        // margin: Styles.spacing.margin * 0.8,
                        borderWidth: 0.5,
                        borderColor: Styles.colors.gray600,
                        borderRadius: 10,
                        borderStyle: 'solid',
                        backgroundColor: Styles.colors.gray500,
                    }}
                />
                <TextInput
                    keyboardType="numeric"

                    // value={props.value}
                    // onChangeText={(v: string) => props.onChageValue}
                    style={{
                        color: Styles.colors.inputtext,
                        fontSize: 18,
                        padding: Styles.spacing.padding * 0.8,
                        width: Styles.spacing.padding * 2.4,
                        marginStart: 6,
                        borderWidth: 0.5,
                        borderColor: Styles.colors.gray600,
                        borderRadius: 10,
                        borderStyle: 'solid',
                        backgroundColor: Styles.colors.gray500,
                    }}
                />
                {/* <InputText
                    value={""}
                /> */}
                {/* <InputText
                    value={""}
                />
                <InputText
                    value={""}
                />
                <InputText
                    value={""}
                /> */}
            </View>
            <Text style={{ color: Styles.colors.red500 }}>Confirmation Code invalid</Text>
            <Text>30 : 00</Text>

            <Button
                style={{ width: '90%' }}
                text="Confirm"
                bgColor={Styles.colors.yellow2}
                onPress={() => navigation.navigate('AccountSetup')}
            />
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

});