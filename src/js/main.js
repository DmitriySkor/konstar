// menu

jQuery(document).ready(function($) {
    $('.submenu > li').matchHeight();
  });


// Инициализация owlCarousel


$(document).ready(function () {
    $(".owl-carousel").owlCarousel(
        {
            loop:true,
            items: 1,
            margin: 10,
            nav: true,
            autoHeight: true,
        }
    );
});

// Инициализация jQueryFormStyler
// Для активации плагина примените метод .styler к тегам, которые хотите стилизовать
// флажок <input type="checkbox">;
// переключатель <input type="radio">;
// поле для выбора файла <input type="file">.
// поле для ввода чисел <input type="number">.
// раскрывающийся список <select>;
// (function ($) {
//     $(function () {
//         $('input, select').styler();
//     });
// })(jQuery);

// Инициализация Fancybox
$().fancybox({
    selector: '[data-fancybox="gallery"]',
    loop: true
});

//Инициализация маски ввода телефона
jQuery(function ($) {
    $(".masked-input").mask("+38 ( 999 ) 999-99-99");
});


$(function() { 
    var videos  = $(".video_in");

        videos.on("click", function(){
            var elm = $(this),
                conts   = elm.contents(),
                le      = conts.length,
                ifr     = null;

            for(var i = 0; i<le; i++){
              if(conts[i].nodeType == 8) ifr = conts[i].textContent;
            }

            elm.addClass("player").html(ifr);
            elm.off("click");
        });
});

// $("#example-basic").steps({
//   headerTag: "h3",
//   bodyTag: "section",
//   transitionEffect: "slideLeft",
//   autoFocus: true
// });

$(document).ready(function(){

  var current_fs, next_fs, previous_fs; //fieldsets
  var opacity;
  
  $(".next").click(function(){
  
  current_fs = $(this).parent();
  next_fs = $(this).parent().next();
  
  //Add Class Active
  $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
  
  //show the next fieldset
  next_fs.show();
  //hide the current fieldset with style
  current_fs.animate({opacity: 0}, {
  step: function(now) {
  // for making fielset appear animation
  opacity = 1 - now;
  
  current_fs.css({
  'display': 'none',
  'position': 'relative'
  });
  next_fs.css({'opacity': opacity});
  },
  duration: 600
  });
  });
  
  $(".previous").click(function(){
  
  current_fs = $(this).parent();
  previous_fs = $(this).parent().prev();
  
  //Remove class active
  $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
  
  //show the previous fieldset
  previous_fs.show();
  
  //hide the current fieldset with style
  current_fs.animate({opacity: 0}, {
  step: function(now) {
  // for making fielset appear animation
  opacity = 1 - now;
  
  current_fs.css({
  'display': 'none',
  'position': 'relative'
  });
  previous_fs.css({'opacity': opacity});
  },
  duration: 600
  });
  });
  
  $('.radio-group .radio').click(function(){
  $(this).parent().find('.radio').removeClass('selected');
  $(this).addClass('selected');
  });
  
  $(".submit").click(function(){
  return false;
  })
  
  });


//   $.fn.showMore = function (options) {
        
//     "use strict";
    
//     var currentelem = 1;
    
//     this.each(function(){
        
//         var currentid = '';
//         var element = $(this);
//         var auto = parseInt(element.innerHeight())/2;
//         var fullheight = element.innerHeight();
//         var maxWidth = element.css('width');
//         var settings = $.extend({
//             minheight: auto,
//             buttontxtmore: "Все характеристики",
//             buttontxtless: "Скрыть",
//             buttoncss: "showmore-button",
//             animationspeed: auto       
//         }, options );        
        
//         element.attr('id') != undefined ? currentid = element.attr('id') : currentid = currentelem;
//         element.wrap( "<div id='showmore-"+currentid+"' data-showmore"+(maxWidth == '0px' ? "" : " style='max-width:"+maxWidth+";'")+"></div>" );
        
//         if (element.parent().not('[data-showmore]')) {
        
//             if (fullheight > settings.minheight) {
                
//                 element.css('min-height', settings.minheight).css('max-height', settings.minheight).css('overflow', 'hidden');
//                 var showMoreButton = $("<div />", {
//                     id: "showmore-button-"+currentid,
//                     "class": settings.buttoncss,
//                     click: function() {

//                         if (element.css('max-height') != 'none') {
//                             element.css('height', settings.minheight).css('max-height', '').animate({height:fullheight}, settings.animationspeed, function () { showMoreButton.html(settings.buttontxtless); });
//                         } else {
//                             element.animate({height:settings.minheight}, settings.animationspeed, function () { showMoreButton.html(settings.buttontxtmore); element.css('max-height', settings.minheight); });
//                         }
//                     },
//                     html: settings.buttontxtmore
//                 });

//                 element.after(showMoreButton);

//             }
            
//             currentelem++;
            
//         }
        
//     });
    
//     return this;
    
// };

// $('#charact').showMore({
    
//     minheight: 74
  
//   });
