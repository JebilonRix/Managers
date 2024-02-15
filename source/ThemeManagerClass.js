import { Dimensions } from "react-native";

class ThemeManagerClass
{
    static instance = null;

    constructor()
    {
        // return instance which is generated.
        if (this._instance)
        {
            return this._instance;
        }

        this._instance = this; //Set the class
        this._currentThemeName = "light"; // Set the default theme name

        // Define the themes here. Note: names must be lower case.
        this._themes = new Map([
            ["light",
                [
                    { name: "background", value: "white" },
                    { name: "buttonbackground", value: "yellow" },
                    { name: "buttonborder", value: "black" },
                    { name: "buttontextcolor", value: "red" },
                ]],
            ["dark",
                [
                    { name: "background", value: "black" },
                    { name: "buttonbackground", value: "red" },
                    { name: "buttonborder", value: "black" },
                    { name: "buttontextcolor", value: "yellow" },
                ]],
        ]);

        let height = Dimensions.get("window").height;
        let width = Dimensions.get("window").width;

        // Define the size informations. Note: names must be lower case.
        this._sizes = [
            { name: "buttonborder", value: Math.round(height * 0.0012) },
            { name: "fontsize", value: Math.round(width * 0.025) },
            { name: "title", value: Math.round(width * 0.033) },
        ];
    }

    SetThemeName(themeName)
    {
        this._currentThemeName = themeName;
    }

    GetColorValue(value)
    {
        // Fix the value name
        let fixedValue = value.toLowerCase();

        // Gets the theme
        const theme = this._themes.get(this._currentThemeName) || this._themes.get("light");

        // Finds the value
        const property = theme.find(item => item.name === fixedValue) || {};

        return property.value || "";
    }

    GetSizeValue(value)
    {
        // Fix the value name
        let fixedValue = value.toLowerCase();

        // Finds the value
        const property = this._sizes.find(item => item.name === fixedValue) || {};

        return property.value || "";
    }
}

const ThemeManager = new ThemeManagerClass();
export default ThemeManager;
