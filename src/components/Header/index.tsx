import React from "react";
import { View, Image } from "react-native";
import { styles } from "./styles";

import FilMax from "../../assets/images/logo/FilMAX.png";

export const Header = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={FilMax} />
        </View>
    );
};
