import React from "react";

import { View, Text, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor:"#0FA4AF"}}>
      <Text style={{marginBottom:10, fontSize:18, color:"white"}}>Home Screen</Text>

      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
};

export default HomeScreen;
