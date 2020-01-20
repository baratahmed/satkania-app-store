import React from 'react';
import { Text, View,StyleSheet,FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/UI/HeaderButton';
import AreaGridTile from '../../components/shop/AreaGridTile';
import {AREA} from '../../data/dummy-data';

const HomeScreen = props => {
  const renderGridItem = (itemData) => {
    return <AreaGridTile
            title={itemData.item.title}
            color={itemData.item.color}
            onSelect={()=>{}}
            />;
};

  return (
      <View style={styles.home}>
          <View style={styles.headerContainer}>
              <Text style={styles.header}>আপনার এলাকা নির্বাচন করুন</Text>
          </View>
          <FlatList
            keyExtractor={(item,index) => item.id}
            data={AREA}
            renderItem={renderGridItem}
            numColumns={2}/>

      </View>

  );
};

HomeScreen.navigationOptions = navData => {
  return {
    headerTitle: 'সাতকানিয়া স্টোর',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName='md-menu'
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
    home:{

    },
    headerContainer:{
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    header:{
      fontSize: 23,
      color:'green',
    }
});

export default HomeScreen;
