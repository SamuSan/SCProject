/**
 * Created by samminns on 30/09/14.
 */
/**
 * Created by samminns on 30/09/14.
 */

var followers = [];

function getSC(user_id) {
    console.log(user_id);

    console.log(soundcloudAPI + "/tracks?" + CLIENT_ID);
    return $.getJSON(soundcloudAPI + "/tracks?" + CLIENT_ID, {
    });
}


function getUserId(userName) {
    var user = $.ajax({
        url: soundcloudAPI + "/resolve.json?url=http://soundcloud.com/" + userName + "&" + CLIENT_ID,
        type: "GET"
    })
    return user;
}

function getFollowers(user_id, limit) {
    var num_pages = (limit / 50);
    $.getJSON(soundcloudAPI + "/users/" + user_id + "/followers?.json&offset=" + 0 + "&" + CLIENT_ID, {
    }).done(function (data) {
        getAllFollowers(num_pages).then(function (followerData) {
            followerData.push(data);
            _.flatten(followerData);
            followers = _.flatten(followerData);
            console.log(followers);

            setup(followers);
        });
    }).fail(function () {
        alert('ERROR');
    });

}
//Gets all followers for a user and returns them as an Array
function getAllFollowers(user_id,total) {
    var promArr = new Array();
    for (var i = 1; i <= total; i++) {
        promArr.push($.getJSON(soundcloudAPI +
            "/users/" + user_id + "/followers?.json&offset=" + i + "&" + CLIENT_ID, {
        }));
    }
    var megaProm = Q.all(promArr);
    return megaProm;
}
