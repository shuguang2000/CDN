document.addEventListener('DOMContentLoaded', function() {
  var links = document.createElement('div');
  links.id = 'links';
  document.body.appendChild(links);

  var links_content = document.createElement('div');
  links_content.className = 'links-content';
  links.appendChild(links_content);

  var link_navigation = document.createElement('div');
  links_content.className = 'link-navigation';
  link_navigation.innerHTML = "test";
  links_content.appendChild(link_navigation);



}, false);