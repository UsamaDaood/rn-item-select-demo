import React, { Component } from 'react';
import { StatusBar, Text, View } from 'react-native';
import ReactNativeItemSelect from 'react-native-item-select';

import { languageData } from './data';
import style from './style';

class Select extends Component {
    static navigationOptions = {
        title: 'Choose Your Language',
        headerTitleStyle: {
            color: 'white',
            fontFamily: 'notoserif',
            flex: 1,
            fontSize: 25,
            textAlign: 'center',
        },
        headerStyle: {
            backgroundColor: '#33a444',
        },
        headerLeft: null,
    };

    render() {
        const { navigation: { navigate } } = this.props;
        const { container } = style;
        const textStyle = {
            textAlign: 'center', color: '#696969', fontWeight: 'bold', fontSize: 25,
        };
        const viewWrapper = { padding: 10 };

        return (
            <View style={container}>
                <StatusBar backgroundColor="#3cb34d" barStyle="light-content" />

                <ReactNativeItemSelect
                    data={languageData}
                    itemComponent={
                        item => (
                            <View style={viewWrapper}>
                                <Text style={{ ...textStyle, fontSize: 45 }}>{item.firstLetter}</Text>
                                <Text style={textStyle}>{item.displayName}</Text>
                            </View>
                        )
                    }
                    onSubmit={item => navigate('Result', { selectedItem: item })}
                />
            </View>
        );
    }
}

export default Select;
