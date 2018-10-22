import React, { Component } from 'react';
import {
    ImageBackground, StatusBar, StyleSheet, Text, View,
} from 'react-native';
import ReactNativeItemSelect from 'react-native-item-select';

import style from './style';
import { cropData } from './data';

class MultiSelect extends Component {
    static navigationOptions = {
        title: 'Select Your Crops',
        headerTitleStyle: {
            color: 'white',
            flex: 1,
            fontSize: 25,
            textAlign: 'center',
        },
        headerStyle: {
            backgroundColor: '#ee3e82',
        },
        headerLeft: null,
    };


    static itemComponent(item, isSelected) {
        return (
            <ImageBackground
                style={{
                    justifyContent: 'flex-end',
                    width: 160,
                    height: 160,
                }}
                source={item.uri}
            >
                <View style={{
                    flexShrink: 1, backgroundColor: 'rgba(255,255,255, 0.7)',
                }}
                >
                    <Text style={{
                        textAlign: 'center', fontSize: 20, color: 'black',
                    }}
                    >
                        {item.name}
                    </Text>
                </View>

                {isSelected ? (
                    <View
                        style={{
                            ...StyleSheet.absoluteFillObject,
                            backgroundColor: 'rgba(248, 227, 245, 0.6)',
                        }}
                    />
                ) : null}
            </ImageBackground>
        );
    }

    render() {
        const { container } = style;
        const { navigation: { navigate } } = this.props;

        return (
            <View style={container}>
                <StatusBar backgroundColor="#db1368" barStyle="light-content" />

                <ReactNativeItemSelect
                    multiselect
                    countPerRow={2}
                    minSelectCount={3}
                    floatSubmitBtn
                    styles={{
                        rowWrapper: { justifyContent: 'space-around', marginTop: 20, marginHorizontal: 10 },
                        itemComponentWrapper: { flexDirection: 'row', flexShrink: 1, padding: 5 },
                        itemBoxHighlight: {
                            flex: 0, marginBottom: 0, margin: 0, borderRadius: 5,
                        },
                        activeItemBoxHighlight: { backgroundColor: 'rgba(248, 227, 245, 0.6)', borderColor: '#c51a11' },
                        btn: { backgroundColor: '#ed156b' },
                        tickTxt: { backgroundColor: '#c51a11' },
                    }}
                    lastRowMargin={65}
                    data={cropData}
                    itemComponent={MultiSelect.itemComponent}
                    onSubmit={item => navigate('Result', { selectedItem: item })}
                />
            </View>
        );
    }
}

export default MultiSelect;
