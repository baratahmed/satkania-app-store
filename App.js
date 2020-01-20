import React,{useState} from 'react';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import productReducers from './store/reducers/products';
import ordersReducers from './store/reducers/orders';
import cartReducer from './store/reducers/cart';
import ShopNavigator from './navigation/ShopNavigator';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';

const rootReducers = combineReducers({
  products : productReducers,
  cart: cartReducer,
  orders: ordersReducers,
});

const store = createStore(rootReducers);

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans' : require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold' : require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if(!fontLoaded){
    return <AppLoading
            startAsync={fetchFonts}
            onFinish={()=>{
              setFontLoaded(true);
            }}
          />
  }
  return (
    <Provider store={store}>
        <ShopNavigator />
    </Provider>
  );
}

