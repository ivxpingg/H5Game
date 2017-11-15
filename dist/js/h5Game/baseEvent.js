// 自适应调整
(function (){
    var main = {
        init: function () {
            main.eventBgMusic();
        },
        // 绑定背景音乐事件
        eventBgMusic: function() {
            var audio_dom = document.querySelector('#musicBg');
            var btn_dom = document.querySelector('#bg_muisc_btn');

            btn_dom.onclick = function () {
                console.dir(audio_dom);

                if (this.className.indexOf('muisc-play') >= 0) {
                    audio_dom.pause();
                    this.className = this.className.replace(' muisc-play', '');
                }
                else {
                    this.className = this.className + ' muisc-play';
                    audio_dom.play();
                }
            }
        }
    }

    main.init();
})();