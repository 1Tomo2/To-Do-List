let input = document.querySelector("input");
let addBtn = document.querySelector(".btn");
let ul = document.querySelector(".ul");
let e = document.querySelector(".e");
let main = document.querySelector(".main");
let ul2 = document.querySelector(".ul2");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.value !== "") {
    ul2.innerHTML += `

   
    <ul class"ul">
 
      <li class="li">
      ${input.value}
        <button onclick="remove(this)" class="remove">X </button>
        </li>
    </ul>`;
    /* <button onclick="check(this)" class="check"><i class="fa-solid fa-check "></i></button */
  } else {
    alert("Prazno Polje");
  }
});

function remove(e) {
  let lis = document.querySelector(".li");
  lis.remove();
}

// let btns2 = document.querySelectorAll(".remove");

// btns2.forEach((btn2) => {
//   console.log(btn2);

//   btn2.addEventListener("click", (el) => {
// let lis = document.querySelectorAll(".li");
// lis.forEach((li) => {
//   console.log(li);
// });
//   });
// });

// function check(e) {
//   let liText = (document.querySelector(".li").innerHTML = `
//   <s>${input.value}</s>
//   <button onclick="remove(this)" class="remove">X </button>
//   `);
// }
