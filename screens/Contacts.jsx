import {View, Text, Button} from 'react-native'
import { styles } from '../assets/styles/styles'

export default function Contacts({route}){
    return(
      <View style={styles.container}>
        <Text style={{fontWeight:'bold'}}>Estamos en Contáctenos</Text>
      </View>
    );
  }

