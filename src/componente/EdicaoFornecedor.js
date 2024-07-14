import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const EdicaoFornecedor = ({ route, navigation }) => {
    const { fornecedor } = route.params;
    const [nome, setNome] = useState(fornecedor.nome);
    const [endereco, setEndereco] = useState(fornecedor.endereco);
    const [contato, setContato] = useState(fornecedor.contato);
    const [categorias, setCategorias] = useState(fornecedor.categorias);

    useEffect(() => {
    }, []);
    const handleSubmit = () => {
        console.log('Fornecedor editado:', { nome, endereco, contato, categorias });
        navigation.navigate('ListagemFornecedores');
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Edição de Fornecedor</Text>

            <Text style={styles.label}>Nome:</Text>
            <TextInput style={styles.input} value={nome} onChangeText={setNome} />

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Salvar Alterações</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default EdicaoFornecedor;
