import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const CadastroFornecedores = ({ route, navigation }) => {
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [contato, setContato] = useState("");
  const [categorias, setCategorias] = useState([]);


  useEffect(() => {
    if (route.params?.fornecedor) {
      const { nome, endereco, contato, categorias } = route.params.fornecedor;
      setNome(nome);
      setEndereco(endereco);
      setContato(contato);
      setCategorias(categorias);
    }
  }, [route.params?.fornecedor]);

  const handleSubmit = () => {
    const novoFornecedor = {
      id: route.params?.fornecedor?.id || Math.floor(Math.random() * 1000),
      nome,
      endereco,
      contato,
      categorias,
    };

    if (route.params?.fornecedor) {
      // Se fornecedor existe, está sendo editado, então retorna o fornecedor editado para a tela anterior
      navigation.navigate("ListagemFornecedores", { fornecedorEditado: novoFornecedor });
    } else {
      // Se não, está sendo criado, então retorna o novo fornecedor para a lista
      navigation.navigate("ListagemFornecedores", { novoFornecedor });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Fornecedores</Text>

      <Text style={styles.label}>Nome:</Text>
      <TextInput style={styles.input} value={nome} onChangeText={setNome} />

      <Text style={styles.label}>Endereço:</Text>
      <TextInput style={styles.input} value={endereco} onChangeText={setEndereco} />

      <Text style={styles.label}>Contato:</Text>
      <TextInput style={styles.input} value={contato} onChangeText={setContato} />

      <Text style={styles.label}>Categorias:</Text>
      <TextInput
        style={styles.input}
        value={categorias.join(", ")}
        onChangeText={(text) => setCategorias(text.split(", "))}
      />

      <Button title="Salvar" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginTop: 8,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
});

export default CadastroFornecedores;
