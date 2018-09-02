import React, { Component } from 'react';
import {
    StatusBar, Text, TouchableOpacity, View,
} from 'react-native';
import { createStackNavigator } from 'react-navigation';

import style from './style';
import Select from './select';
import MultiSelect from './multiselect';
import Result from './result';

class App extends Component {
    static navigationOptions = {
        header: null,
    };

    navigate(page) {
        const { navigation: { navigate } } = this.props;
        navigate(page);
    }

    render() {
        const {
            btnTxt, container, welcomeContainer, welcomeBtnWrapper, btnOpacity, welcomeTxt,
        } = style;

        return (
            <View style={[container, welcomeContainer]}>
                <StatusBar backgroundColor="#def2f9" barStyle="dark-content" />

                <Text style={welcomeTxt}>
                    Welcome to ReactNativeItemSelect demo!!! 😇
                </Text>

                <View style={welcomeBtnWrapper}>
                    <TouchableOpacity
                        onPress={() => { this.navigate('Select'); }}
                        style={[btnOpacity, { backgroundColor: '#11c574', marginRight: 20 }]}
                    >
                        <Text style={btnTxt}>Default</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => { this.navigate('MultiSelect'); }}
                        style={[btnOpacity, { backgroundColor: '#f48fb6' }]}
                    >
                        <Text style={btnTxt}>Customized</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default createStackNavigator(
    {
        App,
        Select,
        MultiSelect,
        Result,
    },
);
