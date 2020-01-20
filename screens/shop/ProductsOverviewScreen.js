import React from 'react';
import { StyleSheet,Button, Text, View, FlatList } from 'react-native';
import { useSelector,useDispatch } from 'react-redux';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';

import HeaderButton from '../../components/UI/HeaderButton';
import Colors from '../../constants/Colors';
import ProductItem from '../../components/shop/ProductItem';
import * as cartActions from '../../store/actions/cart';


const ProductsOverviewScreen = props =>  {
const products = useSelector(state => state.products.availableProducts);
const dispatch= useDispatch();
const selectItemHandler = (id,title) => {
      props.navigation.navigate('ProductDetail',{
        productId: id,
        productTitle: title,
      });
};

return (
        <FlatList
            data={products}
            keyExtractor={item => item.id}
            renderItem={itemData => (
              <ProductItem
                image={itemData.item.imageUrl}
                title={itemData.item.title}
                price={itemData.item.price}
                onSelect={()=>{
                  selectItemHandler(itemData.item.id, itemData.item.title);
                }}
              >
                <Button
                    color={Colors.primary}
                    title='বিস্তারিত'
                    onPress={()=>{
                      selectItemHandler(itemData.item.id, itemData.item.title);
                    }}
                />
               <Button
                    color={Colors.primary}
                    title='কিনুন'
                    onPress={()=>{
                        dispatch(cartActions.addToCart(itemData.item));
                    }}
                />
              </ProductItem>
            )}
        />
);
};

ProductsOverviewScreen.navigationOptions = navData => {
  return{
  headerTitle : 'পণ্য সমূহ',
  headerLeft: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                  <Item 
                    title="Menu"
                    iconName="md-menu"
                    onPress={()=>{
                      navData.navigation.toggleDrawer();
                    }}
                  />
              </HeaderButtons>
  ),
  headerRight: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                  <Item 
                    title="Cart"
                    iconName="md-cart"
                    onPress={()=>{
                      navData.navigation.navigate('Cart')
                    }}
                  />
              </HeaderButtons>
            )
      };
};

const styles = StyleSheet.create({    
    
});


export default ProductsOverviewScreen;