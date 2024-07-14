// App.js
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import CadastroFornecedores from "./src/componente/CadastroFornecedores";
import EdicaoFornecedor from "./src/componente/EdicaoFornecedor"; // Importe a nova página de edição
import ListagemFornecedores from "./src/componente/ListagemFornecedores";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListagemFornecedores">
        <Stack.Screen name="ListagemFornecedores" component={ListagemFornecedores} />
        <Stack.Screen name="CadastroFornecedores" component={CadastroFornecedores} />
        <Stack.Screen name="EdicaoFornecedor" component={EdicaoFornecedor} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
