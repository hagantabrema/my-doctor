import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ChatInput, ChatItem, Header} from '../../components/molecules';
import {colors, fonts} from '../../utils';

const Chat = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header type="dark-header" title="Alexander Jannie" onPress={() => navigation.goBack()}/>
      <View style={styles.content}>
        <Text style={styles.chatDate}>Senin, 21 Maret 2020</Text>
        <ChatItem isMe/>
        <ChatItem />
        <ChatItem isMe/>
      </View>
      <ChatInput />
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },

  content: {
    flex: 1
  },

  chatDate: {
    fontSize: 11,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
    textAlign: 'center',
    marginVertical: 20,
  },
});
