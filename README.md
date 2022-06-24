# NFTMarketplace

A small project made to simulate an NFT marketplace and see the properties of a Bitcoin transaction.

## Overview

Ce projet a pour unique but de simuler un marketplace dans lequel nous pouvons acheter et vendre des NFTS via des bitcoins.

Tout est en local, il n'y a pas de compte et on considère que l'utilisateur aura toujours suffisament de bitcoin disponible lorsqu'il achète un NFT.

## Installation

1. Récupérer le code source, par .zip ou en par ligne de commande en le récupérant du github associé via la commande suivante :

```git
git clone https://github.com/sdeschaepmeester/NFTMarketplace.git
```

2. Ouvrez le projet dans un éditeur comme Visual Studio Code.

3. En utilisant le terminal de Visual Studio Code, installer les dépendances avec la commande suivante :

```
npm install
```

4. Une fois celà fait, vous pouvez run le projet avec la commande suivante :

```
expo start
```

* Si celà ne fonctionne pas, vous pouvez éxécuté la commande autrement :
- Ouvrez **package.json**
- Survoler avec la souris le **start** correspondant à la commande :

```json
"scripts": {
    "start": "expo start",                <---- Celui-là
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web",
    "eject": "expo eject"
  }
```

- Cliquer sur **Run script**

* Vous pouvez appuyer simultanément sur CTRL + C pour arrêter le processus à tout moment (ou quitter VS Code).

## Montrer le résultat

Une fois le projet lancé, vous avez deux possibilités : 

* Lancer le projet sur son téléphone 
* Lancer le projet sur un émulateur (Android Studio)

### Lancer le projet sur son téléphone

1. Ouvrez Google Play/ Play Store et téléchargez l'application **Expo**.

**Si vous êtes sur Android :**

2. Ouvrir l'application.

3. Scanner le QR Code.

**Si vous êtes sur IOS :**

2. Ouvrir l'application **Caméra**.

3. Scanner le QR Code, l'application vous proposera d'ouvrir la page dans l'application Expo.

**Si vous êtes sur Huawei :**

2. Il va falloir repenser vos choix de vie.

ATTENTION :
Avant de scanner le QR Code avec votre téléphone, prenez bien ces paramètres en compte :
* Si votre téléphone n'est pas branché à votre PC, cliquez sur Connection **TUNNEL** dans Expo.
* Si ça bug en tunnel, brancher votre téléphone à votre PC, et mettez la Connection en **LAN** ou **Local**.

---------------------------------------------

* Une fois le projet ouvert sur votre téléphone, vous pourrez recharger l'application (swipe de haut en bas + icone reload).

**Afficher l'écran de votre téléphone sur ordinateur :**

Lors d'une présentation, il est plus facile de montrer l'écran du téléphone, sur votre pc...

1. Téléchargez un .zip de **SCRCPY** à l'adresse suivante: [https://github.com/Genymobile/scrcpy/releases](https://github.com/Genymobile/scrcpy/releases)

2. Dézipper le fichier puis brancher votre téléphone à votre PC par cable.

3. Ouvrir le fichier éxécutable **scrcpy.exe**

* Une fenêtre va s'ouvrir, montrant l'écran de votre téléphone.

### Lancer le projet sur émulateur

C'est pas une bonne idée si vous avez pas le temps de l'installer, c'est lourd et long à mettre en place.

Mais, si vous comptez tout de même le faire :

1. Installer **Android Studio** via l'adresse suivante : *https://developer.android.com/studio*

2. Cliquer sur **AVD Manager** (En haut à droite, icone de téléphone avec un petit android).

3. Cliquer sur **Create virtual device** et sélectionner un modèle de téléphone (prenez un Pixel 3, c'est avec ce modèle que je testais sinon risque de bug graphique si vous prenez un ancien.).

4. Sélectionner une image système (n'importe laquelle, Oreo ou autre) puis cliquer sur Finish.

5. Une fois l'émulateur installer, cliquer sur le bouton flèche verte Execute.

* La première fois, celà met beaucoup de temps à se lancer, c'est normal.

6. Runner le projet crypto local. Une fois la page Expo web ouverte, cliquer sur **Run on Android device/emulator**.

* Ne cliquer qu'une seule fois, si vous spammer ça va bug. La première fois, l'émulateur va devoir télécharger Expo donc ça prend du temps.
