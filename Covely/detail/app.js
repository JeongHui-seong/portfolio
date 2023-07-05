$('#mobile-menu').on('click', function () {
    $('.mobile-menu-con').css('z-index', 999);
    $('.mobile-menu-con').css('opacity', 1);
    $('.mobile-menu-wrapper').css('margin-left',0);
})

$('#mobile-menu-close').on('click', function () {
    $('.mobile-menu-con').css('z-index', -999);
    $('.mobile-menu-con').css('opacity', 0);
    $('.mobile-menu-wrapper').css('margin-left','-300px');
})

let count = 1;

        $('.minus').on('click', function () {
            if (count > 1) {
                count--;
                $('.count').html(count);
            } else {
                $('.count').html(1)
            }
            let totalPrice = count * 10900;
            $('#total-price').html(totalPrice + '원');
        });


        $('.plus').on('click', function () {
            count++;
            $('.count').html(count);
            let totalPrice = count * 10900;
            $('#total-price').html(totalPrice + '원');
        })

        let btn = $('.tab');
        let con = $('.tab-content');

        for (let i = 0; i < 3; i++) {
            btn.eq(i).on('click', function () {
                btn.removeClass('tab-active');
                btn.eq(i).addClass('tab-active');
                con.removeClass('con-show');
                con.eq(i).addClass('con-show');
            })
        }