
(function() {

    var main = {
        openShake: true,
        init: function () {
            main.bindShakeEvent();
        },
        bindShakeEvent: function () {
            //获取加速度信息
            //通过监听上一步获取到的x, y, z 值在一定时间范围内的变化率，进行设备是否有进行晃动的判断。
            //而为了防止正常移动的误判，需要给该变化率设置一个合适的临界值。
            var SHAKE_THRESHOLD = 1000;
            var last_update = 0;
            var x, y, z, last_x = 0, last_y = 0, last_z = 0;
            var audio_dom1 = document.querySelector('#clickmusic');
            audio_dom1.play();
            try {
                if (window.DeviceMotionEvent) {
                    window.addEventListener('devicemotion', function (eventData) {
                        var acceleration =eventData.accelerationIncludingGravity;
                        var curTime = new Date().getTime();
                        if ((curTime-last_update)> 200) {
                            var diffTime = curTime -last_update;
                            last_update = curTime;
                            x = acceleration.x;
                            y = acceleration.y;
                            z = acceleration.z;
                            var speed = Math.abs(x +y + z - last_x - last_y - last_z) / diffTime * 10000;
                            if (speed > SHAKE_THRESHOLD) {

                                audio_dom1.play();
                                alert("你中奖啦！22");  // Do something
                            }
                            last_x = x;
                            last_y = y;
                            last_z = z;
                        }
                    }, false);
                }
            }
            catch (e) {
                alert('不兼容');
            }
        }

    };

    main.init();
})();