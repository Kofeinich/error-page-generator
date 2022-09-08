$(".switch-btn").click((e) => {
    if (![...e.target.classList].includes('switch-on')) {
        $('#switcher').addClass('switch-on');
        $("body").removeClass('light').addClass('dark')

    } else {
        $('#switcher').removeClass('switch-on');
        $("body").removeClass('dark').addClass('light')
    }
});

