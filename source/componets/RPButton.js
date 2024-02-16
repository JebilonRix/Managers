import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

// My components
import ThemeManager from "../Frontend/ThemeManagerClass";

export default function RPButton({ buttonStyle, height, onPress, text, textStyle, width })
{
    function ButtonProps()
    {
        let props = StyleSheet.create({
            backgroundColor: ThemeManager.GetColorValue("buttonbackground"),
            borderColor: ThemeManager.GetColorValue("buttonborder"),
            borderWidth: ThemeManager.GetSizeValue("buttonborder"),
            height: height || 50,
            width: width || 100,
        });

        // Merging props and buttonStyle
        const mergedProps = {
            ...props,
            ...buttonStyle,
        };

        return mergedProps;
    }

    function TextProps()
    {
        let props = StyleSheet.create({
            fontSize: ThemeManager.GetSizeValue("fontsize"),
            color: ThemeManager.GetColorValue("buttontextcolor"),
            height: "100%",
        });

        // Merging props and buttonStyle
        const mergedProps = {
            ...props,
            ...textStyle,
        };

        return mergedProps;
    }

    return (
        <TouchableOpacity
            onPress={onPress}
            style={ButtonProps()}
        >
            <Text style={TextProps()}>
                {text}
            </Text>
        </TouchableOpacity>
    );
}
