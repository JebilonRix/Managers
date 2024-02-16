import { View, Text } from "react-native";
import React from "react";

import RPButton from "./componets/RPButton";
import ThemeManager from "./ThemeManagerClass";

export default function Page3({ navigation })
{
    function Test()
    {
        console.log("test");
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

        </View>
    );
}
