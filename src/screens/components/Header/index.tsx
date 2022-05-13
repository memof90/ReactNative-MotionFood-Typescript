//import liraries
import React, {useEffect, useRef} from 'react';
import { FlatList } from 'react-native';
import {
    useAnimatedStyle,
    useSharedValue,
    withDelay,
    withTiming,
  } from "react-native-reanimated";

  import * as S from "./styles";

  import ArrowLeft from "../../../assets/arrow-left.svg";
  import Heart from "../../../assets/heart.svg";

  import { pizzas } from "../../utils/pizzas";

//   TODO: INTEFACE
interface Props {
    index: number;
  }



// create a component
const Header = ( {index}: Props) => {

    const listRef = useRef<FlatList>(null);
    const opacity = useSharedValue(1);

    useEffect(() => {
        if (index !== 0) {
            opacity.value = withTiming(0.1);
          }

          setTimeout(() => {
            listRef.current?.scrollToIndex({ animated: true, index });
          }, 300);

          opacity.value = withDelay(600, withTiming(1));

    } , [index]);

    const textAniamtedStyle = useAnimatedStyle(() => ({
        opacity: opacity.value,
      }));

    return (
        <S.Header>
           <ArrowLeft />
        </S.Header>
    );
};

//make this component available to the app
export default Header;
