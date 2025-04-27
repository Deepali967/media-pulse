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


export const campaignTabs = [
  {
      id:0,
      text :'Basic Info',
      route: 'BasicInfo',
      data : {}
  },
  {
      id:1,
      text :'Deliverables',
      route: 'Deliverables', 
      data : {}
  },
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


export const CampaignCard = [
  {
    "image": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
    "campaignTitle": "simple skincare",
    "campaignDetails": {
      "campaignName": "non beauty 2.0",
      "totalDeliverables": 3,
      "timeline": "feb 2025 - mar 2025",
      "dealCost": "₹ 2,00,000",
      "description": "Creators from different genres like travel, fitness, chef, basically anything but beauty recommend simple products as their go-to skincare because it’s quick, easy, and effective. The campaign focuses on showcasing how these products fit seamlessly into the creators' daily routines. A video with extremely organic integration in the content you are best at will highlight the authenticity and effectiveness of the products.",
      "deliverables": [
        {
          "title": "Instagram Reel",
          "price": "₹ 20,000"
        },
        {
          "title": "Instagram Story",
          "price": "₹ 10,000"
        },
        {
          "title": "YouTube Video",
          "price": "₹ 50,000"
        }
      ]
    }
  },
  {
    "image": "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
    "campaignTitle": "eco-friendly living",
    "campaignDetails": {
      "campaignName": "green initiative",
      "totalDeliverables": 5, // was 5, now adding 2 more
      "timeline": "jan 2024 - feb 2024",
      "dealCost": "₹ 1,50,000",
      "description": "An initiative to encourage sustainable and eco-friendly living practices. This campaign highlights the importance of adopting green habits in everyday life. Creators will share tips, tricks, and products that help reduce environmental impact while maintaining a modern lifestyle.",
      "deliverables": [
        {
          "title": "Instagram Carousel Post",
          "price": "₹ 15,000"
        },
        {
          "title": "YouTube Collab",
          "price": "₹ 30,000"
        },
        {
          "title": "Blog Post",
          "price": "₹ 25,000"
        },
        {
          "title": "Instagram Reel",
          "price": "₹ 20,000"
        },
        {
          "title": "Instagram Story",
          "price": "₹ 10,000"
        }
      ]
    }
  },
  {
    "image": "https://images.unsplash.com/photo-1519337265831-281ec6cc8514",
    "campaignTitle": "tech for good",
    "campaignDetails": {
      "campaignName": "innovation drive",
      "totalDeliverables": 4, // was 4, now adding 1 more
      "timeline": "mar 2023 - apr 2023",
      "dealCost": "₹ 3,00,000",
      "description": "A campaign to highlight technological innovations that positively impact society. Creators from various fields will showcase how technology can be leveraged to solve real-world problems. The focus is on creating engaging content that inspires and educates audiences about the power of innovation.",
      "deliverables": [
        {
          "title": "YouTube Integrated Video",
          "price": "₹ 40,000"
        },
        {
          "title": "Instagram Story",
          "price": "₹ 12,000"
        },
        {
          "title": "Blog Post",
          "price": "₹ 20,000"
        },
        {
          "title": "Podcast Interview",
          "price": "₹ 25,000"
        }
      ]
    }
  }
];
