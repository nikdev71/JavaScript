$(document).ready(function(){
    $("#carousel img").each(function(){
        $(this).click(function(ev){
            let selectsrc= $("#selectedImg").attr("src")
            let thatsrc = $(this).attr("src")

            $("#selectedImg").effect('fade', {}, 1000, function() {
                $("#selectedImg").fadeIn(); 
                $("#selectedImg").attr("src", thatsrc); 
                $(ev.target).attr("src",selectsrc)
            });
            
        })
    })
})