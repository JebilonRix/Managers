import { View } from 'react-native';
import React, { useState } from 'react';

// My components
import RPButton from './RPButton';
import ThemeManager from './ThemeManagerClass';

export default function Page1({ navigation })
{
    const [currentTheme, setCurrentTheme] = useState('light');

    function ChangeThemeDark()
    {
        console.log("dark");
        ThemeManager.SetThemeName('dark');
        setCurrentTheme('dark'); // Update current theme in state
    }

    function ChangeThemeLight()
    {
        ThemeManager.SetThemeName('light');
        setCurrentTheme('light'); // Update current theme in state
    }

    function ToOtherPage(number)
    {
        // console.log("🚀 ~ number:", number);

        if (number === 2)
        {
            navigation.navigate('Page2');
        }
        else if (number === 3)
        {
            navigation.navigate('Page3');
        }
    }

    return (
        <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            backgroundColor: ThemeManager.GetColorValue('background'),
        }}>
            <RPButton
                onPress={ChangeThemeDark}
                width={100}
                height={100}
                text="Change Theme Dark"
                textStyle={{
                    textAlign: 'center',
                    textAlignVertical: 'center',
                    fontWeight: 'bold',
                }}
                buttonStyle={
                    {
                        borderRadius: 15,
                    }
                }
            />
            <RPButton
                onPress={ChangeThemeLight}
                width={100}
                height={100}
                text="Change Theme Light"
                textStyle={{
                    textAlign: 'center',
                    textAlignVertical: 'center',
                    fontWeight: 'bold',
                }}
                buttonStyle={
                    {
                        borderRadius: 15,
                    }
                }
            />
            <RPButton
                onPress={() => ToOtherPage(2)}
                width={100}
                height={100}
                text="Page2"
                textStyle={{
                    textAlign: 'center',
                    textAlignVertical: 'center',
                    fontWeight: 'bold',
                }}
                buttonStyle={
                    {
                        borderRadius: 15,
                    }
                }
            />
            <RPButton
                onPress={() => ToOtherPage(3)}
                width={100}
                height={100}
                text="Page3"
                textStyle={{
                    textAlign: 'center',
                    textAlignVertical: 'center',
                    fontWeight: 'bold',
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
