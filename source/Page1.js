import { useFocusEffect } from "@react-navigation/native";
import { View, Text, Button } from "react-native";
import React, { useState, useCallback, useEffect } from "react";

// My components
import ThemeManager from "./Frontend/ThemeManagerClass";
import LanguageManager from "./Frontend/LanguageManager";
import Timer from "./Timer/Timer";
import EventManager from "./manager/EventManager";

export default function Page1({ navigation })
{
    const [currentTheme, setCurrentTheme] = useState("");
    const [currentLanguage, setCurrentLanguage] = useState("");
    const [color, setColor] = useState("black");
    const [timerValue, setTimerValue] = useState(0);

    useEffect(() =>
    {
        function ChangeColor()
        {
            setColor("red");
        }

        EventManager.AddEvent("countdownFinished", ChangeColor);

        return () =>
        {
            EventManager.RemoveEvent("countdownFinished", ChangeColor);
        };
    }, []);

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

    function GetTimerValue(value)
    {
        setTimerValue(value);
    }

    function ButtonPress()
    {
        // Access the timer value here using the state variable or directly from the Timer component
        console.log("Timer value:", timerValue);
    }

    return (
        <View style={{
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            backgroundColor: ThemeManager.GetColorValue("background"),
        }}>

            <Text style={{ color: color, fontSize: 20 }} >
                Test
            </Text>

            <View style={{ height: 200, width: 300, marginTop: 10 }} >
                <Timer
                    targetTime={5}
                    mode={"timer"}
                    getTimerValue={GetTimerValue}
                />
            </View>

            <Button
                title="test"
                onPress={() => ButtonPress()}
            />

        </View>
    );
}
