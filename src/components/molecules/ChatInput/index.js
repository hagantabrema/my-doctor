import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { colors, fonts } from '../../../utils'
import { Button } from '../../atoms'

const ChatInput = () => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Tulis pesan untuk Alexander..."/>
            <Button type="pass-button" disable={true}/>
        </View>
    )
}

export default ChatInput

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 16,
    },

    input: {
        backgroundColor: colors.disable,
        padding: 14,
        borderRadius: 10,
        flex: 1,
        marginRight: 10,
        fontSize: 15,
        fontFamily: fonts.primary[300],
        maxHeight: 45,
    },
})
