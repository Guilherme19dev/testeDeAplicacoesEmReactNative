import { StyleSheet, Text, View } from "react-native";

type cardProps = {
  title: string;
  conteudo: string;
};

export default function Card({ title, conteudo }: cardProps) {
  return (
    <View style={card.cartao}>
      <Text style={card.textCartao}>{title}</Text>
      <Text style={card.textCartao}>{conteudo}</Text>
    </View>
  );
}

const card = StyleSheet.create({
  cartao: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#2e7ad6",
    borderRadius: 10,
    marginTop: 10,
  },
  textCartao: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
});
