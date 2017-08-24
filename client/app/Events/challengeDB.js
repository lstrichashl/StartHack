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
                    image: 'http://images.huffingtonpost.com/2014-06-19-bigstockTheLoveOfMoney302143011.jpg',
                    description: 'The titles of Washed Out\'s breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene\'s musical language: feel it. It\'s a simple request, as well    ',
                    miniDescription: 'The titles of Washed Out\'s breakthrough song ...',
                    tags: [
                        'ad matai',
                        'kama od',
                        'fun'
                    ]
                },
                {
                    name: 'challenge 2',
                    sponsor: 'coca cola',
                    deadLine: new Date('October 13, 2017 11:13:00'),
                    startDate: new Date('October 13, 2015 11:13:00'),
                    goal: 1000,
                    done: 300,
                    image: 'http://images.huffingtonpost.com/2014-06-19-bigstockTheLoveOfMoney302143011.jpg',
                    description: 'eeeeee',
                    miniDescription: 'The titles of Washed Out\'s breakthrough song ...',
                    tags: [
                        'ad matai',
                        'kama od',
                        'fun'
                    ]
                },
                {
                    name: 'challenge 3',
                    sponsor: 'coca cola',
                    deadLine: new Date('October 13, 2017 11:13:00'),
                    startDate: new Date('October 13, 2015 11:13:00'),
                    goal: 1000,
                    done: 300,
                    image: 'http://images.huffingtonpost.com/2014-06-19-bigstockTheLoveOfMoney302143011.jpg',
                    description: 'eeeeee',
                    miniDescription: 'The titles of Washed Out\'s breakthrough song ...',
                    tags: [
                        'ad matai',
                        'kama od',
                        'fun'
                    ]
                },
                {
                    name: 'challenge 4',
                    sponsor: 'coca cola',
                    deadLine: new Date('October 13, 2017 11:13:00'),
                    startDate: new Date('October 13, 2015 11:13:00'),
                    goal: 1000,
                    done: 100,
                    image: 'http://images.huffingtonpost.com/2014-06-19-bigstockTheLoveOfMoney302143011.jpg',
                    description: 'eeeeee',
                    miniDescription: 'The titles of Washed Out\'s breakthrough song ...',
                    tags: [
                        'ad matai',
                        'kama od',
                        'fun'
                    ]
                },
                {
                    name: 'challenge 5',
                    sponsor: 'coca cola',
                    deadLine: new Date('October 13, 2017 11:13:00'),
                    startDate: new Date('October 13, 2015 11:13:00'),
                    goal: 1000,
                    done: 750,
                    image: 'http://images.huffingtonpost.com/2014-06-19-bigstockTheLoveOfMoney302143011.jpg',
                    description: 'eeeeee',
                    miniDescription: 'The titles of Washed Out\'s breakthrough song ...',
                    tags: [
                        'ad matai',
                        'kama od',
                        'fun'
                    ]
                },
                {
                    name: 'challenge 6',
                    sponsor: 'coca cola',
                    deadLine: new Date('October 13, 2017 11:13:00'),
                    startDate: new Date('October 13, 2015 11:13:00'),
                    goal: 1000,
                    done: 0,
                    image: 'http://images.huffingtonpost.com/2014-06-19-bigstockTheLoveOfMoney302143011.jpg',
                    description: 'eeeeee',
                    miniDescription: 'The titles of Washed Out\'s breakthrough song ...',
                    tags: [
                        'ad matai',
                        'kama od',
                        'fun'
                    ]
                },
            ]
        };
    }

})();

