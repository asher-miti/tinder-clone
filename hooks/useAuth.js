import React, {
  useContext,
  createContext,
  useState,
  useEffect,
  useMemo,
} from 'react';
import * as Google from 'expo-google-app-auth';
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
  signOut,
} from '@firebase/auth';
import { auth } from '../firebase';

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
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [loadingInitial, setLoadingInitial] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(
    () =>
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        } else {
          setUser(null);
        }

        setLoadingInitial(false);
      }),
    []
  );

  const logout = () => {
    setLoading(true);

    signOut(auth)
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  };

  const signInWithGoogle = async () => {
    setLoading(true);
    await Google.logInAsync(config)
      .then(async (logInResult) => {
        if (logInResult.type === 'success') {
          const { idToken, accessToken } = logInResult;
          const credential = GoogleAuthProvider.credential(
            idToken,
            accessToken
          );

          await signInWithCredential(auth, credential);
        }

        return Promise.reject();
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  };

  const memoedValue = useMemo(
    () => ({
      user,
      loading,
      error,
      signInWithGoogle,
      logout,
    }),
    [user, loading, error]
  );

  return (
    <AuthContext.Provider value={memoedValue}>
      {!loadingInitial && children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
