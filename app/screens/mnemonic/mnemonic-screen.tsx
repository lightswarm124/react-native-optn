import React from "react"
import { View, Image, ViewStyle, TextStyle, ImageStyle, SafeAreaView } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import { BulletItem, Button, Header, Screen, Text, Wallpaper } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, spacing, typography } from "../../theme"
const logo = require("../../../assets/logo.png")

const FULL: ViewStyle = { flex: 1 }
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[4],
}
const TEXT: TextStyle = {
  color: color.palette.black,
  fontFamily: typography.primary,
}
const BOLD: TextStyle = { fontWeight: "bold" }
const HEADER: TextStyle = {
  paddingTop: spacing[3],
  paddingBottom: spacing[4] + spacing[1],
  paddingHorizontal: 0,
}
const HEADER_TITLE: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 12,
  lineHeight: 15,
  textAlign: "center",
  letterSpacing: 1.5,
}
const TITLE_WRAPPER: TextStyle = {
  ...TEXT,
  textAlign: "center",
}
const TITLE: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 28,
  lineHeight: 38,
  textAlign: "center",
}
const ALMOST: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 26,
  fontStyle: "italic",
}
const WRITEPHRASE: TextStyle = {
  color: color.palette.black,
  fontFamily: typography.primary,
  fontSize: 20,
  letterSpacing: 2,
}
const BOWSER: ImageStyle = {
  alignSelf: "center",
  marginVertical: spacing[1],
  maxWidth: "100%",
}
const CONTENT: TextStyle = {
  ...TEXT,
  color: "#BAB6C8",
  fontSize: 15,
  lineHeight: 22,
  marginBottom: spacing[5],
}
const CONTINUE: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
  backgroundColor: "#1aa223",
  marginVertical: spacing[1],
}
const CONTINUE_TEXT: TextStyle = {
//  ...TEXT,
  color: color.palette.black,
  fontFamily: typography.primary,
  ...BOLD,
  fontSize: 20,
  letterSpacing: 2,
}
const FOOTER: ViewStyle = { backgroundColor: "#20162D", marginBottom: 64 }
const FOOTER_CONTENT: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
}

const sampleMnemonic = [
  "point",
  "polar",
  "pole",
  "police",
  "pond",
  "pony",
  "pool",
  "popular",
  "portion",
  "position",
  "possible",
  "post",
];

export const MnemonicScreen = observer(function MnemonicScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <View testID="WalletScreen" style={FULL}>
      <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>
        <Image
          resizeMode={'contain'}
          source={logo}
          style={BOWSER}
          style={{
            height: 150,
            width: null,
            flex: 1,
          }}
        />
        <Text style={TITLE} preset="header" tx="mnemonicScreen.recoveryPhrase" />
        <View>
          {sampleMnemonic.map((word, index) => (
            <Text key={index} style={TEXT}>{index + 1}: {word}</Text>
          ))}
        </View>
        <Text style={WRITEPHRASE} tx="mnemonicScreen.writePhrase" />
        <Text style={CONTINUE_TEXT} tx="mnemonicScreen.loseRecovery" />
      </Screen>
    </View>
  )
})
