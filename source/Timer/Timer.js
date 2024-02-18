import { View, Text, Button } from "react-native";
import React, { useEffect, useState, useRef } from "react";

//My components
import TimerClass from "./TimerClass";

export default function Timer({ targetTime, mode })
{
    const timerRef = useRef(new TimerClass());
    const [isActivateTimer, setIsActivateTimer] = useState(false);
    const [timerText, setTimerText] = useState("0:00");
    const [togglePause, setTogglePause] = useState(false);

    useEffect(() =>
    {
        let interval;

        if (isActivateTimer)
        {
            interval = setInterval(() =>
            {
                if (timerRef.current.GetState() === "finished")
                {
                    setIsActivateTimer(false);
                }

                timerRef.current.UpdateTimer(1000); //Update timer value
                setTimerText(FormatTime(timerRef.current.GetValueOfTimer()));

            }, 1000); // Update this every 1000 miliseconds
        }

        return () =>
        {
            clearInterval(interval);
        };
    }, [isActivateTimer]);

    function FormatTime(time)
    {
        time = time / 1000;
        const minutes = Math.floor(time / 60);
        const seconds = ((time % 60) < 10 ? "0" : "") + (time % 60);
        return `${minutes}:${seconds}`;
    }

    function StartTimer()
    {
        setTogglePause(false);
        setIsActivateTimer(true);
        timerRef.current.StartTimer(targetTime, mode);
    }

    function PauseTimer()
    {
        setTogglePause(!togglePause);
        setIsActivateTimer(togglePause);
        timerRef.current.PauseTimer(!togglePause);
    }

    function StopTimer()
    {
        setTogglePause(false);
        setIsActivateTimer(false);
        timerRef.current.StopTimer();
        setTimerText(FormatTime(timerRef.current.GetValueOfTimer()));
    }

    return (
        <View
            style={{
                width: "100%",
                borderWidth: 1,
                borderColor: "black",
                height: 250,
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Text style={{ fontSize: 20 }}>
                {timerText}
            </Text>

            <Button
                title="start"
                onPress={() => StartTimer()}
            />

            <Button
                title="stop"
                onPress={() => StopTimer()}
            />

            <Button
                title="pause"
                onPress={() => PauseTimer()}
            />
        </View>
    );
}
