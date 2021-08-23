import React from "react";
import styles from "../styles/swstyles";
import { Text,  View, TouchableOpacity } from "react-native";
import react from "react";
import { useKeepAwake } from 'expo-keep-awake';

export default function stopwatch() {
  useKeepAwake();
  const [seconds, setSeconds] = react.useState(0);

  const timerRef = react.useRef();

  const start = React.useCallback(() => {
    timerRef.current = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
  }, []);

  const stop = React.useCallback(() => {
    clearInterval(timerRef.current);
  }, []);

  react.useEffect(() => {
    stop();

    return stop;
  }, [start, stop]);
  

  let minutes = Math.floor(seconds / 60);
  let remainingSeconds = seconds - minutes * 60;
const resetwatch = () =>{
  setSeconds(0);
  stop();
}
  return (
    <View style={styles.container}>
      <Text style={styles.abouttext}>Here you can keep record of how long you have been studying.</Text>
      <Text style={styles.time}>
        {minutes}min:{remainingSeconds}sec
      </Text>
      <TouchableOpacity onPressIn={() => start()} style={styles.button}>
        <Text style={styles.buttontext}>Start</Text>
      </TouchableOpacity>
      <TouchableOpacity onPressIn={() => stop()} style={styles.button}>
        <Text style={styles.buttontext}>Stop</Text>
      </TouchableOpacity>
      <TouchableOpacity onPressIn={() => resetwatch()} style={styles.button}>
        <Text style={styles.buttontext}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
}
