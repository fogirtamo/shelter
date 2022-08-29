
// MAIN PAGE

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

// SLider
const slideOne = document.querySelectorAll('.slider_slide')[0];
const slideTwo = document.querySelectorAll('.slider_slide')[1];
const slideThree = document.querySelectorAll('.slider_slide')[2];

const bottArrowRight = document.querySelectorAll('.bott-arrow')[0];
const bottArrowLeft = document.querySelectorAll('.bott-arrow')[1];
const bottArrowRightAlt = document.querySelectorAll('.bott-arrow__alt')[0];
const bottArrowLeftAlt = document.querySelectorAll('.bott-arrow__alt')[1];

let arrSlideCurrent;            //массив обьектов для текущих слайдов (исп. при генерации попапа)
let set = new Set();
document.addEventListener('DOMContentLoaded', () => {
  for (let i = 0; set.size != 3; i++) {
    let randomInt = Math.floor((Math.random() * 8));
    if (randomInt == 8) randomInt = 7;
    set.add(randomInt)
  };
  let arrSlidePets = [];
  for (let value of set) {
    arrSlidePets.push(petsJS[value])
  };
  console.log(arrSlidePets)
  arrSlideCurrent = arrSlidePets;    // сохранение обьектов текущих слайдов для попапа при загрузке стр.
  console.log(arrSlideCurrent)
  // 
	slideOne.innerHTML = `<img src="${arrSlidePets[0].img}">               
  <div class="slider_slide_name">${arrSlidePets[0].name}</div>
  <div class="slider_slide_learn">Learn more</div>`;
	slideTwo.innerHTML = `<img src="${arrSlidePets[1].img}">
  <div class="slider_slide_name">${arrSlidePets[1].name}</div>
  <div class="slider_slide_learn">Learn more</div>`;
	slideThree.innerHTML = `<img src="${arrSlidePets[2].img}">
  <div class="slider_slide_name">${arrSlidePets[2].name}</div>
  <div class="slider_slide_learn">Learn more</div>`;
});

let setClick = new Set();
bottArrowLeft.addEventListener('click', () => {
  let arrNumberPets = [];
  for (let i = 0; i < 8; i++) {
    if (setClick.has(i)) continue;
    arrNumberPets.push(i); 
  };
  setClick = new Set();
  for (let i = 0; setClick.size != 3; i++) {
    let randomInt = Math.floor((Math.random() * 8));
    if (randomInt == 8) randomInt = 7;
    if (set.has(randomInt) || arrNumberPets.includes(randomInt) == false) continue;
    setClick.add(randomInt);
  };
  set = new Set();
  let arrSlidePets = [];
  for (let value of setClick) {
    arrSlidePets.push(petsJS[value])
  };
  arrSlideCurrent = arrSlidePets;    // сохранение обьектов текущих слайдов для попапа при смене слайдов
  
	slideOne.innerHTML = `<img src="${arrSlidePets[0].img}">
  <div class="slider_slide_name">${arrSlidePets[0].name}</div>
  <div class="slider_slide_learn">Learn more</div>`;
	slideTwo.innerHTML = `<img src="${arrSlidePets[1].img}">
  <div class="slider_slide_name">${arrSlidePets[1].name}</div>
  <div class="slider_slide_learn">Learn more</div>`;
	slideThree.innerHTML = `<img src="${arrSlidePets[2].img}">
  <div class="slider_slide_name">${arrSlidePets[2].name}</div>
  <div class="slider_slide_learn">Learn more</div>`;
});

bottArrowRight.addEventListener('click', () => {
  let arrNumberPets = [];
  for (let i = 0; i < 8; i++) {
    if (setClick.has(i)) continue;
    arrNumberPets.push(i); 
  };
  setClick = new Set();
  for (let i = 0; setClick.size != 3; i++) {
    let randomInt = Math.floor((Math.random() * 8));
    if (randomInt == 8) randomInt = 7;
    if (set.has(randomInt) || arrNumberPets.includes(randomInt) == false) continue;
    setClick.add(randomInt);
  };
  set = new Set();
  let arrSlidePets = [];
  for (let value of setClick) {
    arrSlidePets.push(petsJS[value])
  };
  arrSlideCurrent = arrSlidePets;    // сохранение обьектов текущих слайдов для попапа при смене слайдов
  
	slideOne.innerHTML = `<img src="${arrSlidePets[0].img}">
  <div class="slider_slide_name">${arrSlidePets[0].name}</div>
  <div class="slider_slide_learn">Learn more</div>`;
	slideTwo.innerHTML = `<img src="${arrSlidePets[1].img}">
  <div class="slider_slide_name">${arrSlidePets[1].name}</div>
  <div class="slider_slide_learn">Learn more</div>`;
	slideThree.innerHTML = `<img src="${arrSlidePets[2].img}">
  <div class="slider_slide_name">${arrSlidePets[2].name}</div>
  <div class="slider_slide_learn">Learn more</div>`;
});

