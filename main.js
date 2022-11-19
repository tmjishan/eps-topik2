// </audio> Track

const myT= document.querySelectorAll('span')

myT.forEach((data)=>{

  let k=  data.innerHTML

  console.log(k.includes('audio>Track'))
})
