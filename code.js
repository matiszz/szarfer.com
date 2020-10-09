document.getElementById('papa').addEventListener("mouseover", () => onHover('#FAD3B3', 'Javier Szarfer', 'Hotel selling'));
document.getElementById('papa').addEventListener("mouseout", () => onBlur());

document.getElementById('alex').addEventListener("mouseover", () => onHover('#09201D', 'Alex Szarfer', 'Event photo and DJ'));
document.getElementById('alex').addEventListener("mouseout", () => onBlur());

document.getElementById('fede').addEventListener("mouseover", () => onHover('#E76F51', 'Federico Szarfer', 'Cinema production'));
document.getElementById('fede').addEventListener("mouseout", () => onBlur());

document.getElementById('mati').addEventListener("mouseover", () => onHover('#E9C46A', 'Matias Szarfer', 'Web & apps development'));
document.getElementById('mati').addEventListener("mouseout", () => onBlur());

const opposite = {
  "#FAD3B3": "#733807",
  "#09201D": "#70D7C9",
  "#E76F51": "#48160A",
  "#E9C46A": "#59430D",
};

const duration = '400ms';

function onHover (color, name, job) {
  let container = document.getElementById('container');
  container.style.background = color;
  container.style.transitionDuration = duration;


  let title = document.getElementById('title');
  title.style.color = opposite[color];
  title.style.transitionDuration = duration;

  let nameField = document.getElementById('name');
  nameField.innerText = name;
  nameField.style.color = opposite[color];
  nameField.style.opacity = '1';

  let jobTitle = document.getElementById('job');
  jobTitle.innerText = job
  jobTitle.style.color = opposite[color];
  jobTitle.style.opacity = '1';
}

function onBlur () {
  let container = document.getElementById('container');
  container.style.background = '#495057';
  container.style.transitionDuration = duration;

  let title = document.getElementById('title');
  title.style.color = '#D0D0D0';
  title.style.transitionDuration = duration;

  let nameField = document.getElementById('name');
  nameField.innerText = '';
  nameField.style.opacity = '0';

  let jobTitle = document.getElementById('job');
  jobTitle.innerText = '';
  jobTitle.style.opacity = '0';
}