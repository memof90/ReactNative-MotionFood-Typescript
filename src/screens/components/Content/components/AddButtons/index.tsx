//import liraries
import React, { useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import * as S from "./styles";

// Interface 
interface Props {
    index: number;
}

// create a component
const AddButtons = ({ index }: Props) => {

    const opacity = useSharedValue(0);

    const buttonAnimatedStyle = useAnimatedStyle(() => ({
        opacity: opacity.value,
      }));

      useEffect(() => {

          if (index === 0) {
            opacity.value = withTiming(0);
          } else {
              opacity.value = withTiming(1);
          }

      }, [index]);

    return (
        <>
        <S.AddButton style={buttonAnimatedStyle}>
            <Feather name="minus" size={25} />
        </S.AddButton>
        <S.RemoveButton style={buttonAnimatedStyle}>
            <Feather name="plus" size={25} />
        </S.RemoveButton>
        </>
    );
};


//make this component available to the app
export default AddButtons;

