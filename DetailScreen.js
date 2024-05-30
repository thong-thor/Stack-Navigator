import React from "react";

import { View, Text, Button } from "react-native";

const DetailsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor:"#AFDDE5"}}>
      <Text style={{marginBottom:10,fontSize:18, color:"white"}}>Details Screen</Text>

      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default DetailsScreen;
