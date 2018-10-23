import React, { Component } from 'react';
import {
    ImageBackground, StatusBar, StyleSheet, Text, TextInput, View,
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

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            cropList: cropData,
        };
    }

    filterCropList(text) {
        this.setState({
            cropList: cropData.filter(crop => crop.name.toLowerCase().indexOf(text.toLowerCase()) !== -1),
            text,
        });
    }

    render() {
        const { container, textbox } = style;
        const { text, cropList } = this.state;
        const { navigation: { navigate } } = this.props;

        return (
            <View style={container}>
                <StatusBar backgroundColor="#db1368" barStyle="light-content" />
                <TextInput
                    onChangeText={txt => this.filterCropList(txt)}
                    placeholder="🔍 Type something here to search"
                    returnKeyType="search"
                    style={textbox}
                    value={text}
                />

                <ReactNativeItemSelect
                    multiselect
                    countPerRow={2}
                    minSelectCount={3}
                    searchKey="name"
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
                    data={cropList}
                    itemComponent={MultiSelect.itemComponent}
                    onSubmit={item => navigate('Result', { selectedItem: item })}
                />
            </View>
        );
    }
}

export default MultiSelect;
