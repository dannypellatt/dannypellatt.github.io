
$(document).ready(function(){ 
    var lastBoxOpened = 0;
    
    $("input[name$='group1']").click(function() {
        var boxNumber = parseInt($(this).parents('.desc').attr("data-box"));
        
        //check if the data-box was succesfully retrieved. If not, first option chosen, reset all of it
        if(isNaN(boxNumber)){
         boxNumber = 0;
        }
            
        var test = $(this).val();
        var target = $("#"+test)
        var newBoxOpened = target.attr("data-box");
        //check if the last opened box was an earlier one than the newly clicked one
        if(lastBoxOpened > boxNumber){
         //hide boxes beyond the one we opened now
         $('.desc').each(function(){
         //if box number is bigger than the currently clicked box, close them.
          if($(this).attr("data-box") > boxNumber){
          $(this).hide();
          //uncheck the previously selected radio buttons in now hidden things
          $('input', this).prop("checked", false);
          }
         });
        }
        //render target box
         target.show();
         //update last opened box to the newly opened one
         lastBoxOpened = newBoxOpened;
    }); 
});



// handles the modal for certs section

// create references to the modal...
var modal = document.getElementById('myModal');
// to all images -- note I'm using a class!
var images = document.getElementsByClassName('myImages');
// the image in the modal
var modalImg = document.getElementById("img01");
// and the caption in the modal
var captionText = document.getElementById("caption");

// Go through all of the images with our custom class
for (var i = 0; i < images.length; i++) {
  var img = images[i];
  // and attach our click listener for this image.
  img.onclick = function(evt) {
    console.log(evt);
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}

// START navbar SECTION --------------------------------------------------------

$(function () {
  $(document).scroll(function () {
	  var $nav = $(".navbar-fixed-top");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
});

// START portfolio SECTION -----------------------------------------------------

function openProject(evt, projectName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(projectName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.addEventListener("DOMContentLoaded", function() {
  var defaultEvent = {currentTarget: document.getElementsByClassName("tablinks")[0]};
  openProject(defaultEvent, 'DataCo');
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

$(document).ready(function() {
  var getProductHeight = $('.product.active').height();

  $('.products').css({
    height: getProductHeight
  });

  function calcProductHeight() {
    getProductHeight = $('.product.active').height();

    $('.products').css({
      height: getProductHeight
    });
  }

  var productItem = $('.product'),
    productCurrentItem = productItem.filter('.active');

  $('#next').on('click', function(e) {
    e.preventDefault();

    var nextItem = productCurrentItem.next();

    productCurrentItem.removeClass('active');

    if (nextItem.length) {

      productCurrentItem = nextItem.addClass('active');
    } else {
      productCurrentItem = productItem.first().addClass('active');
    }

    calcProductHeight();
  });

  $('#prev').on('click', function(e) {
    e.preventDefault();

    var prevItem = productCurrentItem.prev();

    productCurrentItem.removeClass('active');

    if (prevItem.length) {
      productCurrentItem = prevItem.addClass('active');
    } else {
      productCurrentItem = productItem.last().addClass('active');
    }

    calcProductHeight();
  });


  // ---- 'Puppy Tax modal' ----
// Get the <a> tag that opens the modal
var img = document.getElementById("banjoImg");

// Get the image and insert it inside the modal
var modalImg = document.getElementById("img01");

img.onclick = function() {
  modal.style.display = "block";
  modalImg.src = "images/about/banjoOutside1.jpeg";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// --------

  // Ripple
  $('[ripple]').on('click', function(e) {
    var rippleDiv = $('<div class="ripple" />'),
      rippleSize = 60,
      rippleOffset = $(this).offset(),
      rippleY = e.pageY - rippleOffset.top,
      rippleX = e.pageX - rippleOffset.left,
      ripple = $('.ripple');

    rippleDiv.css({
      top: rippleY - (rippleSize / 2),
      left: rippleX - (rippleSize / 2),
      background: $(this).attr("ripple-color")
    }).appendTo($(this));

    window.setTimeout(function() {
      rippleDiv.remove();
    }, 1900);
  });
});
