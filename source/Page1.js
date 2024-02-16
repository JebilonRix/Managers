import { useFocusEffect } from "@react-navigation/native";
import { View } from "react-native";
import React, { useState, useCallback } from "react";

// My components
import RPButton from "./componets/RPButton";
import ThemeManager from "./Frontend/ThemeManagerClass";
import LanguageManager from "./Frontend/LanguageManager";

export default function Page1({ navigation })
{
    const [currentTheme, setCurrentTheme] = useState("");
    const [currentLanguage, setCurrentLanguage] = useState("");

    useFocusEffect(useCallback(() =>
    {
        if (currentTheme !== ThemeManager.GetThemeName())
        {
            setCurrentTheme(ThemeManager.GetThemeName());
        }

        if (currentLanguage !== LanguageManager.GetLanguageName())
        {
            setCurrentLanguage(LanguageManager.GetLanguageName());
        }
    }, []));

    function ChangeTheme(themeName)
    {
        ThemeManager.SetThemeName(themeName);
        setCurrentTheme(themeName); // Update current theme in state
    }

    function ToPage(number)
    {
        if (number === 2)
        {
            navigation.navigate("Page2");
        }
        else if (number === 3)
        {
            navigation.navigate("Page3");
        }
    }

    function SetLanguage(languageName)
    {
        LanguageManager.SetLanguageName(languageName);
        setCurrentLanguage(languageName); // Update current theme in state
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
                onPress={(() => ChangeTheme("dark"))}
                width={100}
                height={100}
                text="Change Theme Dark"
                textStyle={{
                    textAlign: "center",
                    textAlignVertical: "center",
                    fontWeight: "bold",
                }}
                buttonStyle={{ borderRadius: 15, }}
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
            <RPButton
                onPress={(() => SetLanguage("english"))}
                width={100}
                height={100}
                text={LanguageManager.GetLanguageValue("hi")}
                textStyle={{
                    textAlign: "center",
                    textAlignVertical: "center",
                    fontWeight: "bold",
                }}
                buttonStyle={{ borderRadius: 15, }}
            />
            <RPButton
                onPress={(() => SetLanguage("turkish"))}
                width={100}
                height={100}
                text={LanguageManager.GetLanguageValue("hi")}
                textStyle={{
                    textAlign: "center",
                    textAlignVertical: "center",
                    fontWeight: "bold",
                }}
                buttonStyle={{ borderRadius: 15, }}
            />
            <RPButton
                onPress={() => ToPage(2)}
                width={100}
                height={100}
                text="Page2"
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
                onPress={() => ToPage(3)}
                width={100}
                height={100}
                text="Page3"
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
