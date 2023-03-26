var dragSrcEl = null;

function drag(event) {
  dragSrcEl = event.target;
  event.dataTransfer.setData('text/html', dragSrcEl.outerHTML);
  event.dataTransfer.effectAllowed = 'move';
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  var columnHTML = event.dataTransfer.getData('text/html');
  var column = document.createElement('div');
  column.classList.add('column');
  column.innerHTML = columnHTML;
  event.target.parentNode.insertBefore(column, event.target);
  dragSrcEl.parentNode.removeChild(dragSrcEl);
}

