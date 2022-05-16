//import liraries
import React, {useState} from 'react';
import { useWindowDimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';


import * as S from './styles';

import Content from './components/Content';
import OptionSlider from './components/OptionSlider/index';
import Header from './components/Header/index';

import CartIcon from "../assets/cart.svg";

// create a component
const Main = () => {
    const { width } = useWindowDimensions();

    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <S.Container> 
            <StatusBar style="dark" />
            <Header index={currentIndex}/>
        </S.Container>
    );
};

//make this component available to the app
export default Main;
