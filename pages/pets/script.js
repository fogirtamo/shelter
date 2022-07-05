const pets = `[
  {
    "name": "Jennifer",
    "img": "../../assets/images/jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Sophia",
    "img": "../../assets/images/sophia.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Woody",
    "img": "../../assets/images/woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "name": "Scarlett",
    "img": "../../assets/images/scarlett.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Katrine",
    "img": "../../assets/images/katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Timmy",
    "img": "../../assets/images/timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "name": "Freddie",
    "img": "../../assets/images/freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Charly",
    "img": "../../assets/images/charly.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  }
]`;
const petsJS = JSON.parse(pets);

// OUR PETS PAGE

// Burger menu 

const menuIcon = document.querySelector('.burger-menu__button');
const navbar = document.querySelector('.nav-menu');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('.body');
const helper = document.querySelector('.helper');
const contacts = document.querySelector('.contacts');

menuIcon.addEventListener('click', () => {
	menuIcon.classList.toggle('burger-menu__button__active');
	navbar.classList.toggle('nav-menu__active');
	overlay.classList.toggle('overlay_active');
	body.classList.toggle('hidden');
});
overlay.addEventListener('click', () => {
	menuIcon.classList.toggle('burger-menu__button__active');
	navbar.classList.toggle('nav-menu__active');
	overlay.classList.toggle('overlay_active');
	body.classList.toggle('hidden');
});
helper.addEventListener('click', () => {
	menuIcon.classList.toggle('burger-menu__button__active');
	navbar.classList.toggle('nav-menu__active');
	overlay.classList.toggle('overlay_active');
	body.classList.toggle('hidden');
});
contacts.addEventListener('click', () => {
	menuIcon.classList.toggle('burger-menu__button__active');
	navbar.classList.toggle('nav-menu__active');
	overlay.classList.toggle('overlay_active');
	body.classList.toggle('hidden');
});

// Pagination

const middleWindow = window.matchMedia("(min-width: 768px) and (max-width: 1279px)").matches;
const littleWindow = window.matchMedia("(min-width: 320px) and (max-width: 767px)").matches;

const slideOne = document.querySelectorAll('.slider_slide')[0];
const slideTwo = document.querySelectorAll('.slider_slide')[1];
const slideThree = document.querySelectorAll('.slider_slide')[2];
const slideFour = document.querySelectorAll('.slider_slide')[3];
const slideFive = document.querySelectorAll('.slider_slide')[4];
const slideSix = document.querySelectorAll('.slider_slide')[5];
const slideSeven = document.querySelectorAll('.slider_slide')[6];
const slideEight = document.querySelectorAll('.slider_slide')[7];

const slider = document.querySelector('.slider');
const arrowToNextPage = document.querySelectorAll('.bott__arrows__enable')[0];
const arrowToLastPage = document.querySelectorAll('.bott__arrows__enable')[1];
const numberPage = document.querySelector('.bott__arrows__active');
const arrowToPreviousPage = document.querySelectorAll('.bott__arrows__disable')[1];
const arrowToFirstPage = document.querySelectorAll('.bott__arrows__disable')[0];

let pageCounter = 1;
let slidePages = [];


