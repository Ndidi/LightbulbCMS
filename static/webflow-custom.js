var player;
function showAndPlayVideo(videoClass){
  document.getElementsByClassName("tint-container")[0].style.display = 'block';
  document.getElementsByClassName(videoClass)[0].style.display = 'block';
player = new Vimeo.Player(document.getElementsByClassName(videoClass)[0].getElementsByTagName('iframe')[0]);
player.play();
}
function stopAndCloseVideo(){
  player.pause();
  var tint = document.getElementsByClassName("tint-container")[0]
tint.style.display = 'none';
  var videos = tint.getElementsByClassName('w-embed')
  for (var i = 0; i < videos.length; i++) {
    videos[i].style.display = 'none';
}
}
//This code finds all the video links and makes them open the right video when clicked
document.addEventListener("DOMContentLoaded", function() {
  var videoLinks = document.querySelectorAll('[data-video-playback]');
  if(videoLinks.length > 0){
    videoLinks.forEach(
      function(currentValue){
        currentValue.addEventListener("click", function(){
          showAndPlayVideo(currentValue.getAttribute("data-video-playback"))
        })
      }
    )
    document.getElementById("closevid").addEventListener("click", function(){
      stopAndCloseVideo();
    })
  }
});