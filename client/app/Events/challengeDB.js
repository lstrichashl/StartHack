(function () {
    'use strict';

    angular
        .module('myApp')
        .factory('challengeDB', challengeDB);


    function challengeDB() {
        return {
            challenges: [
                {
                    name: 'braidonate',
                    sponsor: 'pantene',
                    deadLine: new Date('September 6, 2017 11:13:00'),
                    startDate: new Date('October 13, 2015 11:13:00'),
                    goal: 1000,
                    done: 750,
                    image: 'static/a4d213a4-2898-415b-b1ea-3d28b9d14408.jpg',
                    description: 'The titles of Washed Out\'s breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene\'s musical language: feel it. It\'s a simple request, as well    ',
                    mission: 'ttttt',
                    tags: [
                        'ad matai',
                        'kama od',
                        'fun'
                    ],
                    complitedUsers: ['lior_strichash']
                },
                {
                    name: 'ice bucket challenge',
                    sponsor: 'coca cola',
                    deadLine: new Date('October 13, 2017 11:13:00'),
                    startDate: new Date('October 13, 2015 11:13:00'),
                    goal: 1000,
                    done: 300,
                    image: 'static/fd2da07c-a72d-41d8-bb6b-2e3aaa719a38.jpg',
                    description: 'eeeeee',
                    miniDescription: 'The titles of Washed Out\'s breakthrough song ...',
                    tags: [
                        'ALS',
                        'ice bucket',
                        'fun'
                    ],
                    complitedUsers: ['']
                },
                {
                    name: 'NY4U',
                    sponsor: 'coca cola',
                    deadLine: new Date('October 13, 2017 11:13:00'),
                    startDate: new Date('October 13, 2015 11:13:00'),
                    goal: 1000,
                    done: 100,
                    image: 'static/fd545e21-0a5a-4f3e-93db-498c5558bc50.jpg',
                    description: 'eeeeee',
                    miniDescription: 'The titles of Washed Out\'s breakthrough song ...',
                    tags: [
                        'ad matai',
                        'kama od',
                        'fun'
                    ],
                    complitedUsers: ['']
                },
                {
                    name: 'PCAfrica',
                    sponsor: 'coca cola',
                    deadLine: new Date('October 13, 2017 11:13:00'),
                    startDate: new Date('October 13, 2015 11:13:00'),
                    goal: 1000,
                    done: 750,
                    image: 'static/cf7579d8-9c35-4b18-9755-504449729fcc.jpg',
                    description: 'eeeeee',
                    miniDescription: 'The titles of Washed Out\'s breakthrough song ...',
                    tags: [
                        'ad matai',
                        'kama od',
                        'fun'
                    ],
                    complitedUsers: ['']
                },
                {
                    name: 'Rollin',
                    sponsor: 'coca cola',
                    deadLine: new Date('October 13, 2017 11:13:00'),
                    startDate: new Date('October 13, 2015 11:13:00'),
                    goal: 1000,
                    done: 0,
                    image: 'static/551ef593-a8e3-4526-ace8-8cfb1c70f210.jpg',
                    description: 'eeeeee',
                    miniDescription: 'The titles of Washed Out\'s breakthrough song ...',
                    tags: [
                        'ad matai',
                        'kama od',
                        'fun'
                    ],
                    complitedUsers: ['']
                },
                {
                    name: 'challenge 6',
                    sponsor: 'coca cola',
                    deadLine: new Date('October 13, 2017 11:13:00'),
                    startDate: new Date('October 13, 2015 11:13:00'),
                    goal: 1000,
                    done: 0,
                    image: 'static/706c7c8f-e425-4afe-bb54-9a7d0bfe4dbf.jpg',
                    description: 'eeeeee',
                    miniDescription: 'The titles of Washed Out\'s breakthrough song ...',
                    tags: [
                        'ad matai',
                        'kama od',
                        'fun'
                    ],
                    complitedUsers: ['']
                },
            ]
        };
    }

})();

