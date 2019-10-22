$(document).ready(
function CallList(){
$.ajax({
    url:"https://api.myjson.com/bins/11mfw7",
    method:'GET',
    success:function(res){
        var html="";
        for(i=0;i<res.length;i++){
    html+="<div class='item'>"+
        "<div class='image'"+
            "style='background-image: url("+res[i].picture+")'>"+
       " </div>"+
        "<div class='eff-content-1'>"+
            "<p class='eff-text'>"+
                res[i].name+
            "</p>"+
            "<p>Minh Chiến <span>"+res[i].date+"</span></p>"+
        "</div>"+
    "</div>";
        }
        html+="<div class='clearfix'></div>";
        $(".list").append(html)
    }
    ,
    error:function (res){ 
        console.log(res)
    } 
})
})