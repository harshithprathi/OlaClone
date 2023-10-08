import { StyleSheet, Text, View,TextInput,TouchableOpacity,FlatList , ScrollView,ActivityIndicator  } from 'react-native'
import React, {useEffect, useRef, useState} from 'react'
import { useFocusEffect } from '@react-navigation/native';
import MapView , { Marker } from 'react-native-maps';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
//import { useRoute } from '@react-navigation/native';
const HomeScreen = ({navigation}) => { 
  // const PickedItem = useSelector((state) => state.item.selectedItem);
  const [searchText, setSearchText] = useState('');  
  const mockSuggestions = ['Nehru Zoological Park', 'Ananthagiri Hills', 'Hussain Sagar Lake'];
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };
  const bottomSheet = useRef();         
  Icon.loadFont();
  const handleBottomSheet = () => {
    bottomSheet?.current?.show();
  }
  const navigateToMenu = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate('Menu');
    }, 1000); 
  };
  useFocusEffect(() => {
    console.log('Effect triggered');
    bottomSheet?.current?.show();
    console.log(bottomSheet);
    return () =>{
      console.log("closed");
      bottomSheet?.current?.close()
    }

  });
  
  const onPickUp = ()=>{
    // open another page with some listed out pickups
  }

  const renderBottomContainer = () => (
    <View style={styles.downview}>
      <ScrollView
      horizontal
      contentContainerStyle={styles.scrollViewContent}
      >
      <View style={styles.icons}>
        <View style={{flex:1,flexDirection:'column'}}>
          <View style={styles.iconview}>
            <Text style={styles.icon} >
              <Icon name="taxi" size={30} color="#74B72E" /> 
            </Text>
            <Text style={{color:'white', marginHorizontal:0, fontWeight:'bold'}}>Daily</Text>
          </View>
          
        </View>
        <View style={{flex:1,flexDirection:'column'}}>
          <View style={styles.iconview}>
            <Text style={styles.icon} >
              <Icon name="motorcycle" size={30} color="#74B72E" /> 
            </Text>
            <Text style={{color:'white', marginHorizontal:0, fontWeight:'bold'}}>Electric</Text>
          </View>
          
        
        </View>
        <View style={{flex:1,flexDirection:'column'}}>
          <View style={styles.iconview}>
            <Text style={styles.icon} >
              <Icon name="car" size={30} color="#74B72E" /> 
            </Text>
            <Text style={{color:'white', marginHorizontal:0, fontWeight:'bold'}}>Rentals</Text>
          </View>
          
        </View>
        <View style={{flex:1,flexDirection:'column'}}>
          <View style={styles.iconview}>
            <Text style={styles.icon} >
              <Icon name="car" size={30} color="#74B72E" /> 
            </Text>
            <Text style={{color:'white', marginHorizontal:0, fontWeight:'bold'}}>Outsation</Text>
          </View>
          
        </View>
        <View style={{flex:1,flexDirection:'column'}}>
          <View style={styles.iconview}>
            <Text style={styles.icon} >
              <Icon name="money" size={30} color="#74B72E" /> 
            </Text>
            <Text style={{color:'white', marginHorizontal:0, fontWeight:'bold'}}>Money</Text>
          </View>
          
        </View>
        <View style={{flex:1,flexDirection:'column'}}>
          <View style={styles.iconview}>
            <Text style={styles.icon} >
              <Icon name="shield" size={30} color="#74B72E" /> 
            </Text>
            <Text style={{color:'white', marginHorizontal:0, fontWeight:'bold'}}>Insure</Text>
            
          </View>
         
        </View>
        
      </View>
      </ScrollView>
      
        <View style={styles.separator} />
        
        <View style={styles.destinationbar}>
          <Icon name="search" size={18} color="green" style={styles.icon} />
          <TextInput
            style={styles.searchdestinationinput}
            placeholder="Select Destination"
            placeholderTextColor="white"
          />
          <FlatList
            data={mockSuggestions}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('LocationScreen', { selectedItem: item });
                }}
              >
                <View style={{flex:1, flexDirection:'row', padding:6}}>
                  <Icon name="map-marker" size={40} color="gray" style={{marginRight:10}}/>        
                  <Text style={styles.suggestion}>{item}</Text>      
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item}
            style={styles.suggestionsList}
          />
          
        </View>
        {/* <View >
          <Text style={{color:"white", fontSize:16}}>Experience the all new-app it's faster, smarter and better </Text>
         
        </View> */}
        
      </View>
    
  )
  return (
    <View style={styles.container}>
      <View style={styles.bottomComponent}>
        <MapView
          style={{width:'100%', height:'100%'}}
          initialRegion={{
            latitude: 17.39721126969024, 
            longitude: 78.48424663891598,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          }}    
        >
          <Marker
            coordinate={{
              latitude: 17.39721126969024,
              longitude: 78.48424663891598,
            }}
            title="Marker Title" 
            description="Marker Description" 
          />
        </MapView>
      </View >
      <TouchableOpacity onPress={onPickUp} style={styles.topComponent}>
        <View style={styles.menuBar}>
          {/* Add your menu bar content here */}
          <TouchableOpacity onPress={toggleSidebar}><Text style={{fontSize:24, color:'white'}}>☰</Text></TouchableOpacity>
        </View> 
        {/* <TextInput
          style={styles.searchBar}
          placeholder="Pickup At"
          placeholderTextColor="white"
          value={PickedItem}
          onTouchStart={() => navigation.navigate('PickupScreen')} 

        /> */}
        <Text style={styles.staticText}>🤍</Text>
        {isSidebarVisible && (
        <View style={styles.sidebar}>
          {isLoading && (
          <View style={{ alignItems: 'center', marginTop: 10 }}>
            <ActivityIndicator size="small" color="#D7DF23" />
          </View>
          )}
          <TouchableOpacity onPress ={navigateToMenu}style={{ flexDirection: 'row', alignItems: 'center', justifyContent:'space-between' }}>
            <Icon name="user" size={30} color="white" style={styles.profileIcon} />
            <Text style={{ fontSize: 20, marginLeft: 5 , color:'white'}}>Your Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress ={()=>navigation.navigate('ElectricScreen')}style={{ flexDirection: 'row', alignItems: 'center', justifyContent:'space-between' }}>
            <Icon name="bolt" size={20} color="#D7DF23" />
            <Text style={{ fontSize: 20, marginLeft: 20 , color:'white'}}>Electric</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress ={()=>navigation.navigate('RidesScreen')} style={{ flexDirection: 'row', alignItems: 'center',justifyContent:'space-between' }}>
            <Icon name="car" size={20} color="#D7DF23" />
            <Text style={{ fontSize: 20, marginLeft: 20 ,color:'white'}}>Your Rides</Text>
          </TouchableOpacity>   
          <TouchableOpacity  style={{ flexDirection: 'row', alignItems: 'center',justifyContent:'space-between' }}>
            <Icon name="money" size={20} color="#D7DF23" />
            <Text style={{ fontSize: 20, marginLeft: 20 ,color:'white'}}>Ola Money</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center',justifyContent:'space-between' }}>
            <Icon name="credit-card" size={20} color="#D7DF23" />
            <Text style={{ fontSize: 20, marginLeft: 20,color:'white' }}>Payments</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center',justifyContent:'space-between' }}>
            <Icon name="shield" size={20} color="#D7DF23" />
            <Text style={{ fontSize: 20, marginLeft: 20,color:'white' }}>Insurance</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center',justifyContent:'space-between' }}>
            <Icon name="headphones" size={20} color="#D7DF23" />
            <Text style={{ fontSize: 20, marginLeft: 20,color:'white' }}>Support</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress ={()=>navigation.navigate('AboutScreen')} style={{ flexDirection: 'row', alignItems: 'center',justifyContent:'space-between' }}>
            <Icon name="info-circle" size={20} color="#D7DF23" />
            <Text style={{ fontSize: 20, marginLeft: 20,color:'white' }}>About</Text>
          </TouchableOpacity>  
        </View>
      )}
      </TouchableOpacity>
      <TouchableOpacity style={styles.bookRide} onPress={handleBottomSheet}>
        <Text style={styles.bookRideText}>Select the destination</Text>
      </TouchableOpacity>
      <BottomSheet hasDraggableIcon ref={bottomSheet} height={450} backgroundColor="#0000" sheetBackgroundColor='black' draggable >
        {renderBottomContainer()}
      </BottomSheet>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:'column'
      },
      scrollViewContent: {
        flexDirection: 'row', // Ensure the content is laid out horizontally
        paddingVertical: 0,
      },
    bookRide: {
      backgroundColor: 'yellow',
      borderRadius: 100,
      borderColor: 'black',
      borderWidth: 2,
      width: 200,
      padding:10,
      alignSelf: 'flex-end',
      position: 'absolute',
      bottom: 200,
      right: 10
    },
    bookRideText: {
      textAlign: 'center',
      fontWeight: 'bold',
      
    },
    menuBar: {
      position: 'absolute',
      top: 17,
      left: 38,
      backgroundColor: 'transparent', 
      zIndex: 1,
      color:'white',  
    },
    searchBar: { 
      marginLeft: 0,
      marginRight: 0,
      paddingLeft: 80, 
      paddingTop: 10,
      paddingBottom: 10,
      color: 'white',
      backgroundColor: 'black',
      borderRadius: 10,
      fontWeight: 'bold',  
      },
      topComponent: {
        flex: 1,     
        paddingHorizontal: 25,
        paddingVertical: 10,
        position: 'absolute',
        top: 30, 
        left: 5,
        right:5, 
        padding: 50,
        color:'black'
      },
      bottomComponent:{
        flex:1,
      },
      menubar:{
        position: 'absolute',
        color:'white',
      },
      downview:{
      
      backgroundColor:'black',
      height:'35%',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'flex-start', 
      },
      staticText: {
        position:'absolute',
        fontSize: 16,
        fontWeight: 'bold',
        color:'white',
        top:23,
        left:350,
      },
      icons:{
        flex:1,
        flexDirection:'row',
        marginTop:10,
      },
      icon:{
      margin:8,
      },
      iconview:{
      backgroundColor: 'black', 
      borderRadius: 50, 
      width: 65, 
      height: 65,
      justifyContent: 'center',
      alignItems: 'center',
      margin:5,
      },
      separator: {
        borderBottomWidth: 1, 
        borderColor: 'white', 
        width: '100%',
        
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center', // Center the separator horizontally
        marginVertical: 5, // Adjust t
      },
      destinationbar: {
        
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#232B2B',
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom:260,
        marginTop:5,
        marginHorizontal:15,
        
      },
      searchdestinationinput:{
        flex: 1,
        height: 50,
        color: 'white',
        fontWeight:'bold',
        fontSize: 19,
    
    
      },
      suggestionsList: {
        width: '100%',
        maxHeight: 150,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        position: 'absolute',
        top: 50, 
        backgroundColor: 'black',
        marginHorizontal:15,
        marginTop:25,
      },
      suggestion: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 7,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        color:'white',
      },
      iconContainer: {
      
        alignItems: 'center',
        //backgroundColor: 'red',
        justifyContent: 'center',
      },
      sidebar: {
        flex: 3,
        backgroundColor: 'black',
        padding: 30,
        fontSize:20,
      },
      
      
      
      
})