document.addEventListener('DOMContentLoaded', () => {
  for (let i = 0; i != 8; i++) {
    let slidePagesSet = new Set();
    for (let j = 0; slidePagesSet.size != 8; j++) {
      let randomInt = Math.floor((Math.random() * 8));
      if (randomInt == 8) randomInt = 7;
      slidePagesSet.add(petsJS[randomInt]);
    }
    
    slidePages.push(Array.from(slidePagesSet));
    slidePagesSet = new Set();
  };

  if (middleWindow == false && littleWindow == false) {
    slideOne.innerHTML = `<img src="${slidePages[pageCounter - 1][0].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][0].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
    slideTwo.innerHTML = `<img src="${slidePages[pageCounter - 1][1].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][1].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
    slideThree.innerHTML = `<img src="${slidePages[pageCounter - 1][2].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][2].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
    slideFour.innerHTML = `<img src="${slidePages[pageCounter - 1][3].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][3].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
    slideFive.innerHTML = `<img src="${slidePages[pageCounter - 1][4].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][4].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
    slideSix.innerHTML = `<img src="${slidePages[pageCounter - 1][5].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][5].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
    slideSeven.innerHTML = `<img src="${slidePages[pageCounter - 1][6].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][6].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
    slideEight.innerHTML = `<img src="${slidePages[pageCounter - 1][7].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][7].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
  };

  if (middleWindow == true) {
    let generalArrSLide = [].concat(slidePages[0], slidePages[1], slidePages[2] ,slidePages[3], slidePages[4], slidePages[5], slidePages[6], slidePages[7]);
    for (let i = 0; i != 8; i++) {
      let setMiddleSlide = [];
      for (let j = 0; setMiddleSlide.length != 6; j++) {
        if (setMiddleSlide.includes(generalArrSLide[j])) continue;
        setMiddleSlide.push(generalArrSLide[j]);
        generalArrSLide.splice(j, 1);
      }
      slidePages[i] = setMiddleSlide;
    };
    
    slideOne.innerHTML = `<img src="${slidePages[pageCounter - 1][0].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][0].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
    slideTwo.innerHTML = `<img src="${slidePages[pageCounter - 1][1].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][1].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
    slideThree.innerHTML = `<img src="${slidePages[pageCounter - 1][2].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][2].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
    slideFour.innerHTML = `<img src="${slidePages[pageCounter - 1][3].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][3].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
    slideFive.innerHTML = `<img src="${slidePages[pageCounter - 1][4].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][4].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
    slideSix.innerHTML = `<img src="${slidePages[pageCounter - 1][5].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][5].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
  };

  if (littleWindow == true) {
    let generalArrSLide = [].concat(slidePages[0], slidePages[1], slidePages[2] ,slidePages[3], slidePages[4], slidePages[5], slidePages[6], slidePages[7]);
    for (let i = 0; i != 16; i++) {
      let setMiddleSlide = [];
      for (let j = 0; setMiddleSlide.length != 3; j++) {
        if (setMiddleSlide.includes(generalArrSLide[j])) continue;
        setMiddleSlide.push(generalArrSLide[j]);
        generalArrSLide.splice(j, 1);
      }
      slidePages[i] = setMiddleSlide;
    };
    slideOne.innerHTML = `<img src="${slidePages[pageCounter - 1][0].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][0].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
    slideTwo.innerHTML = `<img src="${slidePages[pageCounter - 1][1].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][1].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
    slideThree.innerHTML = `<img src="${slidePages[pageCounter - 1][2].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][2].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
    };
});


arrowToNextPage.addEventListener('click', () => {
  pageCounter++;

  slider.classList.add('slider_next');                    // НЕ РАБОТАЕТ!!!! только первая страница

  if (pageCounter > 1) {
    arrowToPreviousPage.classList.add('bott__arrows__enable');
    arrowToFirstPage.classList.add('bott__arrows__enable');
    arrowToPreviousPage.classList.remove('bott__arrows__disable');
    arrowToFirstPage.classList.remove('bott__arrows__disable');
  };

  if (middleWindow == false && littleWindow == false) {
    if (pageCounter > 6) pageCounter = 6;
    if (pageCounter == 6) {
      arrowToNextPage.classList.remove('bott__arrows__enable');
      arrowToLastPage.classList.remove('bott__arrows__enable');
      arrowToNextPage.classList.add('bott__arrows__disable');
      arrowToLastPage.classList.add('bott__arrows__disable');
    };

    slideOne.innerHTML = `<img src="${slidePages[pageCounter - 1][0].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][0].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
    slideTwo.innerHTML = `<img src="${slidePages[pageCounter - 1][1].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][1].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
    slideThree.innerHTML = `<img src="${slidePages[pageCounter - 1][2].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][2].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
    slideFour.innerHTML = `<img src="${slidePages[pageCounter - 1][3].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][3].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
    slideFive.innerHTML = `<img src="${slidePages[pageCounter - 1][4].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][4].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
    slideSix.innerHTML = `<img src="${slidePages[pageCounter - 1][5].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][5].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
    slideSeven.innerHTML = `<img src="${slidePages[pageCounter - 1][6].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][6].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
    slideEight.innerHTML = `<img src="${slidePages[pageCounter - 1][7].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][7].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
  };

  if (middleWindow == true) {
    if (pageCounter > 8) pageCounter = 8;
    if (pageCounter == 8) {
      arrowToNextPage.classList.remove('bott__arrows__enable');
      arrowToLastPage.classList.remove('bott__arrows__enable');
      arrowToNextPage.classList.add('bott__arrows__disable');
      arrowToLastPage.classList.add('bott__arrows__disable');
    };

    slideOne.innerHTML = `<img src="${slidePages[pageCounter - 1][0].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][0].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
    slideTwo.innerHTML = `<img src="${slidePages[pageCounter - 1][1].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][1].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
    slideThree.innerHTML = `<img src="${slidePages[pageCounter - 1][2].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][2].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
    slideFour.innerHTML = `<img src="${slidePages[pageCounter - 1][3].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][3].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
    slideFive.innerHTML = `<img src="${slidePages[pageCounter - 1][4].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][4].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
    slideSix.innerHTML = `<img src="${slidePages[pageCounter - 1][5].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][5].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
  };

  if (littleWindow == true) {
    if (pageCounter > 16) pageCounter = 16;
    if (pageCounter == 16) {
      arrowToNextPage.classList.remove('bott__arrows__enable');
      arrowToLastPage.classList.remove('bott__arrows__enable');
      arrowToNextPage.classList.add('bott__arrows__disable');
      arrowToLastPage.classList.add('bott__arrows__disable');
    };

    slideOne.innerHTML = `<img src="${slidePages[pageCounter - 1][0].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][0].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
    slideTwo.innerHTML = `<img src="${slidePages[pageCounter - 1][1].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][1].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
    slideThree.innerHTML = `<img src="${slidePages[pageCounter - 1][2].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][2].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
  };

  numberPage.innerHTML = `${pageCounter}`;
});

