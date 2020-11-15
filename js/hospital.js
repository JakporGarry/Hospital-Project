/*
const navbar = document.querySelector('.navbar-custom');

window.addEventListener('scroll', () => {
    if(window.scrollY == 0) {
        navbar.style.backgroundColor = '';
        navbar.style.borderBottomColor = "#ffffff";
    } else {
        navbar.style.backgroundColor = '#3B8CC6';
        navbar.style.borderBottomColor = "#3B8CC6";
    }
});

const link = document.querySelectorAll(".nav-link");

console.link[0];''



//const link = document.querySelectorAll(".nav-link");

//console.link[0];''

var docImg = document.querySelector('.active-div');
var menu = document.querySelector(".menu-div");


function run () {
  docImg.addEventListener("mouseover", (e) =>{
          e.preventDefault();
          menu.style.display = "grid"; 
    });

  docImg.addEventListener("mouseout", (e) =>{
          menu.style.display = "none"; 
    });
  };
run()
*/

$('.active-div').each( function() {
  $(this).hover(function() {
      $(this).closest('.r').find('.menu-div').css('display', 'grid');
  }, function() {
      $(this).closest('.r').find('.menu-div').css('display', 'none');
  });
});


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


// Get the H1 heading
var counterSection = document.querySelector(".counter-wrapper")

// Get it's position in the viewport
var bounding = counterSection.getBoundingClientRect();

console.log(bounding)

/*

let options = {
  root:  null,
  rootMargin: "10px",
  threshold: 1.0
}

let observer = new IntersectionObserver(callback, options);

let counterWrapper = document.querySelector('#counterWrapper');
observer.observe(counterWrapper);

let callback = (entries, observer) => {
  entries.forEach(entry => {
    // Each entry describes an intersection change for one observed
    // target element:
    //   console.log(entry.boundingClientRect)
    //   console.log(entry.intersectionRatio)
    //   console.log(entry.intersectionRect)
    //   console.log(entry.isIntersecting)
    //   console.log(entry.rootBounds)
    //   console.log(entry.target)
    //   console.log(entry.time)

   if (intersectionRatio > 0){
      Roll()
   }
  });
};


function startobserver() {
  
  

let observer = new IntersectionObserver(Roll, options);

let target = document.querySelector(".counters");

observer.observe(target);










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


$('.active-div').hover(function() {
  $(this).closest('.card').find('.menu-div').toggle();
});







/*

$('#btn-1').click(function(){
  $('.text').hide();
$('#text-1').show();
  $('#btn-1').toggleClass("clicked"); //<== toggleClass
});

$('#btn-2').click(function(){
  $('.text').hide();
$('#text-2').show();
  $('#btn-2').toggleClass("clicked");
});
*
// Get the container element
var btnContainer = document.getElementById("myDIV");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("btn");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("mouseover", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

$(document).ready(function(){
  $('a.photo').zoom({url: 'photo-big.jpg'});
});

// Using Colorbox with Zoom
$(document).ready(function(){
  $('a.photo').zoom({
    url: 'photo-big.jpg', 
    callback: function(){
      $(this).colorbox({href: this.src});
    }
  });
});


$(function(){
    $('.my-gallery').imageZoom({
      $(this).imageZoom({
        zoom: 200
      });
    });
  });
  


var docImg = document.querySelectorAll('.active-div');
var menu = document.querySelectorAll(".menu-div");


function run (){for (var i = 0; i < docImg.length; i++) {
  docImg[i].addEventListener("mouseover", (e) =>{
          e.preventDefault();
      for (var i = 0; i < menu.length; i++) {
          menu[i].style.display = "grid"; 
      }
    });

  docImg[i].addEventListener("mouseout", (e) =>{
      for (var i = 0; i < menu.length; i++) {
          menu[i].style.display = "none"; 
      }
    });
  };
}
run();



$(document).ready(function(){
  $(".active-div").hover(function(){
    $(".menu-div").css("display", "grid");
    }, function(){
    $(".menu-div").css("display", "none");
  });
});



$(document).ready(function(){
  $(".active-div").on("mouseover", function(){
    $(".menu-div").on("mouseover", function(){
      $(".this").css("display", "grid");
      });
    });
});


$(document).ready(function(){
  $(".active-div").hover(function(){
    $(".menu-div").css("display", "grid");
    }, function(){
    $(".menu-div").css("display", "none");
  });
});


$(document).ready(function(){
  $("p").hover(function(){
    $(this).css("background-color", "yellow");
    }, function(){
    $(this).css("background-color", "");
  });
});


/*
//function to hide
$("#show").hover(function(){
  $("p").hide();
});

//function to show
$("#show").hover(function(){
  $("p").show();
});


function replaceEmotes() {
    var messages = document.querySelectorAll(".message");
    for (var i = 0; i < messages.length; i++) {
        var str = messages[i].innerHTML.replace(":smile:", "<i class='em em-smile'></i>");
        messages[i].innerHTML = str;
    }
}

var elements = document.querySelectorAll('.className');
for(var i = 0; i < elements.length; i++){
    var str = elements[i].innerHTML;
    elements[i].innerHTML = str.replace(":smile:", "<i class='em em-smile'></i>");
}
var elements = document.getElementsByClassName('.className');
for(var i = 0; i < elements.length; i++){
    // Same like above...
}
//document.getElementById("MyElement").className = "NewClass";
$('.doctors').css('background-color','blue')

$('all').css('background-color','blue')


$('#myDiv').toggleClass('redDiv')

$(document).ready(function () {
			
    $('#myDiv').hover(function () {
        $(this).css('background-color','green');         
    },
    function () {
        $(this).css('background-color','red');
    });

});*/
