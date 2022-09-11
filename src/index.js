let dot1 = document.getElementById("pic-menu1");
let dot2 = document.getElementById("pic-menu2");
let dot3 = document.getElementById("pic-menu3");
let selectedImg = document.getElementById("selected-img");
let smallTitle = document.getElementById("small-title1");

dot1.onclick = () => {
  dot2.classList.remove("active");
  dot3.classList.remove("active");
  dot1.classList.add("active");
  selectedImg.src =
    "https://images.unsplash.com/photo-1557053503-0c252e5c8093?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80";
  smallTitle.innerHTML = "Ocean Action";
};

dot2.onclick = () => {
  dot1.classList.remove("active");
  dot3.classList.remove("active");
  dot2.classList.add("active");
  selectedImg.src =
    "https://images.unsplash.com/photo-1519747180378-d55bc9a23efd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";
  smallTitle.innerHTML = "test";
};

dot3.onclick = () => {
  dot1.classList.remove("active");
  dot2.classList.remove("active");
  dot3.classList.add("active");
  selectedImg.src =
    "https://images.unsplash.com/photo-1591025207163-942350e47db2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";
  smallTitle.innerHTML = "test2";
};