arrowToLastPage.addEventListener('click', () => {
  
  if (middleWindow == false && littleWindow == false) {
    pageCounter = 6;
    if (pageCounter > 6) pageCounter = 6;
    if (pageCounter == 6) {
      arrowToNextPage.classList.remove('bott__arrows__enable');
      arrowToLastPage.classList.remove('bott__arrows__enable');
      arrowToNextPage.classList.add('bott__arrows__disable');
      arrowToLastPage.classList.add('bott__arrows__disable');
    };
    if (pageCounter > 1) {
      arrowToPreviousPage.classList.add('bott__arrows__enable');
      arrowToFirstPage.classList.add('bott__arrows__enable');
      arrowToPreviousPage.classList.remove('bott__arrows__disable');
      arrowToFirstPage.classList.remove('bott__arrows__disable');
    };
    slideOne.innerHTML = `<img src="${slidePages[pageCounter - 1][0].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][0].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
    slideTwo.innerHTML = `<img src="${slidePages[pageCounter - 1][1].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][1].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
    slideThree.innerHTML = `<img src="${slidePages[pageCounter - 1][2].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][2].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
    slideFour.innerHTML = `<img src="${slidePages[pageCounter - 1][3].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][3].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
    slideFive.innerHTML = `<img src="${slidePages[pageCounter - 1][4].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][4].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
    slideSix.innerHTML = `<img src="${slidePages[pageCounter - 1][5].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][5].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
    slideSeven.innerHTML = `<img src="${slidePages[pageCounter - 1][6].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][6].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
    slideEight.innerHTML = `<img src="${slidePages[pageCounter - 1][7].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][7].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
  };

  if (middleWindow == true) {
    pageCounter = 8;
    if (pageCounter > 8) pageCounter = 8;
    if (pageCounter == 8) {
      arrowToNextPage.classList.remove('bott__arrows__enable');
      arrowToLastPage.classList.remove('bott__arrows__enable');
      arrowToNextPage.classList.add('bott__arrows__disable');
      arrowToLastPage.classList.add('bott__arrows__disable');
    };
    if (pageCounter > 1) {
      arrowToPreviousPage.classList.add('bott__arrows__enable');
      arrowToFirstPage.classList.add('bott__arrows__enable');
      arrowToPreviousPage.classList.remove('bott__arrows__disable');
      arrowToFirstPage.classList.remove('bott__arrows__disable');
    };

    slideOne.innerHTML = `<img src="${slidePages[pageCounter - 1][0].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][0].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
    slideTwo.innerHTML = `<img src="${slidePages[pageCounter - 1][1].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][1].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
    slideThree.innerHTML = `<img src="${slidePages[pageCounter - 1][2].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][2].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
    slideFour.innerHTML = `<img src="${slidePages[pageCounter - 1][3].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][3].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
    slideFive.innerHTML = `<img src="${slidePages[pageCounter - 1][4].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][4].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
    slideSix.innerHTML = `<img src="${slidePages[pageCounter - 1][5].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][5].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
  };

  if (littleWindow == true) {
    pageCounter = 16;
    if (pageCounter > 16) pageCounter = 16;
    if (pageCounter == 16) {
      arrowToNextPage.classList.remove('bott__arrows__enable');
      arrowToLastPage.classList.remove('bott__arrows__enable');
      arrowToNextPage.classList.add('bott__arrows__disable');
      arrowToLastPage.classList.add('bott__arrows__disable');
    };
    if (pageCounter > 1) {
      arrowToPreviousPage.classList.add('bott__arrows__enable');
      arrowToFirstPage.classList.add('bott__arrows__enable');
      arrowToPreviousPage.classList.remove('bott__arrows__disable');
      arrowToFirstPage.classList.remove('bott__arrows__disable');
    };

    slideOne.innerHTML = `<img src="${slidePages[pageCounter - 1][0].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][0].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
    slideTwo.innerHTML = `<img src="${slidePages[pageCounter - 1][1].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][1].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
    slideThree.innerHTML = `<img src="${slidePages[pageCounter - 1][2].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][2].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
  };

  numberPage.innerHTML = `${pageCounter}`;
});

arrowToPreviousPage.addEventListener('click', () => {
  pageCounter--;

  numberPage.innerHTML = `${pageCounter}`;

  if (middleWindow == false && littleWindow == false) {
    if (pageCounter < 6) {
      arrowToNextPage.classList.remove('bott__arrows__disable');
      arrowToLastPage.classList.remove('bott__arrows__disable');
      arrowToNextPage.classList.add('bott__arrows__enable');
      arrowToLastPage.classList.add('bott__arrows__enable');
    };
    if (pageCounter < 1) pageCounter = 1;
    if (pageCounter == 1) {
      arrowToPreviousPage.classList.add('bott__arrows__disable');
      arrowToFirstPage.classList.add('bott__arrows__disable');
      arrowToPreviousPage.classList.remove('bott__arrows__enable');
      arrowToFirstPage.classList.remove('bott__arrows__enable');
    };

    slideOne.innerHTML = `<img src="${slidePages[pageCounter - 1][0].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][0].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
    slideTwo.innerHTML = `<img src="${slidePages[pageCounter - 1][1].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][1].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
    slideThree.innerHTML = `<img src="${slidePages[pageCounter - 1][2].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][2].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
    slideFour.innerHTML = `<img src="${slidePages[pageCounter - 1][3].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][3].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
    slideFive.innerHTML = `<img src="${slidePages[pageCounter - 1][4].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][4].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
    slideSix.innerHTML = `<img src="${slidePages[pageCounter - 1][5].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][5].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
    slideSeven.innerHTML = `<img src="${slidePages[pageCounter - 1][6].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][6].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
    slideEight.innerHTML = `<img src="${slidePages[pageCounter - 1][7].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][7].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
  };

  if (middleWindow == true) {
    if (pageCounter < 8) {
      arrowToNextPage.classList.remove('bott__arrows__disable');
      arrowToLastPage.classList.remove('bott__arrows__disable');
      arrowToNextPage.classList.add('bott__arrows__enable');
      arrowToLastPage.classList.add('bott__arrows__enable');
    };
    if (pageCounter < 1) pageCounter = 1;
    if (pageCounter == 1) {
      arrowToPreviousPage.classList.add('bott__arrows__disable');
      arrowToFirstPage.classList.add('bott__arrows__disable');
      arrowToPreviousPage.classList.remove('bott__arrows__enable');
      arrowToFirstPage.classList.remove('bott__arrows__enable');
    };

    slideOne.innerHTML = `<img src="${slidePages[pageCounter - 1][0].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][0].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
    slideTwo.innerHTML = `<img src="${slidePages[pageCounter - 1][1].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][1].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
    slideThree.innerHTML = `<img src="${slidePages[pageCounter - 1][2].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][2].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
    slideFour.innerHTML = `<img src="${slidePages[pageCounter - 1][3].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][3].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
    slideFive.innerHTML = `<img src="${slidePages[pageCounter - 1][4].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][4].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
    slideSix.innerHTML = `<img src="${slidePages[pageCounter - 1][5].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][5].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
  };

  if (littleWindow == true) {
    if (pageCounter < 16) {
      arrowToNextPage.classList.remove('bott__arrows__disable');
      arrowToLastPage.classList.remove('bott__arrows__disable');
      arrowToNextPage.classList.add('bott__arrows__enable');
      arrowToLastPage.classList.add('bott__arrows__enable');
    };
    if (pageCounter < 1) pageCounter = 1;
    if (pageCounter == 1) {
      arrowToPreviousPage.classList.add('bott__arrows__disable');
      arrowToFirstPage.classList.add('bott__arrows__disable');
      arrowToPreviousPage.classList.remove('bott__arrows__enable');
      arrowToFirstPage.classList.remove('bott__arrows__enable');
    };

    slideOne.innerHTML = `<img src="${slidePages[pageCounter - 1][0].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][0].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
    slideTwo.innerHTML = `<img src="${slidePages[pageCounter - 1][1].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][1].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
    slideThree.innerHTML = `<img src="${slidePages[pageCounter - 1][2].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][2].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
  }
});

