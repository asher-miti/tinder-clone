import React, { useLayoutEffect } from 'react';
import { View, Text, Button, ImageBackground } from 'react-native';
import useAuth from '../hooks/useAuth';

const LoginScreen = ({ navigation }) => {
  const { signInWithGoogle, loading } = useAuth();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <View>
      <ImageBackground
        source={{
          uri: 'https://tinder.com/static/tinder.png',
        }}></ImageBackground>
    </View>
  );
};

export default LoginScreen;
