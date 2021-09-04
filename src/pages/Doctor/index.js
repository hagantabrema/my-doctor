import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Gap} from '../../components/atoms';
import {
  NewsItem,
  RatedDoctors,
  DoctorCategory,
  HomeProfile,
} from '../../components/molecules';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';
import {DummyDoctor1, DummyDoctor2, DummyDoctor3, JSONDoctorJob} from '../../assets';

const Doctor = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.sectionWrapper}>
            <Gap height={30} />
            <HomeProfile onPress={() => navigation.navigate('UserProfile')} />
            <Gap height={30} />
            <Text style={styles.welcome}>
              Mau konsultasi dengan siapa hari ini?
            </Text>
          </View>
          <Gap height={16} />
          <View style={styles.scrollWrapper}>
            <ScrollView horizontal>
              <View style={styles.category}>
                <Gap width={32} />
                {/* contoh dummy data dengan JSON */}
                {JSONDoctorJob.data.map(item => {
                  return (
                    <DoctorCategory
                      key={item.id}
                      job={item.job}
                      onPress={() => navigation.navigate('ChooseDoctor')}
                    />
                  );
                })}
                <Gap width={22} />
              </View>
            </ScrollView>
          </View>
          <View style={styles.sectionWrapper}>
            <Text style={styles.sectionLabel}>Top Rated Doctors</Text>
            <RatedDoctors
              name="Alexa Rachel"
              job="Pediatrician"
              avatar={DummyDoctor1}
              onPress={() => navigation.navigate('DoctorProfile')}
            />
            <RatedDoctors
              name="Sunny Frank"
              job="Dentist"
              avatar={DummyDoctor2}
            />
            <RatedDoctors
              name="Poe Minn"
              job="Podiatrist"
              avatar={DummyDoctor3}
            />
            <Text style={styles.sectionLabel}>Good News</Text>
          </View>
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <Gap height={30} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Doctor;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },

  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  welcome: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    maxWidth: 209,
  },

  category: {
    flexDirection: 'row',
  },

  scrollWrapper: {
    marginHorizontal: -16,
  },

  sectionWrapper: {
    paddingHorizontal: 16,
  },

  sectionLabel: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
  },
});
