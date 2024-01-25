let myArray = JSON.parse(localStorage.getItem("bud")) || [];
let plax = "./music/play.mp3";
let musi = new Audio(plax);
const login = () => {
  let nam = bigname.value;
  let numb = age.value;
  let myObj = { nam, numb };
  if (nam == "" && numb == "") {
    err.innerHTML = "field is required";
    err.style.color ="#cc140a";
  } else if (numb=="") {
    errs.innerHTML = "Age is required";
    errs.style.color ="#cc140a";
  } else {
    err.innerHTML=""
    bigname.value = "";
    age.value = "";
    myArray.push(myObj);
    window.location.href = "index.html";
    localStorage.setItem("bud", JSON.stringify(myArray));
  }
};
const all = () => {
  myArray.map((go, ind) => {
    how.innerHTML = `<h2>welcome:&nbsp;${go.nam}</h2>
            `;
  });
};
all();
