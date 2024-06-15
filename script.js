const jokes = [
  {
    joke: "Why was the equal sign so humble? Because it knew it wasn't less than or greater than anyone else."

  },
  {
    joke: "Why do plants hate math? Because it gives them square roots."

  },
  {
    joke: "Why did the student do multiplication problems on the floor? The teacher told him not to use tables."

  },
  {
    joke: "Why was the math book sad? Because it had too many problems."

  },
  {
    joke: "Why don’t you do arithmetic in the jungle? Because if you add 4+4 you get ate!"

  },
  {
    joke: "Why was six afraid of seven? Because seven eight nine."

  },
  {
    joke: "Why is the obtuse triangle always so frustrated? Because it’s never right."

  },
  {
    joke: "What did the zero say to the eight? Nice belt!"

  },
  {
    joke: "How do you stay warm in any room? Just huddle in the corner, where it’s always 90 degrees."

  },
  {
    joke: "Why was the fraction nervous about marrying the decimal? Because he would have to convert."

  },
  {
    joke: "Why do mathematicians like parks? Because of all the natural logs."

  },
  {
    joke: "Why is the equal sign so reliable? Because it always gives the same answer."

  },
  {
    joke: "Why can’t you trust an atom? Because they make up everything."

  },
  {
    joke: "What do you get if you cross a math teacher and a clock? Arithma-ticks!"

  },
  {
    joke: "Why did the two fours skip lunch? They already eight."

  },
  {
    joke: "Why do geometry teachers love parks? Because of all the angles."

  },
  {
    joke: "Why did the math student look sad? He had too many variables to deal with."

  },
  {
    joke: "Why did the triangle make the square lose a fight? Because the triangle had a point."

  },
  {
    joke: "What is a math teacher’s favorite place in NYC? Times Square."

  },
  {
    joke: "Why did the number 10 always feel so calm? Because it was in its element."

  }
];

let i = 0;
function Next() {
  i++;
  if (i == jokes.length) {
    i = 0;
  }
  let heading = document.querySelector('.jokes')
  heading.textContent = jokes[i].joke;

}
function previous() {
  --i;
  if (i < 0) {
    i = jokes.length;
  }
  let heading = document.querySelector('.jokes')
  heading.textContent = jokes[i].joke;


}
