import { View, Text, TextInput, Pressable, Image, StyleSheet } from "react-native";

export default function Login({ setScreen }) {
  return (
    <View style={styles.container}>
      <View style={styles.top} />

      <View style={styles.logo}>
        <Image
          source={require("../assets/image/logoEcoTrackPreto.png")}
          resizeMode="contain"
        />
      </View>

      <TextInput //input do email
        placeholder="E-mail"
        placeholderTextColor="#ffffff"
        style={styles.input}
      />

      <TextInput //input da senha
        placeholder="Senha"
        placeholderTextColor="#ffffff"
        secureTextEntry
        style={styles.input}
      />

      <Pressable 
       onPress={() => setScreen("RecuperarAcesso")}
      style={styles.esqueceu}> 
        Esqueceu sua senha?
      </Pressable>
      
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>➜ Entrar</Text>
      </Pressable>

      <Text style={styles.cadastro}>
        Não é cadastrado?{" "}

        <Pressable 
          onPress={() => setScreen("Cadastro")}
        style={{ color: "#22c55e", fontWeight: "bold", textDecorationLine: "underline" }}>    
          Cadastre-se
        </Pressable>

      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container: { 
    flex: 1,
    backgroundColor: "#0f0f0f",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },

  //estilização meia lua
  top: {
    position: "absolute",
    top: 0,
    width: "125%",
    height: "40%",
    backgroundColor: "#1a1a1a",
    borderBottomLeftRadius: 275,
    borderBottomRightRadius: 275,
  },

  logo: {
    width: 350,
    height: 250,
    marginBottom: 250,
    paddingTop: 5,
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    borderWidth: 1,
    borderColor: "#3a3a3a",
    width: "100%",
    backgroundColor: "#161616",
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    color: "#e5e5e5",
  },

  button: {
    backgroundColor: "#22c55e",
    padding: 10,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginTop: 40,
  },

  buttonText: {
    color: "#000000",
    fontWeight: "bold",
  },

  esqueceu: {
    color: "#a0a0a0",
    fontWeight: "bold",
    alignSelf: "flex-end",
    textDecorationLine: "underline",
  },

  cadastro: {
    color: "#e5e5e5",
    fontWeight: "bold",
    marginTop: 30,
  },
});
