
// launchApp('拼多多')

// app.viewFile('/sdcard/脚本/clock.png')
// app.editFile('/sdcard/脚本/clock.png')

// app.openUrl('https://p.pinduoduo.com/6rfVIVEw')

// app.sendEmail('')

var w = floaty.window(
  <vertical gravity="center">
      <text id="text">悬浮文字111</text>
      <button id="btn">按钮</button>
  </vertical>
);

setInterval(()=>{}, 1000);

ui.run(function(){
  w.btn.setText('文本')
})

toast('111')
// setTimeout(()=>{
//   w.close();
// }, 2000);