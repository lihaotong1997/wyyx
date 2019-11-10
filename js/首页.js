$(function () {

  $.get("1.json", function (str) {
    console.log(str)
    var arr = str[1]
    var a = str[1].list
    $(".q1").append(`

     <h3>${arr.name}</h3>
     <div class="q2">${arr.name1}</div>
     <div class="q3">${arr.name2} ></div>
     
     `)

    $.each(a, function (i) {

      $(`
        
        <div class="q5">

        <div class="q6"><img class="img" src="${a[i].img}" alt=""></div>
        <div class="q7">${a[i].p1}</div>
        <div class="q8">${a[i].p2}</div>

      </div>

        
        `).appendTo($(".q4"))
    })
    var b = str[2].list;
    $.each(b, function (i) {
      //console.log(i)
      $(`
      <li>
      <div class="w6"><img class="img" src="${b[i].img1}" alt=""></div>
      <div class="w3"><img class="sp" src="${b[i].img}" alt="">
        <div class="w4">${b[i].p2}</div>
        <div class="w5">
          <span>${b[i].p}</span>
          <span>${b[i].p1}</span>
        </div>
      
      </div>
      <div class="w7">
        <span>${b[i].p3}</span>
        <span>${b[i].p6}</span>
        <span><i class="w8">${b[i].p4}</i><i class="w9">${b[i].p5}</i></span>
      </div>
    
    </li>
      
      `).appendTo($(".w2"))


    })


    $(".w1").delegate(".w2 li", "mouseover", function () {

      var index = $(this).index();
      var aaa = b[index].img2
      $(this).css({ "background": "rgb(244, 240, 233)" })
      $(this).children(".w3").children(".sp").attr({ "src": aaa })


    })

    $(".w1").delegate(".w2 li", "mouseout", function () {
      var index = $(this).index();
      var aaa = b[index].img
      $(this).css({ "background": "" })

      $(this).children(".w3").children(".sp").attr({ "src": aaa })


    })

    var ss = str[3].list;
    var dashe = str[3].list2
    console.log(dashe)
    //  console.log(ss)

    $.each(ss, function (i) {
      $(`

     <li style="background: white;">
              <div class="w6"><img class="img" src="${ss[i].img1}" alt=""></div>
              <div class="w3" >
                <img src="${ss[i].img}" alt="">
                <div class="w4">${ss[i].p2}</div>
                <div class="w5">
                  <span>${ss[i].p}</span>
                  <span>${ss[i].p1}</span>
                </div>
              </div>

              <div class="w7">
                <span >${ss[i].p3}</span>
                <span>${ss[i].p6}</span>
                <span>
                  <i class="w8">${ss[i].p5}</i>
                 
                </span>
              </div>
            </li>
     
     `).appendTo($(".e1"))

    })

    $(".dj").click(function () {
      $(".dj").css({ "border-bottom": "2px solid #b4a078" })
      $(".rx").css({ "border-bottom": "" })
      $(".e1").html("")
      $.each(ss, function (i) {
        $(`
 
      <li style="background: white;">
               <div class="w6"><img class="img" src="${ss[i].img1}" alt=""></div>
               <div class="w3" >
                 <img src="${ss[i].img}" alt="">
                 <div class="w4">${ss[i].p2}</div>
                 <div class="w5">
                   <span>${ss[i].p}</span>
                   <span>${ss[i].p1}</span>
                 </div>
               </div>
 
               <div class="w7">
                 <span >${ss[i].p3}</span>
                 <span>${ss[i].p6}</span>
                 <span>
                   <i class="w8">${ss[i].p5}</i>
                  
                 </span>
               </div>
             </li>
      
      `).appendTo($(".e1"))

      })


    })



    $(".rx").click(function () {
      $(".rx").css({ "border-bottom": "2px solid #b4a078" })
      $(".dj").css({ "border-bottom": "" })
      $(".e1").html("")
      $.each(dashe, function (i) {
        $(`
 
      <li style="background: white;">
               <div class="w6"><img class="img" src="${dashe[i].img1}" alt=""></div>
               <div class="w3" >
                 <img src="${dashe[i].img}" alt="">
                 <div class="w4">${dashe[i].p2}</div>
                 <div class="w5">
                   <span>${dashe[i].p}</span>
                   <span>${dashe[i].p1}</span>
                 </div>
               </div>
 
               <div class="w7">
                 <span >${dashe[i].p3}</span>
                 <span>${dashe[i].p6}</span>
                 <span>
                   <i class="w8">${dashe[i].p5}</i>
                  
                 </span>
               </div>
             </li>
      
      `).appendTo($(".e1"))

      })


    })







    var sp = str[4].list;
    // console.log(sp)
    $.each(sp, function (i) {

      $(`
    <li>
    <div class="r1">
      <img src="${sp[i].img}" alt="">
    </div>
    <div class="r2">
      <h2>${sp[i].p}</h2>
      <p class="r3">${sp[i].p2}</p>
      <p class="r4">
        <span class="r5"><i class="r6"></i></span>
        <span class="r7">${sp[i].p1}</span>
      </p>
      <p class="r8">
        <span>限时价</span>
        <span>￥</span>
        <span>${sp[i].p4}</span>
        <span><s>${sp[i].p5}</s></span>
      </p>
      <div class="r9">立即抢购</div>

    </div>

  </li>
    
    `).appendTo($(".r ul"))

    })




    var cc = str[5];
    var a = str[5].list;
    $(".t5").append(`
   <span>${cc.sp}</span>
   <span>${cc.ssr} ></span>
   `)

    $.each(a, function (i) {
      $(`
     <div class="t7">
                  <div class="t8"><img class="img" src="${a[i].img}" alt=""></div>
                  <p class="t9">${a[i].p}</p>
                  <p class="t10">
                     <span>限时价 </span>
                      <span>¥</span>
                       <span>${a[i].p3}</span>
                      
                    </p>
                    <p class="t11"><s>${a[i].p5}</s></p>
                    <div class="t12">立即抢购</div>
                </div>
     `).appendTo($(".t6"))

    })




    var sp = str[6].list
    //console.log(sp)
    $.each(sp, function (i) {

      var ssr = sp[i].list1;
      $.each(ssr, function (x) {

        $(`
      
      <div class="u2">
      <div class="w6">
        <img class="img" src="${ssr[x].img1}" alt="">
      </div>
      <div class="w3">
        <img class="sp"  src="${ssr[x].img}" alt="">
        <div class="w4">${ssr[x].p2}</div>
        <div class="w5">
          <span>${ssr[x].p}</span>
          <span>${ssr[x].p1}</span>
        </div>

       

      </div>
      <div class="w7">
        <span>${ssr[x].p3}</span>
        <span>${ssr[x].p6}</span>
        <span><i class="w8">${ssr[x].p4}</i><i class="w9">${ssr[x].p5}</i></span>
      </div>

    </div>
      
      
      `).appendTo($(".u1").eq(i))


      })


      $(".u1").eq(i).delegate(".u2", "mouseover", function () {


        var index = $(this).index()
        //console.log(index)
        var tu = sp[i].list1[index].img2;
        //console.log(tu)
        $(this).css({ "background": "rgb(244, 240, 233)" })
        $(this).children(".w3").children(".sp").attr({ "src": tu })

      })

      $(".u1").eq(i).delegate(".u2", "mouseout", function () {


        var index = $(this).index()
        // console.log(index)
        var tu = sp[i].list1[index].img;
        // console.log(tu)
        $(this).css({ "background": "" })
        $(this).children(".w3").children(".sp").attr({ "src": tu })

      })

    })


    /*var   zjl=str[7].list;
    console.log(zjl)
    
    $.each(zjl,function(i){
     
    $(`
    <div class="swiper-slide" ><img src="${zjl[i]}" alt=""></div>
    
    `).appendTo($(".swiper1").children(".swiper-slide"))  
    
    })
    
      */



    var cm = str[8].list
    //console.log(cm)
    $.each(cm, function (i) {

      $(`
    <div class="swiper-slide wyz">
    <div class="u9"><img src="${cm[i].img}" alt=""></div>
    <div class="u10">
      <p>
        <span>${cm[i].p}</span>
        <span>${cm[i].p1}</span>
      </p>
      <p>
        <span class="i">${cm[i].p2}</span>
        <span class="i1">${cm[i].p3}</span>
      </p>
      <p class="i2">${cm[i].p4}</p>
    </div>

  </div>

   

    `).appendTo($(".cao"))


    })

    var swiper5 = new Swiper('.swiper5', {
      autoplay: {
        delay: 1000
      },
      loop: true,
      slidesPerView: 3,
      spaceBetween: 0,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },


    });







  })





  var sum = 0;
  $(".left").css("opacity", 0.5)
  var w = $(".w1").width()
  //console.log(w)

  var en = true;
  $(".left").click(function () {
    if (en) {
      en = false;
      setTimeout(() => {
        en = true
      }, 500);

      $(".right").css("opacity", 0.8)
      if (sum == 0) {
      } else {
        sum--
        if (sum == 0) {
          $(".left").css("opacity", 0.3)
        }

      }
      $(".w2").animate({ "left": -sum * w }, 500)

    }





  })

  $(".right").click(function () {
    if (en) {
      en = false;
      setTimeout(() => {
        en = true
      }, 500);


      $(".left").css("opacity", 0.8)
      if (sum == 7) {

      } else {
        sum++
        if (sum == 7) {
          $(".right").css("opacity", 0.3)
        }

      }
      $(".w2").animate({ "left": -sum * w }, 500)

    }



  })


  var fn = (t) => {
    return t = t > 10 ? t : '0' + t
  }

  var time = () => {
    var data = new Date(),
      hour = data.getHours() % 2 == 0 ? data.getHours() : data.getHours(),
      ohour = data.getHours() % 2 == 0 ? 1 : 0,
      min = data.getMinutes(),
      sec = data.getSeconds()
    $(".e13").html(fn(hour))
    $(".e9 span").eq(0).html(fn(ohour))
    $(".e9 span").eq(2).html(fn(59 - min))
    $(".e9 span").eq(4).html(fn(59 - sec))





  }
  time()

  setInterval(time, 1000);
})


