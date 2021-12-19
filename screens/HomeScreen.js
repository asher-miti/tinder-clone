import React from 'react';
import { View, Button, Text } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>home</Text>
      <Button title='Chat Screen' onPress={() => navigation.navigate('Chat')} />
    </View>
  );
};

export default HomeScreen;
