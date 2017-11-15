// 自适应调整
(function (){
    var main = {
        init: function () {
            main.autoScreenWidth();

            window.onresize = function(){
                main.autoScreenWidth();
            }
        },
        // 字体rem自适应屏幕宽度, 320PX：20rem的比例；
        // 设置html标签的字体大小320px: 20rem
        autoScreenWidth: function() {
            var Screen_width = window.screen.width;

            var width = (10 / 320) * Screen_width + 'px';

            document.querySelector("#html").style.fontSize = width
        }
    }

    main.init();
})();