import background1 from './roadrunner1.jpg';

const title = "Nevada Desert Diner";
const reviewText = 'The best roadrunner this side of Texas - W.E. Coyote';

export default function constructHome() {
  const content = document.getElementById('content');
  console.log(content);
  const div = document.createElement('div');

  const header = document.createElement('h2');
  header.textContent = title;
  div.appendChild(header);

  const review = document.createElement('div');
  review.textContent = reviewText;
  div.appendChild(review);

  const bgImg = new Image();
  bgImg.src = background1;
  div.appendChild(bgImg);

  content.appendChild(div);

  return content;
};
