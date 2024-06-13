import  { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigation = useNavigation();

  return (
    <ImageBackground source={require('./../assets/bg.png')} style={styles.background}>
      <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons name="chevron-left" size={20}  color="#000"  />
            <Text style={styles.backButtonText}>{'Back'}</Text>
          </TouchableOpacity>
        <Text style={styles.title}>Sign in to Insnip</Text>
        <TextInput placeholder="USERNAME OR EMAIL" placeholderTextColor="#C0C0C0" style={styles.input} />
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="PASSWORD"
            placeholderTextColor="#C0C0C0"
            style={styles.passwordInput}
            secureTextEntry={!passwordVisible}
          />
          <TouchableOpacity
            style={styles.eyeButton}
            onPress={() => setPasswordVisible(!passwordVisible)}
          >
            <MaterialCommunityIcons name={passwordVisible ? "eye-off" : "eye"} size={24} color="#000" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.resetText}>Reset password</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('name')}>
          <Text style={styles.createAccountText}>No account? <Text style={styles.createAccountLink}>Create one</Text></Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
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
  },
  
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    top: -40,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#000',
    borderBottomWidth: 1,
    marginBottom: 20,
    color: '#000',
  },
  loginButton: {
    width: '70%',
    height: 50,
    backgroundColor: '#D3D3D3',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginTop: 20,
    marginBottom: 20,
    top: 30,
  },
  loginButtonText: {
    fontSize: 18,
    color: '#000',
  },
  resetText: {
    fontSize: 14,
    color: '#000',
    marginBottom: 20,
    top: 30,
  },
  createAccountText: {
    fontSize: 14,
    color: '#000',
    top: 20,
  },
  createAccountLink: {
    color: '#30C0C0',
  },
  
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderColor: '#000',
    borderBottomWidth: 1,
    marginBottom: 20,
    top: 10,
  },
  passwordInput: {
    flex: 1,
    height: 40,
    color: '#000',
  },
  eyeButton: {
    padding: 10,
  },
  
});

export default SignInScreen;
