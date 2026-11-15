import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Card({ titulo, subtitulo, informacaoExtra, aoPressionar }) {
  return (
    <TouchableOpacity style={styles.card} onPress={aoPressionar} activeOpacity={0.9}>
      <View style={styles.conteudo}>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.subtitulo}>{subtitulo}</Text>
        {informacaoExtra ? <Text style={styles.extra}>{informacaoExtra}</Text> : null}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderLeftWidth: 5,
    borderLeftColor: '#0066CC',
  },
  conteudo: { flex: 1 },
  titulo: { fontSize: 18, fontWeight: 'bold', color: '#333333', marginBottom: 4 },
  subtitulo: { fontSize: 14, color: '#666666', marginBottom: 8 },
  extra: { fontSize: 12, color: '#0066CC', fontWeight: '600' },
});