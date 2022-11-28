import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import MapView from "react-native-maps";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { GenerateUser } from "./pages/GenerateUser";
import { UserInfo } from "./pages/UserInfo";

import { getRandomUser } from "./util/getRandomUser";
import { Marker } from "react-native-maps";

const Stack = createNativeStackNavigator();

export default function App() {
  const [usersList, setUsersList] = useState([]);
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    setUsersList([]);
  }, []);

  async function fetchRandomUser() {
    const users = await getRandomUser();
    setUsersList(users.data);
  }

  function selectUser(user) {
    console.log("selectedUser", user);
    setCurrentUser(user);
  }
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home">
            {(props) => (
              <GenerateUser
                {...props}
                usersList={usersList}
                fetchRandomUser={fetchRandomUser}
                selectUser={selectUser}
              />
            )}
          </Stack.Screen>

          <Stack.Screen name="Info">
            {(props) => <UserInfo {...props} user={currentUser} />}
          </Stack.Screen>

          <Stack.Screen name="Map">
            {(props) => (
              <MapView
                initialRegion={{
                  latitude: 37.78825,
                  longitude: -122.4324,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
                {...props}
                user={currentUser}
                style={styles.map}
              >
                <Marker
                  key={1}
                  coordinate={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                  }}
                  title={currentUser.login}
                  description={currentUser.html_url}
                  image={{ uri: currentUser.avatar_url }}
                  style={styles.mapIcon}
                />
              </MapView>
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