arrowToFirstPage.addEventListener('click', () => {
  pageCounter = 1;

  if (pageCounter < 1) pageCounter = 1;
  if (pageCounter == 1) {
    arrowToPreviousPage.classList.add('bott__arrows__disable');
    arrowToFirstPage.classList.add('bott__arrows__disable');
    arrowToPreviousPage.classList.remove('bott__arrows__enable');
    arrowToFirstPage.classList.remove('bott__arrows__enable');
  };
  if (middleWindow == false && littleWindow == false) {
    if (pageCounter < 6) {
      arrowToNextPage.classList.remove('bott__arrows__disable');
      arrowToLastPage.classList.remove('bott__arrows__disable');
      arrowToNextPage.classList.add('bott__arrows__enable');
      arrowToLastPage.classList.add('bott__arrows__enable');
    };

    slideOne.innerHTML = `<img src="${slidePages[pageCounter - 1][0].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][0].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
    slideTwo.innerHTML = `<img src="${slidePages[pageCounter - 1][1].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][1].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
    slideThree.innerHTML = `<img src="${slidePages[pageCounter - 1][2].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][2].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
    slideFour.innerHTML = `<img src="${slidePages[pageCounter - 1][3].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][3].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
    slideFive.innerHTML = `<img src="${slidePages[pageCounter - 1][4].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][4].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
    slideSix.innerHTML = `<img src="${slidePages[pageCounter - 1][5].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][5].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
    slideSeven.innerHTML = `<img src="${slidePages[pageCounter - 1][6].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][6].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
    slideEight.innerHTML = `<img src="${slidePages[pageCounter - 1][7].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][7].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
  };

  if (middleWindow == true) {
    if (pageCounter < 8) {
      arrowToNextPage.classList.remove('bott__arrows__disable');
      arrowToLastPage.classList.remove('bott__arrows__disable');
      arrowToNextPage.classList.add('bott__arrows__enable');
      arrowToLastPage.classList.add('bott__arrows__enable');
    };

    slideOne.innerHTML = `<img src="${slidePages[pageCounter - 1][0].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][0].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
    slideTwo.innerHTML = `<img src="${slidePages[pageCounter - 1][1].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][1].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
    slideThree.innerHTML = `<img src="${slidePages[pageCounter - 1][2].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][2].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
    slideFour.innerHTML = `<img src="${slidePages[pageCounter - 1][3].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][3].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
    slideFive.innerHTML = `<img src="${slidePages[pageCounter - 1][4].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][4].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
    slideSix.innerHTML = `<img src="${slidePages[pageCounter - 1][5].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][5].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
  };

  if (littleWindow == true) {
    if (pageCounter < 16) {
      arrowToNextPage.classList.remove('bott__arrows__disable');
      arrowToLastPage.classList.remove('bott__arrows__disable');
      arrowToNextPage.classList.add('bott__arrows__enable');
      arrowToLastPage.classList.add('bott__arrows__enable');
    };

    slideOne.innerHTML = `<img src="${slidePages[pageCounter - 1][0].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][0].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
    slideTwo.innerHTML = `<img src="${slidePages[pageCounter - 1][1].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][1].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
    slideThree.innerHTML = `<img src="${slidePages[pageCounter - 1][2].img}">
    <div class="slider_slide_name">${slidePages[pageCounter - 1][2].name}</div>
    <div class="slider_slide_learn">Learn more</div>`;
  };

  numberPage.innerHTML = `${pageCounter}`;
});


