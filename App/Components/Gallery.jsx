import React, { useState, useRef, useEffect } from 'react';
import { View, Image, ScrollView, StyleSheet, Dimensions } from 'react-native';

const ImageGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const scrollViewRef = useRef(null);
  const images = [
    'https://via.placeholder.com/200',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/400',
    'https://via.placeholder.com/500',
    'https://via.placeholder.com/600',
    'https://via.placeholder.com/700',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (selectedIndex + 1) % images.length;
      setSelectedIndex(nextIndex);
      scrollViewRef.current.scrollTo({ x: Dimensions.get('window').width * nextIndex });
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(timer);
  }, [selectedIndex]);

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / Dimensions.get('window').width);
    setSelectedIndex(index);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        ref={scrollViewRef}
        contentContainerStyle={styles.contentContainer}
        snapToInterval={Dimensions.get('window').width}
        snapToAlignment="center"
        decelerationRate="fast"
      >
        {images.map((image, index) => (
          <Image key={index} source={{ uri: image }} style={styles.image} />
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[styles.paginationDot, index === selectedIndex && styles.paginationDotActive]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  contentContainer: {
    alignItems: 'center',
    
  },
  image: {
    width: Dimensions.get('window').width,
    height: '100%',
    right:30,
    resizeMode: 'contain',
  },
  pagination: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#888',
    margin: 5,
  },
  paginationDotActive: {
    backgroundColor: '#fff',
  },
});

export default ImageGallery;
