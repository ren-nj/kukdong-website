/*POP-UP functions */

function closeRenew() {
  const renewpopup = document.getElementById('renewPopup');
  renewpopup.style.display = 'none';
}

function searchbarPopUp() {
  const popup = document.getElementById('search-bar');
  popup.style.display = 'block';
}

function closeSearchPopup() {
  document.getElementById('search-bar').style.display = 'none';
}

function ProductPopUp(modalID) {
  document.getElementById(modalID).style.display = 'block';
}
function closeProductPopUp(modalID) {
  document.getElementById(modalID).style.display = 'none';
}

/*Navigation Pages*/

function redirectToCompany() {
  window.location.href = '/company.html';
}

function scrollToSection(sectionID) {
  const section = document.getElementById(sectionID);
  if (section) {
    section.scrollIntoView({behavior: 'smooth'});
  }
}