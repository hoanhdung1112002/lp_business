jQuery(function($){
    $('.faq-title').click(function(){
        $(this).closest(".faq-item").find(".faq-content").slideToggle();
        $(this).closest(".faq-item").find(".faq-plus").toggleClass('faq-add');
        return false;
    })
});
