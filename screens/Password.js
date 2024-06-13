import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const PasswordScreen = () => {
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const navigation = useNavigation();

  return (
    <ImageBackground source={require('./../assets/pattern.jpg')} style={styles.background}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.backButton}>
            <MaterialCommunityIcons name="chevron-left" size={24} color="#000" />
            <Text style={styles.backButtonText}>{'Back'}</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Set a <Text style={styles.titleHighlight}>password</Text></Text>
          <Text style={styles.subtitle}>Your password should be at least 8 characters.</Text>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              placeholderTextColor="#8C8C8C"
              secureTextEntry={secureTextEntry}
            />
            <TouchableOpacity
              style={styles.eyeButton}
              onPress={() => setSecureTextEntry(!secureTextEntry)}
            >
              <MaterialCommunityIcons name={secureTextEntry ? "eye-off" : "eye"} size={24} color="#8C8C8C" />
            </TouchableOpacity>
          </View>

          <View style={styles.termsBox}>
            <Text style={styles.termsText}>
              By tapping "Sign Up & Accept", you acknowledge that you have read the Privacy Policy and agree to the
              <TouchableOpacity>
                <Text style={styles.terms}> Terms of Service</Text>
              </TouchableOpacity>
            </Text>
          </View>

          <TouchableOpacity style={styles.continueButton}>
            <Text style={styles.continueButtonText}>Sign Up & Accept</Text>
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
  backButtonText: {
    fontSize: 16,
    color: '#000',
    marginLeft: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
    textAlign: 'center',
    top: -100,
  },
  titleHighlight: {
    color: '#8C8C8C',
  },
  subtitle: {
    fontSize: 14,
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
    top: -90,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    width: '80%',
    marginBottom: 20,
    top:40,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 18,
    color: '#000',
    textAlign: 'center',
    right: 80,
  },
  eyeButton: {
    padding: 5,
  },
  termsBox: {
    marginTop: 20,
    paddingHorizontal: 20,

  },
  termsText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#000',
    top:180,
  },
  terms: {
    color: '#30C0C0',
    top: 4,
  },
  continueButton: {
    width: '80%',
    height: 50,
    backgroundColor: '#D3D3D3',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginTop: 40,
    top:180,
  },
  continueButtonText: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
});

export default PasswordScreen;
