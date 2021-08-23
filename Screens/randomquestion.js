import React from "react";
import styles from "../styles/rqstyles";
import {
  Button,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function randomquestions() {
  const [ques1, setques1] = React.useState("");
  const [ques2, setques2] = React.useState("");
  const [ques3, setques3] = React.useState("");
  const [ques4, setques4] = React.useState("");
  const [ques5, setques5] = React.useState("");
  const [ques6, setques6] = React.useState("");
  const [ques7, setques7] = React.useState("");
  const [ques8, setques8] = React.useState("");
  const [ques9, setques9] = React.useState("");
  const [ques10, setques10] = React.useState("");
  const [ques11, setques11] = React.useState("");
  const [ques12, setques12] = React.useState("");
  const [ques13, setques13] = React.useState("");
  const [ques14, setques14] = React.useState("");
  const [ques15, setques15] = React.useState("");
  const [random, setrandom] = React.useState("");
  let ques = random;
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.abouttext}>
        Here, you can add up to 15 questions, generate random questions from
        that and solve for practice.
      </Text>
      <Text style={styles.questext}>Enter question no. 1:</Text>
      <TextInput
        style={styles.quesinput}
        placeholder="Question no.1"
        onChangeText={(val1) => setques1(val1)}
      />
      <Text style={styles.questext}>Enter question no. 2:</Text>
      <TextInput
        style={styles.quesinput}
        placeholder="Question no.2"
        onChangeText={(val2) => setques2(val2)}
      />
      <Text style={styles.questext}>Enter question no. 3:</Text>
      <TextInput
        style={styles.quesinput}
        placeholder="Question no.3"
        onChangeText={(val3) => setques3(val3)}
      />
      <Text style={styles.questext}>Enter question no. 4:</Text>
      <TextInput
        style={styles.quesinput}
        placeholder="Question no.4"
        onChangeText={(val4) => setques4(val4)}
      />
      <Text style={styles.questext}>Enter question no. 5:</Text>
      <TextInput
        style={styles.quesinput}
        placeholder="Question no.5"
        onChangeText={(val5) => setques5(val5)}
      />
      <Text style={styles.questext}>Enter question no. 6:</Text>
      <TextInput
        style={styles.quesinput}
        placeholder="Question no.6"
        onChangeText={(val6) => setques6(val6)}
      />
      <Text style={styles.questext}>Enter question no. 7:</Text>
      <TextInput
        style={styles.quesinput}
        placeholder="Question no.7"
        onChangeText={(val7) => setques7(val7)}
      />
      <Text style={styles.questext}>Enter question no. 8:</Text>
      <TextInput
        style={styles.quesinput}
        placeholder="Question no.8"
        onChangeText={(val8) => setques8(val8)}
      />
      <Text style={styles.questext}>Enter question no. 9:</Text>
      <TextInput
        style={styles.quesinput}
        placeholder="Question no.9"
        onChangeText={(val9) => setques9(val9)}
      />
      <Text style={styles.questext}>Enter question no. 10:</Text>
      <TextInput
        style={styles.quesinput}
        placeholder="Question no.10"
        onChangeText={(val10) => setques10(val10)}
      />
      <Text style={styles.questext}>Enter question no. 11:</Text>
      <TextInput
        style={styles.quesinput}
        placeholder="Question no.11"
        onChangeText={(val11) => setques11(val11)}
      />
      <Text style={styles.questext}>Enter question no. 12:</Text>
      <TextInput
        style={styles.quesinput}
        placeholder="Question no.12"
        onChangeText={(val12) => setques12(val12)}
      />
      <Text style={styles.questext}>Enter question no. 13:</Text>
      <TextInput
        style={styles.quesinput}
        placeholder="Question no.13"
        onChangeText={(val13) => setques13(val13)}
      />
      <Text style={styles.questext}>Enter question no. 14:</Text>
      <TextInput
        style={styles.quesinput}
        placeholder="Question no.14"
        onChangeText={(val14) => setques14(val14)}
      />
      <Text style={styles.questext}>Enter question no. 15:</Text>
      <TextInput
        style={styles.quesinput}
        placeholder="Question no.15"
        onChangeText={(val15) => setques15(val15)}
      >
      </TextInput>

      <TouchableOpacity
        style={styles.calculatebutton}
        onPress={() =>
          generateques(
            ques1,
            ques2,
            ques3,
            ques4,
            ques5,
            ques6,
            ques7,
            ques8,
            ques9,
            ques10,
            ques11,
            ques12,
            ques13,
            ques14,
            ques15,
            random,
            setrandom
          )
        }
        >
          <Text style={styles.buttontext}>Generate a random question</Text>
        </TouchableOpacity>
      
      <Text style={styles.randomtext}>Random question is {ques}</Text>
    </ScrollView>
  );
  function generateques( ) {
    
    let randomques = Math.floor(Math.random()*(14+1));
    switch (randomques) {
      case 0:
        setrandom(ques1);
        break;
      case 1:
        setrandom(ques2);
        break;
      case 2:
        setrandom(ques3);
        break;
      case 3:
        setrandom(ques4);
        break;
      case 4:
        setrandom(ques5);
        break;
      case 5:
        setrandom(ques6);
        break;
      case 6:
        setrandom(ques7);
        break;
      case 7:
        setrandom(ques8);
        break;
      case 8:
        setrandom(ques9);
        break;
      case 9:
        setrandom(ques10);
        break;
      case 10:
        setrandom(ques11);
        break;
      case 11:
        setrandom(ques12);
        break;
      case 12:
        setrandom(ques13);
        break;
      case 13:
        setrandom(ques14);
        break;
      case 14:
        setrandom(ques15);
        break;
    }
  }
}
