var nav=document.querySelector('nav');

window.addEventListener('scroll', function(){
    if (window.scrollY > 100){
        nav.classList.add('bg-dark', 'shadow');
    } else {
        nav.classList.remove('bg-dark', 'shadow');
    }
});


var myTooltipEl = document.getElementById('myTooltip')
var tooltip = new bootstrap.Tooltip(myTooltipEl)

myTooltipEl.addEventListener('hidden.bs.tooltip', function () {
  // do something...
})

tooltip.hide()