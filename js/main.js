
//로그인 창
let loginflag = false;
const zIdx = 999;

$('#loginicon').on('click', function () {
    if (loginflag == false) {
        $('#login')
            .css('display', 'block')
            .css('position', 'fixed')
            .css('left', '35%').css('top', '3%')
            .css('width', '30%').css('height', '65%')
            .css('background-color', 'white')
            .css('border', '1px solid lightgray')
            .css('z-index', zIdx + 1)
            .css('animation-name', 'loginmove')
            .css('animation-duration', '1s');

        $('#BG')
            .css('position', 'fixed')
            .css('left', '0').css('top', '0')
            .css('width', '100%').css('height', '100%')
            .css('display', 'block')
            .css('background-color', 'gray')
            .css('opacity', '0.5')
            .css('z-index', zIdx);

        loginflag = true;
    } else {
        $('#login')
            .css('display', 'none')
            .css('animation-name', 'loginhide')
            .css('animation-duration', '1s')
        $('#BG')
            .css('display', 'none');

        loginflag = false;
    }
});

$('#BG').on('click', function () {
    $('#login')
        .css('top', '-100%')
        .css('animation-name', 'loginhide')
        .css('animation-duration', '1s');
    $('#BG')
        .css('display', 'none');
});

$('#loginicon').on('mouseover', function () {
    $(this)
        .css('cursor', 'pointer')
        .css('opacity', '0.6');
});

$('#loginicon').on('mouseleave', function () {
    $(this)
        .css('opacity', '1')
        .css('cursor', 'auto');
});

$('#btn').on('mouseover', function () {
    $(this)
        .css('opacity', '0.6');
});
$('#btn').on('mouseleave', function () {
    $(this)
        .css('opacity', '1');
});



//숙소 미리보기
var imgZidx = 555;
let img = document.getElementsByClassName('modalimg');

