import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  pageContainer: {
    backgroundColor: '#f2f2f2',
    position: 'absolute',
    alignSelf: 'center',
    height: '100%',
    width: '95%',
    borderRadius: 25,
    padding: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#FFF",
    height: 60,
    marginBottom: 20,
    paddingHorizontal: 17,
    fontSize: 20,
    borderRadius: 10,
  },
  pickerView: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    marginBottom: 20,
  },
  pickerInput: {
    height: 60,
    fontSize: 20,
  },
  pickerItem: {
    fontSize: 20
  },
  wideButton: {
    backgroundColor: '#8d6889',
    height: 120,
    width: 250,
  }
});
