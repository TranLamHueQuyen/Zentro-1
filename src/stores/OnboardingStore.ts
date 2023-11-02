import {makeAutoObservable} from 'mobx';

export default class OnboardingStore {
  skipOnboarding = false;

  constructor() {
    makeAutoObservable(this);
  }

  onChangeOnBoarding() {
    this.skipOnboarding = true;
  }
}
