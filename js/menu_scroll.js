$(function(){
    $('nav a').click(function(){
        var href = $(this).attr('href');
        var offSetTop = $(href).offset().top;
        console.log(href);
        $('html,body').animate({'scrollTop':offSetTop});

        return false;
    })

})