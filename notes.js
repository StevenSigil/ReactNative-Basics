// ----------------------------------------------- //
// ------------- Images & Touch-ables ------------- //
<>
  <Text>Locally stored photo</Text>
  <Image style={styles.smImg} source={icon} />

  <Text>Photo from picsum.photos</Text>
  <TouchableHighlight onPress={() => console.log("Image tapped")}>
    <Image
      // blurRadius={10}
      fadeDuration={1000}
      style={styles.smImg}
      source={{
        width: 200,
        height: 300,
        uri: "https://picsum.photos/200/300",
      }}
    />
  </TouchableHighlight>
</>;

{
  /* // --------------------------------------------------------------------------------------------- //
  // ------------- Buttons with custom alert message (with onPress functions on buttons) ------------- // */

  <Button
    title="Click"
    onPress={() =>
      Alert.alert("Title here", "Message here", [
        { text: "Yes", onPress: () => console.log("Yes") },
        { text: "No", onPress: () => console.log("No") },
      ])
    }
  />;

  /* // ------------------------------------------------------------------------------------- //
  // ------------- Buttons with custom alert prompting for text input (IOS ONLY) ------------- // */
}
<Button
  title="Click"
  onPress={() =>
    Alert.prompt("Title here", "Message here", (text) => console.log(text))
  }
/>;

// -------------------------------------------------------------------------------------------------- //
// ----------- Setting the height for non-ios devices based on device specific StatusBars ----------- //
// ----------- In the stylesheet
paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : null;

// --------------------------------------------------------------------------------------- //
// -------------- Changing dimensions of a view based on device orientation -------------- //

import { useDeviceOrientation } from "@react-native-community/hooks";
const { landscape } = useDeviceOrientation();

<View
  style={{
    backgroundColor: "cadetblue",
    width: "100%",
    height: landscape ? "100%" : "30%",
  }}
>
  ...
</View>;
