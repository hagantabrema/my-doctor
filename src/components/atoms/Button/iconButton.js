import React from 'react'
import { TouchableOpacity } from 'react-native'
import { DarkBackIcon, LightBackIcon } from '../../../assets/icons'

const IconButton = ({onPress, icon}) => {
    const Icon = () => {
        if (icon === 'dark-back') {
            return (
                <DarkBackIcon />
            )
        }
        if (icon === 'light-back') {
            return (
                <LightBackIcon />
            )
        }
        return <DarkBackIcon />
    }
    return (
        <TouchableOpacity onPress={onPress} icon={icon}>
            <Icon />
        </TouchableOpacity>
    )
}

export default IconButton
