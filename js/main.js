//init();







function init(name) {
removeInput();
    console.log(name);



    var user_id;
    var user = getUserId("zacinfact");
    user.then(function (data) {
        console.log(data);
        user_id = data.id;
        var user_followers = data.followers_count - 1;
        console.log(user_followers)
        console.log(user_id);


        getFollowers(user_id, user_followers);
//We leave the main script here and follow the promise chain in sc.api.data.js
//    var follows = Q.all(getFollowers(user_id, user_followers));
//    follows.then(function (data) {
//        console.log(data);
//    });
//}, function (error) {
//    console.log(error);
    });


}


function removeInput (){
    var input =  document.getElementById('userNameInput');
    input.parentNode.removeChild(input);
    input =  document.getElementById('userNameInputButton');
    input.parentNode.removeChild(input);
    input =  document.getElementById('header');
    input.parentNode.removeChild(input);


}