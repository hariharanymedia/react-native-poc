import { View, Text, StyleSheet, Image, Linking } from "react-native";

// const user = {
//   avatar_url: "https://avatars.githubusercontent.com/u/748?v=4",
//   events_url: "https://api.github.com/users/tom/events{/privacy}",
//   followers_url: "https://api.github.com/users/tom/followers",
//   following_url: "https://api.github.com/users/tom/following{/other_user}",
//   gists_url: "https://api.github.com/users/tom/gists{/gist_id}",
//   gravatar_id: "",
//   html_url: "https://github.com/tom",
//   id: 748,
//   login: "tom",
//   node_id: "MDQ6VXNlcjc0OA==",
//   organizations_url: "https://api.github.com/users/tom/orgs",
//   received_events_url: "https://api.github.com/users/tom/received_events",
//   repos_url: "https://api.github.com/users/tom/repos",
//   site_admin: false,
//   starred_url: "https://api.github.com/users/tom/starred{/owner}{/repo}",
//   subscriptions_url: "https://api.github.com/users/tom/subscriptions",
//   type: "User",
//   url: "https://api.github.com/users/tom",
// };
export const UserInfo = ({ user, navigation }) => {
  return (
    <View style={styles.userInfoContainer}>
      <View>
        <Image source={{ uri: user.avatar_url }} style={styles.userImage} />
      </View>
      <View>
        <Text style={styles.heading}>User</Text>
        <Text style={styles.description}>{user.login}</Text>
      </View>
      <View>
        <Text style={styles.heading}>URL</Text>
        <Text
          style={styles.description}
          onPress={() => Linking.openURL(user.url)}
        >
          {user.url}
        </Text>
      </View>
      <View>
        <Text style={styles.heading}>Repos</Text>
        <Text
          style={styles.description}
          onPress={() => Linking.openURL(user.repos_url)}
        >
          {user.repos_url}
        </Text>
      </View>
      <View>
        <Text style={styles.heading}>Location</Text>
        <Text
          style={styles.description}
          onPress={() => navigation.navigate("Map")}
        >
          Open Map
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userInfoContainer: {
    flex: 4,
    flexDirection: "col",
    backgroundColor: "black",
  },
  userImage: {
    width: "100%",
    height: 400,
    marginBottom: 4,
  },

  heading: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 4,
    marginTop: 4,
    color: "white",
  },

  description: {
    color: "#f5e942",
  },
});
