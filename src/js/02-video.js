import throttle from 'lodash.throttle';
import Vimeo from '@vimeo/player'

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

function onTimeUpdate (data) {
    console.log(data.seconds);
    localStorage.setItem("videoplayer-current-time",data.seconds )
}

player.on('timeupdate',throttle(onTimeUpdate, 1000) );
player.setCurrentTime(localStorage.getItem("videoplayer-current-time"))
player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});
