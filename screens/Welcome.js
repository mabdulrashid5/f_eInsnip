import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./../assets/log.png')} style={styles.logo} />
        
      </View>
      <Image source={require('./../assets/imageOnwel.png')} style={styles.mainImage} />
      <Text style={styles.tagline}>
        Instant snips with your friends and family on the go
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('afterwelcome')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
  },
  logo: {
    width: 140,
    height: 90,
    marginLeft: -180,
  },
  
  mainImage: {
    width: '130%',
    height: 400,
    resizeMode: 'contain',
    top: -60,
  },
  tagline: {
    fontSize: 18,
    color: '#3A3A5A',
    textAlign: 'center',
    marginVertical: 20,
    top: -150,
  },
  button: {
    backgroundColor: '#5A5A7A',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginBottom: 40,
    top: -90,
  },
  buttonText: {
    fontSize: 18,
    color: '#ffffff',
  },
});

export default WelcomeScreen;