let housemodal = document.getElementsByClassName('housemodal');
for(k=0;k<housemodal.length;k++){
    
    for(i=0;i<=img.length;i++){
        let modalimg = housemodal[k].getElementsByClassName('modalimg'+i);
        let modalinfo1 = housemodal[k].getElementsByClassName('modalinfo1');
        let modalinfo2 = housemodal[k].getElementsByClassName('modalinfo2');
        let modalinfo3 = housemodal[k].getElementsByClassName('modalinfo3');
        let modalinfo4 = housemodal[k].getElementsByClassName('modalinfo4');
        let modalinfo5 = housemodal[k].getElementsByClassName('modalinfo5');
        $(img[i]).on('click', function () {
                        
            $(modalimg)
                .css('display','block')
                .css('position', 'fixed')
                .css('left', '10px').css('top', '10px')
                .css('width', '26%').css('height', '47%')
                .css('animation-name','modalimgon')
                .css('animation-duration','1s')
                .css('cursor','pointer')
                .css('z-index', imgZidx + 99)
                
            $('.housemodal')
                .css('display', 'block')
                .css('left', '0%').css('top', '0%')
                .css('width', '50%').css('height', '100%')
                .css('background-color', 'white')
                .css('animation-name','modalon')
                .css('animation-duration','1s')
                .css('z-index', imgZidx + 1);

            $('#BG')
                .css('position', 'fixed')
                .css('left', '0').css('top', '0')
                .css('width', '100%').css('height', '100%')
                .css('display', 'block')
                .css('background-color', 'gray')
                .css('opacity', '0.5')
                .css('z-index', imgZidx);
                
            $(modalinfo1)
                .css('left','28%')
                .css('animation-name','modaldivon1')
                .css('animation-duration','1s')
                .css('z-index', imgZidx + 99)
            $(modalinfo2)
                .css('left','2%')
                .css('animation-name','modaldivon2')
                .css('animation-duration','1s')
                .css('z-index', imgZidx + 99)
            $(modalinfo3)
                .css('left','28%')
                .css('animation-name','modaldivon1')
                .css('animation-duration','1s')
                .css('z-index', imgZidx + 99)
            $(modalinfo4)
                .css('left','28%')
                .css('animation-name','modaldivon1')
                .css('animation-duration','1s')
                .css('z-index', imgZidx + 99)
            $(modalinfo5)
                .css('left','15%')
                .css('animation-name','modaldivon3')
                .css('animation-duration','1s')
                .css('z-index', imgZidx + 99)
        
            $(modalimg).on('click', function () {
                location.href = 'HouseInfo.html';
            });
    
        });

        $('#con').on('click',function(){
            location.href='HouseInfo.html';
        })
    
        $('#BG').on('click', function () {
            // $(img)
            //     .css('position', 'relative')
            //     .css('left', '0').css('top', '0')
            //     .css('width', '200px').css('height', '200px')
            //     .css('transition', '1s')

            $(modalimg)
                .css('left','-100%')
                .css('animation-name','modalimgoff')
                .css('animation-duration','1s');
    
            $('.housemodal')
                .css('left','-100%')
                .css('animation-name','modaloff')
                .css('animation-duration','1s');
    
            $('#BG')
                .css('display', 'none');

            $(modalinfo1)
                .css('left','-100%')
                .css('animation-name','modaldivoff1')
                .css('animation-duration','1s')
                .css('z-index','0')
            $(modalinfo2)
                .css('left','-100%')
                .css('animation-name','modaldivoff2')
                .css('animation-duration','1s')
                .css('z-index','0')
            $(modalinfo3)
                .css('left','-100%')
                .css('animation-name','modaldivoff2')
                .css('animation-duration','1s')
                .css('z-index','0')
            $(modalinfo4)
                .css('left','-100%')
                .css('animation-name','modaldivoff2')
                .css('animation-duration','1s')
                .css('z-index','0')
            $(modalinfo5)
                .css('left','-100%')
                .css('animation-name','modaldivoff3')
                .css('animation-duration','1s')
                .css('z-index','0')
        })
        $('#re').on('click', function () {
            // $(img)
            //     .css('position', 'relative')
            //     .css('left', '0').css('top', '0')
            //     .css('width', '200px').css('height', '200px')
            //     .css('transition', '1s')

            $(modalimg)
                .css('left','-100%')
                .css('animation-name','modalimgoff')
                .css('animation-duration','1s');
    
            $('.housemodal')
                .css('left','-100%')
                .css('animation-name','modaloff')
                .css('animation-duration','1s');
    
            $('#BG')
                .css('display', 'none');

            $(modalinfo1)
                .css('left','-100%')
                .css('animation-name','modaldivoff1')
                .css('animation-duration','1s')
                .css('z-index','0')
            $(modalinfo2)
                .css('left','-100%')
                .css('animation-name','modaldivoff2')
                .css('animation-duration','1s')
                .css('z-index','0')
            $(modalinfo3)
                .css('left','-100%')
                .css('animation-name','modaldivoff2')
                .css('animation-duration','1s')
                .css('z-index','0')
            $(modalinfo4)
                .css('left','-100%')
                .css('animation-name','modaldivoff2')
                .css('animation-duration','1s')
                .css('z-index','0')
            $(modalinfo5)
                .css('left','-100%')
                .css('animation-name','modaldivoff3')
                .css('animation-duration','1s')
                .css('z-index','0')
        })
    }
}
    


//마이페이지 - 사이드 메뉴
$('.loginedicon').on('click',function(){
    $('.offmy')
    .css('display','block')
    .css('animation-name','offmyin')
    .css('animation-duration','1s')
    .css('z-index', imgZidx+1)
    .show()

    $('#offmyimg')
    .css('display','block')

    $('#BG')
        .css('position', 'fixed')
        .css('left', '0').css('top', '0')
        .css('width', '100%').css('height', '100%')
        .css('display', 'block')
        .css('background-color', 'gray')
        .css('opacity', '0.5')
        .css('z-index', imgZidx);

    $('#BG').on('click',function(){
        $('.offmy')
            .css('animation-name','offmyout')
            .css('animation-duration','1s')
            .hide()


        $('#BG')
            .css('display', 'none')
    })

})

$('#offout').on('click',function(){
    $('.offmy')
        .css('animation-name','offmyout')
        .css('animation-duration','1s')
        .hide()

    $('#BG')
        .css('display', 'none')
}) 



