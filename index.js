var tooltip = document.querySelectorAll('.abouttip');

document.addEventListener('mousemove', fn, false);

function fn(e) {
    for (var i=tooltip.length; i--;) {
      tooltip[i].style.left = (e.pageX + 100) + 'px';
      tooltip[i].style.top = (e.pageY - 200 ) + 'px';
      tooltip[i].style.top = (e.pageY - 400 ) + 'px';
    }
}
