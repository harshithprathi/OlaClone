import { Pressable, View, Text, StyleSheet, Platform, ImageBackground, ScrollView } from 'react-native';
import SearchBarr from '../components/SearchBar';
import ImageDisplay from '../components/ImageDisplay';
import DestinationSearch from '../components/destination';
import InviteCard from '../components/InviteCard';
import Ads from '../components/ads';
import LocationDisplay from '../components/LocationDisplay';
import ScrollToTopButton from '../components/scrolltotop';

function Home({route}){
    console.log('locccc', route?.params?.address||'noaddress');
    return (
        <ScrollView style={styles.container}>
            {/* <ImageDisplay /> */}
            <LocationDisplay lat={route?.params?.lat||''} lng={route?.params?.lng||''} address= {route?.params?.address||''} />
            <DestinationSearch lat={route?.params?.lat||''} lng={route?.params?.lng||''} address= {route?.params?.address||''} address2= {route?.params?.address2||''} />
            <InviteCard />
            <Ads />
        </ScrollView>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    //   alignItems: 'center',
      marginBottom: 0,
    },
    customImageStyle: {
        height: 525,
        width: 390,
        // flex: 1,
        resizeMode: 'cover',
    },
    backgroundImage: {
        opacity: 0.15,
    }
  });
  