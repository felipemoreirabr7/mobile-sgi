import {View, Image, Text, StyleSheet, TextInput, TouchableOpacity, Alert} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from "react"
//import { Link } from "react-router-dom"
import api from '../services/api'

import logo from "../assets/logo.png"



const Cadastro = ({ navigation }) => {
    const [name, setName] = useState('');
    const [user1, setUser] = useState('');
    const [password, setPassword] = useState('');

    async function handlerSubmit(){
    
        const response = await api.post('/cadastro',{
            name,
            user1,
            password
        })

        const value = response.data.message
        
        if(value == 1){
            Alert.alert("Usuário criado, faça login")
            navigation.navigate('Login')
        }

        if(value == 0){
            Alert.alert("Preencha todos os campos")
            
        }

    }

    function handlerLogin(){
        navigation.navigate("Login")
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
                <Text style={styles.label}>Seu Nome Completo</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Seu nome"
                    placeholderTextColor="#999"
                    autoCapitalize= 'words'
                    autoCorrect={false}
                    value={name}
                    onChangeText={setName}
                />

                <Text style={styles.label}>Nome de usuario</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Ex usuario.exemplo"
                    placeholderTextColor="#999"
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={user1}
                    onChangeText={setUser}
                />

                <Text style={styles.label}>SENHA:</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Crie uma senha"
                    placeholderTextColor="#999"
                    secureTextEntry={true}
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={password}
                    onChangeText={setPassword}
                />

                
                <TouchableOpacity onPress={handlerLogin}>
                    <Text style={styles.label}>Faça login</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handlerSubmit} style={styles.button}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
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
        width: 350,
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

export default Cadastro;