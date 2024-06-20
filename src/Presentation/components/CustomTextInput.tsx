import React from 'react'
import { Image, View, TextInput, StyleSheet, KeyboardType } from 'react-native'

interface Props {
  image: any,
  placeholder: string,
  value: string,
  keyboardType: KeyboardType,
  secureTextEntry?: boolean,
  property: string,
  onChangeText: (props: string, value: any) => void
}

export const CustomTextInput = ({
  image,
  placeholder,
  value,
  keyboardType,
  secureTextEntry = false,
  property,
  onChangeText
}: Props) => {
  return (
    <View style={styles.formInput}>
      <Image source={image} style={styles.formIcon} />
      <TextInput
        style={styles.formTextInout}
        placeholder={placeholder}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={text => onChangeText(property, text)}
      />
    </View>)
}

const styles = StyleSheet.create({
  formInput: {
    flexDirection: 'row',
    marginTop: 22,

  },
  formIcon: {
    height: 25,
    width: 25,
    marginTop: 5
  },
  formText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  formTextInout: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#AAAAAA',
    marginLeft: 15,

  },
})