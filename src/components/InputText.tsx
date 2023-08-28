import { GestureResponderEvent, Pressable, StyleSheet, TextInputProps, TextProps, TouchableOpacity } from 'react-native';
import { TextInput, View } from './Themed';
import Styles from '../constants/Styles';
import PoppinsText from './PoppinsText';


interface TextInputDataProps extends TextInputProps {
    label?: string;
    value?: string;
    onChageValue?: (value: string) => string;
}

export default function InputText(props: TextInputDataProps) {
    // const textStyles = [styles.textWhite, props.style];
    // if (props.bgColor == Styles.colors.yellow1 || props.bgColor == Styles.colors.yellow2) {
    //     textStyles.push(styles.textBlack);
    // } else if (props.bgColor == Styles.colors.blue1 || props.bgColor == Styles.colors.blue2 || props.bgColor == Styles.colors.blue3) {
    //     textStyles.push(styles.textWhite);
    // }

    // const onPressHandler = (event: GestureResponderEvent) => {
    //     props.onPress(event);
    // };

    return (
        <View style={[styles.inputContainer, props.style]}>
            {!!props.label &&
                <PoppinsText style={styles.inputLabel}>{props.label}</PoppinsText>}
            <TextInput
                keyboardType="default"
                value={props.value}
                onChangeText={(v: string) => props.onChageValue}
                style={styles.input}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        marginBottom: Styles.spacing.padding * 0.5,
        width: '100%',
        backgroundColor: Styles.colors.white
    },
    inputLabel: {
        color: Styles.colors.label,
        fontSize: 14,
        marginTop: 4,
        marginBottom: 4
    },
    input: {
        color: Styles.colors.inputtext,
        fontSize: 14,
        padding: Styles.spacing.padding * 0.8,
        borderWidth: 0.5,
        borderColor: Styles.colors.gray600,
        borderRadius: 10,
        borderStyle: 'solid',
        backgroundColor: Styles.colors.gray500,
        fontFamily: "OpenSans_Condensed-Medium",
    },

    textWhite: {
        color: Styles.colors.white
    },
    textBlack: {
        color: Styles.colors.black
    }
});
