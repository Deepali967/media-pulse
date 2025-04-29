import { globalStyles } from "@/assets/typography/typography";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";

const Payment = () => {
    const navigation = useNavigation();
    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={styles.header}>
               <TouchableOpacity onPress={() => navigation.goBack()}> <Image source={require("../../../assets/images/creator/back.png")} style={{ width: 15, height: 15 }}/>
               </TouchableOpacity>
                <Text style={styles.headerText}>details</Text>
            </View>
            <View style={styles.paymentScreen}>
                <View style={styles.walletCard}>
                    <Text style={styles.walletTitle}>wallet</Text>
                    <Text style={styles.walletAmount}>₹ 5,00,000</Text>
                    <Text style={styles.walletSummary}>wallet summary</Text>
                </View>

                {/* Withdraw Button */}
                <TouchableOpacity style={styles.withdrawButton}>
                    <Text style={styles.withdrawText}>withdraw</Text>
                </TouchableOpacity>

                {/* Tabs */}
                <View style={styles.tabs}>
                    <TouchableOpacity style={styles.tabActive}>
                        <Text style={styles.tabTextActive}>ongoing</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabInactive}>
                        <Text style={styles.tabTextInactive}>completed</Text>
                    </TouchableOpacity>
                </View>

                {/* Deal Card */}
                {[1].map((_, index) => (
                    <View key={index} style={styles.dealCard}>
                        <View style={styles.cardHeader}>
                            <Text style={styles.brand}>simple skincare</Text>
                            <Text style={styles.date}>completion date{'\n'}15/04/2025</Text>
                        </View>
                        <Text style={styles.project}>non beauty 2.0</Text>
                        <View style={styles.cardFooter}>
                            <View style={styles.footerItem}>
                                <Text style={styles.label}>deliverables</Text>
                                <Text style={styles.value}>3</Text>
                            </View>
                            <Text style={styles.dot}>•</Text>
                            <View style={styles.footerItem}>
                                <Text style={styles.label}>deal cost</Text>
                                <Text style={styles.value}>₹2,00,000</Text>
                            </View>
                        </View>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};

export default Payment;

const styles = StyleSheet.create({
    header: {
        padding: 20,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
    },
    headerText: {
        flex: 1,
        textAlign: "center",
        ...globalStyles.paragraph,
        fontSize: 14
    },
    paymentScreen :{
        padding: 20
    },
    walletCard: {
        backgroundColor: '#08193205',
        borderRadius: 20,
        padding: 25,
        marginBottom: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 6, // Android only
      },
      walletTitle: {
        color: '#555',
        ...globalStyles.paragraph,
        fontSize: 14
      },
      walletAmount: {
        fontWeight: '700',
        marginVertical: 10,
        ...globalStyles.notificationText,
        fontSize: 24
      },
      walletSummary: {
        color: '#888',
        ...globalStyles.paragraph,
        fontSize: 12
      },
      withdrawButton: {
        backgroundColor: '#0B132A',
        paddingVertical: 14,
        borderRadius: 14,
        alignItems: 'center',
        marginBottom: 20,
      },
      withdrawText: {
        color: '#fff',
        fontWeight: '600',
        ...globalStyles.notificationText,
        fontSize: 14
      },
      tabs: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
      },
      tabActive: {
        backgroundColor: '#0B132A',
        borderRadius: 10,
        paddingVertical: 8,
        paddingHorizontal: 20,
        marginRight: 10,
      },
      tabInactive: {
        backgroundColor: '#EAEAEA',
        borderRadius: 10,
        paddingVertical: 8,
        paddingHorizontal: 20,
      },
      tabTextActive: {
        color: '#fff',
        ...globalStyles.notificationText,
        fontSize: 12
      },
      tabTextInactive: {
        color: '#999',
        ...globalStyles.notificationText,
        fontSize: 12
      },
      dealCard: {
        backgroundColor: '#0A1B311A',
        borderRadius: 18,
        padding: 20,
        marginBottom: 20,
        shadowColor: '#ddd',
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        ...globalStyles.paragraph,
        fontSize: 12
      },
      brand: {
        fontWeight: '700',
        ...globalStyles.paragraph,
        fontSize: 12
      },
      project: {
        color: '#555',
        marginTop: 2,
        marginBottom: 15,
        ...globalStyles.paragraph,
        fontSize: 12
      },
      date: {
        color: '#888',
        textAlign: 'right',
        ...globalStyles.paragraph,
        fontSize: 10
      },
      cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#0A1B310D', // 5% opacity navy blue
        padding: 10,
        borderRadius: 10,
      },
      footerItem: {
        alignItems: 'center',
      },
      label: {
        color: '#888',
        fontSize: 13,
        ...globalStyles.paragraph,
        fontSize: 12
      },
      value: {
        fontSize: 16,
        fontWeight: '600',
        marginTop: 2,
        ...globalStyles.paragraph,
        fontSize: 12
      },
      dot: {
        fontSize: 30,
        color: '#555',
        marginHorizontal: 10,
      },
});