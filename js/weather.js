//1.APIキーとベースURLの設定
const API_KEY = 'd44138898b079f960cd2d88106c947d5';  //取得したAPIキーを入れる
const CITY = 'Okinawa';
const URL =`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric&lang=ja`;

async function fetchWeather(){
  try{
    //2.APIを叩く(データの取得待ち)
    const response = await fetch(URL);

    //3.レスポンスが正常化チェック
    if(!response.ok){
      throw new Error('データの取得に失敗しました(Status: ${response.status})');
    }

    //4.JSON形式に変換
    const data = await response.json();

    //5.画面に表示する処理(関数の呼び出し)
    displayWeather(data);

  } catch (error) {
    console.error('エラーが発生しました:', error);

    const descElement = document.getElementById('weather-desc');
    if (descElement) descElement.innerText = '天気を読み込めませんでした';
  }
}

//6.画面に反映させる関数
function displayWeather(data){
  const temp = Math.round(data.main.temp); //小数点を四捨五入
  const description = data.weather[0].description; // 天気の説明（晴れ、曇りなど）
  const icon = data.weather[0].icon; //アイコンID

  document.getElementById('temp').innerText = `${temp}℃`;
  document.getElementById('weather-desc').innerText = description;
  document.getElementById('weather-icon').src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
};

//実行
fetchWeather();