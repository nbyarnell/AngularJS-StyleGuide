var module = angular.module('App.User', ['ui.router', 'ui.validate']);

module.factory( 'RegistrationWizard', () => {
  class RegistrationWizard {
    constructor(user) {
      this.user = user;
    }

    stepsCompleted(stepCount) {
      this['step'+stepCount]();
    }

    step1() {
      return this.user.valid('name') && this.user.valid('email');
    }

    step2() {
      // ...
    }

    step3() {
      return this.user.valid('password');
    }
  }

  return RegistrationWizard;
});
