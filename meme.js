
let contH;
let contW;
let Imgname;
function addtext() {
    const inputdiv = document.createElement('div');
    const input = document.createElement('textarea');
    inputdiv.classList.add("dragdiv");
    inputdiv.id = "id";
    inputdiv.append(input);
    $(".container").append(inputdiv);
    $("textarea").resizable({
        maxHeight: contH,
        maxWidth: contW,
        minHeight: contH * 0.10,
        minWidth: contW * 0.10,
    });
    $(".dragdiv").draggable();

    $('textarea').bind('click', function () {
        $(this).focus();
    });
    // $('textarea').fitText(0.8);
}

$("#addtext").click(() => {
    addtext();
})

// ======================  Fetch Images =================================
let row = $(".row");
getMeme();

async function getMeme() {
    const meme = await fetch("https://api.imgflip.com/get_memes");
    const result = await meme.json();

    console.log(result);

    const memes = result.data.memes;
    const column = document.createElement('div');
    column.classList.add("column");

    memes.forEach(item => {
        const url = item.url;
        const img = document.createElement('img');
        img.id = "img"
        img.src = url;

        if ($(".column1").children().length <= 25) {
            $(".column1").append(img);
        } else if ($(".column2").children().length <= 25) {
            $(".column2").append(img);
        } else if ($(".column3").children().length <= 25) {
            $(".column3").append(img);
        } else {
            $(".column4").append(img);
        }

    })
    return memes;
}
// =================== Select Images ======================================
getMeme().then((memes) => {
    let name = memes[0].name
    const img = document.querySelectorAll("[id^=img");
    for (let i = 0; i < img.length; i++) {
        // img[i].setAttribute("onclick", `handleimg(this,${memes})`);
        img[i].addEventListener('click', (e) => {
            handleimg(e.target,memes[i].name);
            $('html,body').animate({scrollTop: 0}, "slow");
            return false;
        })
    }
    // console.log(memes[0].name);
});

function handleimg(imgs, name) {
    const containerImg = document.getElementById('container-img');
    containerImg.src = imgs.src;
    Imgname = name;
     contH = $(".container").height();
    contW = $(".container").width();
}

// ======================= Change color ====================================
$(".blackbtn").click(() => {
    $("textarea").css({ color: 'black' });
})
$(".whitebtn").click(() => {
    $("textarea").css({ color: 'white' });
})
$(".redbtn").click(() => {
    $("textarea").css({ color: 'red' });
})

// ===================== Download the image ===================================


let element = $(".container");
let ImageData;
$("#downloadbtn").on('click', function () {
    let getCanvas;

    html2canvas(element, {
        onrendered: function (canvas) {
            // $("#preview-img").append(canvas);
            getCanvas = canvas;
            ImageData = getCanvas.toDataURL("image/jpeg", 0.9);
            let newData = ImageData.replace(/^data:image\/jpeg/, "data:application/octet-stream");
            $("#downloadbtn").attr("download", `${Imgname}.jpeg`).attr("href", newData);
        }
    });
});

