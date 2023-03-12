import YouTubePlayer from 'youtube-player';

// Loads the YouTube player
const player = YouTubePlayer('video-player', {
    videoId: 'mUGYPlAgJPw',
    width: 960,
    height: 540,
    playerVars: {
        controls: 0,
        rel: 0,
        modestbranding: 1,
    }
});
   
// Switch the feature image for the youtube player and play it
const videoFeatureImage = document.getElementById('video-feature-image') as HTMLDivElement;

videoFeatureImage.addEventListener('click', () => {
    const videoPlayer = document.getElementById('video-player') as HTMLIFrameElement;

    videoFeatureImage.style.display = 'none';
    videoPlayer.style.display = 'block';

    player.playVideo();
});
