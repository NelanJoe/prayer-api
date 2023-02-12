const prayerTimes = async (latitude, longitude) => {
  await fetch(
    `http://api.aladhan.com/v1/hijriCalendar?latitude=${latitude}&longitude=${longitude}&method=2`
  )
    .then((res) => res.json())
    .then((response) => {
      const date = new Date();
      const today = date.getDate();

      const res = response.data;

      const waktu = res[0].timings;

      console.log(waktu);

      const app = document.querySelector("#app");

      const container = document.createElement("div");
      container.classList.add("container");

      const card = document.createElement("div");
      card.classList.add("card");

      const dzhur = document.createElement("p");
      dzhur.innerText = `Subuh: ${waktu.Fajr}`;

      const ashar = document.createElement("p");
      ashar.innerText = `Dzhuhur: ${waktu.Dhuhr}`;

      const maghrib = document.createElement("p");
      maghrib.innerText = `Ashar: ${waktu.Asr}`;

      const isya = document.createElement("p");
      isya.innerText = `Maghrib: ${waktu.Maghrib}`;

      const subuh = document.createElement("p");
      subuh.innerText = `Isya: ${waktu.Isha}`;

      card.append(dzhur, ashar, maghrib, isya, subuh);

      container.appendChild(card);

      app.appendChild(container);
    })
    .catch((error) => {
      console.error(`Error: ${error}`);
    });
};

const success = (position) => {
  const coordinat = position.coords;
  prayerTimes(coordinat.latitude, coordinat.longitude);
};

const error = () => {
  prayerTimes("-6.200000", "106.816666");
};

const userLocation = () => {
  if (!navigator.geolocation) {
    alert(
      `Geolication tidak di dukung didalam browser kamu, silahkan gunakan lokasi lain`
    );
    return;
  }
  const geoLocationId = navigator.geolocation.getCurrentPosition(
    success,
    error
  );

  return geoLocationId;
};

const index = () => {
  const app = document.querySelector("#app");
  const h3 = document.createElement("h3");

  h3.textContent = "Prayer Times";

  app.appendChild(h3);
  userLocation();
};

index();
