import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { globalStyles } from "../../global/globalStyles";

export function Sobre() {
  return (
    <View style={styles.container}>
      <View style={globalStyles.pageContainer}>
        <Text style={styles.title}>Quem Somos?{"\n"}</Text>
        <Text style={styles.text}>asdasd {"\n"}{"\n"}</Text>
        <Text style={styles.title}>Contatos{"\n"}</Text>
        <Text style={styles.text}>
          Instagram: @AtelieReis{"\n"}
          Fone: 11 55555-5555{"\n"}
          Email: AtelieReis@gmail.com
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: 'white',
  },
  addButton: {
    position: 'absolute',
    top: 520,
    right: 0,
    height: 65,
    width: 65,
    backgroundColor: '#9f65a3',
    borderRadius: 15,
  },
  title: {
    alignSelf: 'center',
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 18,
  },
  text: {
    alignSelf: 'center',
    textAlign: 'center',
  },
})