// POPUP

const popup = document.querySelector('.popup');
const popupPet = document.querySelector('.popup_pet');
const overlayPopup = document.querySelector('.overlay_pets');
const popupBott = document.querySelector('.popup_bott__obj');



slideOne.addEventListener('click', () => {
  popupPet.innerHTML = `<div class="popup_pet__img">
          <img src="${slidePages[pageCounter - 1][0].img}">
      </div>
      <div class="popup_pet__info">
          <div class="popup_pet__name">${slidePages[pageCounter - 1][0].name}</div>
          <div class="popup_pet__type">${slidePages[pageCounter - 1][0].type} - ${slidePages[pageCounter - 1][0].breed}</div>
          <div class="popup_pet__description">${slidePages[pageCounter - 1][0].description}</div>
          <div class="popup_pet__features">
              <ul>
                  <li><span class="feature">Age:</span> <span class="feature_s">${slidePages[pageCounter - 1][0].age}</span> </li>
                  <li><span class="feature">Inoculations:</span> <span class="feature_s">${slidePages[pageCounter - 1][0].inoculations}</span> </li>
                  <li><span class="feature">Diseases:</span> <span class="feature_s">${slidePages[pageCounter - 1][0].diseases}</span> </li>
                  <li><span class="feature">Parasites:</span> <span class="feature_s">${slidePages[pageCounter - 1][0].parasites}</span> </li>
              </ul>
          </div>
      </div>`;
	popup.classList.toggle('popup_active');
	overlayPopup.classList.toggle('overlay_pets__active');
	body.classList.toggle('hidden');
});

