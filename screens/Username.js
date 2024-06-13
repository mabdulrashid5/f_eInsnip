import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const createUsername = () => {
  const [username, setUsername] = useState('');
  const navigation = useNavigation();

  return (
    <ImageBackground source={require('./../assets/pattern.jpg')} style={styles.background}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons name="chevron-left" size={20} color="#000" />
            <Text style={styles.backButtonText}>{'Back'}</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Set your <Text style={styles.titleHighlight}>username</Text></Text>

          <TextInput
            style={styles.input}
            placeholder=""
            value={username}
            onChangeText={setUsername}
            placeholderTextColor="#000"
          />

          <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate('Phone')}>
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Light overlay to make text readable
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  backButton: {
    position: 'absolute',
    top: 45,
    left: 20,
    backgroundColor: '#FFF',
    padding: 5,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
    top: -100,
  },
  titleHighlight: {
    color: '#8C8C8C',
  },
  input: {
    width: '80%',
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
  },
  continueButton: {
    width: '80%',
    height: 50,
    backgroundColor: '#D3D3D3',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginTop: 20,
    top: 120,
  },
  continueButtonText: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
});

export default createUsername;
