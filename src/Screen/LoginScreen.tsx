import React from 'react'

import { Image, Text, TextInput, TouchableOpacity, useWindowDimensions, View, } from 'react-native'
import { useNavigation } from '@react-navigation/core';
import { CommonActions } from '@react-navigation/native';

import { styles } from '../theme/AppTheme';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> { }

// export const LoginScreen = ({ navigation }: Props) => {
export const LoginScreen = () => {

    const { height } = useWindowDimensions();

    const navigator = useNavigation();


    return (
        <View>

            <View style={{ flex: 1, alignItems: 'center' }}>
                <Image
                    source={require('../../assets/images/Login/')}
                />
            </View>

            {/* HEADER */}


            <View style={{ alignItems: 'center', }}>
                <Image
                    style={styles.image}
                    source={require('../../assets/images/search.png')}
                />
            </View>
            <View style={{
                ...styles.global,
                height: height - 460,

            }}>
                <Text style={styles.title1}>Find</Text>
                <Text style={styles.title2}>Home</Text>
            </View>


            {/* BODY */}
            <View style={{
                marginBottom: 30
            }}>
                <Text style={styles.SubTitle}>Welcome</Text>
                <Text style={styles.Description}>Login for enjoy findhome</Text>
            </View>

            {/* TEXT-INPUT */}
            <View
                style={{ marginHorizontal: 29, marginBottom: 15 }}
            >
                <Text style={styles.TextEmail}>Email</Text>
                <TextInput
                    style={styles.InputEmail}
                    keyboardType='email-address'
                    placeholder='mauricio@divelement.io'
                ></TextInput>
            </View>

            <View
                style={{ marginHorizontal: 29, marginBottom: 15 }}
            >
                <Text style={styles.TextEmail}>Password</Text>
                <TextInput
                    style={{
                        ...styles.InputEmail,
                    }}
                    secureTextEntry
                    placeholder='Password...'
                ></TextInput>
            </View>

            {/* BUTTON */}
            <TouchableOpacity
                activeOpacity={0.6}
                style={styles.Button}
                onPress={() => {
                    // navigation.navigate('HomeScreen')
                    navigator.dispatch(
                        CommonActions.navigate({ name: 'HomeScreen' })
                    )
                }}

            >
                <Text style={styles.Login}>LOGIN</Text>

            </TouchableOpacity>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <Text style={styles.TextForgot}>Forgot password?</Text>
                <Text style={styles.TextPassword}>create new account</Text>
            </View>
        </View >
    )
}
