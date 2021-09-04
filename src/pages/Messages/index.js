import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DummyDoctor1, DummyDoctor2, DummyDoctor3 } from '../../assets';
import DoctorList from '../../components/molecules/DoctorList';
import { colors, fonts } from '../../utils';

const Messages = ({navigation}) => {
  {
    /* contoh dummy data dengan state */
  }
  const [doctors] = useState([
    {
      id: 1,
      picture: DummyDoctor1,
      name: 'Alexander Jannie',
      message: 'Baik ibu, terima kasih banyak atas wakt...',
    },

    {
      id: 2,
      picture: DummyDoctor2,
      name: 'Nairobi Putri Hayza',
      message: 'Oh tentu saja tidak karena jeruk it...',
    },

    {
      id: 3,
      picture: DummyDoctor3,
      name: 'Alexander Jannie',
      message: 'Oke menurut pak dokter bagaimana unt...',
    },
  ]);

  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        {/* contoh dummy data dengan state */}
        {doctors.map(doctor => {
          return (
            <DoctorList
              key={doctor.id}
              picture={doctor.picture}
              name={doctor.name}
              message={doctor.message}
              onPress={() => navigation.navigate('Chat')}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },

  content: {
    flex: 1,
    backgroundColor: colors.white,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginLeft: 16,
  },
});
