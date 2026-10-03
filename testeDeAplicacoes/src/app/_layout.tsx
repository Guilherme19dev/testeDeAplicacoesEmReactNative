import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Links() {
  return (
    <View style={menu.areaTotal}>
      <View style={menu.menuArea}>
        <Link href="/">
          <Text style={menu.textLink}>Pagina Inicial</Text>
        </Link>
        <Link href="/paginaSecundaria/paginaCartao">
          <Text style={menu.textLink}>Pagina Cartões</Text>
        </Link>
      </View>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen
          name="paginaSecundaria/paginaCartao"
          options={{ title: "Cartões" }}
        />
      </Stack>
    </View>
  );
}

const menu = StyleSheet.create({
  areaTotal: {
    height: "100%",
    width: "100%",
  },

  menuArea: {
    width: "100%",
    height: 100,
    padding: 10,
    paddingTop: 50,
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#391cc9",
  },
  textLink: {
    width: "100%",
    height: "100%",
    padding: 1,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
  },
});
