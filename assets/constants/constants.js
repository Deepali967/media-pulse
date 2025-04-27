export const loginTypes = [
    {
        id:1,
        text :'apply with us',
        route: 'Apply'
    },
    {
        id:2,
        text :'I have an account',
        route: 'Existing'
    },
    {
        id:3,
        text :'check application status',
         route: 'Status'
    }
]

export const tabs = [
    {
        id:0,
        text :'Basic Info',
        route: 'BasicInfo',
        data : {}
    },
    {
        id:1,
        text :'Categories',
        route: 'Categories', 
        data : {}
    },
    {
        id:2,
        text :'Fee card',
        route: 'FeeCard', 
        data : {}
    }
]


export const feecardContent = {
    'instagram' : {
        title : 'Instagram',
        fields : [
            { label: 'ig reel', field: 'igReel' },
            { label: 'ig carousel post', field: 'igCarouselPost' },
            { label: 'ig static post', field: 'igStaticPost' },
            { label: 'ig story', field: 'igStory' },
            { label: 'ig giveaway', field: 'igGiveaway' },
            { label: 'ig collaborator', field: 'igCollaborator' },
            { label: 'ig live session (15-30 min)', field: 'igLiveSession' },
        ]
    },
    'youtube' :  {
        title : 'YouTube',
        fields : [
            { label: 'Youtube integrated video', field: 'ytVideo' },
            { label: 'Youtube Shots', field: 'ytShots' },
            { label: 'Youtube Collab', field: 'ytCollab' },
        ]
    }
}