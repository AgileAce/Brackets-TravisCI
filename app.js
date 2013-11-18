var Travis = require('travis-ci');
var travis = new Travis({
    version: '2.0.0'
});

travis.authenticate({
    username: process.env.GITHUB_USERNAME,
    password: process.env.GITHUB_PASSWORD
}, function (err,res) {
    console.log("we've authenticated!");
    var accessToken = res.access_token;
    travis.repos({
        owner_name: 'AgileAce',
        name: process.env.GITHUB_REPO
    }, function (err, res) {
        console.log(res.repo.slug);
    });

});

