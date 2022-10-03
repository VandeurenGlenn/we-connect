const { ipcRenderer } = require('electron')

ipcRenderer.on('SET_SOURCES', async (event, sources) => {
  console.log(JSON.parse(sources));
  document.querySelector('we-connect-shell').setAttribute('sources', sources)
  // try {
  //   const stream = await navigator.mediaDevices.getUserMedia({
  //     audio: false,
  //     video: {
  //       mandatory: {
  //         chromeMediaSource: 'desktop',
  //         chromeMediaSourceId: sourceId,
  //         minWidth: 1280,
  //         maxWidth: 1280,
  //         minHeight: 720,
  //         maxHeight: 720
  //       }
  //     }
  //   })
  //   handleStream(stream)
  // } catch (e) {
  //   handleError(e)
  // }
})

function handleStream (stream) {
  const video = document.querySelector('video')
  video.srcObject = stream
  video.onloadedmetadata = (e) => video.play()
}

function handleError (e) {
  console.log(e)
}