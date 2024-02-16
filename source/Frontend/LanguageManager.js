class LanguageManagerClass
{
    static _instance = null;

    constructor()
    {
        if (LanguageManagerClass._instance)
        {
            return LanguageManagerClass._instance;
        }

        LanguageManagerClass._instance = this; // Initialize the instance
        this._currentLanguageName = "turkish"; // Set the default language name

        // Define the language here. Note: names must be lower case.
        this._languages = new Map([
            ["turkish",
                [
                    { name: "hi", value: "selam" },
                    { name: "yes", value: "evet" },
                ]],
            ["english",
                [
                    { name: "hi", value: "hi" },
                    { name: "yes", value: "yes" },
                ]],
        ]);
    }

    GetLanguageName()
    {
        return this._currentLanguageName;
    }

    SetLanguageName(languageName)
    {
        this._currentLanguageName = languageName;
    }

    GetLanguageValue(value)
    {
        // Fix the value name
        let fixedValue = value.toLowerCase();

        // Gets the language
        const language = this._languages.get(this._currentLanguageName) || this._languages.get("turkish");

        // Finds the value
        const property = language.find(item => item.name === fixedValue) || {};

        return property.value || "";
    }
}

const LanguageManager = new LanguageManagerClass();
export default LanguageManager;