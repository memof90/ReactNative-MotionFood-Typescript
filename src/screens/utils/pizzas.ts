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
            s: 0,
            m: 0,
            l: 0,
        },
        image: require("../../assets/empty.png"),
    },
    {
        name: "Italian",
        description: "Tomato sauce, & mozzarella",
        prices: {
            s: 5.5,
            m: 7.5,
            l: 9.5,
        },
        image: require("../../assets/itallian-pizza.png"),
    },
    {
        name: "Veggie",
        description: "Fresh vegetables, & cheese",
        prices: {
            s: 6,
            m: 8,
            l: 10,
        },
        image: require("../../assets/veggie-pizza.png"),
    },
    {
        name: "Greek",
        description: "Spicy pizza with feta cheese",
        prices: {
            s: 7.5,
            m: 9.5,
            l: 11.5,
        },
        image: require("../../assets/greek-pizza.png"),
    },
];