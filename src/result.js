import React, { Component } from 'react';
import {
    Dimensions, ScrollView, StatusBar, Text, View,
} from 'react-native';

import style from './style';

const halfScreenSize = Dimensions.get('window').height / 1.5;

class Select extends Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        const {
            container, json, jsonContainer, jsonViewWrapper, jsonTitleTxt,
        } = style;
        const { navigation: { state: { params: { selectedItem } } } } = this.props;

        return (
            <View style={[container, jsonViewWrapper]}>
                <StatusBar backgroundColor="#def2f9" barStyle="dark-content" />
                <Text style={jsonTitleTxt}>You have selected:</Text>

                <View style={[jsonContainer, { maxHeight: halfScreenSize }]}>
                    <ScrollView>
                        <ScrollView
                            directionalLockEnabled={false}
                            horizontal
                        >
                            <Text style={json}>
                                {JSON.stringify(selectedItem, null, 2)}
                            </Text>
                        </ScrollView>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

export default Select;
