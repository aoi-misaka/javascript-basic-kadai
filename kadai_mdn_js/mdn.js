var today = new Date(); //インスタンスを生成
var week_array = ["日", "月", "火", "水", "木", "金", "土"]; //曜日の配列を用意

//dateObjという名前のオブジェクトを作成
var dateObj = {

	year: today.getFullYear(), //年
	month: today.getMonth() + 1, //月
	day: today.getDate(), //日
	week: week_array[today.getDay()], //曜日
	hours: today.getHours(), //時
	minutes: today.getMinutes(), //分
	seconds: today.getSeconds(), //秒

	//出力のフォーマットを定義
	getDate: function(){
		var display_format = this.year + '/' + this.month + '/' + this.day + '(' + this.week + ')';
		return display_format;
	}
}

//コンソールに出力
console.log(dateObj.getDate());



