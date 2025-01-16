// const  img = images.read('./1.png')
// log(img)
// log(img.getSize())

// img.recycle()


threads.start(function(){
  while(true){
    if(text('立即开始').findOnce()){
      text('立即开始').findOnce().click()
      break
    }else{
      sleep(3000)
    }
  }
})


if(!requestScreenCapture()){
  toast("请求截图失败");
  exit();
}

const screen = images.captureScreen()

while(true){
  var img = captureScreen();
  var point = findColor(img, "#ff0000",{threshold:10});
  if(point){
      toast("找到红色, 坐标为(" + point.x + ", " + point.y + ")");
      break;
  }
}

// const img = images.clip(screen,70,217,496-70,625- 217)



// const img = images.load('https://img.pddpic.com/mms-material-img/2023-10-02/01f86a3c-09e1-42fc-a20f-1ce37f89218b.jpeg')

// img.saveTo('/sdcard/clock1.png')


log(colors.toString(img.pixel(2,2)))
img.recycle()

// const  img2 = images.captureScreen()
// console.log('img2 :', img2);
