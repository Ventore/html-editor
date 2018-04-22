document.querySelector('form').addEventListener('submit', e => {
  const request = new XMLHttpRequest();

  request.open('POST', `http://localhost:8080/api/document`, true);
  request.setRequestHeader('Content-type', 'application/json');
  request.onload = function() {
    console.log(this.request.responseText);
  }.bind(this);
  request.send(
    JSON.stringify({
      data: 'Hello',
    })
  );
  e.preventDefault();
});
