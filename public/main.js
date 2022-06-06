const submit = document.getElementById('btnSubmit');
const displayGenera = document.getElementById('fishGenera');
const displaySpecies = document.getElementById('numberSpecies');
const displayDescribed = document.getElementById('describedNumber');
const displayLocation = document.getElementById('primaryLocation');
const fishInput = document.getElementById('fishG');

const makeReq = async (event) => {
  event.preventDefault();
  const fishG = fishInput.value;
  console.log(`${fishG}`);
  const res = await fetch(
    `https://madfish-api-100devs.herokuapp.com/api/${fishG}`
  );
  const data = await res.json();
  displayGenera.textContent = `Fish Genus: ${fishG}`.toUpperCase();
  displaySpecies.textContent = `Number of Species: ${data.numberOfSpecies}`;
  displayDescribed.textContent = `Number of Described Species to date: ${data.numberDescribedSpecies}`;
  displayLocation.textContent = `Primary Location on Madagascar: ${data.primaryLocation}`;
  fishInput.value = '';
};

submit.addEventListener('click', makeReq);
