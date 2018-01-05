/**function is transferred as parameter
 * Created by linajiema on 2018/1/5.
 */
//1.callback function in ajax is always used in the instance when the exact time of response is unknown.
var getUserInfo = function (userId, callback) {
    $.ajax('http://xxx.com/getUserInfo?' + userId, function (data) {
        callback(data);
    })
}
getUserInfo(13157, function (data) {
    alert(data.userName);
})