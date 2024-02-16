import { FlatList, StyleSheet, Text } from "react-native";
import React from "react";

// My components
import ThemeManager from "../ThemeManagerClass";

export default function RPList({ data, emptyListText, headerListText, listTextStyle, listStyle })
{
    const styles = StyleSheet.create({
        color: ThemeManager.GetColorValue("listheaderfontcolor"),
        fontSize: ThemeManager.GetSizeValue("listheader"),
        fontWeight: "bold",
        textAlign: "center",
        textAlignVertical: "center",
    });

    function ListStyle()
    {
        // Generate style
        let style = StyleSheet.create({
            backgroundColor: ThemeManager.GetColorValue("listbackground"),
            borderColor: ThemeManager.GetColorValue("listborder"),
            borderWidth: ThemeManager.GetSizeValue("listborder"),
        });

        // Merging props and list style
        const mergedProps = {
            ...style,
            ...listStyle,
        };

        return mergedProps;
    }

    function DataCheck()
    {
        // Check is there any data
        if (data === undefined || data === null)
        {
            return;
        }

        // Use map to iterate over data array and modify each item
        const fixedData = data.map((item, index) =>
        {
            // Return a new object with modified id and value properties
            return {
                ...item,
                id: index,
                value: item.value
            };
        });

        return fixedData;
    }

    function RenderItem(item)
    {
        const styles = StyleSheet.create({
            color: ThemeManager.GetColorValue("listfontcolor"),
            fontSize: ThemeManager.GetSizeValue("listfontsize"),
            textAlign: "center",
            textAlignVertical: "center",
        });

        // Merging props and list style
        const mergedProps = {
            ...styles,
            ...listTextStyle,
        };

        console.log("🚀 ~ mergedProps:", mergedProps);

        return (
            <Text style={mergedProps} >
                {item.value}
            </Text>
        );
    }

    function HeaderAndEmptyTextHandler(text)
    {
        return (
            <Text style={styles}>
                {text}
            </Text>
        );
    }

    return (
        <FlatList
            data={DataCheck()}
            keyExtractor={(item) => item.id}
            ListEmptyComponent={HeaderAndEmptyTextHandler(emptyListText)}
            ListHeaderComponent={HeaderAndEmptyTextHandler(headerListText)}
            renderItem={({ item }) => (RenderItem(item))}
            style={ListStyle()}
        />
    );
}
