import { Text, StyleSheet, ScrollView } from 'react-native';

function Profile(){
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
  