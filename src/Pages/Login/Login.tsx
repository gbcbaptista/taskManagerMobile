import { useState } from 'react';
import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export const Login = () => {
    const [isPasswordHidden, setIsPasswordHidden] = useState(true)
    return (
        <View style={styles.container}>

            <View style={styles.textContainer}>
                <Text style={styles.userText}>User</Text>
            </View>
            <TextInput style={styles.userInput}
                placeholder='Email Adress'
                cursorColor={'black'}
                selectionColor={'grey'}
                textContentType='emailAddress'
            />

            <View style={styles.textContainer}>
                <Text style={styles.passwordText}>Password</Text>
            </View>
            <View style={styles.passwordInputContainer}>
                <TextInput style={styles.passwordInput}
                    placeholder='Password'
                    cursorColor={'black'}
                    selectionColor={'grey'}
                    textContentType='password'
                    secureTextEntry={isPasswordHidden}
                />
                <Pressable
                    onPress={() => setIsPasswordHidden(!isPasswordHidden)}
                    style={[styles.hidePasswordIcon, { backgroundColor: isPasswordHidden ? 'black' : 'white' }]}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContainer: {
        width: 280,
        justifyContent: 'flex-start',
        marginBottom: 20,
    },
    userText: {
        fontSize: 20,
        lineHeight: 20,
        fontWeight: 'bold',
    },
    userInput: {
        backgroundColor: '#F9F9F9',
        borderRadius: 15,
        width: 300,
        height: 50,
        paddingLeft: 10,
        marginBottom: 30,
    },
    passwordText: {
        fontSize: 20,
        lineHeight: 20,
        fontWeight: 'bold',
    },
    passwordInputContainer: {
        backgroundColor: '#F9F9F9',
        borderRadius: 15,
        width: 300,
        height: 50,
        paddingLeft: 10,
        flexDirection: 'row'
    },
    passwordInput: {
        backgroundColor: '#F9F9F9',
        borderRadius: 15,
        width: 250,
        height: 50,
        paddingLeft: 10,
    },
    hidePasswordIcon: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: 'black',
        marginTop: 10,
        borderColor: 'black',
        borderWidth: 0.5,
    }
});