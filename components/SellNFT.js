
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import sorry from '../assets/nft/jsfordummies.png';

const SellNFT = ({ navigation }) => {
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
    <Text style={{fontSize: 35, textAlign: 'center'}}>Sorry !</Text>
    <Text style={{fontSize: 16, textAlign: 'center', marginTop: "5%"}}>This feature has yet to be implemented. As for now, you can check out our NFT Marketplace.</Text>
    <Image source={sorry} style={{resizeMode: 'contain', width: "40%", bottom: 0, position: 'absolute', alignSelf: 'center'}} />
    
    </View>
  );
}

export default SellNFT;

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
