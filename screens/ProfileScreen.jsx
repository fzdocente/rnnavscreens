import {View, Text, Button} from 'react-native'
import { styles } from '../assets/styles/styles'

function ProfileScreen({navigation, route}){
    let email = "cosas@gmail.com";
    let phone = "6042547896";
    return(
      <View style={styles.container}>
        <Text style={{fontWeight:'bold',marginBottom:10}}>Estamos en Perfil del usuario</Text>
      </View>
    );
  }

  export default ProfileScreen;