import React, { useLayoutEffect } from 'react';
import {
  View,
  Button,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import useAuth from '../hooks/useAuth';

const HomeScreen = ({ navigation }) => {
  const { user, logout } = useAuth();

  console.log(user);

  useLayoutEffect(() => {
    // navigation.setOptions({
    //   headerShown: false,
    // });
  });

  return (
    <SafeAreaView>
      {/* Header */}
      <View>
        <TouchableOpacity></TouchableOpacity>
      </View>
      <Text>home</Text>
      <Button title='Chat Screen' onPress={() => navigation.navigate('Chat')} />

      <Button title='Logout' onPress={logout} />
    </SafeAreaView>
  );
};

export default HomeScreen;
