import React, { useEffect, useState } from 'react'
import { Image, Text, View } from 'react-native'
import { UserData } from '../common/User'
import { capitalise, firstLetter } from './helpers'
import * as Font from 'expo-font'
import StyleSheet from '../styles/styles'

interface Props {
  friend: UserData
}

export default function ActiveFriend({ friend }: Props) {
  return (
    <View style={StyleSheet.user}>
      <RegularText style={StyleSheet.name}>
        {capitalise(friend.name)} {firstLetter(friend.surname)}
      </RegularText>
      <Image
        style={StyleSheet.image}
        source={require('../assets/user-icon.png')}
      ></Image>
    </View>
  )
}

const MediumText = (props: any) => {
  const [fontLoaded, setFontLoaded] = useState(false)

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'medium-font': require('../assets/fonts/BlueScreens/Medium-Italic.ttf'),
      })

      setFontLoaded(true)
    }

    loadFont()
  }, [])

  if (!fontLoaded) {
    return <Text>Loading...</Text>
  }

  return (
    <Text style={{ ...props.style, fontFamily: 'medium-font' }}>
      {props.children}
    </Text>
  )
}

const RegularText = (props: any) => {
  const [fontLoaded, setFontLoaded] = useState(false)

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'reg-font': require('../assets/fonts/BlueScreens/Regular.ttf'),
      })

      setFontLoaded(true)
    }

    loadFont()
  }, [])

  if (!fontLoaded) {
    return <Text>Loading...</Text>
  }

  return (
    <Text style={{ ...props.style, fontFamily: 'reg-font' }}>
      {props.children}
    </Text>
  )
}
