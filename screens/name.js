import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const NameScreen = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground source={require('./../assets/pattern.jpg')} style={styles.background}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons name="chevron-left" size={20}  color="#000"  />
            <Text style={styles.backButtonText}>{'Back'}</Text>
          </TouchableOpacity>
          <Text style={styles.title}>What's your <Text style={styles.titleHighlight}>name?</Text></Text>

          <TextInput placeholder="FIRST NAME" placeholderTextColor="#C0C0C0" style={styles.input} />
          <TextInput placeholder="LAST NAME" placeholderTextColor="#C0C0C0" style={styles.input} />

         

          <TouchableOpacity style={styles.ContinueButton} onPress={() => navigation.navigate('Birthday')}>
            <Text style={styles.ContinueText}>Continue</Text>
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
    color: '#3A3A3A',
    marginBottom: 20,
    textAlign: 'center',
    top:-50, 
  },
  titleHighlight: {
    color: '#8C8C8C',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#C0C0C0',
    borderBottomWidth: 1,
    marginBottom: 20,
    color: '#000',
    fontSize: 16,
    paddingHorizontal: 10,
  },
  
  ContinueButton: {
    width: '70%',
    height: 50,
    backgroundColor: '#D3D3D3',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginTop: 20,
    marginBottom: 20,
    top: 40,
  },
  ContinueText: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
});

export default NameScreen;
