import { globalStyles } from "@/assets/typography/typography";
import { ScrollView, View, StyleSheet, Image, Text } from "react-native";

const BasicInfoTab = ({campaign}) => {
    return (
      <ScrollView style={{ flex: 1 }}>
          <View style={styles.basicInfoContainer}>
          <Image
              source={require("../../../assets/images/creator/sample-campaign.png")} // Campaign image
              style={styles.campaignImage}
            />
            
            <View style={styles.campaignInfo}>
              <Text style={styles.campaignLabel}>campaign name</Text>
              <Text style={styles.campaignValue}>{campaign.campaignDetails?.campaignName}</Text>

              <Text style={styles.campaignLabel}>total deliverables</Text>
              <Text style={styles.campaignValue}>{campaign?.campaignDetails?.totalDeliverables}</Text>

              <Text style={styles.campaignLabel}>timeline</Text>
              <Text style={styles.campaignValue}>{campaign?.campaignDetails?.timeline}</Text>

              <Text style={styles.campaignLabel}>deal cost</Text>
              <Text style={styles.campaignCost}>{campaign?.campaignDetails?.dealCost}</Text>

            <View style={{borderRadius:10, borderColor:"#0819320D", backgroundColor:"#08193203"}}>
              <Text style={styles.campaignLabel}>campaign description</Text>
              <Text style={styles.campaignDescription}>{campaign?.campaignDetails?.description}</Text>
              </View>  
            </View>
          </View>
      </ScrollView>
    );
  }
  
export default BasicInfoTab;

  const styles = StyleSheet.create({
    campaignInfo: {
      flex: 1,
    },
    basicInfoContainer : {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },

    campaignImage: {
      height:600,
      width:'100%',
      borderRadius: 12,
      marginBottom: 20,
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    campaignTitle: {
      fontWeight: 'bold',
      marginTop: 6,
      marginBottom: 10,
      color: '#1c1c1e',
      textTransform: 'capitalize',
      ...globalStyles.paragraph,
      textAlign: 'center',
      fontSize: 18,
    },
    campaignLabel: {
      color: '#8e8e93',
      marginTop: 8,
      marginBottom: 5,
      textTransform: 'capitalize',
      ...globalStyles.paragraph,
      textAlign: 'center',
      fontSize: 12,
    },
    campaignValue: {
      color: '#1c1c1e',
      marginTop: 2,
      marginBottom: 20,
      textTransform: 'capitalize',
      ...globalStyles.paragraph,
      textAlign: 'center',
      fontSize: 16,
    },
    campaignCost: {
      color: '#1c1c1e',
      fontWeight: 'bold',
      ...globalStyles.notificationText,
      fontSize: 16,
      marginTop: 2,
      textAlign: 'center',
      marginBottom: 20,
    },

    campaignDescription :{
      color: '#081932',
      marginTop: 2,
      marginBottom: 20,
      ...globalStyles.paragraph,
      textAlign: 'center',
      fontSize: 12,
      paddingHorizontal: 20,
      lineHeight: 15
    }
  })