slideTwo.addEventListener('click', () => {
  popupPet.innerHTML = `<div class="popup_pet__img">
          <img src="${slidePages[pageCounter - 1][1].img}">
      </div>
      <div class="popup_pet__info">
          <div class="popup_pet__name">${slidePages[pageCounter - 1][1].name}</div>
          <div class="popup_pet__type">${slidePages[pageCounter - 1][1].type} - ${slidePages[pageCounter - 1][1].breed}</div>
          <div class="popup_pet__description">${slidePages[pageCounter - 1][1].description}</div>
          <div class="popup_pet__features">
              <ul>
                  <li><span class="feature">Age:</span> <span class="feature_s">${slidePages[pageCounter - 1][1].age}</span> </li>
                  <li><span class="feature">Inoculations:</span> <span class="feature_s">${slidePages[pageCounter - 1][1].inoculations}</span> </li>
                  <li><span class="feature">Diseases:</span> <span class="feature_s">${slidePages[pageCounter - 1][1].diseases}</span> </li>
                  <li><span class="feature">Parasites:</span> <span class="feature_s">${slidePages[pageCounter - 1][1].parasites}</span> </li>
              </ul>
          </div>
      </div>`;
	popup.classList.toggle('popup_active');
	overlayPopup.classList.toggle('overlay_pets__active');
	body.classList.toggle('hidden');
});

