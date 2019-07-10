import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  AppRegistry,
  TextInput,
  ImageBackground
} from "react-native";

export default class CatTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.imgPoz}
          source={require("./app/img/catbg.png")}
        >
          <View style={styles.container2}>
            <View style={styles.unos}>
              <View style={styles.gornji}>
                <TextInput
                  style={styles.tekst1}
                  placeholder="Enter for translation"
                  onChangeText={text => this.setState({ text })}
                />
              </View>
              <View style={styles.donji}>
                <Text style={styles.tekst}>
                  {this.state.text
                    .split(" ")
                    .map(word => word && "meow")
                    .join(" ")}
                </Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center"
  },
  container2: {
    paddingTop: 44
  },
  tekst1: {
    fontSize: 30,
    color: "white",
    marginTop: 0,
    paddingTop: 0,
    alignItems: "center"
  },
  tekst: {
    fontSize: 30,
    color: "lightblue",
    marginTop: 0,
    paddingTop: 0,
    alignItems: "center"
  },
  unos: {
    height: 290,
    width: 300,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    flexDirection: "column"
  },
  imgPoz: {
    width: 360,
    height: "100%",
    alignItems: "center"
  },
  gornji: {
    height: 150,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "lightblue"
  },
  donji: {
    height: 150,
    width: 300,
    alignItems: "center",
    justifyContent: "center"
  }
});
