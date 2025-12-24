/**
 * 時計を更新する関数
 */
function updateClock() {
  const clockElement = document.getElementById('clock');
  const greetingElement = document.getElementById('greeting');

  const now = new Date();

  //1.時間・分・秒を取得し、2桁に揃える（9時→09時）
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  //2.時計の表示を更新
  clockElement.innerText = `${hours}:${minutes}:${seconds}`;

  //3.1時間後個に挨拶をチェックして更新
  updateGreeting(now.getHours()); 
}

/**
 * 時間帯に合わせて挨拶を切り替える関数
 */
function updateGreeting(hours) {
  const greetingElement = document.getElementById('greeting');
    let message = "";

    if(hours >= 5 && hours <12) {
      message = "Good Morning!";
    } else if(hours >=12 && hours <18) {
      message = "Good Afternoon!";
    } else if(hours >=18 && hours <22) {
      message = "Good Evening!";
    } else {
      message = "Good Night!";
    }

    greetingElement.innerText = message;
}

//4.初回実行（ページ読み込み時）
updateClock();

//5.1秒（1000ミリ秒）ごとに実行
setInterval(updateClock, 1000);