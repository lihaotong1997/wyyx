var index = 0;
setInterval(function () {
    if (index == 2) {
        index = 1;
        $(".hot-list").css("top", -0)
        $(".hot-list").animate({ "top": -36 * index })
    }
    else {
        index++
    }
    $(".hot-list").animate({ "top": -36 * index })
}, 3000);
$.get("头部分类.json", function (str) {
    for (let i = 0; i < str.length; i++) {

        var list = str[i].fenlei;
        if (i < 9 && i > 0) {

            $('<div class="yx-cp-tabNav-dropdown"style="display: none; width: 1202px; left: -56px; right: auto;"><ul></ul></div>').appendTo($(".yx-cp-tabNav-item").eq(i));
            for (let j = 0; j < list.length; j++) {
                console.log($(".yx-cp-tabNav-dropdown ul"))
                $(` <li class="dropdown" style="width: 124px;">
                     <div class="top" class="max-width:124px;width:124px;">${list[j].fenlei1}</div>
           
               </li>`).appendTo($(".yx-cp-tabNav-dropdown ul").last())
              
                for (let x = 0; x < list[j].fenlei2.length; x++) {
                    $(`<div class="title1">
                   <div class="yx-cp-cateItem">
                       <img src="${list[j].image[x]}"
                           alt="">
                       <span class="yx-cp-subCate-text">${list[j].fenlei2[x]}</span>

                   </div>
               </div>`).appendTo($(".yx-cp-tabNav-dropdown ul").last().find("li").last())
               console.log(i,j,x)
                }
            }
        }

    }
})
$(".yx-cp-tabNav-item").each(function (i) {
    $(this).click(function () {
        window.open("公共.html?" + i)

    })

})
var number = window.location.search.substring(1)
console.log(number)
$(".yx-cp-tabNav-item").removeClass(".yx-cp-active")
$(".yx-cp-tabNav-item").eq(number).addClass(".yx-cp-active")