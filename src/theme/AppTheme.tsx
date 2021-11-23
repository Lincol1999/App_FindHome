import { StyleSheet, useWindowDimensions } from "react-native";
import { ColorsTheme } from "../../assets/colors/colors";


export const styles = StyleSheet.create({

    Button: {
        width: 357,
        height: 55,
        marginHorizontal: 29,
        borderWidth: 1,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: ColorsTheme.colorPrimary,
        marginBottom: 10

    },

    Description: {
        color: ColorsTheme.colorDescription,
        fontFamily: 'Rubik-Light',
        fontSize: 20,
        textAlign: "center"
    },


    global: {
        flexDirection: "row",
        justifyContent: "center",
        top: 100
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"

    },

    homeTitle1: {
        fontSize: 20,
        fontFamily: 'Rubik-Regular',
        color: '#B2B2B2',
    },

    homeTitle2: {
        fontSize: 20,
        fontFamily: 'Rubik-Light',
        color: ColorsTheme.colorPrimary,
    },

    icon: {
        fontSize: 15,
        color: ColorsTheme.colorTitle
    },

    image: {
        width: 73,
        height: 73,
        bottom: -100
    },

    Input: {
        flex: 1,
    },

    InputContainer: {
        marginVertical: 20,
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        color: '#666666',
        borderColor: 'rgba(0,0,0,0.1)',
        borderRadius: 10,
    },

    InputEmail: {
        paddingLeft: 20,
        height: 46,
        width: 357,
        color: '#666666',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)',
    },

    Login: {
        fontFamily: 'Rubik-Medium',
        color: 'white'

    },

    searchIcon: {
        paddingLeft: 30,
        height: 15.57,


    },

    searchSection: {

        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#000',
        paddingBottom: 10,
        color: ColorsTheme.colorPrimary,
    },

    SubTitle: {
        color: ColorsTheme.colorPrimary,
        fontFamily: 'Rubik-Medium',
        fontSize: 40,
        textAlign: "center"
    },

    TextEmail: {
        fontSize: 14,
        fontFamily: 'Rubik-Regular',
        color: ColorsTheme.colorPrimary,
        marginBottom: 10

    },

    TextForgot: {
        fontSize: 14,
        fontFamily: 'Rubik-Light',
        color: 'rgba(0,0,0,0.6)',
        marginBottom: 10

    },

    TextPassword: {
        fontSize: 14,
        fontFamily: 'Rubik-Medium',
        color: ColorsTheme.colorPrimary,
        marginBottom: 10
    },

    title1: {
        fontSize: 40,
        fontFamily: 'Rubik-Bold',
        color: ColorsTheme.colorTitle,

    },

    title2: {
        fontSize: 40,
        fontFamily: 'Rubik-Light',
        color: ColorsTheme.colorSecundary
    },




});