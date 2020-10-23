
import React, { useRef } from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Animated
} from 'react-native';
import ENV from '../ENV/index';

function CategoryListItem(props) {
  const imageAnimated = useRef(new Animated.Value(0)).current;
  const { category, onPress } = props;

  const onImageLoad = () => {
    Animated.timing(imageAnimated, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };
  // console.log("category.image ", category.image)
  return (
    <TouchableOpacity activeOpacity={0.5}
      onPress={onPress}
    >
      <View style={styles.container}>
        <Text style={styles.title}>{category.name}</Text>
        <Animated.Image
          source={{ uri: `${ENV.SERVER_IMAGE}${category.image}` }}
          style={[styles.categoryImage, { opacity: imageAnimated }]}
          resizeMode="cover"
          onLoad={onImageLoad}
        />

      </View>
    </TouchableOpacity>
  );
}
export default CategoryListItem
const styles = StyleSheet.create({
  categoryImage: {
    height: 64,
    width: 64,
  },

  container: {
    alignItems: 'center',
    borderRadius: 4,
    padding: 16,
    ...Platform.select({
      ios: {
        backgroundColor: 'red',
      },
      android: {
        backgroundColor: 'white',
      },
      default: {
        // other platforms, web for example
        backgroundColor: 'green',
      },
    }),
    marginBottom: 16,
    shadowColor: Platform.OS === 'ios' ? 'blue' : 'red',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },

  title: {
    color: '#000000',
    fontWeight: '700',
    marginBottom: 8,
    textTransform: 'uppercase',
  },
});
