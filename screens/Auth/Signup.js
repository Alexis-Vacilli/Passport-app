import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import Header from '../Header'

export default function Signup() {
  return (
    <View style={styles.screen}>
      <Image
        source={require('../../assets/images/log.png')}
        style={styles.signinImage}
      />
      <Text
        style={{
          fontSize: 25,
          alignSelf: 'center',
          fontWeight: 'bold',
          color: '#00CC99',
          
        }}
      >
        Sign up 
      </Text>
      <TouchableOpacity style={[styles.loginBtn]}>
        <Text
          style={{
            textAlign: 'center',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 15,
          }}
        >
          <Entypo name='facebook-with-circle' size={20} color='white'/>
          <Text> Continue with facebook</Text>
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Btn}>
        <Text
          style={{
            textAlign: 'center',
            color: 'rgba(0,0,0,.5)',
            fontWeight: 'bold',
            fontSize: 15,
          }}
        >
          I'll use email or phone
        </Text>
      </TouchableOpacity>
      <View style={styles.social}>
        <Entypo
          name='facebook-with-circle'
          size={24}
          color='#2f55a4'
          style={{ padding: 5 }}
        />
        <Entypo
          name='twitter-with-circle'
          size={24}
          color='#00acee'
          style={{ padding: 5 }}
        />
        <Entypo
          name='google--with-circle'
          size={24}
          color='#de5246'
          style={{ padding: 5 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  signinImage: {
    width: '60%',
    height: '25%',
    alignSelf: 'center',
  },
  loginBtn: {
    backgroundColor: '#2f55a4',
    marginHorizontal: 85,
    marginTop: 30,
    width: '65%',
    padding: 10,
    borderRadius: 5,
  },
  Btn: {
    backgroundColor: 'white',
    marginHorizontal: 85,
    marginTop: 30,
    width: '65%',
    padding: 10,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,.5)',
    borderRadius: 5,
  },
  social: {
    flexDirection: 'row',
    marginHorizontal: 155,
    marginTop: 30
  },
});
