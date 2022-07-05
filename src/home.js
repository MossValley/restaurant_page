// import background1 from './roadrunner1.jpg';

// const title = "Nevada Desert Diner";
const reviewText = 'The best roadrunner this side of Texas - W.E. Coyote';

// const bg = background1;

function constructHome() {
  const content = document.getElementById('content');
  const review = document.createElement('div');
  review.innerHTML = 'some text';

  content.appendChild(review);

  return content;
};

export default function build() {
  document.body.appendChild(constructHome());
};
