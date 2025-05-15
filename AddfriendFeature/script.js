// addFriends and remove seprate btns

// let remove = document.getElementById("remove");
// let add = document.getElementById("AddFriends");
// let stranger = document.querySelector("h3");
// add.addEventListener("click", () => {
// stranger.innerHTML = "Friends";
// stranger.style.color = "green";
// })

// remove.addEventListener("click", () => {
//     stranger.innerHTML = "Stranger";
//     stranger.style.color = "red";
// })

// but now let's AddFriends and RemoveFriends in single btns
let add = document.getElementById("AddFriends");
let stranger = document.querySelector("h3");
let flag = 0;

add.addEventListener("click", () => {
  if (flag == 0) {
    stranger.innerHTML = "Friends";
    stranger.style.color = "green";
    flag = 1;
  } else {
    stranger.innerHTML = "Stranger";
    stranger.style.color = "red";
    flag = 0;
  }
});
