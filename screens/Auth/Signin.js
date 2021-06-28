import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Header from '../Header'

export default function Signin() {
  return (
    <View style={styles.screen}>
      <Image
        source={require('../../assets/images/log.png')}
        style={styles.signinImage}
      />
      <View style={{ marginBottom: 0}}>
        <Text
          style={{ fontSize: 15, alignSelf: 'center', color: 'rgba(0,0,0,.5)' }}
        >
          Welcome to passport app
        </Text>
        <Text
          style={{
            fontSize: 13,
            alignSelf: 'center',
            color: '#00CC99',
          }}
        >
          Your ideal life partner
        </Text>
      </View>
      <View style={styles.textInputs}>
        <AntDesign
          name='mail'
          size={15}
          color='rgba(0,0,0,.3)'
          style={styles.icons}
        />
        <TextInput placeholder='Email' style={{color: 'rgba(0,0,0,0.5)'}} />
      </View>
      <View style={styles.textInputs}>
        <AntDesign
          name='lock'
          size={15}
          color='rgba(0,0,0,.3)'
          style={styles.icons}
        />
        <TextInput placeholder='Password' />
      </View>
      <Text style={{color: '#00CC99', marginHorizontal: 85, marginVertical: 10}}>Forgot password?</Text>
      <TouchableOpacity style={styles.loginBtn}>
        <Text
          style={{
            textAlign: 'center',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 15,
          }}
        >
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },
  signinImage: {
    width: '60%',
    height: '25%',
    alignSelf: 'center',
  },
  textInputs: {
    width: '60%',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 85,
    borderWidth: 1,
    borderColor: 'rgba(0,204,153,0.39)',
    marginTop: 50,
    padding: 5,
    borderRadius: 5,
  },
  icons: {
    //   marginLeft: 265
    paddingHorizontal: 10,
  },
  loginBtn: {
    backgroundColor: '#000',
    marginHorizontal: 85,
    marginTop: 30,
    width: '60%',
    padding: 10,
    borderRadius: 5,
  },
});
