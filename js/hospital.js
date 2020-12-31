//Clinical Service Section
$(document).ready(function(){
	$('.service-item').click(function(){
		$('.service-item').removeClass("current");
		$(this).addClass("current");
		// return needed to make function work
		return false;
	});
  
	$('.service-item').click(function() {
		$('.service-container').slideUp(500);
		$(this.getAttribute('href')).delay(500).slideDown(500);
	});
}); // document ready 

//Staff Section Hover Effect
$('.active-div').each( function() {
  $(this).hover(function() {
      $(this).closest('.r').find('.menu-div').css('display', 'grid');
  }, function() {
      $(this).closest('.r').find('.menu-div').css('display', 'none');
  });
});

//counters
var watcher = document.querySelector(".counters")
var counters = document.querySelectorAll(".counter")
var speed = 200;

function Roll() {
    counters.forEach(counter =>{
    const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const inc = target / speed;

      if(count < target) {
        counter.innerText = Math.ceil(count + inc);
        setTimeout(updateCount, 1)
      } else{
        count.innerText = target;
      }
    }
    updateCount ();
  })
};


var intersectionObserver = new IntersectionObserver(entries => {
 
  if (entries.some(entry => entry.intersectionRatio > 0)) {
    Roll();
  }
});

intersectionObserver.observe(watcher);







