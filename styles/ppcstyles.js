import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container:{
    flex: 1,
    backgroundColor: "white",
    padding: 7
},
abouttext:{
    fontSize: 18
},
subjectname:{
    fontSize: 16,
    width: "30%",
    marginVertical: "1%",
    marginHorizontal:"2%",
    borderWidth: 2,
    textAlign: "center",
    height: 21,
    marginTop: "3%",
    borderRadius: 7,
    backgroundColor:"lightblue"
},
marksinput:{
    position: "relative",
    width: "60%",
    alignSelf: "flex-end",
    borderColor: "black",
    borderWidth: 2,
    right: "3%",
    bottom: "4%",
    height: 21,
    padding: 3,
    borderRadius: 7,
    backgroundColor:"lightpink",
    marginVertical: 0
},
infotext:{
    width: "40%",
    alignSelf: "flex-start",
    borderColor: "black",
    borderWidth: 2,
    height: "7%",
    padding: 3,
    marginVertical:0,
    textAlign:"center",
    borderRadius: 7,
    backgroundColor:"lightblue",
    marginRight:"1%",
},
infoinput:{
    position: "relative",
    width: "50%",
    alignSelf: "flex-end",
    borderColor: "black",
    borderWidth: 2,
    right: "5%",
    bottom: "7%",
    height: "5%",
    padding: 3,
    borderRadius: 7,
    backgroundColor:"lightpink"
},
smallinfo:{
    fontSize: 14,
    bottom: 10,
    marginVertical: 0,
    borderBottomColor: "#777",
    borderBottomWidth: 1
}
})
