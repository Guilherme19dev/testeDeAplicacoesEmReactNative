import { useState } from "react";
import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import Card from "../../components/card";

export default function paginaCartao() {
  const [valorTitle, setValorTitle] = useState("");
  const [valorConteudo, setValorConteudo] = useState("");
  let [cardsContents, setCardsContents] = useState<
    { title: string; conteudo: string }[]
  >([]);

  function criarCards() {
    setCardsContents([
      ...cardsContents,
      {
        title: valorTitle,
        conteudo: valorConteudo,
      },
    ]);
    setValorTitle("");
    setValorConteudo("");
  }
  function criarComponentes() {
    if (cardsContents.length !== 0) {
      return cardsContents.map((card, index) => {
        return (
          <View key={index}>
            <Card title={card.title} conteudo={card.conteudo} />
          </View>
        );
      });
    }
  }

  return (
    <ScrollView style={{ height: "100%", width: "100%" }}>
      <View style={Itens.geral}>
        <View style={Itens.formulario}>
          <Text>Crie seu cartão Personalizado</Text>
          <TextInput
            placeholder="Digite o título"
            onChangeText={setValorTitle}
            value={valorTitle}
          ></TextInput>
          <TextInput
            placeholder="Digite o conteúdo"
            onChangeText={setValorConteudo}
            value={valorConteudo}
          ></TextInput>
          <Pressable style={Itens.button} onPress={criarCards}>
            <Text style={Itens.text}>Confirmar</Text>
          </Pressable>
        </View>
        {criarComponentes()}
      </View>
    </ScrollView>
  );
}

const Itens = StyleSheet.create({
  geral: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    minHeight: "100%",
    marginTop: 30,
    marginBottom: 100,
  },
  formulario: {
    height: "40%",
    width: "80%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#b0d2da",
    borderRadius: 10,
  },
  button: {
    height: 40,
    width: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#274cce",
    borderRadius: 10,
  },
  text: {
    height: "100%",
    width: "100%",
    fontSize: 20,
    textAlign: "center",
    alignItems: "center",
    color: "#fff",
  },
});
