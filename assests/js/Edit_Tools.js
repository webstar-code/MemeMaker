// ============ Tools Hide in Mmobile
// $(".show-tools").click(() => {
//     $(".tools").animate({
//         height: "toggle"
//     })
// })

$(".edit-title").click(() => {
    $(".tools").animate({
        height: "toggle"
    })
})




// ============== Change Color
$(".white").click(() => {
    $("textarea").css({ color: 'white'});
})

$(".black").click(() => {
    $("textarea").css({ color: 'black'});
})

$(".red").click(() => {
    $("textarea").css({ color: 'red'});
})
// ============= Change Font
$(".none-text").click(() => {
    $("textarea").css({ webkitTextStroke: '0px' });
})

$(".white-text").click(() => {
    $("textarea").css({color: 'white',webkitTextStroke: '0.5px black'})
})

$(".black-text").click(() => {
    $("textarea").css({color: 'black',webkitTextStroke: '0.5px white'})
})

// ============== Reset
$(".reset").click(() => {
    const textarea = document.getElementsByTagName('textarea');
    $("textarea").remove();
    $(".black-box").css({ display: 'none' });
})

// ============== Templates
$(".none").click(() => {
    $(".black-box").css({ display: 'none' });
})

$(".TopBottomBlack").click(() => {
    $(".black-box").css({ display: 'block', backgroundColor: 'black', height: '50px'});
})

$(".TopBottomWhite").click(() => {
    $(".black-box").css({ display: 'block', backgroundColor: 'white', height: '50px'});
})

$(".BottomBlack").click(() => {
    $(".Top").css({ display: "none" });
    $(".Bottom").css({ display: "block", backgroundColor: 'black' });
})

$(".BottomWhite").click(() => {
    $(".Top").css({ display: "none" });
    $(".Bottom").css({ display: "block", backgroundColor: 'white' });
})

$(".TopWhite").click(() => {
    $(".Top").css({ display: "block", backgroundColor: 'white', height: '50px' });
    $(".Bottom").css({ display: "none"});
})


$(".TopBlack").click(() => {
    $(".Top").css({ display: "block", backgroundColor: 'black', height: '50px' });
    $(".Bottom").css({ display: "none"});
})

$(".TopWhiteExtra").click(() => {
    $(".Top").css({ display: "block", backgroundColor: 'white', height: '100px' });
    $(".Bottom").css({ display: "none"});
})