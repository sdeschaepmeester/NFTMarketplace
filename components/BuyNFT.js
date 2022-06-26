
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image, Modal, TouchableWithoutFeedback } from 'react-native';
import * as React from 'react';
import nfts from '../NFTs';

const getAllNFTS = () => {
    return nfts.getNfts();
}

const BuyNFT = ({ navigation }) => {
    return (
    <View style={styles.container}>
        <View style={{flexDirection: 'row', marginTop: "10%", justifyContent: 'space-between', margin: 15}}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Buy')}>
                <Text style={{color: "white"}}>Buy an NFT</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Sell')}>
                <Text style={{color: "white"}}>Sell an NFT</Text>
            </TouchableOpacity>
        </View>
        <FlatList
            numColumns={2}
            data={getAllNFTS()}
            keyExtractor={(item) => item.id}
            renderItem={ ({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('NFT', { nft: item })} style={{backgroundColor: "#ededed", width: "45%", height: 200, margin: 10, elevation: 8,}}>
                    <View >
                        <Image source={item.src} style={{maxHeight: "50%",maxWidth: "100%", resizeMode: 'contain', backgroundColor: '#ededed', marginTop: "2%"}} />
                        <Text style={{fontWeight: "bold", textAlign: 'center'}}>{item.name}</Text>
                        <Text>{item.description}</Text>
                        <Text style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: 18, }}>{item.price} Bitcoins</Text>
                    </View>
                </TouchableOpacity>
            )}
        />
    </View>
    );
}

export default BuyNFT;

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
    paddingHorizontal: 50
  }
});
