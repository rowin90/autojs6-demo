# 基础软件
1. [autojs6下载地址](https://github.com/SuperMonster003/AutoJs6?tab=readme-ov-file)
2. [vscode连接插件](https://github.com/SuperMonster003/AutoJs6-VSCode-Extension?tab=readme-ov-file)
3. [scrcpy投屏安卓手机软件](https://github.com/Genymobile/scrcpy)


# autojs6基础设置
1. 无障碍打开
2. usb调试模式相关
3. 浮动按钮
4. 坐标显示辅助（手机上可以找坐标）


# vscode连接准备
1. 安装好插件后，点击建立链接，建立链接，选择服务端链接模式，autojs6作为客户端，vscode作为服务端，会生成一个链接地址
![建立链接](https://rowin90.github.io/images/vscode连接1/autojs.png)

2. 手机上，选择客户端模式，手机连接对应的ip地址
![手机变成客户端模式](https://rowin90.github.io/images/vscode连接2/autojs.png)

3. 在vscode中，写一个js文件，点击运行即可在手机上展示
```js
home()

sleep(1500)

click('拼多多')

toast('1111')

sleep(2000)

home()
```

# Image
1. 图像保存，前面的路径，一定要加 `/sdcard`,是手机存储的根目录
- image返回的对象，一定要进行回收
- captureScreen() 返回的图片不需要回收.
```js
const img = images.load('https://img.pddpic.com/mms-material-img/2023-10-02/01f86a3c-09e1-42fc-a20f-1ce37f89218b.jpeg')

img.saveTo('/sdcard/auto.jpeg')

// 回收图片
img.recycle();
```
2. 获取屏幕截图前，先要获取权限。
3. images.clip 的参数是 x,y,w,h 获取左上角左边，然后截图的宽度和长度
```js

requestScreenCapture()

const screen = images.captureScreen()

const img = images.clip(screen,70,217,496-70,625- 217)
```
4. 开启多线程，绕过需要授权截图的按钮
- 有些没有 root 的手机，获取手机截屏权限，每一次都要授权
- 获取截屏权限，最好是在最开始就申请授权，不要在用的地方才申请
```js
threads.start(function(){
  while(true){
    if(text('立即开始').findOnce()){ // 点击权限按钮
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
```
# floaty 悬浮窗
1. 防止悬浮窗关闭,需要加
```js
setInterval(()=>{}, 1000);
```
2. 因为脚本运行的线程不是UI线程, 而所有对控件的修改操作需要在UI线程执行, 此时需要用ui.run
```js
var w = floaty.window(
    <frame gravity="center">
        <text id="text">悬浮文字</text>
    </frame>
);


ui.run(function(){
    w.text.setText("文本");
});

setTimeout(()=>{
    w.close();
}, 2000);
```
# keys 按键
- 按键模拟部分提供了一些模拟物理按键的全局函数, 包括Home、音量键、照相键等
1. Home()
2. back()
3. recents()
