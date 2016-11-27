// Create element
function fullScreen(element) {
  var newElement = document.createElement(element);
  newElement.style.height = '100vh';
  document.body.appendChild(newElement);
  return newElement;
}

function input(inputType, DOMElement, callback) {
  DOMElement.addEventListener(inputType, function(event) {
    var x = event.clientX;
    var y = event.clientY;
    callback(DOMElement, x, y);
  });
}
function output(element, x, y) {
  element.textContent = x + ', ' + y;
  element.style.backgroundColor = 'rgb(' + x + ', ' + y + ', ' + 100 + ')';
}

input('mousemove', fullScreen('DIV'), output);