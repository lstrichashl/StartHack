(function () {
    'use strict';

    angular
        .module('myApp')
        .factory('DB', DB);

    function DB() {
        return {
            challenges: [
                {
                    name: 'braidonate',
                    sponsors: ['pantene'],
                    deadLine: new Date('September 6, 2017 11:13:00'),
                    startDate: new Date('October 13, 2015 11:13:00'),
                    goal: 1000,
                    done: 750,
                    image: 'static/a4d213a4-2898-415b-b1ea-3d28b9d14408.jpg',
                    description: 'Millions of women all around the world are waiting for your hair donation.Together we can help them to bring back their lost confident. Minimum braid length - 10.',
                    mission: 'Donate a 10 inch braid to your local Barbershop !',
                    tags: [
                        'cancer',
                        'braid',
                        'girlsPower'
                    ],
                    complitedUsers: ['lior_strichash'],
                    defaultMedia: 'static/427027fd-1102-4580-a948-c69e84813d72.jpg',
                    style: {
                        backgroundColor: 'pink'
                    }
                },
                {
                    name: 'ALS ice bucket',
                    sponsors: ['coca cola'],
                    deadLine: new Date('October 13, 2017 11:13:00'),
                    startDate: new Date('October 13, 2015 11:13:00'),
                    goal: 1000,
                    done: 300,
                    image: 'static/fd2da07c-a72d-41d8-bb6b-2e3aaa719a38.jpg',
                    description: 'The Ice Bucket Challenge promotes awareness & money for the terrible uncured ALS disease. For every person to complete the challange - 30$ will be donated for researches to find the cure!',
                    mission: 'Dumping of a bucket of ice and water over your head, either by another person or yourself.',
                    tags: [
                        'ALS',
                        'Wet',
                        'SummerIsComing'
                    ],
                    complitedUsers: [''],
                    defaultMedia: 'static/91ebe24e-2baa-4620-af6d-1079ccfd2dfc.jpg',
                    style: {
                        backgroundColor: 'lightblue'
                    }
                },
                {
                    name: 'NY4U',
                    sponsors: ['NYU'],
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
                    complitedUsers: [''],
                    style: {
                        backgroundColor: 'syringa'
                    }
                },
                {
                    name: 'PCAfrica',
                    sponsors: ['Microsoft'],
                    deadLine: new Date('October 13, 2017 11:13:00'),
                    startDate: new Date('October 13, 2015 11:13:00'),
                    goal: 1000,
                    done: 750,
                    image: 'static/cf7579d8-9c35-4b18-9755-504449729fcc.jpg',
                    description: 'eeeeee',
                    tags: [
                        'computers',
                        'education'
                    ],
                    complitedUsers: [''],
                    style: {
                        backgroundColor: 'lightyellow'
                    }
                },
                {
                    name: 'Rollin',
                    sponsors: ['coca cola'],
                    deadLine: new Date('October 13, 2017 11:13:00'),
                    startDate: new Date('October 13, 2015 11:13:00'),
                    goal: 1000,
                    done: 345,
                    image: 'static/551ef593-a8e3-4526-ace8-8cfb1c70f210.jpg',
                    description: 'Raising wheelchairs & awareness for our disabled ! For every person to complete the challenge, 17$ will be donated for new wheelchairs for those who can\'t afford it',
                    mission: 'Dance on a 4 wheels vehicle to the song Chamillionaire - Ridin\'!',
                    tags: [
                        'disabled',
                        'dance',
                        'wheelchairs'
                    ],
                    complitedUsers: ['lior_strichash'],
                    style: {
                        backgroundColor: 'lightgray'
                    }
                },
                {
                    name: 'Fight4Trees',
                    sponsors: ['Amazon'],
                    deadLine: new Date('October 13, 2017 11:13:00'),
                    startDate: new Date('October 13, 2015 11:13:00'),
                    goal: 1000,
                    done: 984,
                    image: 'static/4bc9353d-d839-41a3-8866-c569387aa30f.jpg',
                    description: '1 Billion trees are chopped down every single year. For every person to complete the challenge - 5$ will be donated for saving amazon lands. Together we can save millions of trees worldwide !',
                    mission: 'Arrange your friends and water fight !',
                    tags: [
                        'SaveThePlanet',
                        'Wet',
                        'GoGreen',
                        'WaterFight',
                        'FightForTrees'
                    ],
                    complitedUsers: [''],
                    style: {
                        backgroundColor: 'lightgreen'
                    }
                },
                {
                    name: 'HackItForward',
                    sponsors: ['Radware', 'Gett', '8200', 'microsoft', 'WalkMe', 'Rafael'],
                    deadLine: new Date('October 13, 2017 11:13:00'),
                    startDate: new Date('October 13, 2015 11:13:00'),
                    goal: 1000,
                    done: 468,
                    image: 'static/51f039e7-d24b-4341-8b07-70298fddd4a0.jpg',
                    description: 'eeeeee',
                    tags: [
                        'hackathon',
                        'community'
                    ],
                    complitedUsers: [''],
                    defaultMedia: 'static/ezgif-1-7e2b9316cf.gif'
                }
            ],
            posts: [
                {
                    challengeName: 'braidonate',
                    profile: {
                        username: 'lior_strichash',
                        image: 'static/1905954410403422527630489170767033179457648n.jpg'
                    },
                    description: 'ad matai',
                    forward: {
                        username: 'tom',
                        image: 'static/tom.jpg'
                    },
                    media: 'static/homePosts/2c317634-b686-4a4e-8d7b-99d014044326.jpg'
                },
                {
                    challengeName: 'braidonate',
                    profile: {
                        username: 'tom',
                        image: 'static/tom.jpg'
                    },
                    description: 'ad matai',
                    forward: {
                        username: 'lior_strichash',
                        image: 'static/1905954410403422527630489170767033179457648n.jpg'
                    },
                    media: 'static/homePosts/306af541-786f-4d4a-91ea-2e021b29fc78.jpg'
                },
                {
                    challengeName: 'ALS ice bucket',
                    profile: {
                        username: 'tom',
                        image: 'static/tom.jpg'
                    },
                    description: 'ad matai',
                    forward: {
                        username: 'lior_strichash',
                        image: 'static/1905954410403422527630489170767033179457648n.jpg'
                    },
                    media: 'static/homePosts/ae83f2ed-6f79-46a3-9527-5e7d7d7e2e35.jpg'
                },
                {
                    challengeName: 'braidonate',
                    profile: {
                        username: 'tom',
                        image: 'static/tom.jpg'
                    },
                    description: 'ad matai',
                    forward: {
                        username: 'lior_strichash',
                        image: 'static/1905954410403422527630489170767033179457648n.jpg'
                    },
                    media: 'static/homePosts/b0442c38-78c0-43d4-bcf0-cf0e29ab91ba.jpg'
                },
                {
                    challengeName: 'Rollin',
                    profile: {
                        username: 'lior_strichash',
                        image: 'static/1905954410403422527630489170767033179457648n.jpg'
                    },
                    description: 'ad matai',
                    forward: {
                        username: 'tom',
                        image: 'static/tom.jpg'
                    },
                    media: 'static/homePosts/rolling1.gif'
                },
                {
                    challengeName: 'NY4U',
                    profile: {
                        username: 'tom',
                        image: 'static/tom.jpg'
                    },
                    description: 'ad matai',
                    forward: {
                        username: 'lior_strichash',
                        image: 'static/1905954410403422527630489170767033179457648n.jpg'
                    },
                    media: 'static/homePosts/55a36543-435c-4a0a-a72f-bc9c25354cb9.jpg'
                }
            ],
            profiles: [
                {
                    username: 'lior_strichash',
                    followers: 4592,
                    following: 543,
                    image: 'static/1905954410403422527630489170767033179457648n.jpg',
                    wishList: []
                },
                {
                    username: 'tom',
                    followers: 0,
                    following: 1573,
                    image: 'static/tom.jpg',
                    wishList: []
                }
            ]
        };
    }

})();

