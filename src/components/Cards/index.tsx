import React from "react";
import { Text, View, Image, ScrollView } from "react-native";
import { styles } from "./styles";


import card1 from "../../assets/images/cards/card1.png";

export const Cards = () => {

    const data = [
        {
            id: 1,
            image: card1,
            title: 'Soul',
            year: '(2020)',
        }
    ]

    return (
 
            <View style={styles.container}> 
            </View>
    );
};
