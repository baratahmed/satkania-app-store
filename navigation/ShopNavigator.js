import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import {Ionicons} from '@expo/vector-icons';
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import CartScreen from '../screens/shop/CartScreen';
import OrdersScreen from '../screens/shop/OrdersScreen';
import Colors from '../constants/Colors';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import UserProductsScreen from '../screens/user/UserProductsScreen';
import EditProductScreen from '../screens/user/EditProductScreen';
import HomeScreen from '../screens/shop/HomeScreen';

const defaultNavOptions = {
    headerStyle:{
        backgroundColor: Colors.primary,
    },
    headerTitleStyle:{
        fontFamily:'open-sans-bold',
    },
    headerBackTitleStyle:{
        fontFamily:'open-sans',
    },
    headerTintColor: 'white',

};

const HomeNavigator = createStackNavigator({
    Home: HomeScreen
},{
    navigationOptions:{
        drawerIcon: drawerConfig => <Ionicons name='md-home' size={23} color={drawerConfig.tintColor}/>
    },
    defaultNavigationOptions: defaultNavOptions
});

const ProductsNavigator = createStackNavigator({
    ProductsOverview : ProductsOverviewScreen,
    ProductDetail : ProductDetailScreen,
    Cart: CartScreen,
},{
    navigationOptions:{
        drawerIcon: drawerConfig => <Ionicons name='md-cart' size={23} color={drawerConfig.tintColor}/>
    },
    defaultNavigationOptions: defaultNavOptions
  }
);

const OrdersNavigator = createStackNavigator({
    Orders: OrdersScreen
},{
    navigationOptions:{
        drawerIcon: drawerConfig => <Ionicons name='md-list' size={23} color={drawerConfig.tintColor}/>
    },
    defaultNavigationOptions: defaultNavOptions
});

const AdminNavigator = createStackNavigator({
    UserProducts: UserProductsScreen,
    EditProduct: EditProductScreen
},{
    navigationOptions:{
        drawerIcon: drawerConfig => <Ionicons name='md-create' size={23} color={drawerConfig.tintColor}/>
    },
    defaultNavigationOptions: defaultNavOptions
});

const ShopNavigator = createDrawerNavigator({
    হোম : HomeNavigator,
    পণ্যসামগ্রী : ProductsNavigator,
    অর্ডার : OrdersNavigator,
    এডমিন : AdminNavigator,
},{
    contentOptions: {
        activeTintColor: 'blue'
    }
});

export default createAppContainer(ShopNavigator);