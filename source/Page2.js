import { useFocusEffect } from "@react-navigation/native";
import { View } from "react-native";
import React, { useCallback, useState } from "react";

import RPButton from "./componets/RPButton";
import RPList from "./componets/RPList";
import ThemeManager from "./Frontend/ThemeManagerClass";

export default function Page2({ navigation })
{
    const items = [
        { value: "Hello" },
        { value: "Hello2" },
    ];

    const [currentTheme, setCurrentTheme] = useState("light");

    useFocusEffect(useCallback(() =>
    {
        if (currentTheme !== ThemeManager.GetThemeName())
        {
            setCurrentTheme(ThemeManager.GetThemeName());
        }
    }, []));

    function Test()
    {
        navigation.navigate("Page1");
    }

    return (
        <View style={{
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            backgroundColor: ThemeManager.GetColorValue("background"),
        }}>
            <RPButton
                onPress={Test}
                width={100}
                height={100}
                text="Test"
                textStyle={{
                    textAlign: "center",
                    textAlignVertical: "center",
                    fontWeight: "bold",
                }}
                buttonStyle={
                    {
                        borderRadius: 15,
                    }
                }
            />

            <RPList
                data={items}
                emptyListText={"Hello"}
                headerListText={"Header"}
                listStyle={{ width: 250 }}
            // listTextStyle={{
            //     fontWeight: "bold",
            //     textAlign: "left"
            // }}
            />
        </View>
    );
}
