import { Component } from '@angular/core';

declare var $;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  firstLoad:boolean = true;
  title = 'app works!';
  MenuActiveTab:number = 0;
  slideIndex = 1;
  constructor(){

     this.addScroll();

  }


  addScroll(){
    $(document).ready(function(){
      $("#menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
    
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href')
        ,
      
        //узнаем высоту от начала страницы до блока на который ссылается якорь
          top = $(id).offset().top;
        console.log(id, top);
        //анимируем переход на расстояние - top за 1500 мс
       // if(id=="#what_for_you")top+=400;
        $('body,html').animate({scrollTop: top}, 1400);
      });
    });

    
    
    
      var menu_selector = ".icon-bar"; 
      
      function onScroll(){
        var scroll_top = $(document).scrollTop();
        $(menu_selector  + " a").each(function(){
          var hash = $(this).attr("href");
          
          var target = $(hash);
         // console.log(`!`,$(this),hash,$(this).attr("href"),target);
    
          console.log(target, target.position().top);
          if (target.position().top <= scroll_top +320 && target.position().top + target.outerHeight() > scroll_top) {
          //  $(menu_selector + " a span.active").addClass("active");
          // $(a span.active).addClass("active");
          $("a span.active").removeClass("active");
           console.log(`this = `, $(this).context.hash);
            var nn=$(this).context.hash;
            
            $("a[href^="+nn+"] span").addClass("active");

            if(nn=="#what_for_you") {
              var count = 1;
              let timer = setInterval(()=>{
                
              let elem = document.getElementById("myBar"+count); 
              let elemPr = document.getElementById("myPrProc"+count); 
              let width = $(elem).width();
               var timer2 = setInterval(()=>{
                {
                  if (width < 100||(elemPr&&elemPr.id&&elemPr.id=="myPrProc1"&&width<106 ) )  {
                      width++; 
                      elem.style.width = width + '%';  
                      $(elemPr).text(width+"%");                 
                  }
                  else {clearInterval(timer2);
                    let width = 1;}
              }           
            }, 10);
            if(count<5)count++;
            else {clearInterval(timer);let width = 1;}
            },800)
              
            }
          } else {
          //  $("a span.active").removeClass("active");
          }
        });
      }
    
    $(document).ready(function () {
      $(document).on("scroll", onScroll);
      $("a[href^=#]").click(function(e){
        e.preventDefault();
        $(document).off("scroll");
        $(menu_selector + " a span.active").removeClass("active");
        $(this).addClass("active");
        var hash = $(this).attr("href");
        var target = $(hash);
        $("html, body").animate({
            scrollTop: target.offset().top+10
        }, 500, function(){
          window.location.hash = hash;
          $(document).on("scroll", onScroll);
        });
      });
    });
    
  }



    

}




