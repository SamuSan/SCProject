/**
 * Created by samminns on 30/09/14.
 */
/**
 * Created by samminns on 30/09/14.
 */

var followers = [];
function init() {
    console.log("INIT");
    SC.initialize({
        client_id: CLIENT_ID,
        redirect_uri: callBack
    });
}

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
    //Max number of follower per response is 50, limit is
    //total number of followers for the user
    var idx = (limit / 50);


    followers.push(getAllFollowers(0));
    for (var i = 1; i < idx; i++) {
        // Or only the last "i" will be used
        (function (i) {
            followers.push(followers[i - 1].then(function () {
                return getAllFollowers(i);
            }));
        }(i));
    }
   return $.when(followers[idx]).done(function (){
        return followers;
    });
//    return getAllFollowers(user_id, idx);
}
function getAllFollowers(idx) {
    return $.getJSON(soundcloudAPI +
        "/users/" + user_id + "/followers?.json&offset=" + idx + "&" + CLIENT_ID, {
    }).done(function (d) {
        var response = d;
        console.log(d);
    }).fail(function () {
        alert('ERROR');
    });

}