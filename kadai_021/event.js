const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click',function ()  {

setTimeout(function() {
  console.log('２秒後に実行')
  text.textContent = 'ボタンをクリックしました';
}, 2000); // 2秒後に実行

});