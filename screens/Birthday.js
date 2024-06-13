import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const BirthdayScreen = () => {
  const [selectedMonth, setSelectedMonth] = useState('Jan');
  const [selectedDay, setSelectedDay] = useState('1');
  const [selectedYear, setSelectedYear] = useState('2000');

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
  const years = Array.from({ length: 100 }, (_, i) => (new Date().getFullYear() - i).toString());
  const navigation = useNavigation();

  return (
    <ImageBackground source={require('./../assets/pattern.jpg')} style={styles.background}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons name="chevron-left" size={20} color="#000" />
            <Text style={styles.backButtonText}>{'Back'}</Text>
          </TouchableOpacity>
          <Text style={styles.title}>What's your <Text style={styles.titleHighlight}>birthday?</Text></Text>

          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedMonth}
              style={styles.picker}
              onValueChange={(itemValue) => setSelectedMonth(itemValue)}
            >
              {months.map((month, index) => (
                <Picker.Item key={index} label={month} value={month} />
              ))}
            </Picker>
            <Picker
              selectedValue={selectedDay}
              style={styles.picker}
              onValueChange={(itemValue) => setSelectedDay(itemValue)}
            >
              {days.map((day, index) => (
                <Picker.Item key={index} label={day} value={day} />
              ))}
            </Picker>
            <Picker
              selectedValue={selectedYear}
              style={styles.picker}
              onValueChange={(itemValue) => setSelectedYear(itemValue)}
            >
              {years.map((year, index) => (
                <Picker.Item key={index} label={year} value={year} />
              ))}
            </Picker>
          </View>

          <View style={styles.displayDateButton}>
            <Text style={styles.displayDateText}>
            {selectedMonth} {selectedDay}, {selectedYear}</Text>
          </View>

          <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate('Generatedusername')}>
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
  backButtonText: {
    fontSize: 16,
    color: '#000',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3A3A3A',
    marginBottom: 20,
    textAlign: 'center',
    top: -70,
  },
  titleHighlight: {
    color: '#8C8C8C',
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
    top: 70,
  },
  picker: {
    flex: 1,
    height: 50,
    marginHorizontal: 5,
    backgroundColor: '#FFF',
    borderRadius: 10,
  },
  continueButton: {
    width: '70%',
    height: 50,
    backgroundColor: '#D3D3D3',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginTop: 20,
    top: 180,
  },
  continueButtonText: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
  displayDateButton: {
    width: '60%',
    height: 50,
    backgroundColor: '#D3D3D3',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginTop: 20,
    top: -100,
    textAlign: 'center',
    display: 'flex',
    
  },
  displayDateText: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    justifyContent:'center',
  },
});

export default BirthdayScreen;
