


// toggle:

function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}



// .......................................
let user = localStorage.getItem("buzzyUser");

if (user) {
  document.getElementById("welcomeUser").innerHTML = "Welcome, " + user + " 👋";
  document.getElementById("logoutBtn").style.display = "inline-block";
   document.getElementById("loginBtn").style.display = "none";


}else{
   document.getElementById("logoutBtn").style.display = "none";

}


// Auto Logout after 10 minutes
setTimeout(() => {
  localStorage.removeItem("buzzyUser");
  window.location.href = "login.html";
}, 600000); // 10 mins

// Manual Logout
document.getElementById("logoutBtn").onclick = function() {
  localStorage.removeItem("buzzyUser");
  window.location.href = "login.html";
};

