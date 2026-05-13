import React from 'react';
import { View, Text, StyleSheet, Button, TextInput} from 'react-native'; /*Importação dos componentes necessários*/

/*Função Topo Dashboard*/
export function DashboardTxt() {   
  return (
    <View>
      <Text>Meu Limite App</Text>
      <Text>Começa aqui</Text>
      <br></br>
    </View>
  );
}

export default function Dashboard({navigation}) {                           /*Função padrão para conteudo da página, navegação e Botão*/                        
  return (
    <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
      <DashboardTxt/>

      <Text>Lista de gastos</Text>
      <br></br>
      <Button
        title='Adicionar Gasto'
        onPress= {() => navigation.navigate('AddExpense')}/>
      
      <br></br>
      
      <Text>Editar gastos</Text>
       <Button
         title='Editar gastos'
          onPress= {() => navigation.navigate('EditExpense')}/>
        


    </View>
  );
}

