// Navigation Unordered List
var navLinksUL = document.getElementById('navLinks');

// Hides Navigation list if window size is small
window.onresize = function() {
  if (window.innerWidth > 940)
    { navLinksUL.style.display = 'flex' }
  else
    { navLinksUL.style.display = 'none' } }

// Hamburger
function navExpand() {
  if (navLinksUL.style.display === "block")
    { navLinksUL.style.display = "none" }
  else
    { navLinksUL.style.display = "block" } }
