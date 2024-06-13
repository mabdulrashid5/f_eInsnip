import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const PhoneNumberScreen = () => {
  const [countryCode, setCountryCode] = useState('US');
  const [callingCode, setCallingCode] = useState('1');
  const [phoneNumber, setPhoneNumber] = useState('');

  const onSelect = (country) => {
    setCountryCode(country.cca2);
    setCallingCode(country.callingCode[0]);
  };
  const navigation = useNavigation();

  return (
    <ImageBackground source={require('./../assets/pattern.jpg')} style={styles.background}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons name="chevron-left" size={24} color="#000" />
            <Text style={styles.backButtonText}>{'Back'}</Text>
          </TouchableOpacity>
          <Text style={styles.title}>What’s your <Text style={styles.titleHighlight}>mobile number?</Text></Text>
          <TouchableOpacity onPress={() => navigation.navigate('Email')}>
              <Text style={styles.link}>Sign up with email instead</Text>
          </TouchableOpacity>
         
          <View style={styles.inputContainer}>
            <CountryPicker
              countryCode={countryCode}
              withFilter
              withFlag
              withCountryNameButton={false}
              withCallingCode
              withCallingCodeButton
              onSelect={onSelect}
              containerButtonStyle={styles.picker}
            />
            <TextInput
              style={styles.input}
              placeholder="  Mobile Number"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              placeholderTextColor="#8C8C8C"
              keyboardType="phone-pad"
            />
          </View>
          <View style={styles.termsBox}>
            <Text style={styles.termsText}>
              By tapping "Sign Up & Accept", you acknowledge that you have read the Privacy Policy and agree to the
              <TouchableOpacity>
                <Text style={styles.terms}> Terms of Service</Text>
              </TouchableOpacity>
            </Text>
          </View>

          <Text style={styles.subtitle}>We’ll send you an SMS verification code.</Text>

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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
    textAlign: 'center',
    top: -100,
  },
  titleHighlight: {
    color: '#8C8C8C',
  },
  link: {
    fontSize: 16,
    color: '#8C8C8C',
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
    top: 20,
  },
  picker: {
    flex: 1,
    height: 40,
    justifyContent: 'center',
  },
  input: {
    flex: 2,
    height: 40,
    fontSize: 18,
    color: '#000',
    textAlign: 'left',
    left: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
    top: -150,
  },
  termsBox: {
    marginTop: 20,
    paddingHorizontal: 20,

  },
  termsText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#000',
    top:200,
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
    marginTop: 20,
    top: 200,
  },
  continueButtonText: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
});

export default PhoneNumberScreen;
