import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StarIcon } from '../../../assets';
import { colors } from '../../../utils/colors';
import { fonts } from '../../../utils/fonts';

const RatedDoctors = ({name, job, avatar, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={avatar} style={styles.avatar}/>
      <View style={styles.profile}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.job}>{job}</Text>
      </View>
      <View style={styles.rating}>
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
      </View>
    </TouchableOpacity>
  );
};

export default RatedDoctors;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
        alignItems: 'center'
    },

    avatar: {
        height: 50,
        width: 50,
        borderRadius: 50 / 2,
        marginRight: 12
    },

    profile: {
        flex: 1
    },

    name: {
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: colors.text.primary
    },

    job: {
        fontSize: 12,
        fontFamily: fonts.primary[400],
        color: colors.text.secondary,
        marginTop: 2
    },

    rating: {
        flexDirection: 'row'
    }
});
