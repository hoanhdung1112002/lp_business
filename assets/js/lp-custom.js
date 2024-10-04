jQuery(function($){
    $('.faq-title').on("click", function () {
        var $content = $(this).closest(".faq-item").find(".faq-content");
        var $faqplus = $(this).closest(".faq-item").find(".faq-plus");
        $(".faq-plus").removeClass("faq-add");
        $(".faq-plus").removeClass("faq-remove");
        $(".item-content").slideUp("200");
        if ($content.is(":hidden")) {
        $faqplus.addClass("faq-add");
        $content.slideDown("200");
        } else {
        $content.slideUp("200");
        $faqplus.removeClass("faq-add");
        $faqplus.addClass("faq-remove");
        }
    });
});
