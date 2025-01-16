'ui';
ui.layout(
  <horizontal>
    <button id='w' w='auto' text='抖音养号' />
    <text id="h" w='*' text='填满父布局' />
  </horizontal>
);

ui.w.on('click', function () {
  toast(device.fingerprint);

  threads.start(function () {
    // home();

    sleep(1500);
    alert('修改好了')

    ui.h.setText('你好')
  });
});

// recents()

// engines.execScript("hello world", "toast('hello world')");
