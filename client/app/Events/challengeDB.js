(function () {
    'use strict';

    angular
        .module('myApp')
        .factory('challengeDB', challengeDB);


    function challengeDB() {
        return {
            challenges: [
                {
                    name: 'challenge 1',
                    sponsor: 'coca cola',
                    deadLine: new Date('October 13, 2017 11:13:00'),
                    startDate: new Date('October 13, 2015 11:13:00'),
                    goal: 1000,
                    done: 750,
                    image: 'static/36b246b8-b63b-43a3-ab65-49f23687ce5a.jpg',
                    description: 'The titles of Washed Out\'s breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene\'s musical language: feel it. It\'s a simple request, as well    ',
                    miniDescription: 'The titles of Washed Out\'s breakthrough song ...',
                    tags: [
                        'ad matai',
                        'kama od',
                        'fun'
                    ],
                    complitedUsers: ['lior_strichash']
                },
                {
                    name: 'challenge 3',
                    sponsor: 'coca cola',
                    deadLine: new Date('October 13, 2017 11:13:00'),
                    startDate: new Date('October 13, 2015 11:13:00'),
                    goal: 1000,
                    done: 300,
                    image: 'static/ae83f2ed-6f79-46a3-9527-5e7d7d7e2e35.jpg',
                    description: 'eeeeee',
                    miniDescription: 'The titles of Washed Out\'s breakthrough song ...',
                    tags: [
                        'ad matai',
                        'kama od',
                        'fun'
                    ],
                    complitedUsers: ['lior_strichash']
                },
                {
                    name: 'challenge 4',
                    sponsor: 'coca cola',
                    deadLine: new Date('October 13, 2017 11:13:00'),
                    startDate: new Date('October 13, 2015 11:13:00'),
                    goal: 1000,
                    done: 100,
                    image: 'static/dafd11d6-771b-4f37-bc5b-4b1a4ebd7272.jpg',
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
                    name: 'challenge 5',
                    sponsor: 'coca cola',
                    deadLine: new Date('October 13, 2017 11:13:00'),
                    startDate: new Date('October 13, 2015 11:13:00'),
                    goal: 1000,
                    done: 750,
                    image: 'static/1906759e-3c8d-4efc-9183-4d96337845aa.jpg',
                    description: 'eeeeee',
                    miniDescription: 'The titles of Washed Out\'s breakthrough song ...',
                    tags: [
                        'ad matai',
                        'kama od',
                        'fun'
                    ],
                    complitedUsers: ['lior_strichash']
                },
                {
                    name: 'challenge 6',
                    sponsor: 'coca cola',
                    deadLine: new Date('October 13, 2017 11:13:00'),
                    startDate: new Date('October 13, 2015 11:13:00'),
                    goal: 1000,
                    done: 0,
                    image: 'static/77a31d5f-a35d-4206-af78-84e69183d1e5.jpg',
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
                    image: 'static/b8e481cd-9a3a-4cfe-a9e0-a3d7ae32b7e9.jpg',
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

