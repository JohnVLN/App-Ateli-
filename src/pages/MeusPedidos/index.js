import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { IconButton } from "../../components/IconButton";
import { globalStyles } from "../../global/globalStyles";
import Home from "../Home";

export function MeusPedidos() {
  return (
    <View style={styles.container}>
      <View style={globalStyles.pageContainer}>
        <Text>Tela Meus Pedidos</Text>
        <View>
          <IconButton style={styles.addButton}
            iconName="Plus"
            onPress={() => navigation.navigate("Novo Pedido")}
          />
        </View>
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
  footer: {
    position: 'absolute',
    top: 585,
    alignSelf: 'center',
    width: 500,
    height: 75,
    backgroundColor: '#FFF'
  },
})