

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

/* 截屏并获取包装图像对象. */
let img = images.captureScreen();

/* OCR 识别并获取结果, 结果为字符串数组. */
let results = ocr(img);
log('results :', results);