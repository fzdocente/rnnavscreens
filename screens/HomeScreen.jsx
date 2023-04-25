import {View, Text} from 'react-native'
import { styles } from '../assets/styles/styles'
import { TextInput, Button} from 'react-native-paper'
import { useState, useEffect } from 'react';

let users = [
  {username:'tv',name:'Teresa Valencia',password:'11', role:1},
  {username:'fz',name:'Faustino Zapata',password:'22', role:1},
  {username:'oz',name:'Otiia Zapata',password:'33', role:2},
  {username:'wr',name:'Walter Rodas',password:'44', role:2},
]

function HomeScreen({navigation}){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errormess, setErrormess] = useState('');

    return(
      <View style={styles.container}>
        <Text style={{fontWeight:'bold',marginBottom:10}}>Inicio de Sesión</Text>
        <TextInput
          label="Usuario"
          mode="outlined"
          left={<TextInput.Icon icon="account"/>}
          onChangeText={username => setUsername(username)}
          value={username}
        />
        <TextInput
          style={{marginTop:10,marginBottom:20}}
          label="Contraseña"
          mode="outlined"
          right={<TextInput.Icon icon="eye"/>}
          onChangeText={password => setPassword(password)}
          value={password}
          secureTextEntry
        />
        <Button 
          icon="login" 
          mode="contained" 
          onPress={() => {
            let fuser = users.find(usr => usr.username == username && usr.password == password);
            if (fuser != undefined){
              setUsername('');
              setPassword('');
              const {name, username} = fuser;
              if (fuser.role == 1){
                navigation.navigate('Dashboard',{name:name, username:username,users:users})
              }
              else{
                navigation.navigate('Profile',{name:name, username:username})
                // navigation.setOptions({ tabBarVisible: false });     
                
              }
              setErrormess('')
            }
            else{
              setErrormess('Usuario y/o contraseña INVÁLIDO (S)')
            }
          }}>
          Ingresar
        </Button>
        <Text style={{color:'red'}}>{errormess}</Text>
      </View>
    );
}

export default HomeScreen;