slideThree.addEventListener('click', () => {
  popupPet.innerHTML = `<div class="popup_pet__img">
          <img src="${slidePages[pageCounter - 1][2].img}">
      </div>
      <div class="popup_pet__info">
          <div class="popup_pet__name">${slidePages[pageCounter - 1][2].name}</div>
          <div class="popup_pet__type">${slidePages[pageCounter - 1][2].type} - ${slidePages[pageCounter - 1][2].breed}</div>
          <div class="popup_pet__description">${slidePages[pageCounter - 1][2].description}</div>
          <div class="popup_pet__features">
              <ul>
                  <li><span class="feature">Age:</span> <span class="feature_s">${slidePages[pageCounter - 1][2].age}</span> </li>
                  <li><span class="feature">Inoculations:</span> <span class="feature_s">${slidePages[pageCounter - 1][2].inoculations}</span> </li>
                  <li><span class="feature">Diseases:</span> <span class="feature_s">${slidePages[pageCounter - 1][2].diseases}</span> </li>
                  <li><span class="feature">Parasites:</span> <span class="feature_s">${slidePages[pageCounter - 1][2].parasites}</span> </li>
              </ul>
          </div>
      </div>`;
	popup.classList.toggle('popup_active');
	overlayPopup.classList.toggle('overlay_pets__active');
	body.classList.toggle('hidden');
});

slideFour.addEventListener('click', () => {
  popupPet.innerHTML = `<div class="popup_pet__img">
          <img src="${slidePages[pageCounter - 1][3].img}">
      </div>
      <div class="popup_pet__info">
          <div class="popup_pet__name">${slidePages[pageCounter - 1][3].name}</div>
          <div class="popup_pet__type">${slidePages[pageCounter - 1][3].type} - ${slidePages[pageCounter - 1][3].breed}</div>
          <div class="popup_pet__description">${slidePages[pageCounter - 1][3].description}</div>
          <div class="popup_pet__features">
              <ul>
                  <li><span class="feature">Age:</span> <span class="feature_s">${slidePages[pageCounter - 1][3].age}</span> </li>
                  <li><span class="feature">Inoculations:</span> <span class="feature_s">${slidePages[pageCounter - 1][3].inoculations}</span> </li>
                  <li><span class="feature">Diseases:</span> <span class="feature_s">${slidePages[pageCounter - 1][3].diseases}</span> </li>
                  <li><span class="feature">Parasites:</span> <span class="feature_s">${slidePages[pageCounter - 1][3].parasites}</span> </li>
              </ul>
          </div>
      </div>`;
	popup.classList.toggle('popup_active');
	overlayPopup.classList.toggle('overlay_pets__active');
	body.classList.toggle('hidden');
});

slideFive.addEventListener('click', () => {
  popupPet.innerHTML = `<div class="popup_pet__img">
          <img src="${slidePages[pageCounter - 1][4].img}">
      </div>
      <div class="popup_pet__info">
          <div class="popup_pet__name">${slidePages[pageCounter - 1][4].name}</div>
          <div class="popup_pet__type">${slidePages[pageCounter - 1][4].type} - ${slidePages[pageCounter - 1][4].breed}</div>
          <div class="popup_pet__description">${slidePages[pageCounter - 1][4].description}</div>
          <div class="popup_pet__features">
              <ul>
                  <li><span class="feature">Age:</span> <span class="feature_s">${slidePages[pageCounter - 1][4].age}</span> </li>
                  <li><span class="feature">Inoculations:</span> <span class="feature_s">${slidePages[pageCounter - 1][4].inoculations}</span> </li>
                  <li><span class="feature">Diseases:</span> <span class="feature_s">${slidePages[pageCounter - 1][4].diseases}</span> </li>
                  <li><span class="feature">Parasites:</span> <span class="feature_s">${slidePages[pageCounter - 1][4].parasites}</span> </li>
              </ul>
          </div>
      </div>`;
	popup.classList.toggle('popup_active');
	overlayPopup.classList.toggle('overlay_pets__active');
	body.classList.toggle('hidden');
});

