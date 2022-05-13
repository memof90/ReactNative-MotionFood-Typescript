//import liraries
import React, {useState} from 'react';
import { View, Text } from 'react-native';
import Header from './components/Header';
import Content from './components/Content';
import OptionSlider from './components/OptionSlider/index';

// create a component
const Main = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <View> 
            <Header index={currentIndex} />
            <Text>Hello World</Text>
        </View>
    );
};

//make this component available to the app
export default Main;
