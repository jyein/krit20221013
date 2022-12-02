$(document).ready(function () {

    let menu1 = $('#top_menu .mn > li');
    let menu2 = $('#q_mn .mn > li');
    let contents = $('#contents > div');

    menu1.click(function () {

        let tg = $(this);
        let i = tg.index();

        let section = contents.eq(i);
        let tt = section.offset().top;

        $('html,body').stop().animate({ scrollTop: tt });
    });

    menu2.click(function () {

        let tg = $(this);
        let i = tg.index();

        let section = contents.eq(i);
        let tt = section.offset().top;

        $('html,body').stop().animate({ scrollTop: tt });
    });

    // 스크롤 위치에 의해서 버튼의 스타일 효과 적용
    $(window).scroll(function () {
        let sct = $(window).scrollTop();
        
        contents.each(function () {
            let tg = $(this) // 현재 each문에 의해 선택된 div
            let i = tg.index();  // 선택된 div의 인덱스값
            
            if (tg.offset().top <= sct) {
                // 현재 선택된 div의 top부분에 스크롤 탑 이랑 비교해서 크거나 같으면 
                
                menu1.removeClass('on');
                menu2.removeClass('on');
                menu1.eq(i).addClass('on');
                menu2.eq(i).addClass('on');
                
            }
            
            let windowTop = $(window).scrollTop() + 300;
            $('#q_mn').stop().animate({ top: windowTop + 'px' }, 500);
        });



    })


})
