console.log(document.getElementById('text'));
document.getElementById('btn').addEventListener('click', function() {
  document.getElementById('text').textContent = 'ボタンをクリックしました';
});
