import React, { useContext, createContext } from 'react';
import * as Google from 'expo-google-app-auth';

const AuthContext = createContext({});

const config = {
  androidClientId:
    '139111823956-j0tk5te0u0rpnpcg092b4muv40gcbr8b.apps.googleusercontent.com',
  iosClientId:
    '139111823956-oktuqitcgi2jc9152t0fv92l1uabr8mg.apps.googleusercontent.com',
  scopes: ['profile', 'email'],
  permissions: ['public_profile', 'email', 'gender', 'location'],
};

export const AuthProvider = ({ children }) => {
  const signInWithGoogle = async () => {
    Google.logInAsync(config).then(async (logInResult) => {
      if (logInResult.type === 'success') {
        //login
      }
    });
  };
  return (
    <AuthContext.Provider value={{ user: null }}>
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
