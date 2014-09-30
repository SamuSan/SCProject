//init();
var tracks = getSC(11222);
console.log(tracks);


var user_id;
var user = getUserId("monkeymademusic");
user.then(function (data) {
    console.log(data);
    user_id = data.id;
    var user_followers = data.followers_count;
    console.log(user_followers)
    console.log(user_id);


    var fans = getFollowers(user_id, user_followers);

    fans.then(function (data) {
        console.log(data);
    }, function (error) {
        console.log(error);
    });

}, function (error) {
    console.log(error);
});



