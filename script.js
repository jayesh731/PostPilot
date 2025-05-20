const openMenuBtn = document.getElementById('openMenuBtn');
const closeMenuBtn = document.getElementById('closeMenuBtn');
const menu = document.getElementById('menu1');

openMenuBtn.addEventListener("click", function(){
    console.log("open");
    menu.classList.remove('hidden');
})

closeMenuBtn.addEventListener("click", function(){
    menu.classList.add('hidden');
})