import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { ActiveDoctorIcon, ActiveHospitalsIcon, ActiveMessagesIcon, DoctorIcon, HospitalsIcon, MessagesIcon } from '../../../assets'
import { colors } from '../../../utils/colors'
import { fonts } from '../../../utils/fonts'

const TabItems = ({title, active, onPress, onLongPress}) => {

    const Icon = () => {
        if (title === 'Doctor') {
            return active ? <ActiveDoctorIcon /> : <DoctorIcon />
        }

        if (title === 'Messages') {
            return active ? <ActiveMessagesIcon /> : <MessagesIcon />
        }

        if (title === 'Hospitals') {
            return active ? <ActiveHospitalsIcon /> : <HospitalsIcon />
        }

        return <DoctorIcon />
    }

    return (
        <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress}>
            <Icon />
            <Text style={styles.text(active)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default TabItems

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },

    text: (active) => ({
        fontSize: 10,
        color: active ? colors.text.menuActive : colors.text.menuInactive,
        fontFamily: fonts.primary[600],
        marginTop: 4
    })
})
