$(document).foundation();

$(document).ready(function() {
  $('#darkModeToggle').click(function() {
    $('body').toggleClass('dark-mode');
  });

  $('#scrollToTop').click(function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});