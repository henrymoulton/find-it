import React, { useState, useEffect } from 'react';
import { Camera } from 'expo-camera';
import { View, TouchableOpacity, Text } from 'react-native';

import { list } from './constants';

export default function CameraScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Camera
        style={{ flex: 1 }}
        type={type}
        takePictureAsync={() => console.log('picture')}
        ref={ref => {
          this.camera = ref;
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row'
          }}
        >
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: 'flex-end',
              alignItems: 'center'
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
              {' '}
              Flip{' '}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              alignSelf: 'flex-end',
              alignItems: 'center'
            }}
            onPress={async () => {
              let photo = await this.camera.takePictureAsync();
              console.log('photo: ', photo);
            }}
          >
            <Text style={{ fontSize: 18, marginBottom: 30, color: 'white' }}>
              Take Picture
            </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}
