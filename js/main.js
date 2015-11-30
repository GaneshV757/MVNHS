var min = ["^250Character.", "Scholarship.", "Service.", "Leadership.", "<b>M</b>onta <b>V</b>ista <b>N</b>ational <b>H</b>onor <b>S</b>ociety"];

$(document).ready(function(){
    $('.parallax').parallax();
    $('.modal-trigger').leanModal({
        dismissible: true, // Modal can be dismissed by clicking outside of the modal
        opacity: .9, // Opacity of modal background
        in_duration: 300, // Transition in duration
        out_duration: 200, // Transition out duration
    });
    $(".button-collapse").sideNav();
    $(".animated-typing").typed({
        strings: min,
        typeSpeed: 0
    });
});

$('.slider').slider({full_width: true});
