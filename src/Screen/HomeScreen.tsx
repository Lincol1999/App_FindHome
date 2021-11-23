import React from 'react'

import { Text, View, Image, TextInput, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons.js'
import { ColorsTheme } from '../../assets/colors/colors';

import { styles } from '../theme/AppTheme';

export const HomeScreen = () => {
    return (
        <SafeAreaView>
            <View style={{ marginHorizontal: 28, marginVertical: 30, }}>
                {/* HEADER */}
                <View style={styles.header}>
                    <Image
                        style={{ width: 44, height: 44, borderRadius: 44 }}
                        source={require('../../assets/images/perfil.png')}
                    />
                    <View style={{ flexDirection: 'row' }}>

                        <Icon
                            style={styles.icon}
                            name='location-outline'
                        />
                        <Text> Los Angeles. CA</Text>
                        <Icon
                            style={styles.icon}
                            name='chevron-down-outline'
                        />
                    </View>
                    <Icon
                        style={styles.icon}
                        name='notifications-outline'
                    />
                    <Icon
                        style={styles.icon}
                        name='settings-outline'
                    />
                </View>

                {/* BODY */}
                <View style={{ marginVertical: 40 }}>

                    <Text style={styles.homeTitle1}>Hello Eddie!</Text>
                    <Text style={styles.homeTitle2}>Start looking for your house</Text>
                    <View style={styles.InputContainer}>

                        <Icon
                            style={{
                                ...styles.searchIcon,
                                color: ColorsTheme.ColorSearch,
                                marginRight: 8,

                            }}
                            name='search-outline'
                        />
                        <TextInput
                            placeholder='What are you looking for?'
                            style={styles.Input}
                            keyboardType='default'
                        ></TextInput>

                        <Icon
                            style={{
                                ...styles.searchIcon,
                                marginRight: 20,
                                color: ColorsTheme.colorTitle,
                            }}
                            name='options-outline'
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )


}


