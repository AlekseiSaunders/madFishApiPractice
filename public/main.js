const submit = document.getElementById('btnSubmit');
const displayGenera = document.getElementById('fishGenera');
const displaySpecies = document.getElementById('numberSpecies');
const displayDescribed = document.getElementById('describedNumber');
const displayLocation = document.getElementById('primaryLocation');

const makeReq = async () => {
  const fishG = document.getElementById('fishG').value;
  console.log(`${fishG}`);
  const res = await fetch(`/api/${fishG}`);
  const data = await res.json();
  displayGenera.textContent = `Fish Genus: ${fishG}`.toUpperCase();
  displaySpecies.textContent = `Number of Species: ${data.numberOfSpecies}`;
  displayDescribed.textContent = `Number of Described Species to date: ${data.numberDescribedSpecies}`;
  displayLocation.textContent = `Primary Location on Madagascar: ${data.primaryLocation}`;
};

submit.addEventListener('click', makeReq);
