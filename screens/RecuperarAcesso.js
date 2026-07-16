import { View, Text, TextInput, Pressable, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function RecuperarAcesso({ setScreen }) {
  return (

    <View style={styles.container}>
        
      <View style={styles.header}>

        <Pressable onPress={() => setScreen("Login")} style={styles.backButton}>
          <Ionicons name="arrow-back" size={26} color="#22c55e" />
        </Pressable>

          <Text style={styles.tituloCabecalho}>
            Esqueci minha senha
          </Text>
      </View>

        <View style={styles.cadeado}>
            <Image
                source={require("../assets/image/cadeado.png")}
                style={styles.imagemCadeado}
                resizeMode="contain"
            />
        </View>

      <View style={styles.form}>
        <Text style={styles.titulo}>{'Recupere o acesso\nà sua conta'}
        </Text>

        <Text style={styles.texto}>
                {'Informe o e-mail cadastrado na sua conta\nque enviaremos um link para você\nredefinir sua senha.'}
            </Text>
        
        <TextInput 
          style={styles.input} 
          placeholder="E-mail*" 
          placeholderTextColor="#fff" 
        />

        <Pressable 
          onPress={() => setScreen("RedefinirSenha")}
          style={styles.button}>
          
          <Text style={styles.buttonText}>➜ Enviar Link de Recuperação</Text>
        </Pressable>

        <Text style={styles.lembrou}>
            Lembrou sua senha?{" "}
            <Pressable 
                onPress={() => setScreen("Login")}
                style={styles.linkLogin}>    
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

  tituloCabecalho: {
    fontWeight: "bold",
    fontSize: 25,
    color: "#e5e5e5",
  },

  linkLogin: {
    color: "#22c55e",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },

  header: {
    width: "100%",
    paddingTop: 75,
    paddingBottom: 15,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 25,
    position: "relative",
  },

  backButton: {
    position: "absolute",
    left: 25,
  },

  form: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
    width: "100%",
  },

  titulo: {
    textAlign: "center",
    color: "#e5e5e5",
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 30,
  },

  texto: {
    textAlign: "center",
    fontSize: 16,
    color: "#a0a0a0",
    lineHeight: 20,
    paddingBottom: 50,
  },

  cadeado: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    marginBottom: -300,
  },

  imagemCadeado: {
    width: 500,
    height: 500,
  },

   lembrou: {
    color: "#ffffff",
    fontWeight: "bold",
    marginTop: 30,
  },
    
}); 