var myVideo = document.getElementById("video1");
var videoBtn = document.getElementById("videoBtn");
myVideo.loop = true;
function getVideoTime() {
    if (document.getElementById('video1')) {
        let videoPlayer = document.getElementById('video1');
        videoPlayer.addEventListener('timeupdate', function () {
            console.log(`当前的时间点是${videoPlayer.currentTime},视频长度是${videoPlayer.duration}`);
        }, false)
    }
}
getVideoTime();