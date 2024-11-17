var v = document.getElementById("src");
    var v2 = document.getElementById("tgt");

    function video_click() {
      if (v.paused){
       v.play();
       v2.play(); 
      }
      else{
        v.pause();
        v2.pause();
      }
      // v.paused ? v.play() : v.pause();
      // v2.paused ? v2.play() : v2.pause();
      v.currentTime=v2.currentTime;
      v2.currentTime=v.currentTime;
    }

    var videoContainer = document.getElementById("video-compare-container"),
    videoClipper = document.getElementById("video-clipper"),
    clippedVideo = videoClipper.getElementsByTagName("video")[0];

    function trackLocation(e) {
      var rect = videoContainer.getBoundingClientRect(),
        position = ((e.pageX - rect.left) / videoContainer.offsetWidth) * 100;
      if (position <= 100) {
        videoClipper.style.width = position + "%";
        clippedVideo.style.width = ((100 / position) * 100) + "%";
        clippedVideo.style.zIndex = 3;
      }
    }
    videoContainer.addEventListener("mousemove", trackLocation, false);
    videoContainer.addEventListener("touchstart", trackLocation, false);
    videoContainer.addEventListener("touchmove", trackLocation, false);