slideSix.addEventListener('click', () => {
  popupPet.innerHTML = `<div class="popup_pet__img">
          <img src="${slidePages[pageCounter - 1][5].img}">
      </div>
      <div class="popup_pet__info">
          <div class="popup_pet__name">${slidePages[pageCounter - 1][5].name}</div>
          <div class="popup_pet__type">${slidePages[pageCounter - 1][5].type} - ${slidePages[pageCounter - 1][5].breed}</div>
          <div class="popup_pet__description">${slidePages[pageCounter - 1][5].description}</div>
          <div class="popup_pet__features">
              <ul>
                  <li><span class="feature">Age:</span> <span class="feature_s">${slidePages[pageCounter - 1][5].age}</span> </li>
                  <li><span class="feature">Inoculations:</span> <span class="feature_s">${slidePages[pageCounter - 1][5].inoculations}</span> </li>
                  <li><span class="feature">Diseases:</span> <span class="feature_s">${slidePages[pageCounter - 1][5].diseases}</span> </li>
                  <li><span class="feature">Parasites:</span> <span class="feature_s">${slidePages[pageCounter - 1][5].parasites}</span> </li>
              </ul>
          </div>
      </div>`;
	popup.classList.toggle('popup_active');
	overlayPopup.classList.toggle('overlay_pets__active');
	body.classList.toggle('hidden');
});

slideSeven.addEventListener('click', () => {
  popupPet.innerHTML = `<div class="popup_pet__img">
          <img src="${slidePages[pageCounter - 1][6].img}">
      </div>
      <div class="popup_pet__info">
          <div class="popup_pet__name">${slidePages[pageCounter - 1][6].name}</div>
          <div class="popup_pet__type">${slidePages[pageCounter - 1][6].type} - ${slidePages[pageCounter - 1][6].breed}</div>
          <div class="popup_pet__description">${slidePages[pageCounter - 1][6].description}</div>
          <div class="popup_pet__features">
              <ul>
                  <li><span class="feature">Age:</span> <span class="feature_s">${slidePages[pageCounter - 1][6].age}</span> </li>
                  <li><span class="feature">Inoculations:</span> <span class="feature_s">${slidePages[pageCounter - 1][6].inoculations}</span> </li>
                  <li><span class="feature">Diseases:</span> <span class="feature_s">${slidePages[pageCounter - 1][6].diseases}</span> </li>
                  <li><span class="feature">Parasites:</span> <span class="feature_s">${slidePages[pageCounter - 1][6].parasites}</span> </li>
              </ul>
          </div>
      </div>`;
	popup.classList.toggle('popup_active');
	overlayPopup.classList.toggle('overlay_pets__active');
	body.classList.toggle('hidden');
});
slideEight.addEventListener('click', () => {
  popupPet.innerHTML = `<div class="popup_pet__img">
          <img src="${slidePages[pageCounter - 1][7].img}">
      </div>
      <div class="popup_pet__info">
          <div class="popup_pet__name">${slidePages[pageCounter - 1][7].name}</div>
          <div class="popup_pet__type">${slidePages[pageCounter - 1][7].type} - ${slidePages[pageCounter - 1][7].breed}</div>
          <div class="popup_pet__description">${slidePages[pageCounter - 1][7].description}</div>
          <div class="popup_pet__features">
              <ul>
                  <li><span class="feature">Age:</span> <span class="feature_s">${slidePages[pageCounter - 1][7].age}</span> </li>
                  <li><span class="feature">Inoculations:</span> <span class="feature_s">${slidePages[pageCounter - 1][7].inoculations}</span> </li>
                  <li><span class="feature">Diseases:</span> <span class="feature_s">${slidePages[pageCounter - 1][7].diseases}</span> </li>
                  <li><span class="feature">Parasites:</span> <span class="feature_s">${slidePages[pageCounter - 1][7].parasites}</span> </li>
              </ul>
          </div>
      </div>`;
	popup.classList.toggle('popup_active');
	overlayPopup.classList.toggle('overlay_pets__active');
	body.classList.toggle('hidden');
});

overlayPopup.addEventListener('click', () => {
  popup.classList.toggle('popup_active');
  overlayPopup.classList.toggle('overlay_pets__active');
  body.classList.toggle('hidden');
});

popupBott.addEventListener('click', () => {
  popup.classList.toggle('popup_active');
  overlayPopup.classList.toggle('overlay_pets__active');
  body.classList.toggle('hidden');
})















