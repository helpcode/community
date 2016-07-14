var _baseUrl = "http://jfinalbbs.com";
//var _baseUrl = "http://localhost:8080";
var _user_token = "user_token";
var _user_nickname = "user_nickname";
var _tab_ = '_tab_';
var _topic_id = "topic_id";
var reply_weiba_active = 'reply_weiba_active';
var reply_weiba = "<br>来自JFinalbbs客户端 <a target='_blank' href='http://git.oschina.net/20110516/jfbbs_mui'>jfbbs_mui</a>"
var countnotreadtime = 300000;

function topic_detail(tid) {
	plus.storage.setItem(_topic_id, tid);
	mui.openWindow({
		id: 'detail',
		url: 'topic-detail.html'
	});
}

function getTopicTab(_data) {
	var span_content;
	if ((_data.good == 1 && _data.top == 1) || (_data.good == 0 && _data.top == 1)) {
		span_content = "置顶";
	} else if (_data.top == 0 && _data.good == 1) {
		span_content = "精华";
	} else if (_data.top == 0 && _data.good == 0) {
		span_content = _data.sectionName;
	}
	return span_content;
}

function trim(str) {　　
	return str.replace(/(^\s*)|(\s*$)/g, "");　　
}

function isLogin() {
	var userToken = plus.storage.getItem(_user_token);
	if (userToken && userToken != "") {
		return true;
	} else {
		return false;
	}
}
