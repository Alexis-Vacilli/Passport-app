import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import { icons, SIZES, COLORS, images } from '../constants'


export default function Home() {
  function renderHeader() {
    return (
      <View style={{ flexDirection: 'row', height: 80, marginTop: 10 }}>
        <TouchableOpacity
          style={{
            width: 50,
            paddingLeft: SIZES.padding * 2,
            justifyContent: 'center',
          }}
        >
          <Image
            source={icons.menu}
            resizeMode='contain'
            style={{
              width: 30,
              height: 30,
              tintColor: COLORS.secondary
            }}
          />
        </TouchableOpacity>

        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
          <View
            style={{
              width: '70%',
              height: '60%',
              backgroundColor: COLORS.lightGray3,
              alignItems: 'center',  
              justifyContent: 'center',
              borderRadius: 25,
            }}
          >
            <Text style={{fontSize: 20, color: '#000', fontWeight: 'bold'}}>Home</Text>
          </View>
        </View>

        <TouchableOpacity
          style={{
            width: 50,
            paddingRight: SIZES.padding * 2,
            justifyContent: 'center',
          }}
        >
          <Image
            source={icons.notification}
            resizeMode='contain'
            style={{
              width: 30,
              height: 30,
              tintColor: COLORS.secondary
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
        {renderHeader()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    }
});
