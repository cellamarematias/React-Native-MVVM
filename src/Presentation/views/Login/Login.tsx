import React, { useEffect } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { useLoginViewModel } from './LoginViewModel';
import { CustomTextInput } from '../../components/CustomTextInput';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';

export const LoginScreen = () => {
  const {
    nombre,
    contrasena,
    onChange,
    login,
    user,
    errorMessage,
  } = useLoginViewModel();

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  useEffect(() => {

    if(user?.token !== null) {
      navigation.navigate('Home');
    }
  

  }, [])
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <CustomTextInput
              image=''
              placeholder="Nombre de usuario"
              value={nombre}
              property='nombre'
              onChangeText={onChange} 
              keyboardType='default'
              />
      <CustomTextInput
              image=''
              placeholder="Constraseña"
              value={contrasena}
              property='contrasena'
              onChangeText={onChange} 
              keyboardType={'default'}        
              />
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      <Button title="Ingresar" onPress={login} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  error: {
    color: 'red',
    marginBottom: 12,
    textAlign: 'center',
  },
});

export default LoginScreen;
