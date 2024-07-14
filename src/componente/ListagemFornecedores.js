import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ListagemFornecedores = ({ route, navigation }) => {
  const [fornecedores, setFornecedores] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    // Simulação de dados locais ou lógica para obter os fornecedores de onde desejar
    const data = [
      { id: 1, nome: "Casa da Moeda", endereco: "Rua René Bittencourt, 371 - Santa Cruz, Rio de Janeiro - RJ, 23565-200", contato: "080009090909", categorias: ["Nacional"] },
      { id: 2, nome: "CASA & VIDEO", endereco: "Avenida Paulo de Frontin - Centro, Itaguaí - RJ", contato: "0800434545646", categorias: ["Varejo"] },
      // Adicione mais fornecedores conforme necessário
    ];
    setFornecedores(data);
  }, []); // Certifique-se de ajustar conforme necessário

  useEffect(() => {
    if (route.params?.novoFornecedor) {
      setFornecedores((prevFornecedores) => [...prevFornecedores, route.params.novoFornecedor]);
    } else if (route.params?.fornecedorEditado) {
      // Atualiza o fornecedor editado na lista
      setFornecedores((prevFornecedores) =>
        prevFornecedores.map((fornecedor) =>
          fornecedor.id === route.params.fornecedorEditado.id ? route.params.fornecedorEditado : fornecedor
        )
      );
    }
  }, [route.params?.novoFornecedor, route.params?.fornecedorEditado]);

  const handleExcluir = (id) => {
    setFornecedores((prevFornecedores) => prevFornecedores.filter((fornecedor) => fornecedor.id !== id));
    console.log("Fornecedor excluído com sucesso.");
  };

  const onRefresh = () => {
    setRefreshing(true);
    // Simulação de dados locais ou lógica para obter os fornecedores de onde desejar
    const data = [
      { id: 1, nome: "Fornecedor A", endereco: "Endereço A", contato: "Contato A", categorias: ["Categoria A"] },
      { id: 2, nome: "Fornecedor B", endereco: "Endereço B", contato: "Contato B", categorias: ["Categoria B"] },
      // Adicione mais fornecedores conforme necessário
    ];
    setFornecedores(data);
    setRefreshing(false);
  };

  const handleEditar = (fornecedor) => {
    navigation.navigate("CadastroFornecedores", { fornecedor });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("CadastroFornecedores")}
      >
        <Text style={styles.buttonText}>Novo Fornecedor</Text>
      </TouchableOpacity>

      <Text style={styles.listaTitle}>Lista de Fornecedores:</Text>

      <FlatList
        data={fornecedores}
        keyExtractor={(item) => (item && item.id !== undefined ? item.id.toString() : Math.random().toString())}
        renderItem={({ item }) => (
          <View style={styles.fornecedorContainer}>
            <Text style={styles.nomeFornecedor}>{item.nome}</Text>
            <Text>Endereço: {item.endereco}</Text>
            <Text>Contato: {item.contato}</Text>
            <Text>Categorias: {item.categorias.join(", ")}</Text>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity
                style={styles.editButton}
                onPress={() => handleEditar(item)}
              >
                <Text style={styles.buttonText}>Editar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.deleteButton, { backgroundColor: item.categorias.includes("Nacional") ? "lightcoral" : "red" }]}
                onPress={() => handleExcluir(item.id)}
              >
                <Text style={styles.buttonText}>Excluir</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  listaTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
  },
  fornecedorContainer: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  nomeFornecedor: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  editButton: {
    backgroundColor: "#007BFF",
    padding: 8,
    borderRadius: 5,
    flex: 1,
    marginRight: 5,
  },
  deleteButton: {
    backgroundColor: "red",
    padding: 8,
    borderRadius: 5,
    flex: 1,
    marginLeft: 5,
  },
});

export default ListagemFornecedores;
