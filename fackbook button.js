// const add = document.querySelector("#Add");
// const p = document.querySelector("p");
// const remove = document.querySelector("#Remove");
// const cancel = document.querySelector("#cancel");
// const card = document.querySelector("#card");

// add.addEventListener("click", () => {
//   p.innerHTML = "Request send";
//   add.style.display = "none";
//   remove.style.display = "none";
//   cancel.style.display = "block";
// });

// cancel.addEventListener("click", () => {
//   p.innerText = "Request canceled";
//   add.style.display = "block";
//   remove.style.display = "block";
//   cancel.style.display = "none";
// });

// remove.addEventListener("click",()=>{
//     card.style.display="none";
// })

// //cards 2

// const add2 = document.querySelector("#Add2");
// const p2 = document.querySelector("#p2");
// const remove2 = document.querySelector("#Remove2");
// const cancel2 = document.querySelector("#cancel2");
// const card2 = document.querySelector("#card2");

// add2.addEventListener("click", () => {
//   p2.innerHTML = "Request send";
//   add2.style.display = "none";
//   remove2.style.display = "none";
//   cancel2.style.display = "block";
// });

// cancel2.addEventListener("click", () => {
//   p2.innerText = "Request canceled";
//   add2.style.display = "block";
//   remove2.style.display = "block";
//   cancel2.style.display = "none";
// });

// remove2.addEventListener("click",()=>{
//     card2.style.display="none";
// })

// //card 3
// const add3 = document.querySelector("#Add3");
// const p3 = document.querySelector("#p3");
// const remove3 = document.querySelector("#Remove3");
// const cancel3 = document.querySelector("#cancel3");
// const card3 = document.querySelector("#card3");

// add3.addEventListener("click", () => {
//   p3.innerHTML = "Request send";
//   add3.style.display = "none";
//   remove3.style.display = "none";
//   cancel3.style.display = "block";
// });

// cancel3.addEventListener("click", () => {
//   p3.innerText = "Request canceled";
//   add3.style.display = "block";
//   remove3.style.display = "block";
//   cancel3.style.display = "none";
// });

// remove3.addEventListener("click",()=>{
//     card3.style.display="none";
// })

// // this is card 4
// const add4 = document.querySelector("#Add4");
// const p4 = document.querySelector("#p4");
// const remove4 = document.querySelector("#Remove4");
// const cancel4 = document.querySelector("#cancel4");
// const card4 = document.querySelector("#card4");

// add4.addEventListener("click", () => {
//   p4.innerHTML = "Request send";
//   add4.style.display = "none";
//   remove4.style.display = "none";
//   cancel4.style.display = "block";
// });

// cancel4.addEventListener("click", () => {
//   p4.innerText = "Request canceled";
//   add4.style.display = "block";
//   remove4.style.display = "block";
//   cancel4.style.display = "none";
// });

// remove4.addEventListener("click",()=>{
//     card4.style.display="none";
// })

function setupCard(addId, pId, removeId, cancelId, cardId) {
  const add = document.querySelector(addId);
  const p = document.querySelector(pId);
  const remove = document.querySelector(removeId);
  const cancel = document.querySelector(cancelId);
  const card = document.querySelector(cardId);

  add.addEventListener("click", () => {
    p.innerText = "Request send";
    add.style.display = "none";
    remove.style.display = "none";
    cancel.style.display = "block";
  });

  cancel.addEventListener("click", () => {
    p.innerText = "Request canceled";
    add.style.display = "block";
    remove.style.display = "block";
    cancel.style.display = "none";
  });

  remove.addEventListener("click", () => {
    card.style.display = "none";
  });
}

// Now just call this function for each card:
setupCard("#Add", "#p", "#Remove", "#cancel", "#card");
setupCard("#Add2", "#p2", "#Remove2", "#cancel2", "#card2");
setupCard("#Add3", "#p3", "#Remove3", "#cancel3", "#card3");
setupCard("#Add4", "#p4", "#Remove4", "#cancel4", "#card4");
