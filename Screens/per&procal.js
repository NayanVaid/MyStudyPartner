import React from "react";
import styles from "../styles/ppcstyles";
import { ScrollView, Text, TextInput } from "react-native";
import react from "react";

export default function ppc() {
  const [subject1, setSubject1] = react.useState(0);
  const [subject2, setSubject2] = react.useState(0);
  const [subject3, setSubject3] = react.useState(0);
  const [subject4, setSubject4] = react.useState(0);
  const [subject5, setSubject5] = react.useState(0);
  const [subject6, setSubject6] = react.useState(0);
  const [noofchapterdone, setnoofchapterdone] = react.useState(0);
  const [noofchaptertotaldone, setnooftotalchapterdone] = react.useState(0)

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.abouttext}>
        Here, you can calculate an estimate of your percentage and calculate the
        percent the of chapter that you have learned till now.(The maximum marks
        is 100 for each subject)
      </Text>
      <Text style={styles.subjectname}>Subject 1</Text>
      <TextInput
        keyboardType={"decimal-pad"}
        placeholder="Add Subject Marks"
        onChangeText={(val1) => setSubject1(val1)}
        style={styles.marksinput}
      />
      <Text style={styles.subjectname}>Subject 2</Text>
      <TextInput
        keyboardType={"decimal-pad"}
        placeholder="Add Subject Marks"
        onChangeText={(val2) => setSubject2(val2)}
        style={styles.marksinput}
      />
      <Text style={styles.subjectname}>Subject 3</Text>
      <TextInput
        keyboardType={"decimal-pad"}
        placeholder="Add Subject Marks"
        onChangeText={(val3) => setSubject3(val3)}
        style={styles.marksinput}
      />
      <Text style={styles.subjectname}>Subject 4</Text>
      <TextInput
        keyboardType={"decimal-pad"}
        placeholder="Add Subject Marks"
        onChangeText={(val4) => setSubject4(val4)}
        style={styles.marksinput}
      />
      <Text style={styles.subjectname}>Subject 5</Text>
      <TextInput
        keyboardType={"decimal-pad"}
        placeholder="Add Subject Marks"
        onChangeText={(val5) => setSubject5(val5)}
        style={styles.marksinput}
      />
      <Text style={styles.subjectname}>Subject 6</Text>
      <TextInput
        keyboardType={"decimal-pad"}
        placeholder="Add Subject Marks"
        onChangeText={(val6) => setSubject6(val6)}
        style={styles.marksinput}
      />
      <Text style={styles.smallinfo}>
        Your estimate percentage is 
         {calculatepercentage(
          subject1,
          subject2,
          subject3,
          subject4,
          subject5,
          subject6
        )}
      </Text>
      
      <Text style={styles.abouttext}>Progress Calculator</Text>
      <Text style={styles.infotext}>Number of chapters done</Text>
      <TextInput
        keyboardType={"decimal-pad"}
        placeholder="Number of Chapters done"
        onChangeText={(val7) => setnoofchapterdone(val7)}
        style={styles.infoinput}
      />
      <Text style={styles.infotext}>Number of chapters in syllabus</Text>
      <TextInput
        keyboardType={"decimal-pad"}
        placeholder="Number of Chapters"
        onChangeText={(val8) => setnooftotalchapterdone(val8)}
        style={styles.infoinput}
      />
       <Text style={styles.smallinfo}>
        Your estimated work done is {calculatework(noofchapterdone, noofchaptertotaldone)}</Text>
    </ScrollView>
  );
  function calculatepercentage(
    subject1,
    subject2,
    subject3,
    subject4,
    subject5,
    subject6
  ) {
    let totalmarks = parseFloat(subject1) +
    parseFloat(subject2) +
    parseFloat(subject3) +
    parseFloat(subject4) +
    parseFloat(subject5) +
    parseFloat(subject6)
    let result =  totalmarks / 600*100

    return <Text> {result}%</Text>
        
  }
  function calculatework(noofchapterdone, noofchaptertotaldone){
        let result = parseFloat(noofchapterdone)/ parseFloat(noofchaptertotaldone)*100
        return(
          <Text> {result}%</Text>
        )
  }
}
