
$(document).ready(function () {
    $(window).load(function () {


        setInterval(function(){ $('.ph-item').addClass("js-hideOnLoad"); }, 500);
        setInterval(function(){ $('.js-showOnLoad').removeClass('js-showOnLoad');}, 500);
        setInterval(function(){ $('.form-onLoad').removeClass("form-onLoad"); }, 500);
    });
});
//Select2
if ($('.js-select').length) {
    $('.js-select').select2({
        minimumResultsForSearch: -1
    });
}
(function() {
    'use strict';
    window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();