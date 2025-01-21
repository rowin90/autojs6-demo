/**
 * 刷抖音，点击评论
 */
home();

sleep(1500);

click('抖音');

sleep(3000);

while (true) {
  const randomNum = Math.floor(Math.random() * (20000 - 3000 + 1)) + 3000;
  const randomSX = Math.floor(Math.random() * (600 - 500 + 1)) + 500;
  const randomEX = Math.floor(Math.random() * (600 - 500 + 1)) + 500;
  const randomSY = Math.floor(Math.random() * (2000 - 1800 + 1)) + 1800;
  const randomEY = Math.floor(Math.random() * (1000 - 800 + 1)) + 800;
  const randomDur = Math.floor(Math.random() * (200 - 100 + 1)) + 100;

  swipe(randomSX, randomSY, randomEX, randomEY, randomDur);
  // swipe(500,1930,599,901,100)

  sleep(1000);

  id('com.ss.android.ugc.aweme:id/dyv')
    .descContains('评论')
    .findOnce()
    .parent()
    .click();
  sleep(1000);
  click(586, 455);

  sleep(randomNum);
}
