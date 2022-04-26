import {View, Image, Text, StyleSheet, TextInput, TouchableOpacity, Alert} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from "react"
//import { Link } from "react-router-dom"
import api from '../services/api'

import logo from "../assets/logo.png"



const Login = ({ navigation }) => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    async function handlerSubmit(){
    
        const response = await api.post('/login',{
            user,
            password
        })
        const value = response.data.message
        
        if(value == 0){
            Alert.alert("Usuário não cadastrado")
        }

        if(value == 1){
            Alert.alert("Senha incorreta")
        }
        if(value == 2){
            navigation.navigate('Dashboard')
        }


        storeData(user)
        
    }

    function handlerCadastro(){
        navigation.navigate('Cadastro')
    }
   
    const storeData = async (value) => {
        try {
          await AsyncStorage.setItem('user', JSON.stringify(value))
        } catch (e) {
          // saving error
        }
      }
      
    return (

        <View style={styles.container}>
            <Image source={logo} />
            <View styles={styles.form}>
                <Text style={styles.label}>CONTA DA REDE UNICEUB, CPF OU MATRÍCULA/DRT:</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Seu usuário"
                    placeholderTextColor="#999"
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={user}
                    onChangeText={setUser}
                />

                <Text style={styles.label}>SENHA:</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Sua senha"
                    placeholderTextColor="#999"
                    secureTextEntry={true}
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={password}
                    onChangeText={setPassword}
                />

                <TouchableOpacity onPress={handlerCadastro}>
                    <Text style={styles.label}>Cadastre-se</Text>
                </TouchableOpacity>
             

                <TouchableOpacity onPress={handlerSubmit} style={styles.button}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>

        )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    label: {
        fontWeight: '500',
        color: '#c00088',
        marginBottom: 8
    },
    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 30
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius: 2

    },
    button: {
        height: 42,
        backgroundColor: '#43054e',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        marginTop: 12
    },
    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    }
})

export default Login;