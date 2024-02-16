import { useFocusEffect } from "@react-navigation/native";
import { View } from "react-native";
import React, { useState, useCallback } from "react";

// My components
import RPButton from "./componets/RPButton";
import ThemeManager from "./Frontend/ThemeManagerClass";

export default function Page3({ navigation })
{
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

    function ChangeTheme(themeName)
    {
        ThemeManager.SetThemeName(themeName);
        setCurrentTheme(themeName); // Update current theme in state
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
            <RPButton
                onPress={(() => ChangeTheme("dark"))}
                width={100}
                height={100}
                text="Change Theme Dark"
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
            <RPButton
                onPress={(() => ChangeTheme("light"))}
                width={100}
                height={100}
                text="Change Theme Light"
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
