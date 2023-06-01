const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-list-mobile');
const close = document.querySelector('.close');
const navMobile = document.querySelector('.mobile_nav_open');
const navLogo = document.querySelector('.nav_logo');
const { body } = document;

close.addEventListener('click', () => {
  nav.classList.toggle('active');
  close.classList.toggle('active');
  burger.classList.toggle('active');
  navMobile.classList.toggle('active');
  navLogo.classList.toggle('active');
  body.classList.remove('body_overflowhidden');
});

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
  burger.classList.toggle('active');
  close.classList.toggle('active');
  navMobile.classList.toggle('active');
  navLogo.classList.toggle('active');
  body.classList.add('body_overflowhidden');
});

// Speaker info
const speakerSection = document.querySelector('.speakersection');

const speakers = [
  {
    name: 'Bernekie Ozie He',
    title: 'Ex-Astronaut and TED Speaker',
    description: "Motivation drives change. Famous for 'From Space to earth', 'How Team's and Status Quo's works' and 'The origin's of EQ: 360o Emotional Inteligence', motivational speaker and Master Coach.",
    image: '../Assets/speaker_01.png',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Guntler Honda',
    title: 'CEO at Hawk Farm Operations',
    description: 'Motivational speaker and Leader Coach. Association for Farm Cooperatives, that uses tecnology to build a viable and sustainable ecossistem. Contribution to SDG 2030 and other initiatives.',
    image: '../Assets/speaker_02.png',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Koi Zanty',
    title: 'Professor at Beijing University',
    description: 'Collaborative approach in a networked environment, co-production based on sharing open source software and Wikipedia. (Major books: The Green Frontier from 2020 to 2030)',
    image: '../Assets/speaker_03.png',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Oxoki Humbert',
    title: 'PhD, Professor at South African University',
    description: "Extensive reaseach on Animals on the African Continent. Books: African Mamals, Relations of Insects with Plants, Rooiboos Tea and why it can't be cultivated outside of South Africa",
    image: '../Assets/speaker_04.png',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Johanna Betley',
    title: 'Counsel Member at MIT',
    description: 'Focusing on Tecnology use in farming. How automation can improve the management costs and long term proftability for a better future.',
    image: '../Assets/speaker_05.png',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'John Witt',
    title: 'Professor at Harvard Soil Studies',
    description: 'Focusing on a collaborative approach in a networked environment, we created the concept of co-production based on sharing with open source software and Wikipedia. (Major books: The Wealth of the Network, Penguins and Leviathan)',
    image: '../Assets/speaker_06.png',
    linkedin: 'https://linkedin.com',
  },
];

const numParents = Math.ceil(speakers.length / 2);

document.addEventListener('DOMContentLoaded', () => {
  for (let i = 1; i <= numParents; i += 1) {
    const speakerParent = document.createElement('div');
    speakerParent.classList.add(`speakerparent${i}`);
    speakerSection.appendChild(speakerParent);
  }

  speakers.forEach((speaker, index) => {
    const parentIndex = Math.floor(index / 2) + 1;
    const speakerParent = document.querySelector(`.speakerparent${parentIndex}`);
    const speakerCard = document.createElement('div');
    speakerCard.classList.add('speakercard');

    const speakerHeader = document.createElement('div');
    speakerHeader.classList.add('speaker-header');

    const speakerImg = document.createElement('img');
    speakerImg.classList.add('speakerimg');
    speakerImg.src = `/Assets/Speakers/${speaker.image}`;
    speakerImg.alt = `Foto of ${speaker.name}`;
    speakerHeader.appendChild(speakerImg);

    const headerDescription = document.createElement('div');
    headerDescription.classList.add('headerdescription');

    const speakerName = document.createElement('a');
    speakerName.classList.add('speakername');
    speakerName.href = speaker.linkedin;
    speakerName.textContent = speaker.name;
    headerDescription.appendChild(speakerName);

    const speakerTitle = document.createElement('div');
    speakerTitle.classList.add('speakertitle');
    speakerTitle.textContent = speaker.title;
    headerDescription.appendChild(speakerTitle);

    const speakerDescriptionDesktop = document.createElement('div');
    speakerDescriptionDesktop.classList.add('speakerdescriptiondesktop');
    speakerDescriptionDesktop.textContent = speaker.description;
    headerDescription.appendChild(speakerDescriptionDesktop);

    speakerHeader.appendChild(headerDescription);
    speakerCard.appendChild(speakerHeader);
    speakerParent.appendChild(speakerCard);
  });
});
// Creation of the button and some <br> tags

const moreButton = document.createElement('button');
moreButton.classList.add('btnspeaker');
moreButton.textContent = 'MORE';
speakerSection.appendChild(moreButton);

speakerSection.appendChild(document.createElement('br'));
speakerSection.appendChild(document.createElement('br'));