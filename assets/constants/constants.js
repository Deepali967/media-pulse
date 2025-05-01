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



export const feecardContent = {
  'instagram' : {
      title : 'Instagram',
      fields : [
          {
              igReel: { label: 'ig reel', value: '' },
              igCarouselPost: { label: 'ig carousel post', value: '' },
              igStaticPost: { label: 'ig static post', value: '' },
              igStory: { label: 'ig story', value: '' },
              igGiveaway: { label: 'ig giveaway', value: '' },
              igCollaborator: { label: 'ig collaborator', value: '' },
              igLiveSession: { label: 'ig live session (15-30 min)', value: '' },
          }
      ]
  },
  'youtube' :  {
      title : 'YouTube',
      fields : [
          {
              ytVideo: { label: 'Youtube integrated video', value: '' },
              ytShots: { label: 'Youtube Shots', value: '' },
              ytCollab: { label: 'Youtube Collab', value: '' },
          },
      ]
  }
}

export const tabs = [
    {
        id:0,
        text :'Basic Info',
        route: 'BasicInfo',
        data : {
          name: 'karina bedi',
          titles: ['model', 'skincare enthusiast'],
          location: 'chandigarh',
          locations: ['chandigarh', 'mumbai'],
          bio: '',
          instagram: '@karina_bedi',
          youtube: 'karinabedi',
          currentLocation: 'chandigarh',
        }
    },
    {
        id:1,
        text :'Categories',
        route: 'Categories', 
        data : {
          fashion: [
            { title: "streetwear", selected: false },
            { title: "luxury fashion", selected: false },
            { title: "y2k", selected: false },
            { title: "diy", selected: false },
            { title: "haute", selected: false },
            { title: "bridal clothing", selected: false },
            { title: "vintage", selected: false },
            { title: "boho", selected: false },
            { title: "formal wear", selected: false },
            { title: "beach wear", selected: false },
            { title: "mens wear", selected: false },
            { title: "performance wear", selected: false },
            { title: "kids fashion", selected: false }
          ],
          beauty: [
            { title: "premium beauty", selected: false },
            { title: "makeup artist", selected: false },
            { title: "vfx makeup", selected: false },
            { title: "body care", selected: false },
            { title: "haircare", selected: false },
            { title: "skincare", selected: false },
            { title: "nailcare", selected: false },
            { title: "deromatologist", selected: false },
            { title: "nailart", selected: false },
            { title: "beauty appliance", selected: false },
            { title: "product review", selected: false },
            { title: "fragrances", selected: false }
          ],
          lifestyle: [
            { title: "travel blogger", selected: false },
            { title: "chef", selected: false },
            { title: "travel photographer", selected: false },
            { title: "food blogger", selected: false },
            { title: "mom blogger", selected: false },
            { title: "athlete", selected: false },
            { title: "fitness trainer", selected: false },
            { title: "diy decor", selected: false },
            { title: "finance", selected: false },
            { title: "gardening", selected: false },
            { title: "handcrafts", selected: false }
          ]
        }
    },
    {
        id:2,
        text :'Fee card',
        route: 'FeeCard', 
        data : feecardContent
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
