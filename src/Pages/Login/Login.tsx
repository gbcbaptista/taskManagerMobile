import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

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
                    style={styles.hidePasswordIcon}
                >
                    {isPasswordHidden ? <Text style={styles.tetextHidePasswordIcontIconLogin}>🫣</Text> : <Text style={styles.tetextHidePasswordIcontIconLogin}>🫢</Text>}
                </Pressable>
            </View>
            <View>
                <Pressable style={styles.loginButton}>
                    <Text style={styles.textLogin}>Login</Text>
                </Pressable>
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
        paddingLeft: 20,
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
        paddingLeft: 20,
        flexDirection: 'row'
    },
    passwordInput: {
        backgroundColor: '#F9F9F9',
        width: 220,
        height: 50,
    },
    hidePasswordIcon: {
        width: 50,
        height: 50,
        backgroundColor: '#F9F9F9',
        alignItems: 'center',
        justifyContent: 'center'
    },
    tetextHidePasswordIcontIconLogin: {
        fontSize: 30,
    },
    loginButton: {
        backgroundColor: '#1F950D',
        width: 100,
        height: 50,
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
    },
    textLogin: {
        color: '#FFFFFF',
        fontSize: 20,
    }
});