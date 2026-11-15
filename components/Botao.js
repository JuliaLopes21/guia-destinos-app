import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Botao({ rotulo, aoPressionar, corFundo = '#0066CC', corTexto = '#FFFFFF' }) {
  return (
    <TouchableOpacity
      style={[styles.botao, { backgroundColor: corFundo }]}
      onPress={aoPressionar}
      activeOpacity={0.8}
    >
      <Text style={[styles.texto, { color: corTexto }]}>{rotulo}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  texto: {
    fontSize: 16,
    fontWeight: '600',
  },
});