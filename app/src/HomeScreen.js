import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import { list } from './constants';
import CameraScreen from './CameraScreen';

export default function HomeScreen() {
  const [showCamera, setShowCamera] = useState(false);
  console.log('showCamera: ', showCamera);
  if (showCamera === true) return <CameraScreen></CameraScreen>;

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
        {list.map(item => {
          return (
            <View style={styles.button} key={item.id}>
              <Text style={{ fontSize: 20 }}>{item.name}</Text>
            </View>
          );
        })}
      </View>
      <TouchableOpacity
        onPress={() => {
          setShowCamera(true);
        }}
      >
        <View style={{ alignItems: 'center' }}>
          <View style={styles.bottom}>
            <Text style={{ fontSize: 30 }}>Camera</Text>
          </View>
        </View>
      </TouchableOpacity>
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
