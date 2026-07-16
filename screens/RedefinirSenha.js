import { View, Text, TextInput, Pressable, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function RedefinirSenha({ setScreen }) {
  return (

    <View style={styles.container}>
        
      <View style={styles.header}>

        <Pressable onPress={() => setScreen("RecuperarAcesso")} style={styles.backButton}>
          <Ionicons name="arrow-back" size={26} color="#22c55e" />
        </Pressable>

          <Text style={styles.tituloCabecalho}>
            Redefinir senha
          </Text>
      </View>

        <View style={styles.cadeado}>
            <Image
                source={require("../assets/image/cadeadoVerificacao.png")}
                style={styles.imagemCadeado}
                resizeMode="contain"
            />
        </View>

      <View style={styles.form}>
        <Text style={styles.titulo}>{'Crie uma nova senha'}
        </Text>

        <Text style={styles.texto}>
                {'Sua nova senha deve ser diferente das\nanteriores para mais segurança.'}
            </Text>

        <View style={styles.inputContainer}>
          <Text style={styles.rotuloCampo}>Nova Senha</Text>
          <TextInput 
            style={styles.input}
            placeholder="Digite sua nova senha*" 
            placeholderTextColor="#fff" 
          />
        </View>

        <View style={styles.requisitosContainer}>
          <View style={styles.linhaRequisito}>
            <Text style={styles.simboloRequisito}>ⓥ</Text>
            <Text style={styles.requisitosTexto}>Mínimo de 8 caracteres</Text>
          </View>

          <View style={styles.linhaRequisito}>
            <Text style={styles.simboloRequisito}>ⓥ</Text>
            <Text style={styles.requisitosTexto}>Pelo menos 1 letra maiúscula</Text>
          </View>

          <View style={styles.linhaRequisito}>
            <Text style={styles.simboloRequisito}>ⓥ</Text>
            <Text style={styles.requisitosTexto}>Pelo menos 1 número</Text>
          </View>

          <View style={styles.linhaRequisito}>
            <Text style={styles.simboloRequisito}>ⓥ</Text>
            <Text style={styles.requisitosTexto}>Pelo menos 1 caractere especial</Text>
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.rotuloCampo}>Confirmar nova senha*</Text>
          <TextInput 
            style={styles.input}
            placeholder="Digite novamente sua nova senha*"
            placeholderTextColor="#fff" 
          />
        </View>


        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>➜ Redefinir senha</Text>
        </Pressable>

        <Text style={styles.lembrou}>
            Fale com nosso{" "}
            <Pressable 
                onPress={() => setScreen("Login")}
                style={styles.linkSuporte}>    
                suporte
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

  inputContainer: {
    width: "100%",
    marginBottom: 20,
  },

  rotuloCampo: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
    alignSelf: "flex-start",
  },

  input: {
    borderWidth: 1,
    borderColor: "#3a3a3a",
    width: "100%",
    backgroundColor: "#161616",
    padding: 15,
    borderRadius: 10,
    color: "#e5e5e5",
  },

  requisitosContainer: {
    width: "100%",
    alignItems: "flex-start",
    marginTop: 8,
    marginBottom: 12,
  },

  linhaRequisito: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },

  simboloRequisito: {
    color: "#22c55e",
    fontSize: 15,
    fontWeight: "bold",
    marginRight: 8,
  },

  requisitosTexto: {
    color: "#ffffff",
    fontSize: 15,
    lineHeight: 25,
  },

  tituloCabecalho: {
    fontWeight: "bold",
    fontSize: 25,
    color: "#e5e5e5",
  },

  linkSuporte: {
    color: "#22c55e",
    fontWeight: "bold",
    textDecorationLine: "underline",
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
    marginBottom: -100,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 12,
  },

  imagemCadeado: {
    width: 220,
    height: 220,
  },

  lembrou: {
    color: "#ffffff",
    fontWeight: "bold",
    marginTop: 30,
  },
    
}); 