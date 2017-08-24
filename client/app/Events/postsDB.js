(function () {
    'use strict';

    angular
        .module('myApp')
        .factory('postsDB', postsDB);


    function postsDB() {
        return {
            posts: [
                {
                    challengeName: 'braidonate',
                    user: 'lior_strichash',
                    description: 'ad matai',
                    forward: 'tom',
                    media: 'static/2c317634-b686-4a4e-8d7b-99d014044326.jpg'
                }
            ]
        };
    }

})();

