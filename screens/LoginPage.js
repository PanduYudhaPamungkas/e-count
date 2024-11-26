import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginPage() {
  const navigation = useNavigation();

  const handleLogin = () => {
    //Logika
    Alert.alert("Login Sukses!", "Anda berhasil login.");
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>LOGIN</Text>
      
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
      
      <TouchableOpacity style={styles.buttonLogin} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

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
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 15,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  buttonLogin: {
    width: '100%',
    paddingVertical: 12,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    marginBottom: 5,
    alignItems: 'center',
  },
  buttonRegister: {
    width: '100%',
    paddingVertical: 12,
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
});
