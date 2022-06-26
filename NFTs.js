import shrek from "./assets/nft/shrek.png";
import monkey from "./assets/nft/monkey.png";
import foot from "./assets/nft/foot.png";
import monkeydumb from "./assets/nft/monkey-dumb.jpg";
import monkeyking from "./assets/nft/monkey-king.jpg";
import monkeysmoke from "./assets/nft/monkey-smoke.png";
import gold from "./assets/nft/gold.jpg";
import bob from "./assets/nft/bob.png";
import chadsquid from "./assets/nft/chadsquid.png";
import shiba from "./assets/nft/shiba.jpg";
import dream from "./assets/nft/dream.png";
import dreamaxe from "./assets/nft/dreamaxe.png";
import foxfury from "./assets/nft/fox-fury.jpg";
import fox from "./assets/nft/fox.png";
import nyan from "./assets/nft/nyan.jpg";
import sans from "./assets/nft/sans-ball.jpg";
import papyrus from "./assets/nft/papyrus.jpg";

class NFTs{
    // This contains all available NFTS
    constructor(){
        this.nfts = [
            {id: "monkey-dumb", name:"Tired Monkey", src: monkeydumb, description: "A monkey looking tired.", price: 5},
            {id: "monkey-king", name:"King Monkey", src: monkeyking, description: "The king of the jungle.", price: 2},
            {id: "monkey-smoke", name:"Smoking Monkey", src: monkeysmoke, description: "You can't smoke without damaging your health, but this NFT won't. Probably.", price: 1},
            {id: "monkey", name:"Angry Monkey", src: monkey, description: "4K res monkey !", price: 7},
            {id: "gold", name:"Gold Monkey", src: gold, description: "A golden monkey, shiny and cool.", price: 10},
            {id: "bob", name:"Spongebob the square", src: bob, description: "A sponge living inside a fruit.", price: 5},
            {id: "chadsquid", name:"Squidward the Chad", src: chadsquid, description: "What a chad.", price: 1},
            {id: "shrek", name:"Shrek", src: shrek, description: "Beautiful shrek pic, low price.", price: 500},
            {id: "shiba", name:"Shiba", src: shiba, description: "Wow such low price.", price: 99},
            {id: "dream", name:"Minecraft guy", src: dream, description: "14 years old girls finds it very handsome.", price: 75},
            {id: "dreamaxe", name:"Minecraft guy enhanced", src: dreamaxe, description: "Now with a sharpness 5 diamond axe .", price: 95},
            {id: "foxfury", name:"Weird fox", src: foxfury, description: "A fox with clothes.", price: 5},
            {id: "fox", name:"Cute fox", src: fox, description: "A cute fox with a big nose.", price: 15},
            {id: "nyan", name:"Nyan Cat", src: nyan, description: "NYANYANYANYANYANYANYANYANYA-", price: 5},
            {id: "sans", name:"Cool skeleton", src: sans, description: "Prepare to die.", price: 15},
            {id: "papyrus", name:"Cooler skeleton", src: papyrus, description: "A skeleton who loves spaghetti.", price: 16},
            {id: "foot", name:"Homer's foot", src: foot, description: "Homer Simpson's foot.", price: 5},
        ]
    }
    getNfts(){
        return this.nfts;
    }
    getNft(id){
        let nft = this.nfts.filter((nft) => nft.id == id);
        return nft;
    }
}

const nfts = new NFTs();
export default nfts;