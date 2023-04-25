import {View, Text, Button, FlatList} from 'react-native'
import { styles } from '../assets/styles/styles'

export default function Dashboard({route,navigation}){
    const { users } = route.params
    return(
      <View style={styles.container}>
        <Text style={{fontWeight:'bold'}}>Estamos en Dashboard</Text>
        {/* {route.params.users.map(usr => (usr.role == 1 ? <Text>{usr.name} - {usr.username}</Text>: ""))}  */}
        {users.map((usr) => {
        return (
          <View>
            <Text 
              style={styles.item}
              onPress={()=>{alert(usr.name)}}
            >{usr.name} - {usr.username}
            </Text>
          </View>
        );
      })}
        
      </View>
    );
  }

