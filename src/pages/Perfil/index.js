import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView,View,Image,ButtonContainer} from './styles';

import  banner from '../../assets/img/banner.png';
import Button from '../../components/Button';

export default function Perfil() {
  return (
    <>
       <StatusBar style={styles="theme-dark"}/>
      <SafeAreaView>
          <Text>Bem vindo de volta!</Text>
          

      </SafeAreaView>
    </>
  );
}

