import {StyleSheet, Text, View} from 'react-native';
import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Config} from '@/config';
import {replace} from '@/navigation/NavigationUtils';

export const AuthContext = createContext<{
  isLoading: boolean;
  status: boolean;
  newData: string | undefined;
  fullName: string | null;
  userToken: string;
  avatarUser: string | null;
  idUser: string | null;
  login: (email: string, password: string) => void;
  logout: () => void;
}>({
  isLoading: false,
  status: false,
  newData: undefined,
  fullName: null,
  userToken: '',
  avatarUser: null,
  idUser: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({children}: any) => {
  const [isLoading, setIsLoading] = useState(true);
  const [status, setStatus] = useState(false);
  const [userToken, setUserToken] = useState<string>('');
  const [avatarUser, setAvatarUser] = useState<string | null>(null);
  const [fullName, setFullName] = useState<string | null>(null);
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
        AsyncStorage.setItem('full_name', res.data.user.full_name);
        setNewData(res.data.user);
        setIdUser(res.data.user._id);
        setUserToken(res.data.access_token);
        setAvatarUser(res.data.user.avatar);
        setFullName(res.data.user.full_name);
        isLoggedIn();
        setStatus(false);
      })
      .catch((err) => {
        setStatus(false);
        console.log(err);
      })
      .finally(() => setStatus(true));
    setIsLoading(false);
  };
  const logout = () => {
    setUserToken('');
    AsyncStorage.removeItem('access_token');
    AsyncStorage.removeItem('idUser');
    AsyncStorage.removeItem('avatarUser');
    AsyncStorage.removeItem('full_name');
    setIsLoading(false);
  };
  const isLoggedIn = async () => {
    setIsLoading(true);
    try {
      const userToken = await AsyncStorage.getItem('access_token');
      const idUser = await AsyncStorage.getItem('idUser');
      const avatar = await AsyncStorage.getItem('avatarUser');
      const fullName = await AsyncStorage.getItem('full_name');
      setIdUser(idUser);
      if (userToken !== null) {
        setUserToken(userToken);
      }

      setAvatarUser(avatar);
      setFullName(fullName);
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
        status,
        newData,
        fullName,
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
