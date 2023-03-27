$(document).ready(function() {
  var loadedPages = {};

  function loadPage(pageUrl) {
    if (!loadedPages[pageUrl]) {
      $.get(pageUrl, function(response) {
        $('#content').html(response);
        loadedPages[pageUrl] = response;
      }).fail(function() {
        $('#content').html("<p>Erro ao carregar página.</p>");
      });
    } else {
      $('#content').html(loadedPages[pageUrl]);
    }
  }

  $('#link-about').on('click', function(event) {
    event.preventDefault();
    loadPage('about.html');
  });

  $('#link-home').on('click', function(event) {
    event.preventDefault();
    loadPage('index.html');
  });


  $('#link-genres').on('click', function(event) {
    event.preventDefault();
    loadPage('genres.html');
  });

  $('#link-contact').on('click', function(event) {
    event.preventDefault();
    loadPage('contact.html');
  });
});



function loadPage(pageUrl) {
  if (!loadedPages[pageUrl]) {
    $.get(pageUrl, function(response) {
      $('#content').empty(); // Limpa o conteúdo do elemento #content
      $('#content').html(response);
      loadedPages[pageUrl] = true;
    }).fail(function() {
      $('#content').html("<p>Erro ao carregar página.</p>");
    });
  }
}
