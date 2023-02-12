const success = (position) => {
  console.log(`Posisi: ${position}`);
};

const error = () => {
  console.log(`Posisi tidak dapat diakses`);
};

const userLocation = () => {
  if (!navigator.geolocation) {
    alert(
      `Geolication tidak di dukung didalam browser kamu, silahkan gunakan lokasi lain`
    );
    return;
  }

  navigator.geolocation.getCurrentPosition(success, error);
};

const index = () => {
  const app = document.querySelector("#app");
  const h3 = document.createElement("h3");

  h3.textContent = "Prayer Times";

  app.appendChild(h3);

  userLocation();
};

index();
