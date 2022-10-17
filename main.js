
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

// makes the category highlighted when chosen
$('.radio_mark_category').on('click', function(){
    $('.radio_mark_category').removeClass('selected');
    $('.radio_mark_project').removeClass('selected');
    $(this).addClass('selected');
});
$('.radio_mark_project').on('click', function(){
    $('.radio_mark_project').removeClass('selected');
    $(this).addClass('selected');
});

// Stops the carousel from sliding automatically
$('.carousel').carousel({
    interval: false,
  });

  // clones carousel caption below the image (still one on image, made opaque)
  jQuery(function ($) {
    $('.carousel').carousel();
    var caption = $('div.carousel-item:nth-child(1) .carousel-caption');
    $('.new-caption-area').html(caption.html());
    caption.css('display', 'none');

    $(".carousel").on('slide.bs.carousel', function (evt) {
        var caption = $('div.carousel-item:nth-child(' + ($(evt.relatedTarget).index() + 1) + ') .carousel-caption');
        $('.new-caption-area').html(caption.html());
        caption.css('display', 'none');
    });
});


var check;

$('input[type="radio"]').hover(function() {
    check = $(this).is(':checked');
});

$('input[type="radio"]').click(function() {
    check = !check;
    $(this).attr("checked", check);
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





//handles read more and less on mobile portfolio section
$(".more").on("click", function(){
  if($(this).text()=="Close")
  {
      $(this).text("Read More");
  } else {
      $(this).text("Close");
  }
  $(this).next('div').slideToggle();

  return false;
});






$(function () {
  $(document).scroll(function () {
	  var $nav = $(".navbar-fixed-top");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
});




// This is the toggle for roadmap section

function openPath(evt, pathName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].pathName = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(pathName).style.display = "block";
  evt.currentTarget.className += " active";
}