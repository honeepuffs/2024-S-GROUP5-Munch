import { Link } from 'expo-router';
import { TouchableHighlight, Dimensions } from 'react-native';
import { Button, XStack, YStack, Image, Avatar, Text, View } from 'tamagui';
import { Title, Subtitle } from '../tamagui.config.ts';
import { useContext, useState } from 'react';
import { getDateDifference } from '@/utils/getCurrentDateTime';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import axios from 'axios';
import { UserContext } from '@/contexts/UserContext';
import firebase from 'firebase/firestore';

export default function CommentComponent({
  id, // id,
  parent_id, // parent comment id,
  name, // commenting person name,
  image, // commenting person image,
  text, // comment text,
  creation_date, // comment creation
  post_id,
  children,
}) {
  const width = Dimensions.get('window').width - 75;
  return (
    <View
      width={width}
      height={'auto'}
      flexDirection='row'
      alignItems='center'
      flex={1}
      marginLeft='$3'
      marginBottom='$3'
    >
      <View marginLeft={'$4'} flex={1}>
        <Text marginBottom={'$1.5'}>
          <Text fontWeight={'bold'} fontSize={14}>
            {name}
          </Text>
          <Text color={'$gray10'} fontSize={12}>
            {' '}
            {getDateDifference(creation_date)}
          </Text>
        </Text>
        <Text>{text}</Text>
      </View>
      {children}
    </View>
  );
}
