import { allRights } from './modules/allRights.js';
import { toogleMenu } from './modules/toogleMenu.js';

document.addEventListener('DOMContentLoaded', async () => {
  toogleMenu();
  allRights();
});
