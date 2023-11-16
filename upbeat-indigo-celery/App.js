import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { TextInput as PaperTextInput } from 'react-native-paper';

const estilos = {
  upv: {
    backgroundColor: 'purple',
    fontSize: 10,
    fontWeight: '600',
    padding: 4,
    paddingLeft: 12,
    textAlign: 'left',
    color: 'grey',
  },
  florida: {
    backgroundColor: 'red',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
};

const modulos2Dam = [
  { nombre: 'DIN', profesor: 'Manel', horas: 120 },
  { nombre: 'ADA', profesor: 'Juanmi', horas: 120 },
  { nombre: 'PMDM', profesor: 'Fran', horas: 100 },
  { nombre: 'PSP', profesor: 'Fran', horas: 60 },
  { nombre: 'SGE', profesor: 'Belén', horas: 100 },
  { nombre: 'Inglés', profesor: 'Caterina', horas: 40 },
  { nombre: 'EIE', profesor: 'Manuel', horas: 60 },
];

export default class App extends Component {
  nombre() {
    return (
      <Text>
        Tu Nombre Completo
      </Text>
    );
  }

  datos() {
    const estilo = 'florida'; // Puedes cambiar esto dinámicamente según tus necesidades

    return (
      <View>
        <PaperTextInput
          label="Nombre"
          style={estilos[estilo]}
          placeholderTextColor={estilo === 'florida' ? 'white' : 'orange'}
        />
        <PaperTextInput
          label="Módulo"
          style={estilos[estilo]}
          placeholderTextColor={estilo === 'florida' ? 'white' : 'orange'}
        />
      </View>
    );
  }

  boton() {
    const isAdmin = true; // Puedes cambiar esto dinámicamente según tus necesidades

    if (isAdmin) {
      return (
        <Button
          title="isAdmin true"
          icon="format-list-bulleted"
          onPress={() => console.log('Botón presionado')}
        />
      );
    } else {
      return null; // No mostrará nada si isAdmin es false
    }
  }

  render() {
    return (
      <View>
        {this.nombre()}
        {this.datos()}
        {this.boton()}
      </View>
    );
  }
}