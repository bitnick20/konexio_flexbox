import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Button, Alert} from 'react-native';
import { WebView } from 'react-native-webview';

class App extends React.Component {
  render () {
    return (
      <ScrollView style={styles.container}>
        <View>
          <Text style={[styles.title, styles.title1]} >Bonjour</Text>
          <Text style={[styles.title, styles.title2]}>tout</Text>
          <Text style={[styles.title3, styles.title]}>le monde</Text>
          <Image source={require('./assets/konexio-logo_1.png')}/>
          <Image
            source={{ uri: 'https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png' }}
            style={{ width: 50, height: 50 }} />
          <Button
            style={styles.button}
            title="Valider"
            color="black"
            onPress={() => Alert.alert('Voilà tout est ok !')}
            // onPress={() => Linking.openURL(url)}
          />
          <Text>Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua.
             Ut enim ad minim veniam, quis nostrud 
             exercitation ullamco laboris nisi ut 
             aliquip ex ea commodo consequat. Duis 
             aute irure dolor in reprehenderit in 
             voluptate velit esse cillum dolore eu 
             fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt 
              in culpa qui officia deserunt mollit 
              anim id est laborum.
          </Text>
        </View>
        <WebView style={{ width: 500, height: 500 }} source={{ uri: 'https://www.konexio.eu/index.html' }} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    // height: 500
  },
  title: {
   paddingVertical: 80,
  },
  title1: {
    fontSize: 30,
  },
  title2: {
    textAlign: 'center'
  },
  title3: {
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'yellow'
  }
});

export default App;