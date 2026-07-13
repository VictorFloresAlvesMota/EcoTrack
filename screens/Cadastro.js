import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Cadastro({ setScreen }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => setScreen("Login")}>
          <Ionicons name="arrow-back" size={26} color="#22c55e" />
        </Pressable>

          <Text style={{ fontWeight: "bold", fontSize: 25, color: "#e5e5e5" }}>
            Cadastro
          </Text>


        <Ionicons name="menu" size={26} color="#22c55e" />
      </View>

      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Nome Completo*" placeholderTextColor="#fff" />
        <TextInput style={styles.input} placeholder="E-mail" placeholderTextColor="#fff" />
        <TextInput style={styles.input} placeholder="CPF*" placeholderTextColor="#fff" />
        <TextInput style={styles.input} placeholder="CEP*" placeholderTextColor="#fff" />
        <TextInput style={styles.input} placeholder="Logradouro" placeholderTextColor="#fff" />
        <TextInput style={styles.input} placeholder="Bairro" placeholderTextColor="#fff" />
        <TextInput style={styles.input} placeholder="Cidade" placeholderTextColor="#fff" />
        <TextInput style={styles.input} placeholder="UF" placeholderTextColor="#fff" />
        <TextInput style={styles.input} placeholder="Senha*" placeholderTextColor="#fff" secureTextEntry />
        <TextInput style={styles.input} placeholder="Confirmar senha*" placeholderTextColor="#fff" secureTextEntry />

        <Text style={styles.checkbox}>
          ☑ Aceito os{" "}
          <Text style={{ color: "#22c55e", fontWeight: "bold", textDecorationLine: "underline" }}>
            Termos de Uso e Política de Privacidade
          </Text>
        </Text>

        <Text style={styles.checkbox}>
          ☐ Deseja receber notificações?
        </Text>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>➜ Confirmar cadastro</Text>
        </Pressable>

        <Text style={styles.cadastro}>
          Já tem uma conta?{" "}

          <Pressable 
            onPress={() => setScreen("Login")}
          style={{ color: "#22c55e", fontWeight: "bold", textDecorationLine: "underline" }}>
            Fazer Login
          </Pressable>

        </Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f0f0f",
  },

  //estilização meia lua
  top: {
    position: "absolute",
    top: 0,
    width: "120%",
    height: "40%",
    backgroundColor: "#1a1a1a",
    borderBottomLeftRadius: 275,
    borderBottomRightRadius: 275,
  },

  input: {
    borderWidth: 1,
    borderColor: "#3a3a3a",
    width: "100%",
    backgroundColor: "#161616",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
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

  cadastro: {
    color: "#e5e5e5",
    fontWeight: "bold",
    marginTop: 30,
  },

  header: {
    width: "100%",
    paddingTop: 75,
    paddingBottom: 15,
    marginBottom: 20,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 25,
},

  headerText: {
    color: "#e5e5e5",
    fontSize: 20,
    fontWeight: "bold",
},

form: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  padding: 30,
  width: "100%",
},

checkbox: {
  textAlign: "left",
  paddingLeft: 50,
  color: "#e5e5e5",
  width: "100%",
}

},
);