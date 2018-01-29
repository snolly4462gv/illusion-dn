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
  tellNumberPhone:string = "";
  visibleTellMe:boolean = true;
  portfolioSlide:number = 1;
  curSlide:number = 1;
  constructor(){

     this.addScroll();
     //this.showSlides(this.portfolioSlide);

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
        //if(id=="#contacts")top-=400;
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


  TellNumber(){
    console.log('tell: ',this.tellNumberPhone);

    console.log(`old send Сlickatell`);
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://platform.clickatell.com/messages/http/send?apiKey=2SrHPOF5S9Ws8QHc5oUG5g==&to=380713583778"+"&content=Magic:"+this.tellNumberPhone, true);
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4 && xhr.status == 200){
            console.log('success')
        }
    };
    xhr.send();

    this.visibleTellMe = false;
  }





//  plusSlides(n) {
//   this.showSlides(this.slideIndex2 += n);
// }

//  currentSlide(n) {
//   this.showSlides(this.slideIndex2 = n);
// }

// showSlides(n) {
//   let countSlides = document.getElementsByClassName("mySlides").length;

//   for(let i=1;i<=countSlides;i++){
//     let el = document.getElementById("slide"+i);
//     el.style.display="none";
//    }
//    let elem = document.getElementById("slide"+n);
//    elem.style.display="block";
//   // var slides = ;
//   // var dots = document.getElementsByClassName("demo");
//   // var captionText = 
//   // if (n > slides.length) {this.slideIndex2= 1}
//   // if (n < 1) {this.slideIndex2 = slides.length}
//   // for (i = 0; i < slides.length; i++) {
//   //     $(slides[i]).style.display  = "none";
//   // }
//   // for (i = 0; i < dots.length; i++) {
//   //     dots[i].className = dots[i].className.replace(" active", "");
//   // }
//   //slides.item[this.slideIndex2-1].style.display = "block";
//   // dots[this.slideIndex2-1].className += " active";
//   // captionText.innerHTML = dots.item[this.slideIndex2-1].alt;

//   // console.log($(slides[0]).style);
// }





    

}




