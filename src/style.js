import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    btnTxt: {
        textAlign: 'center',
        padding: 10,
        fontSize: 18,
    },
    container: {
        flex: 1,
    },
    welcomeContainer: {
        backgroundColor: '#F5FCFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcomeBtnWrapper: {
        flexDirection: 'row',
    },
    btnOpacity: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexBasis: 150,
        borderRadius: 5,
    },
    welcomeTxt: {
        fontSize: 20,
        marginBottom: 25,
    },
    json: {
        fontFamily: 'monospace',
        padding: 20,
        fontSize: 15,
    },
    jsonTitleTxt: {
        fontSize: 30,
        marginBottom: 10,
    },
    jsonViewWrapper: {
        marginTop: 100,
        paddingHorizontal: 20,
    },
    jsonContainer: {
        marginBottom: 20,
        borderRadius: 15,
        backgroundColor: '#F5FCFF',
    },
});
