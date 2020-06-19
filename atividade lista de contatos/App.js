import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {

  const[nome, setNome] = useState('');
  const[telefone, setTelefone] = useState('');
  const[contato, setContato] = useState([]);
  const[contatos, setContatos] = useState([]);
  const[contadorContatos, setContadorContatos] = useState(0);

  //captura o texto digitado
  const capturarNome = (nome) => {
    setNome(nome);
    setContato([nome, telefone]);
  };

  const capturarTelefone = (telefone) => {
    setTelefone(telefone);
    setContato([nome , telefone]);
  };

//ajuste na função que adiciona contatos
  const adicionarContato = () => {
    
  // setContato([nome, telefone]);
    setContatos ((contatos) =>{
    
    setContadorContatos (contadorContatos + 1);
    
    return [...contatos, {key: contadorContatos.toString(), value: contato}];;
  } );
  }

  return (
    <View style={styles.viewDeFundo}>
      <View style={styles.primeiraView}>
         
        <Text style={styles.textoText}>Nome: </Text><TextInput style={styles.textInputText} placeholder="Informe seu nome" 
                        onChangeText={capturarNome} values={nome}
                        ></TextInput> 
        <Text style={styles.textoText}>Telefone: </Text><TextInput style={styles.textInputText} placeholder="Informe seu telefone"
                        onChangeText={capturarTelefone} value={telefone}
                        />
        <View style={styles.botao} ><Button title='Listar Contatos' color='indigo' 
                                            onPress={adicionarContato}/></View>
        
      </View>
      <View style={styles.segundaView}>
        <Text style={styles.listaContatosText}>Lista de Contatos</Text>
        <FlatList backgroundColor={'purple'}
          data={contatos}
          renderItem={
          contato => (
              /*Aqui será exibida a lista de contatos*/
              <View style={styles.itemNaLista}>
                <Text >{contato.item.value[0]}</Text>
                <Text >{contato.item.value[1]}</Text>
              </View>)
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewDeFundo: {
    
    display:'flex',
    backgroundColor:'purple',
    flexDirection:'row',
    height:'200%',

  },

  textInputText:{
    //width: '90%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 2,
    marginBottom: 8
  },

  textoText:{
    fontSize:20,
    color:'#8B0000'
  },

  botao:{   
    marginTop: 10,
    alignItems:'center',
    
  },
  
  primeiraView: {
    position:'absolute',
    width:500,
    height:200,
    marginLeft: 100,
    marginTop:50,
    borderRadius: 10,
    padding: 10,
    backgroundColor:'lavender',
  },

  segundaView:{
    position:'absolute',
    marginLeft:700,
    width:500,
    padding: 15,
    backgroundColor:'purple'
  },

  itemNaLista: {
    padding: 12,
    backgroundColor: 'pink',
    borderColor: '#4B0082',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 8
  },

  listaContatosText: {
    color:'pink',
    fontSize:20,
    fontFamily:'Lucida Console',
    marginBottom:10,
    textAlign:'center'
  }

});
