const mediaQueryListDark = window.matchMedia('(prefers-color-scheme: dark)');

let theme = $('.theme > i')
console.log(theme)
function handleChange (mediaQueryListDark) {
    if (mediaQueryListDark.matches && theme.hasClass('theme-click fa-solid fa-xl fa-moon')) {
        theme.removeClass('theme-click fa-solid fa-xl fa-moon')
        theme.attr('class', 'theme-click fa-solid fa-xl fa-sun')
        console.log("这是暗色主题")
    } else {
        theme.removeClass('theme-click fa-solid fa-xl fa-sun')
        theme.attr('class', 'theme-click fa-solid fa-xl fa-moon')
        console.log("这是亮色主题")
    }
}

// 添加主题变动监控事件
mediaQueryListDark.addListener(handleChange);
