import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

const body = document.body;
let isDarkMode = false;

if (
  window &&
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)')
) {
  isDarkMode = true;
}

isDarkMode && body.classList.add('dark-mode');

export default class NavBarComponent extends Component {
  @tracked darkMode = isDarkMode;

  @action toggleDarkMode() {
    if (this.darkMode) {
      body.classList.remove('dark-mode');
      this.darkMode = false;
    } else {
      body.classList.add('dark-mode');
      this.darkMode = true;
    }
  }
}
