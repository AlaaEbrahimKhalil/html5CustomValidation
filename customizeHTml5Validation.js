function cutomHtml5Errors(langNeed){
 var lang ;
var langNeed = langNeed;
if ($('html')[0].lang == 'en') {
    lang = 'En';
}
else {
    lang = "Ar";
}

$("form :input").on('invalid keyup', function (e) {
    var valid = true;
    var defaultMsg = lang == 'En' ? 'Please Enter valid value' : 'من فضلك تأكد من القيمة المدخلة';
    e.target.setCustomValidity('');
    $(e.target).attr('title','');
    $.each(e.target.validity, function (key, value) {
        if (value && key != "customError" && key != "valid") {
            valid = false;
            var attrName = langNeed ? `${key}${lang}` : `${key}`;
            if ($(e.target).attr(attrName)) {
                $(e.target).attr('title', $(e.target).attr(`${key}${lang}`));
                e.target.setCustomValidity($(e.target).attr(`${key}${lang}`));
            }
            else {
                e.target.setCustomValidity(defaultMsg);
            }
        }
    });
    if (valid) {
        e.target.setCustomValidity('');
    }

});
}
