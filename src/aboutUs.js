import background1 from './roadrunner1.jpg';

const title = "About us";
const details = 'We are located along Route 46 in the middle of the Nevada Desert.\n\nWe aim to serve the best in Desert Diner food in the state!';
const contact = 'If you wish to contact us:\nPhone: 00-555-1234\nEmail: diner@nevada.desert';

function textBlock(text, block) {
  const textBlock = document.createElement('div');
  textBlock.textContent = text;
  block.appendChild(textBlock);
}

export default function aboutUs() {
  const content = document.getElementById('content');
  const div = document.createElement('div');

  const header = document.createElement('h2');
  header.textContent = title;
  div.appendChild(header);

  textBlock(details, div);
  textBlock(contact, div);

  const bgImg = new Image();
  bgImg.src = background1;
  div.appendChild(bgImg);

  content.appendChild(div);

  return content;
};