bottArrowLeftAlt.addEventListener('click', () => {
  let arrNumberPets = [];
  for (let i = 0; i < 8; i++) {
    if (setClick.has(i)) continue;
    arrNumberPets.push(i); 
  };
  setClick = new Set();
  for (let i = 0; setClick.size != 3; i++) {
    let randomInt = Math.floor((Math.random() * 8));
    if (randomInt == 8) randomInt = 7;
    if (set.has(randomInt) || arrNumberPets.includes(randomInt) == false) continue;
    setClick.add(randomInt);
  };
  set = new Set();
  let arrSlidePets = [];
  for (let value of setClick) {
    arrSlidePets.push(petsJS[value])
  };
  arrSlideCurrent = arrSlidePets;    // сохранение обьектов текущих слайдов для попапа при смене слайдов
  
	slideOne.innerHTML = `<img src="${arrSlidePets[0].img}">
  <div class="slider_slide_name">${arrSlidePets[0].name}</div>
  <div class="slider_slide_learn">Learn more</div>`;
});

bottArrowRightAlt.addEventListener('click', () => {
  let arrNumberPets = [];
  for (let i = 0; i < 8; i++) {
    if (setClick.has(i)) continue;
    arrNumberPets.push(i); 
  };
  setClick = new Set();
  for (let i = 0; setClick.size != 3; i++) {
    let randomInt = Math.floor((Math.random() * 8));
    if (randomInt == 8) randomInt = 7;
    if (set.has(randomInt) || arrNumberPets.includes(randomInt) == false) continue;
    setClick.add(randomInt);
  };
  set = new Set();
  let arrSlidePets = [];
  for (let value of setClick) {
    arrSlidePets.push(petsJS[value])
  };
  arrSlideCurrent = arrSlidePets;    // сохранение обьектов текущих слайдов для попапа при смене слайдов
  
	slideOne.innerHTML = `<img src="${arrSlidePets[0].img}">
  <div class="slider_slide_name">${arrSlidePets[0].name}</div>
  <div class="slider_slide_learn">Learn more</div>`;
});

// POPUP
const popup = document.querySelector('.popup');
const popupPet = document.querySelector('.popup_pet');
const overlayPopup = document.querySelector('.overlay_pets');
const popupBott = document.querySelector('.popup_bott__obj');


slideOne.addEventListener('click', () => {
  popupPet.innerHTML = `<div class="popup_pet__img">
          <img src="${arrSlideCurrent[0].img}">
      </div>
      <div class="popup_pet__info">
          <div class="popup_pet__name">${arrSlideCurrent[0].name}</div>
          <div class="popup_pet__type">${arrSlideCurrent[0].type} - ${arrSlideCurrent[0].breed}</div>
          <div class="popup_pet__description">${arrSlideCurrent[0].description}</div>
          <div class="popup_pet__features">
              <ul>
                  <li><span class="feature">Age:</span> <span class="feature_s">${arrSlideCurrent[0].age}</span> </li>
                  <li><span class="feature">Inoculations:</span> <span class="feature_s">${arrSlideCurrent[0].inoculations}</span> </li>
                  <li><span class="feature">Diseases:</span> <span class="feature_s">${arrSlideCurrent[0].diseases}</span> </li>
                  <li><span class="feature">Parasites:</span> <span class="feature_s">${arrSlideCurrent[0].parasites}</span> </li>
              </ul>
          </div>
      </div>`;
	popup.classList.toggle('popup_active');
	overlayPopup.classList.toggle('overlay_pets__active');
	body.classList.toggle('hidden');
});
slideTwo.addEventListener('click', () => {
  popupPet.innerHTML = `<div class="popup_pet__img">
          <img src="${arrSlideCurrent[1].img}">
      </div>
      <div class="popup_pet__info">
          <div class="popup_pet__name">${arrSlideCurrent[1].name}</div>
          <div class="popup_pet__type">${arrSlideCurrent[1].type} - ${arrSlideCurrent[1].breed}</div>
          <div class="popup_pet__description">${arrSlideCurrent[1].description}</div>
          <div class="popup_pet__features">
              <ul>
                  <li><span class="feature">Age:</span> <span class="feature_s">${arrSlideCurrent[1].age}</span> </li>
                  <li><span class="feature">Inoculations:</span> <span class="feature_s">${arrSlideCurrent[1].inoculations}</span> </li>
                  <li><span class="feature">Diseases:</span> <span class="feature_s">${arrSlideCurrent[1].diseases}</span> </li>
                  <li><span class="feature">Parasites:</span> <span class="feature_s">${arrSlideCurrent[1].parasites}</span> </li>
              </ul>
          </div>
      </div>`;
	popup.classList.toggle('popup_active');
	overlayPopup.classList.toggle('overlay_pets__active');
	body.classList.toggle('hidden');
});
slideThree.addEventListener('click', () => {
  popupPet.innerHTML = `<div class="popup_pet__img">
          <img src="${arrSlideCurrent[2].img}">
      </div>
      <div class="popup_pet__info">
          <div class="popup_pet__name">${arrSlideCurrent[2].name}</div>
          <div class="popup_pet__type">${arrSlideCurrent[2].type} - ${arrSlideCurrent[2].breed}</div>
          <div class="popup_pet__description">${arrSlideCurrent[2].description}</div>
          <div class="popup_pet__features">
              <ul>
                  <li><span class="feature">Age:</span> <span class="feature_s">${arrSlideCurrent[2].age}</span> </li>
                  <li><span class="feature">Inoculations:</span> <span class="feature_s">${arrSlideCurrent[2].inoculations}</span> </li>
                  <li><span class="feature">Diseases:</span> <span class="feature_s">${arrSlideCurrent[2].diseases}</span> </li>
                  <li><span class="feature">Parasites:</span> <span class="feature_s">${arrSlideCurrent[2].parasites}</span> </li>
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
const petsJS = JSON.parse(pets)














