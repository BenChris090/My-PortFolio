let darkMode = localStorage.getItem("dark-mode");

function toggleMobModes() {
  const icon = document.getElementById("MobIcon");
  document.body.classList.toggle("dark");
  if(document.body.classList.contains("dark")){
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
    localStorage.setItem("dark-mode", true);
  }else{
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
    localStorage.setItem("dark-mode", false);
  }
}

function toggleModes() {
  const icon = document.getElementById("icon");
  document.body.classList.toggle("dark");
  if(document.body.classList.contains("dark")){
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
    localStorage.setItem("dark-mode", true);
  }else{
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
    localStorage.setItem("dark-mode", false);
  }
}

if (darkMode === 'true') {
  toggleModes(); // set state of darkMode on page load
  toggleMobModes(); // set state of darkMode on page load
}

// /* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mNav").style.display = "block";
}

// /* Set the width of the side navigation to 0 */
// /* Set the display of the side navigation to none */
function closeNav() {
  document.getElementById("mNav").style.display = "none";
}

// mobile functions start here


// var container = document.getElementsByTagName('body')[0];
// document.getElementById('toggler').addEventListener('change', (event) => {
//   console.log(toggler)
//   event.target.checked ? container.removeAttribute('data-theme') : container.setAttribute('data-theme', 'dark');
// });




// const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

// const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

// if (currentTheme) {
//     document.documentElement.setAttribute('data-theme', currentTheme);

//     if (currentTheme === 'dark') {
//         toggleSwitch.checked = true;
//     }
// }

// function switchTheme(e) {
//     if (e.target.checked) {
//         document.documentElement.setAttribute('data-theme', 'dark');
//         localStorage.setItem('theme', 'dark'); //add this
//     }
//     else {
//         document.documentElement.setAttribute('data-theme', 'light');
//         localStorage.setItem('theme', 'light'); //add this
//     }    
// }

// toggleSwitch.addEventListener('change', switchTheme, false);


function hoverMode() {
  const txt1 = document.getElementById("txt2").style.color = "cyan"
  txt1.style.color = "blue";
}

// function hoverOver() {
//   const txt1 = document.getElementById("txt2").style.color = "cyan"
//   txt1.style.color = "blue";
// }
// desktop functions end here

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
// function openNav() {
//     document.getElementById("mNav").style.width = "250px";
//     document.getElementById("main").style.marginLeft = "250px";
//     document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
//   }
  
//   /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
//   function closeNav() {
//     document.getElementById("mNav").style.width = "0";
//     document.getElementById("main").style.marginLeft = "0";
//     document.body.style.backgroundColor = "white";
//   }