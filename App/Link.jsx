import React from 'react';
import { Button, Linking } from 'react-native';

const OpenLinkButton = ({ url, buttonText }) => {
  const handlePress = () => {
    Linking.openURL(url);
  };

  return (
    <Button
      title={buttonText}
      onPress={handlePress}
    />
  );
};

export default OpenLinkButton;
