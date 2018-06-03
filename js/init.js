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


document.addEventListener("DOMContentLoaded", function(event) {

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
  .add(ground(),0)
  .add(mountain(), 0)
  .add(clouds(),0)
  .timeScale(0.7)
  .progress(1).progress(0)
  .play();

};
  
});
