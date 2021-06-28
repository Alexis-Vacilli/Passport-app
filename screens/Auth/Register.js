import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


export default function Register() {
  return (
    <View style={styles.screen}>
      <View style={styles.textInputs}>
        <MaterialIcons
          name='drive-file-rename-outline'
          size={15}
          color='rgba(0,0,0,.3)'
          style={styles.icons}
        />
        <TextInput placeholder='Name' style={{ color: 'rgba(0,0,0,0.5)' }} />
      </View>
      <View style={styles.textInputs}>
        <AntDesign
          name='mail'
          size={15}
          color='rgba(0,0,0,.3)'
          style={styles.icons}
        />
        <TextInput placeholder='Email' style={{ color: 'rgba(0,0,0,0.5)' }} />
      </View>
      <View style={[styles.textInputs]}>
        <AntDesign
          name='lock'
          size={15}
          color='rgba(0,0,0,.3)'
          style={styles.icons}
        />
        <TextInput placeholder='Password' />
      </View>
      <TouchableOpacity style={styles.RegisterBtn}>
        <Text
          style={{
            textAlign: 'center',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 15,
          }}
        >
          Register
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
  textInputs: {
    width: '60%',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 85,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    marginTop: 50,
    padding: 5,
    borderRadius: 5,
  },
  icons: {
    //   marginLeft: 265
    paddingHorizontal: 10,
  },
  RegisterBtn: {
    backgroundColor: '#00CC99',
    marginHorizontal: 85,
    marginTop: 30,
    width: '60%',
    padding: 10,
    borderRadius: 5,
  },
  social: {
    flexDirection: 'row',
    marginHorizontal: 155,
    marginTop: 30
  },
});
