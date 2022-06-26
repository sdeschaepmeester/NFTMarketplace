
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image, Modal, TouchableWithoutFeedback } from 'react-native';
import * as React from 'react';
import nfts from '../NFTs';

const getNFT = () => {
    console.log("yoo")
    return nfts.getNft("shrek");
}

const NFTInfo = ({ navigation, route }) => {
    return (
    <View style={styles.container}>
        
        <Text>{route}</Text>

    </View>
    );
}

export default NFTInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: '#dedede'
  },
});
