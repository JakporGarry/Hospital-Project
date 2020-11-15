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

// Get the H1 heading
var h1 = document.querySelector('.service-nav');

// Get it's position in the viewport
var bounding = h1.getBoundingClientRect();

// Log the results
console.log(bounding);


// Get the H1 heading
var counterSection = document.querySelector("#counter-wrapper")

// Get it's position in the viewport
var bounding = counterSection.getBoundingClientRect();

console.log(bounding)


var isInViewport = function (counterSection) {
    var bounding = counterSection.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

if (isInViewport(counterSection)) {
    Roll();
}


/*
var redBox = document.getElementById("redBox")

let options = {
	root: null,
	roorMargin: "0px",
	threshold:1.0
}

let callback = (entries, observer) => {
	entries.forEach(entry =>{
		if (entry.target.id === redBox){
			redBox.innerText = (entry.isIntersecting)
			? 'completely Visible'
			: 'Not Completely Visible';
		}
	})
}

let observer = new IntersectionObserver(callback, options)

observer.observe(redBox)*/


























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



