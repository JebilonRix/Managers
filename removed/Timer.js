// import React, { useState, useEffect, useRef } from "react";
// import { View, Text } from "react-native";

// const Timer = ({ seconds, countType, isActive, resetTimer }) =>
// {
//     console.log("🚀 ~ targetSeconds:", seconds);
//     console.log("🚀 ~ countType:", countType);
//     console.log("🚀 ~ isActive:", isActive);

//     const [currentSeconds, setCurrentSeconds] = useState(seconds);
//     const [initialSeconds, setInitialSeconds] = useState(seconds);
//     const intervalRef = useRef(null);

//     useEffect(() =>
//     {
//         setInitialSeconds(seconds);
//         setCurrentSeconds(seconds);

//         if (countType === "countdown")
//         {
//             setCurrentSeconds(seconds);
//         }
//     }, [seconds]);

//     useEffect(() =>
//     {
//         if (isActive)
//         {
//             intervalRef.current = setInterval(() =>
//             {
//                 setCurrentSeconds((prevTime) =>
//                 {
//                     if (countType === "countdown")
//                     {
//                         if (prevTime <= 0)
//                         {
//                             clearInterval(intervalRef.current);
//                             return 0;
//                         }
//                         else
//                         {
//                             return prevTime - 1000;
//                         }
//                     }
//                     else
//                     {
//                         if (prevTime >= initialSeconds)
//                         {
//                             clearInterval(intervalRef.current);
//                             return 0;
//                         }
//                         else
//                         {
//                             return prevTime + 1000;
//                         }
//                     }
//                 });
//             }, 1000);
//         }
//         else
//         {
//             clearInterval(intervalRef.current);
//         }

//         return () => clearInterval(intervalRef.current);
//     }, [isActive, countType, initialSeconds]);

//     useEffect(() =>
//     {
//         if (resetTimer)
//         {
//             setCurrentSeconds(initialSeconds);
//             clearInterval(intervalRef.current);
//         }
//     }, [resetTimer, initialSeconds]);

//     const FormatTime = (time) =>
//     {
//         const minutes = Math.floor(time / 60);
//         const seconds = ((time % 60) < 10 ? "0" : "") + (time % 60);
//         return `${minutes}:${seconds}`;
//     };

//     return (
//         <View style={{
//             borderWidth: 1,
//             borderColor: "black",
//             width: "100%",
//             height: 300,
//             alignItems: "center",
//             justifyContent: "center",
//         }}>
//             <Text style={{ fontSize: 20 }}>
//                 Timer: {FormatTime(currentSeconds)}
//             </Text>

//             <Text style={{ fontSize: 20 }}>
//                 {isActive ? "Active" : "Paused"}
//             </Text>
//         </View>
//     );
// };

// export default Timer;
