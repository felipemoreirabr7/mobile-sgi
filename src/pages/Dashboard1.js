import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet, Image, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Location from 'expo-location';
import logo from "../assets/logo.png"
import user from "../assets/user.png"
import api from '../services/api'

const Dashboard = ({ navigation }) => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [id, setId] = useState('')
    const [userName, setUserName] = useState('')
    

    


    function handlerSubmit(){
        navigation.navigate('Login')
    }


    function handlerDiario(){
        navigation.navigate('FolhaDePonto')
    }

    
    const getDataName = async () => {
        const value = await AsyncStorage.getItem('user')
        setUserName(value)
        //Alert.alert(`user: ${userName}`)
      }
          
    getDataName()

    return (
        
        <SafeAreaView style={styles.container}>
        
        <Image style={styles.logo} source={logo}/>

        <View style={styles.user}>
            <Image source={user} style={styles.userImage} />
            <Text style={styles.userText}>Olá {userName}</Text>
            
        </View>

        <Text style={styles.textDashboard}>Dashboard</Text>

        <View style={styles.user}>
            <TouchableOpacity onPress={handlerDiario} style={styles.button}>
                <Text style={styles.buttonText}>Diario</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Aulas</Text>
            </TouchableOpacity>
        </View>

        
        

        <TouchableOpacity onPress={handlerSubmit}>
            <Text>Sair</Text>
        </TouchableOpacity>
        
        </SafeAreaView>
    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1
      },
      logo: {
          resizeMode: "contain",
          height: 200,
          alignSelf: 'center'
          
      },
      user: {
          display: "flex",
          flexDirection: 'row',
          alignItems: "center"
      },
      userImage: {
          width: 75,
          height: 75
      },
      userText: {
          marginLeft: 12,
          fontSize: 22,
          fontWeight: 'bold'
      },
      textDashboard: {
          marginTop: 32,
          marginLeft:12, 
          fontWeight: 'bold',
          fontSize: 20,
          color: '#c00088',
          borderBottomWidth: 2,
          borderColor: '#43054e'
      },
      button: {
          padding: 50,
          backgroundColor: '#ddd',
          marginTop: 32,
          marginLeft: 44,
          borderRadius: 12,
          
      },
      buttonText: {
          fontSize: 16
      },
      logout: {
          marginLeft: 12
      }
  });

export default Dashboard;