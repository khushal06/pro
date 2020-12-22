import React from 'react';
import { Text, View , FlatList } from 'react-native';
import db from '../config.js'



export default class Searchscreen extends React.Component {

  constructor(){
    super();
    this.state = {
    allTransaction :  []

  


    }
  }


   componentDidMount = async ()=> {

  const query  = await db.collection("Transaction").get ()

  query.docs.map((doc)=>{

    this.setState({
      allTransaction : [...this.state.allTransaction, doc.data ()]
    })

  })



   }





   











    render() {
      return (
       <FlatList  data = {this.setState.allTransaction} 
       renderItem={({item})=>(
         <View>
          <Text>
           {"BookId is : " + item.BookID }
          </Text>
           
          <Text>
           {"Date : " + item.Date.toDate() }
          </Text>

          <Text>
           {"StudentID : " + item.StudentID }
          </Text>

          <Text>
           {"TransactionType : " + item.TransactionType }
          </Text>


         </View>
       )} 
        
       keyExtractor={(item,index)=>index.toString()}   




        />
      );
    }
  }