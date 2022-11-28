import {
  Text,
  View,
  FlatList,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";

export const UsersListView = ({ usersList, selectUser, navigation }) => {
  return (
    <>
      <View style={styles.scrollContainer}>
        <FlatList
          data={usersList}
          renderItem={({ item }) => (
            <UserView
              user={item}
              selectUser={selectUser}
              navigation={navigation}
            />
          )}
        />
      </View>
    </>
  );
};

const UserView = ({ user, selectUser, navigation }) => {
  function onUserSelect(user) {
    selectUser(user);
    navigation.navigate("Info");
  }
  // console.log("hh", user);
  return (
    <>
      {!!user && (
        <Pressable onPress={() => onUserSelect(user)}>
          <View style={styles.userContainer}>
            <Image source={{ uri: user.avatar_url }} style={styles.userImage} />
            <Text style={styles.description}>{user.login}</Text>
          </View>
        </Pressable>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  userImage: {
    borderRadius: 8,
    width: "100%",
    height: 245,
    marginBottom: 4,
  },
  description: {
    fontStyle: "italic",
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
  },
  scrollContainer: {},
  userContainer: {
    minHeight: 250,
    // backgroundColor: "white",
    margin: 4,
    padding: 10,
    alignItems: "center",
    borderColor: "#f5b042",
    borderStyle: "dash",
    borderRadius: 8,
    borderWidth: 3,
  },
});
