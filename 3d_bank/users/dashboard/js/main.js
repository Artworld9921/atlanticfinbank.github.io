 $(document).ready(function(){
    $('.site-welcomeMessageSec').click(function(){
      $('.site-welcomeMessageSec').hide();
    });
  });

  $(document).ready(function(){
    $('.close-msg').click(function(){
      $('.site-welcomeMessageSec').hide();
    });
  });

    $(document).ready(function(){
    $('.msg-toggle').click(function(){
      $('.site-welcomeMessageSec').show();
    });
  });
  $(document).ready(function(){
    $('.notc-dsp').click(function(){
      alert('you have no notification');
    });
  });
jQuery(document).ready(function( $ ){
    $('.counter').counterUp({
      delay:10,
      time:2000
    });
  });
 $(document).ready(function(){
    $('#togle-menu').click(function(){
       $('.site-contentMain').toggleClass('togle-nav');
        $('.fixed-Lnav').toggleClass('togle-nav');
    });
  });
  $(document).ready(function(){
    $('.site-contentMain').click(function(){
       $('.site-contentMain').removeClass('togle-nav');
        $('.fixed-Lnav').removeClass('togle-nav');
    });
  });

$(function(){
$('#t-date').datepicker({
    'format': 'd/m/yyyy',
    'autoclose': true,
    'todayHighlight': true
  }).datepicker('update', new Date())
  $('#time_pick').timepicker();
});

   var txt = "Alex | 1778926657 | $ 132,015.00";
   document.getElementById("frm-ads").innerHTML = txt;

   //this is for transfer form validation
        function validateForm() {
   var inputext = document.getElementById("InputText-Main").value;
   var inputext1 = document.getElementById("InputText-Main1").value;
   var inputext2 = document.getElementById("InputText-Main2").value;
   var inputext3 = document.getElementById("InputText-Main3").value;
   var inputext4 = document.getElementById("InputText-Main4").value;
    if (inputext !=="" && inputext1 !=="" && inputext2 !=="" && inputext3 !=="" && inputext4 !=="" ){
         setTimeout(function(){
          $('.page-popup').css('display', 'flex'); 
          },1000);
           setTimeout(function(){
          $('.F-popup-main').css('display', 'none'); 
          $('.erro-sec').css('display', 'block'); 
          },10000);
            return false;
    }
      else{
          $('.page-popup').css('display', 'none'); 
           $('.F-popup-main').css('display', 'block'); 
          $('.erro-sec').css('display', 'none'); 
           return false;
    }
    } 
     $(document).ready(function(){
    $('.erro-dspy').click(function(){
       $('.erro-dspy').removeClass('dspy-erro'); 
    });
  });
        $(document).ready(function(){
    $('.close-erro').click(function(){
      $('.page-popup').css('display', 'none');
    });
  });

