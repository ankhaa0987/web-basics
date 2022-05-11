function test() {
  let time = new Date().toString();
  document.querySelector(".time").innerHTML = time.slice(16, 25);
  //   document.querySelector(".time").innerHTML = time;
}

const test2 = () => {
  window.setInterval(() => {
    adviced();
  }, 5000);
  window.setInterval(() => {
    test();
  }, 1000);
};

function adviced() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.text())
    .then((json) => JSON.parse(json))
    .then((json) => {
      document.getElementById("idNumber").innerHTML = json.slip.id;
      document.getElementById("fontAd").innerHTML = json.slip.advice;
    })
    .catch((err) => console.log(err));
}
