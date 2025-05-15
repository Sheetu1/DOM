let remove = document.getElementById("remove");
let add = document.getElementById("AddFriends");
let stranger = document.querySelector("h3");
add.addEventListener("click", () => {
stranger.innerHTML = "Friends";
stranger.style.color = "green";
})

remove.addEventListener("click", () => {
    stranger.innerHTML = "Stranger";
    stranger.style.color = "red";
})