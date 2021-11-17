import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View ,FlatList,ScrollView} from 'react-native';

const myDataToShow = [
  {id:'1',
  name:'test 1'
  },
  {id:'2',
  name:'test 2'
  },
  {id:'3',
  name:'test 3'
  },
  {id:'4',
  name:'test 4'
  },
  {id:'5',
  name:'test 5'
  },
  {id:'6',
  name:'test 6'
  },
  {id:'6',
  name:'test 6'
  },
  {id:'6',
  name:'test 6'
  }, {id:'6',
  name:'test 6'
  },
]

export default function App() {
  const [id,setId] = useState('')
  return (
  
      <View style={styles.container}>
      
      <Text style={{marginTop:15}}>Open up App.js to start working on your app{id}</Text>
      <ScrollView >
      {myDataToShow.map((myItem)=> {
        return(
          <Text key={myItem.id} style={{margin:50}} onPress={()=>setId(myItem.id)}>{myItem.name}</Text>
        )
      })}
     </ScrollView>
     
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
