// 自适应调整
(function (){
    var main = {
        init: function () {
            main.eventBgMusic();
            main.eventBagBtn();

            main.setSwiper();
            main.loading();
        },
        // 页面加载是否完成
        loading: function() {
            //当页面加载状态改变的时候执行这个方法.
            document.onreadystatechange = function() {
                if(document.readyState == 'complete') {
                    //当页面加载状态
                    // document.querySelector('#musicBg').play();
                }
            };

        },

        // 绑定背景音乐事件
        eventBgMusic: function() {
            var audio_dom = document.querySelector('#musicBg');
            var btn_dom = document.querySelector('#bg_muisc_btn');

            btn_dom.onclick = function () {
                if (this.className.indexOf('muisc-play') >= 0) {
                    audio_dom.pause();
                    this.className = this.className.replace(' muisc-play', '');
                }
                else {
                    this.className = this.className + ' muisc-play';
                    audio_dom.play();
                }
            }
        },
        // 活动锦囊
        eventBagBtn: function () {
            var bag_btn_dom = document.querySelector('#bag_btn');
            var desc_box_dom = document.querySelector('#desc_box');
            var desc_box_close_dom = document.querySelector('#desc_box_close_btn');

            bag_btn_dom.onclick = function () {
                if (desc_box_dom.className.indexOf('bag-show') >= 0) {
                    desc_box_dom.className = desc_box_dom.className.replace(' bag-show', '');
                } else {
                    desc_box_dom.className = desc_box_dom.className + ' bag-show';
                }
            }

            desc_box_close_dom.onclick = function (e) {
                e.preventDefault();
                desc_box_dom.className = desc_box_dom.className.replace(' bag-show', '');
                desc_box_dom.className = desc_box_dom.className.replace('bag-show', '');
            }

        },

        setSwiper: function () {
            var slideBarTip_dom = document.querySelector('.slideBarTip');
            var desc_nav_btn_dom = document.querySelector('#desc_nav_btn');

            var num = 0;
            var li_dom = document.querySelectorAll("#desc_nav_btn li");
            var sw = new Swiper(".swiper-container",{

            });

            for (var i = 0; i < li_dom.length; i++) {
                li_dom[i].onclick = function (e) {
                    e.preventDefault();
                    num = parseInt(e.target.getAttribute('channel'));
                    sw.slideTo(num, 500);
                    slideBarTip_dom.style.left = desc_nav_btn_dom.clientWidth * (num / 3) + 'px';
                }
            }
        }
    }

    main.init();
})();