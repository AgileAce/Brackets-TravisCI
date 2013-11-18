var Travis = require('travis-ci');
var travis = new Travis({
    version: '2.0.0'
});

travis.auth.github({
    github_token: GITHUB_OAUTH_TOKEN
}, function (err, res) {
    // res => {
    //     access_token: XXXXXXX
    // }
    travis.authenticate({
        access_token: res.access_token
    }, function (err) {
         // we've authenticated!
    });
});