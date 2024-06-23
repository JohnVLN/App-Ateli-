import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { IconButton } from "../../components/IconButton";
import { globalStyles } from "../../global/globalStyles";

export function Home({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Bem Vindo!</Text>
      <View style={styles.buttonContainer}>
        <IconButton style={globalStyles.wideButton}
          iconName="Plus"
          title="Novo Pedido"
          onPress={() => navigation.navigate("Novo Pedido")}
        />
        <IconButton style={globalStyles.wideButton}
          iconName="Scroll"
          title="Meus Pedidos"
          onPress={() => navigation.navigate("Meus Pedidos")}
        />
        <IconButton style={globalStyles.wideButton}
          iconName="SignOut"
          title="Sair"
          // onPress={() => navigation.navigate("Sobre")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});
