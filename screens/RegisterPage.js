import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';

export default function RegisterPage() {
  const navigation = useNavigation();

  const [selectedValue, setSelectedValue] = useState('');

  const handleRegister = () => {
    //Logika
    Alert.alert("Register Sukses!", "Akun anda berhasil diregister, silakan login dengan akun anda.");
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>REGISTER</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#777"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#777"
        //secureTextEntry={true}
      />
      
      <View style={styles.pickerBorder}>
        <Picker
          style={styles.picker}
          mode="dialog"
          selectedValue={selectedValue}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Register sebagai:" enabled={false} />
          <Picker.Item label="Admin" value="admin" />
          <Picker.Item label="Pekerja" value="pekerja" />
        </Picker>
      </View>

      <TouchableOpacity style={styles.buttonRegister} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 30,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 40,
  },
  input: {
    width: '100%',
    height: 60,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 15,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  buttonRegister: {
    width: '100%',
    paddingVertical: 15,
    backgroundColor: '#f44336',
    borderRadius: 5,
    marginBottom: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  pickerBorder:{
    width: '100%',
    height: 60,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  picker: {
    height: '100%',
    width: '100%',
  }
});