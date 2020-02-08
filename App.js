import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Image
          style={{ width: 200, height: 200 }}
          blurRadius={3}
          source={{
            uri:
              'https://townsquare.media/site/341/files/2013/01/tumblr_m938623abn1qg98zeo1_5001.jpg'
          }}
        />
        <Text style={{ fontSize: 30 }}>Your progress: 35%</Text>
        <View style={styles.button}>
          <Text style={{ fontSize: 20 }}>Doge</Text>
        </View>
        <View style={styles.button}>
          <Text style={{ fontSize: 20 }}>Cate</Text>
        </View>
      </View>
      <View style={{ alignItems: 'center' }}>
        <View style={styles.bottom}>
          <Text style={{ fontSize: 30 }}>Camera</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: 'green',
    minWidth: 100,
    margin: 2
  },
  bottom: {
    backgroundColor: 'red',
    height: 75,
    width: 150,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
