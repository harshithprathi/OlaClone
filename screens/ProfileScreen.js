import { Pressable, View, Text, StyleSheet, Platform, ImageBackground, ScrollView } from 'react-native';
import SearchBarr from '../components/SearchBar';
import ImageDisplay from '../components/ImageDisplay';
import DestinationSearch from '../components/destination';
import InviteCard from '../components/InviteCard';
import Ads from '../components/ads';
import LocationDisplay from '../components/LocationDisplay';
import ScrollToTopButton from '../components/scrolltotop';

function Profile({route}){
    return (
        <ScrollView style={styles.container}>
            <Text style={{fontSize:20}}>Page Under Construction!</Text>
        </ScrollView>
    );
}

export default Profile;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      marginTop: 390,
      marginHorizontal: 80,
    //   justifyContent: 'center',
      alignContent: 'center',
    },
  });
  