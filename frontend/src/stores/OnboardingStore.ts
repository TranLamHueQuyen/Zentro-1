import AsyncStorage from '@react-native-async-storage/async-storage';
import {makeAutoObservable} from 'mobx';

export default class OnboardingStore {
  skipOnboarding = 'false';

  constructor() {
    makeAutoObservable(this);
  }
  async onChangeOnBoarding() {
    this.skipOnboarding = 'true';
  }
  async onChangeOnBoarding1() {
    const language = await AsyncStorage.getItem('Onboarding');
    if (language) this.skipOnboarding = language;
    return (this.skipOnboarding = JSON.stringify(language));
  }
}
