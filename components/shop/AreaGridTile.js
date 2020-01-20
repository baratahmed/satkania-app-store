import React  from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';

const AreaGridTile = props => {
    return (
        <TouchableOpacity style={styles.gridItem}
        onPress={props.onSelect} >
            <View style={{...styles.container,...{backgroundColor:props.color}}}>
                <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
  gridItem:{
    flex:1,
    margin:15,
    height:150,
    borderRadius:10,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    elevation: 3,
    padding:15,
    justifyContent: 'flex-end',
    alignItems:'flex-end',
  },
  title:{
    fontFamily:'open-sans-bold',
    fontSize:20,
    textAlign:'right',
  },
});

export default AreaGridTile;
