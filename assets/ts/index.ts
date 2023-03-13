import YouTubePlayer from 'youtube-player'

// Loads the YouTube player
const player = YouTubePlayer('video-player', {
  videoId: 'mUGYPlAgJPw',
  width: 960,
  height: 540,
  playerVars: {
    controls: 0,
    rel: 0,
    modestbranding: 1
  }
})

// Switch the feature image for the youtube player and play it
const videoFeatureImage = document.getElementById('video-feature-image') as HTMLDivElement

if (videoFeatureImage) {
  videoFeatureImage.addEventListener('click', () => {
    const videoWrapper = document.getElementById('video-wrapper') as HTMLIFrameElement

    if (videoWrapper) {
      videoWrapper.classList.add('show-video')
    }
    player.playVideo()
  })
}
