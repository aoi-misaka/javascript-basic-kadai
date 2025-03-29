const btn = document.getElementById('btn');
const text = document.getElementById('text');

setTimeout(function() {
  console.log("2秒後に実行されました！");
}, 2000);

btn.addEventListener('click',function ()  {

  text.innerText = 'ボタンをクリックしました';
}

);