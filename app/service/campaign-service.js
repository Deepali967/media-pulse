import { CampaignCard } from "@/assets/constants/constants"

var campaign_details = {}

export const setCampaign = (campaign) => { 
    campaign_details = campaign
}


export const getCampaign = () => {
    return campaign_details
}