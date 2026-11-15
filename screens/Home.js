import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, ActivityIndicator, SafeAreaView } from 'react-native';
import Cabecalho from '../components/Cabecalho';
import Card from '../components/Card';
import Botao from '../components/Botao';

const destinosIniciais = [
  { id: '1', nome: 'Kyoto, Japão', pais: 'Japão', descricao: 'Templos históricos, florestas de bambu e cultura tradicional milenar.', avaliacao: '4.9 ⭐' },
  { id: '2', nome: 'Paris, França', pais: 'França', descricao: 'A cidade luz famosa pela Torre Eiffel, museus e culinária requintada.', avaliacao: '4.7 ⭐' },
  { id: '3', nome: 'Reykjavik, Islândia', pais: 'Islândia', descricao: 'Portal para auroras boreais, fontes termais e paisagens vulcânicas.', avaliacao: '4.8 ⭐' },
  { id: '4', nome: 'Rio de Janeiro, Brasil', pais: 'Brasil', descricao: 'Belezas naturais exuberantes, praias icônicas e o Cristo Redentor.', avaliacao: '4.8 ⭐' },
  { id: '5', nome: 'Nova York, EUA', pais: 'Estados Unidos', descricao: 'Metrópole vibrante com a Broadway, Central Park e arranha-céus.', avaliacao: '4.6 ⭐' },
];

export default function Home({ navigation, route }) {
  const [destinos, setDestinos] = useState(destinosIniciais);
  const [busca, setBusca] = useState('');
  const [carregando, setCarregando] = useState(false);

  useEffect(() => {
    if (route.params?.novoDestino) {
      setDestinos((prevDestinos) => [route.params.novoDestino, ...prevDestinos]);
      navigation.setParams({ novoDestino: undefined });
    }
  }, [route.params?.novoDestino]);

  useEffect(() => {
    setCarregando(true);
    const temporizador = setTimeout(() => { setCarregando(false); }, 500);
    return () => clearTimeout(temporizador);
  }, []);

  const destinosFiltrados = destinos.filter((item) =>
    item.nome.toLowerCase().includes(busca.toLowerCase()) ||
    item.pais.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <Cabecalho titulo="ExplorerApp" subtitulo="Descubra o seu próximo destino de viagem" />
      <View style={styles.areaAcoes}>
        <TextInput
          style={styles.inputBusca}
          placeholder="Pesquisar destino ou país..."
          placeholderTextColor="#888"
          value={busca}
          onChangeText={setBusca}
        />
        <Botao
          rotulo="Cadastrar Novo Destino"
          aoPressionar={() => navigation.navigate('Formulario')}
          corFundo="#28A745"
        />
      </View>
      {carregando ? (
        <View style={styles.centro}>
          <ActivityIndicator size="large" color="#0066CC" />
          <Text style={styles.textoCarregando}>Carregando destinos...</Text>
        </View>
      ) : (
        <FlatList
          data={destinosFiltrados}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card
              titulo={item.nome}
              subtitulo={item.descricao}
              informacaoExtra={`País: ${item.pais} | Avaliação: ${item.avaliacao}`}
              aoPressionar={() => navigation.navigate('Detalhes', { item })}
            />
          )}
          ListEmptyComponent={
            <View style={styles.centro}>
              <Text style={styles.textoVazio}>Nenhum destino encontrado.</Text>
            </View>
          }
          contentContainerStyle={styles.listaContainer}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7FA' },
  areaAcoes: { paddingHorizontal: 16, marginBottom: 8 },
  inputBusca: { backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#CCCCCC', borderRadius: 8, paddingHorizontal: 12, paddingVertical: 10, fontSize: 16, marginBottom: 8, color: '#333333' },
  centro: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 },
  textoCarregando: { marginTop: 10, color: '#666666', fontSize: 16 },
  textoVazio: { fontSize: 16, color: '#888888', textAlign: 'center' },
  listaContainer: { paddingBottom: 20 },
});