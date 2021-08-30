import React, {useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper'
import { RoundedButton } from "../../components/RoundedButton"
import {fontSizes, spacingSizes} from '../../utils/Sizes'
import { colors } from '../../utils/Colors'



export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null)
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}> 
          <Text style={styles.title}> What would you like to focus on?</Text> 
            <View style={styles.inputContainer}>
              <TextInput style={{flex: 1, marginRight: spacingSizes.md}}
                onSubmitEditing={
                  ({ nativeEvent }) => {
                    setSubject(nativeEvent.text)
                  }}
              />
              <RoundedButton size ={50} title="+" onPress={() => 
              addSubject(subject)}/>
            </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: .5,
  },
  titleContainer: {
    flex: 1,
    padding: spacingSizes.md,
    justifyContent: "center" 
  },
  title: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: fontSizes.lg,
  },
  inputContainer: {
    paddingTop: spacingSizes.md,
    flexDirection: "row",
    alignItems: "center"
  }
});
