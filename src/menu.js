import background1 from './roadrunner1.jpg';

const title = "Menu";
const menuArray = [
  {
    item: 'Road Runner',
    description: 'Perpared el-dynamite style to your choice of rare, medium, or well done. Comes with a side of french fries or salad',
    price: '$34.99',
  },
  {
    item: 'Lemon Lizard',
    description: 'A sun-grilled lizzard in our special lime marinade, served on rice',
    price: '$12.99',
  },
  {
    item: 'Wined Warthog',
    description: 'A freshly-runover warthog straight from the pavement. Comes with a side of french fries or salad',
    price: '$25.99',
  },
];

function addItemComponent(comp, className) {
  const itemComp = document.createElement('div');
  itemComp.classList = className;
  itemComp.textContent = comp;
  return itemComp;
}

function addMenuItem(item) {
  const menuDiv = document.createElement('div')
  menuDiv.classList = 'menuItem';

  const itemComp = addItemComponent(item.item, 'item');
  const descriptionComp = addItemComponent(item.description, 'description');
  const priceComp = addItemComponent(item.price, 'price');
  menuDiv.appendChild(itemComp);
  menuDiv.appendChild(descriptionComp);
  menuDiv.appendChild(priceComp);
  return menuDiv;
}

export default function menu() {
  const content = document.getElementById('content');
  const div = document.createElement('div');

  const header = document.createElement('h2');
  header.textContent = title;
  div.appendChild(header);

  const menuItems = document.createElement('div');
  menuItems.id = 'menuList';

  menuArray.forEach(item => {
    const menuItem = addMenuItem(item);
    menuItems.appendChild(menuItem);
  });
  div.appendChild(menuItems);

  const bgImg = new Image();
  bgImg.src = background1;
  div.appendChild(bgImg);

  content.appendChild(div);

  return content;
};
