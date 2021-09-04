import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { ILCatAnak, ILCatObat, ILCatPsikiater, ILCatUmum } from '../../../assets'
import { colors } from '../../../utils/colors'
import { fonts } from '../../../utils/fonts'

const DoctorCategory = ({job, onPress}) => {
    {/* contoh dummy data dengan JSON */}
    const Icon = () => {
        if (job === 'dokter umum') {
            return <ILCatUmum style={styles.illustration} />
        }

        if (job === 'psikiater') {
            return <ILCatPsikiater style={styles.illustration} />
        }

        if (job === 'dokter obat') {
            return <ILCatObat style={styles.illustration} />
        }

        if (job === 'dokter anak') {
            return <ILCatAnak style={styles.illustration} />
        }
    }

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            {/* contoh dummy data dengan JSON */}
            <Icon />
            <Text style={styles.label}>Saya butuh</Text>
            <Text style={styles.job}>{job}</Text>
        </TouchableOpacity>
    )
}

export default DoctorCategory

const styles = StyleSheet.create({
    container: {
        padding: 12,
        backgroundColor: colors.cardLight,
        alignSelf: 'flex-start',
        borderRadius: 10,
        marginRight: 16,
        width: 100,
        height: 130
    },

    illustration: {
        marginBottom: 28
    },

    label: {
        fontSize: 12,
        fontFamily: fonts.primary[300],
        color: colors.text.primary
    },

    job: {
        fontSize: 12,
        fontFamily: fonts.primary[600],
        color: colors.text.primary
    }
})
