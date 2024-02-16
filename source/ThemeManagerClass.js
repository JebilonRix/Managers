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
                    { name: "listbackground", value: "white" },
                    { name: "listborder", value: "black" },
                    { name: "listfontcolor", value: "blue" },
                    { name: "listheaderfontcolor", value: "black" },
                ]],
            ["dark",
                [
                    { name: "background", value: "black" },
                    { name: "buttonbackground", value: "red" },
                    { name: "buttonborder", value: "black" },
                    { name: "buttontextcolor", value: "yellow" },
                    { name: "listbackground", value: "white" },
                    { name: "listborder", value: "black" },
                    { name: "listfontcolor", value: "blue" },
                    { name: "listheaderfontcolor", value: "black" },
                ]],
        ]);

        let height = Dimensions.get("window").height;
        let width = Dimensions.get("window").width;

        let value1 = Math.round(height * 0.0012);
        let value2 = Math.round(width * 0.025);
        let value3 = Math.round(width * 0.033);

        // Define the size informations. Note: names must be lower case.
        this._sizes = [
            { name: "buttonborder", value: value1 },
            { name: "fontsize", value: value2 },
            { name: "listborder", value: value1 },
            { name: "listheader", value: value3 },
            { name: "listfontsize", value: value2 },
            { name: "title", value: value3 },
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
