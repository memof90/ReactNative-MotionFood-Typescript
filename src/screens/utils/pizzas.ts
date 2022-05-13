import { ImageSourcePropType } from "react-native";

interface PriceProps {
    [key: string]: number;
}

interface PizzaProps {
    name: string;
    description: string;
    prices: PriceProps;
    image: ImageSourcePropType;
}

export const pizzas: Array<PizzaProps> = [
    {
        name: "Pizza",
        description: "Pick your favorite",
        prices: {
            small: 0,
            medium: 0,
            large: 0,
        },
        image: require("../../../assets/empty.png"),
    },
    {
        name: "Italian",
        description: "Tomato sauce, & mozzarella",
        prices: {
            small: 5.5,
            medium: 7.5,
            large: 9.5,
        },
        image: require("../../../assets/itallian-pizza.png"),
    },
    {
        name: "Veggie",
        description: "Fresh vegetables, & cheese",
        prices: {
            small: 6,
            medium: 8,
            large: 10,
        },
        image: require("../../../assets/veggie-pizza.png"),
    },
    {
        name: "Greek",
        description: "Spicy pizza with feta cheese",
        prices: {
            small: 7.5,
            medium: 9.5,
            large: 11.5,
        },
        image: require("../../../assets/greek-pizza.png"),
    },
];