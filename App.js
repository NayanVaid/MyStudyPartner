import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Entypo } from "@expo/vector-icons";

import randomquestions from "./Screens/randomquestion";
import ppc from "./Screens/per&procal";
import stopwatch from "./Screens/stopwatch";



const Stack = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Random Questions Generator">
        <Stack.Screen name="Random Questions Generator" component={randomquestions}   options={{
          tabBarIcon: ({color,size}) => (
            <AntDesign name="filetext1" size={24}   color="black" />
          ), 
          tabBarLabel:"RQG"
        }}/>
         <Stack.Screen name="Percentage and Progress Calculator" component={ppc}  options={{
          tabBarIcon: ({color,size}) => (
            <Entypo name="calculator" size={24} color="black"  />
          ),
          tabBarLabel:"PPC"
        }}  />
        <Stack.Screen name="Studywatch" component={stopwatch}  options={{
          tabBarIcon: ({color,size}) => (
            <Entypo name="stopwatch" size={24} color="black" />
          ),
          tabBarLabel:"Studywatch"
        }}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
