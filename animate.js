var species = ["oak", "birch", "california", "yellow"];
var specie;
$(document).ready(function(){
  $(window).keypress(function (e) {
    if (e.key === ' ' || e.key === 'Spacebar') {
      e.preventDefault()
      specie = choose(species);
      
      $('#canv').fadeOut(1000, function(){
      drawTree();
      if(specie == "oak"){
        $('body').animate({backgroundColor: '#FFFFFF'}, 'slow');

      }
      else{
        if(specie == "birch"){
          $('body').animate({backgroundColor:"#abb3ba"}, 'slow');

      }
      else{
        if(specie == "california"){
          $('body').animate({backgroundColor:"#f5fff2"}, 'slow');
        }
        else{
          $('body').animate({backgroundColor:"#fff9ef"}, 'slow');
        }
      }
      }
      $('#canv').fadeIn(1000);
      })
    }
   })
  })