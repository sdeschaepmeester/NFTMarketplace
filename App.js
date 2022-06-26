import BuyNFT from "./components/BuyNFT";
import SellNFT from "./components/SellNFT";
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Transaction from "./components/Transaction";

const Stack = createNativeStackNavigator();
function BuyScreen({ navigation }) {
  return (
    <BuyNFT navigation={navigation} />
  );
}

function SellScreen({ navigation }) {
  return (
    <SellNFT navigation={navigation} />
  );
}

const ConfirmBuy = (navigation, route) => {
  navigation.navigate('Transaction', {id: route})
}

const NFTScreen = ({ navigation, route }) => {
  return (<View>
      <Text style={{fontSize: 18, marginTop: "2%", alignSelf: 'center'}}>You are about to buy the following NFT: </Text>
      <View style={{marginTop: "5%", marginLeft: "2%"}}>
        <Text style={{margin: 10}}>Name: {route.params.nft.name}</Text>
        <Text style={{margin: 10}}>Description: {route.params.nft.description}</Text>
        <Text style={{margin: 10}}>Price: {route.params.nft.price} bitcoins.</Text>
      </View>
      <Image source={route.params.nft.src} style={{maxHeight: "40%",maxWidth: "80%", resizeMode: 'contain', alignSelf: 'center', marginTop: "5%"}} />
      <View style={{flexDirection: 'row', marginTop: "20%", justifyContent: 'space-between', margin: 15}}>
            <TouchableOpacity style={styles.button} onPress={() => ConfirmBuy(navigation, route.params.nft.id)}>
                <Text style={{color: "white"}}>Buy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Buy')}>
                <Text style={{color: "white"}}>Cancel</Text>
            </TouchableOpacity>
        </View>
    </View>)
};

const SeeTransaction = ({ navigation, route }) => {
  return <Transaction navigation={navigation} id={route.params.id}/>
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Buy"
          component={BuyScreen}
          options={{ title: 'NFT Market' }}
        />
        <Stack.Screen name="Sell" component={SellScreen} options={{ title: 'Sell your NFT' }} />
        <Stack.Screen name="NFT" component={NFTScreen} options={{ title: 'NFT Details' }} />
        <Stack.Screen name="Transaction" component={SeeTransaction} options={{ title: 'Thank you for your purchase.' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

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
    paddingHorizontal: 70
  }
});