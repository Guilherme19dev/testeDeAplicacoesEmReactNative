import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function PaginaInicio() {
  const [titleValue, setTitle] = useState(
    "Digite algo para substituir o nosso titulo",
  );
  const [textoEscrito, setTexto] = useState("Aqui ficarão suas histórias");

  const [valor, setvalor] = useState("Digite algo");

  function mudarTexto() {
    setTitle(textoEscrito);
  }

  return (
    <View style={estiloBásico.paginaDesign}>
      <View style={estiloBásico.inputArea}>
        <Text>{titleValue}</Text>
        {/*<TextInput
          style={estiloBásico.input}
          placeholder="Digite o novo valor"
          onChangeText={setTitle}
        ></TextInput>*/}
        <TextInput
          style={estiloBásico.input}
          placeholder="Digite o novo valor"
          onChangeText={setTexto}
        ></TextInput>
        <Pressable style={estiloBásico.buttonArea} onPress={mudarTexto}>
          <Text style={estiloBásico.textButton}>Confirmar</Text>
        </Pressable>
      </View>

      <View style={estiloBásico.inputArea}>
        <Text>{valor}</Text>
        <TextInput
          style={estiloBásico.input}
          placeholder="Digite o novo valor"
          onChangeText={setvalor}
        ></TextInput>
      </View>
    </View>
  );
}

const estiloBásico = StyleSheet.create({
  paginaDesign: {
    height: "100%",
    width: "100%",
    paddingTop: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#9ccde1",
    gap: 10,
    padding: 20,
  },
  inputArea: {
    height: "50%",
    width: "70%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 40,
    padding: 20,
    gap: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  input: {
    width: "100%",
    height: 30,
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 10,
    textAlign: "center",
    padding: "1%",
    backgroundColor: "#76787958",
  },
  buttonArea: {
    height: 30,
    width: "70%",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#4730bb",
    borderRadius: 5,
  },
  textButton: {
    height: "100%",
    width: "100%",
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
  },
});
