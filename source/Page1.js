import { useFocusEffect } from "@react-navigation/native";
import { Button, View } from "react-native";
import React, { useState, useCallback } from "react";

// My components
import ThemeManager from "./Frontend/ThemeManagerClass";
import LanguageManager from "./Frontend/LanguageManager";
import Timer from "./Timer/Timer";

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

    return (
        <View style={{
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            backgroundColor: ThemeManager.GetColorValue("background"),
        }}>

            <View style={{ height: 200, width: 300, marginTop: 10 }} >
                <Timer />
            </View>

        </View>
    );
}
