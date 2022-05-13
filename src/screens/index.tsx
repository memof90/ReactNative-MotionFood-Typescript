//import liraries
import React from 'react';
import { View, Text } from 'react-native';
import Header from './components/Header';
import Content from './components/Content';
import OptionSlider from './components/OptionSlider/index';

// create a component
const Main = () => {
    return (
        <View>
            <Header />
            <Content />
            <OptionSlider />
        </View>
    );
};

//make this component available to the app
export default Main;
