import React, { useRef } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  Animated
} from 'react-native';
import { useDispatch } from 'react-redux';

export default function Product(props) {
  const imageAnimated = useRef(new Animated.Value(0)).current;
  const dispatch = useDispatch();
  const { product } = props;
  // console.log('state', state)
  const onImageLoad = () => {
    Animated.timing(imageAnimated, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };
  const createTwoButtonAlert = () => Alert.alert(
    'Thông báo',
    'Đã thêm sản phẩm vào giỏ hàng',
    [
      // {
      //     text: "Cancel",
      //     onPress: () => console.log("Cancel Pressed"),
      //     style: "cancel"
      // },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ],
    { cancelable: false },
  );

  const onAddToCart = () => {
    const newProduct = { ...product };
    newProduct.qty = 1;
    dispatch({
      type: 'addCartItem',
      payload: newProduct,
    });
    createTwoButtonAlert();
  };

  return (
    <View style={styles.shadow}>
      <View style={styles.container}>
        <Animated.Image
          source={{ uri: 'https://nhadep.com.vn/Uploads/images/banner/Banner-duoi-slide-trang-chu/ban-an-thong-minh-mo-rong.jpg' }}
          style={[styles.img, { opacity: imageAnimated }]}
          resizeMode="cover"
          onLoad={onImageLoad}
        />

        <View style={styles.info}>
          <Text style={styles.name}>{product && product.name}</Text>
          <View style={styles.priceRow}>
            <Text style={styles.price}>
              {product && product.price}
            </Text>
            <TouchableOpacity onPress={onAddToCart}>
              <Text style={styles.cartText}>
                MUA +
                            </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cartText: {
    color: '#2f95dc',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 4,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
    overflow: 'hidden',
  },
  img: {
    borderBottomLeftRadius: 4,
    borderTopLeftRadius: 4,
    flex: 1,
    height: 150,
  },
  info: {
    flex: 1,
    padding: 8,
  },
  name: {
    fontSize: 16,
    marginBottom: 8,
    writingDirection: 'ltr',
  },
  price: {
    color: '#888',
    flex: 1,
    fontSize: 16,
    justifyContent: 'flex-end',
    marginBottom: 0,
  },
  priceRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
});
