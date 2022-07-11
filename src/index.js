import './style.css';
import home from './home';
import about from './aboutUs';
import menu from './menu';

function destroyView() {
  while (content.lastChild) {
    content.removeChild(content.lastChild);
  };
}

function switchView(view) {
  switch (view) {
    case 'home':
      home();
      break;
    case 'about':
      about();
      break;
    case 'menu':
      menu();
      break;
    default:
      home();
  };
}

function defaultView() {
  menu();
}

function createPage() {
  const topLevel = document.createElement('div');
  topLevel.id = "top";
  document.body.appendChild(topLevel);

  const tabRows = document.createElement('div');
  const tabNames = ['home', 'about', 'menu'];

  tabNames.forEach((name) => {
    const tab = document.createElement('button');
    tab.textContent = name;
    tab.id = name;
    tab.addEventListener('click', () => {
      console.log(tab.id);
      destroyView();
      switchView(tab.id);
    })
    tabRows.appendChild(tab);
  });
  topLevel.appendChild(tabRows);

  const content = document.createElement('div');
  content.id = 'content';
  topLevel.appendChild(content);

  defaultView();
}

createPage();
