import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { DummyNews1 } from '../../../assets'
import { colors } from '../../../utils/colors'
import { fonts } from '../../../utils/fonts'

const NewsItem = () => {
    return (
        <View style={styles.container}>
            <View style={styles.text}>
                <Text style={styles.title}>Is it safe to stay at home during coronavirus?</Text>
                <Text style={styles.date}>Today</Text>
            </View>
            <Image source={DummyNews1} style={styles.image}/>
        </View>
    )
}

export default NewsItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
        paddingBottom: 12,
        paddingTop: 16,
        paddingHorizontal: 16,
    },

    text: {
        flex: 1,
    },

    title: {
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        maxWidth:'70%'
    },

    date: {
        fontSize: 12,
        fontFamily: fonts.primary[400],
        color: colors.text.secondary,
        marginTop: 4
    },

    image: {
        width: 80,
        height: 60,
        borderRadius: 11
    },
})
