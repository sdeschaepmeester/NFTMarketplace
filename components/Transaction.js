
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, Modal, TouchableWithoutFeedback } from 'react-native';
import * as React from 'react';
import nfts from '../NFTs';

const getTransactionValues = (nft) => {
    let uuid = require("uuid");
    let transactionHash = uuid.v4();
    let timestamp = new Date()
    let values = {
        "Transaction Hash": transactionHash.toString(),
        "Status": "SUCCESS",
        "Block": "17695504",
        "TimeStamp": timestamp.toString(),
        "From": "0x717EE46A939d64536e2CeE50A7B63DB1Af13E2ce",
        "To": "0xe9e7cea3dedca5984780bafc599bd69add087d56",
        "Tokens transferred": nft.price.toString(),
        "Transaction Fee": " 0.000180575 BNB",
        "BNB Price": "$318.98 / BNB"
    }
    return values;
}

const Transaction = ({ navigation, id}) => {
    const getByID = nfts.getNft(id);
    const nft = getByID[0]
    const values = getTransactionValues(nft)
    return (
    <View style={styles.container}>
        <Text style={{fontSize: 20, alignSelf: 'center', marginTop: '2%'}}>Transaction done:</Text>
        <ScrollView style={{backgroundColor: 'white', alignSelf: 'center', marginTop: '5%'}}>
            {Object.entries(values).map(([key, value]) => 
                <View style={{flexDirection: "row", marginTop: "1%"}}>
                    <Text style={{fontWeight: 'bold'}}>{key}: </Text>
                    <Text>{value}</Text>
                </View>
            )}
            <View style={{marginTop: "30%"}}>
                <Text style={{color: 'red'}}>Conditions of NFT Sales:</Text>
                <Text>Every buyer must read the following rules about NFTs:</Text>
                <Text style={{fontStyle: "italic"}}>The Buyer will be invoiced for the NFT in U.S. dollars and payment in full will be due within 24 hours of the time the invoice is sent. 
                Please note that the Buyer may elect to make payment of the purchase price for this NFT in the cryptocurrency Bitcoin. 
                Payment in Bitcoin must be made via a digital wallet transfer of Bitcoin to Pace Gallery, in the USD equivalent at time of transfer using USD/ETH spot rate as published on https://www.coinbase.com/price/bitcoin. $
                The digital wallet must be maintained with Coinbase Custody Trust; Coinbase, Inc.; 
                Fidelity Digital Assets Services, LLC; Gemini Trust Company, LLC; or Paxos Trust Company, LLC.
                Only Ether payments sent from digital wallets maintained at these platforms will be credited towards this NFT purchase, and we will not recognize payments from digital wallets hosted at other 
                exchanges or self-hosted wallets. The digital wallet must be registered to the Buyer. 
                The Buyer agrees, upon our request, to provide documentation confirming that the Ether payment was 
                made from a digital wallet registered in the Buyer’s name and maintained at one of the platforms 
                listed above. Partial payments of an NFT from multiple digital wallets will not be allowed. 
                In addition, Pace will use the spot rate of exchange for Ether as established by Coinbase at the time 
                of payment. Please contact Pace prior to the sale for further information relating to those digital 
                wallets from which payment will be accepted.</Text>
            </View>
        </ScrollView>
        <View style={{marginTop: "5%", backgroundColor: "#ededed", height: "30%", marginBottom: "5%", marginHorizontal: "1%"}}>
            <Text style={{alignSelf: 'center', marginTop: "10%", fontSize: 18}}>Congrats ! You are now the proud owner of the {nft.name} NFT. </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Buy")} style={styles.button}>
                <Text style={{textAlign: 'center', color: 'white'}}>Go Back</Text>
            </TouchableOpacity>
        </View>
    </View>
    );
}

export default Transaction;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dedede'
  },
  button:{
    elevation: 8,
    backgroundColor: "#38546b",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: "50%",
    alignSelf: 'center',
    marginTop: "10%"
  }
});
