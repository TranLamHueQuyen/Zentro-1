import {StyleSheet, Text, View} from 'react-native';
import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Config} from '@/config';
import {replace} from '@/navigation/NavigationUtils';

export const AuthContext = createContext<{
  isLoading: boolean;
  newData: string | undefined;
  username: string | null;
  userToken: string;
  avatarUser: string | null;
  idUser: string | null;
  login: (email: string, password: string) => void;
  logout: () => void;
}>({
  isLoading: false,
  newData: undefined,
  username: null,
  userToken: '',
  avatarUser: null,
  idUser: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({children}: any) => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState<string>('');
  const [avatarUser, setAvatarUser] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [idUser, setIdUser] = useState<string | null>(null);
  const [newData, setNewData] = useState();

  const login = (email: string, password: string) => {
    setIsLoading(true);

    axios
      .post(`${Config.API_URL}/api/login`, {
        email,
        password,
      })
      .then((res) => {
        AsyncStorage.setItem('access_token', res.data.access_token);
        AsyncStorage.setItem('idUser', res.data.user._id);
        AsyncStorage.setItem('avatarUser', res.data.user.avatar);
        AsyncStorage.setItem('username', res.data.user.username);
        setNewData(res.data.user);
        setIdUser(res.data.user._id);
        setUserToken(res.data.access_token);
        setAvatarUser(res.data.user.avatar);
        setUsername(res.data.user.username);
        isLoggedIn();
      })
      .catch((err) => {
        console.log(err);
      });
    setIsLoading(false);
  };
  const logout = () => {
    setUserToken('');
    AsyncStorage.removeItem('access_token');
    AsyncStorage.removeItem('idUser');
    AsyncStorage.removeItem('avatarUser');
    AsyncStorage.removeItem('username');
    setIsLoading(false);
  };
  const isLoggedIn = async () => {
    setIsLoading(true);
    try {
      const userToken = await AsyncStorage.getItem('access_token');
      const idUser = await AsyncStorage.getItem('idUser');
      const avatar = await AsyncStorage.getItem('avatarUser');
      const username = await AsyncStorage.getItem('username');
      setIdUser(idUser);
      if (userToken !== null) {
        setUserToken(userToken);
      }

      setAvatarUser(avatar);
      setUsername(username);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    isLoggedIn();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        isLoading,
        newData,
        username,
        userToken,
        avatarUser,
        idUser,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
