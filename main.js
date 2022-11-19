// </audio> Track

const allSpan= document.querySelectorAll('span')
const allAudio= document.querySelectorAll('audio')

allSpan.forEach((loadSpan)=>{
  const spanInner=  loadSpan.innerHTML

  if(spanInner.includes('audio> Track')){
    allAudio.forEach((element)=>{
      element.classList.add('audioTrack')
    })
  }
})

