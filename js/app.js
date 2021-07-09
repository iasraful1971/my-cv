$(document).ready(function(){
    $('#profile-riples').ripples(
      {
        resulation: 512,
        dropRadius:10
      });
      const bars = document.querySelectorAll('.progress-bar');
    bars.forEach(function(bar){
        let percentage =bar.dataset.percent;
        let tooltip = bar.children[0];
        tooltip.innerText = percentage + '%';
        bar.style.width = percentage + '%';
        console.log(percentage)
    });

    
});