$(document).ready(function() {
  M.updateTextFields();
});

$('#textarea1').val('New Text');
M.textareaAutoResize($('#textarea1'));
     

(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

document.getElementById("index-first").addEventListener("click", myFunction);
console.log("yaaas") 
window.stop = false
function myFunction() {
  var go
   console.log(window.stop) 
  if (window.stop == false){
      window.stop = true
      go = 0
      console.log(go)
  }
  else{
    window.stop = false
    go = 0    
    console.log(go)
  }
console.log("yaaas")
    var tl = new TimelineMax({
      repeat: -1
    });
   var positions
   positions =  getlocation("mountain")
   console.log(positions.left)
      tl.to("#mountain", go, {
        backgroundPosition: positions.left +" 0px",
        force3D:true,
        rotation:0.01,
        z:0.01,
        autoRound:false,
        ease: Linear.easeNone
      });

    positions =  getlocation("ground")
    console.log(positions.left)
    var tl = new TimelineMax({
      repeat: -1
    });

      tl.to("#ground", go, {
        backgroundPosition: positions.left +" 0px",
        force3D:true,
        rotation:0.01,
        z:0.01,
        autoRound:false,
        ease: Linear.easeNone
      });
    return tl;

   

  function getlocation(ID){
    var demo = document.getElementById(ID),
       _tmp = window.getComputedStyle(demo,null).backgroundPosition.trim().split(/\s+/),
        positions = {
        'left' : _tmp[0],
        'top' : _tmp[1]
    };
    return positions  

  }

}



document.addEventListener("DOMContentLoaded", function(event) {


    function cactus() {

    var tl = new TimelineMax({
      repeat: -1
    });

    tl.to(".cactus", 50, {
        backgroundPosition: "1301px 0px",
        force3D:true,
        rotation:0.01,
        z:0.01,
        autoRound:false,
        ease: Linear.easeNone
      });

    return tl;
  }

  function ground() {

    var tl = new TimelineMax({
      repeat: -1
    });

    tl.to("#ground", 50, {
        backgroundPosition: "1301px 0px",
        force3D:true,
        rotation:0.01,
        z:0.01,
        autoRound:false,
        ease: Linear.easeNone
      });

    return tl;
  }

  function mountain() {

    var tl = new TimelineMax({
      repeat: -1
    });

    tl.to("#mountain", 50, {
        backgroundPosition: "-1301px 0px",
        force3D:true,
        rotation:0.01,
        z:0.01,
        autoRound:false,
        ease: Linear.easeNone
      });

   
   

      // document.getElementById("mountain").addEventListener("click", myFunction);

      // function myFunction() {

      //   console.log("yaaas")
    
      //   tl.to("#mountain", 0, {
      //       backgroundPosition: "-1301px 0px",
      //       force3D:true,
      //       rotation:0.01,
      //       z:0.01,
      //       autoRound:false,
      //       ease: Linear.easeNone
      //     });
      // }

    //   document.getElementById("#mountain").addEventListener("click", myFunction);
    //   function myFunction() {
    //     document.getElementById("#mountain").innerHTML = "YOU CLICKED ME!";
    // }


    return tl;
  }


  var masterTL = new TimelineMax({
    repeat: -1
  });
  
  // window load event makes sure image is 
// loaded before running animation
window.onload = function() {
  
  masterTL
  .add(cactus(),0)
  .add(ground(),0)
  .add(mountain(), 0)
  .timeScale(0.7)
  .progress(1).progress(0)
  .play();

};
  
});

$('#mail').submit(function() {
  var post_data = $('#mail').serialize();
  $.post('contactForm.php', post_data, function(data) {
    $('#notification').show();
  });
});

