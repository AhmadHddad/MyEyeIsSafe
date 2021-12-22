import * as React from "react";
import {
  Alert,
  FlatList,
  Platform,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  TouchableRipple,
} from "react-native-paper";
import { Text } from "../../components/Themed";
import { isAndroid } from "../../utils/utils";

interface IStudentsListProps {}
const LeftContent = (props: any) => <Avatar.Icon {...props} icon="folder" />;
const StudentsList: React.FunctionComponent<IStudentsListProps> = (props) => {
  const students = new Array(100)
    .fill(undefined)
    .map((x, i) => ({ key: i, item: "hello" }));

  const createThreeButtonAlert = () =>
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Ask me later",
        onPress: () => console.log("Ask me later pressed"),
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);


  return (
    <React.Fragment>
      <View>
        <FlatList
          contentContainerStyle={{
            justifyContent: "space-between",
            alignContent: "space-between",
            display:'flex',
            flexGrow:1,
            paddingHorizontal:8
          }}
          data={students}
          key={(i) => i.key}
          renderItem={({ item }) => (
            <Card onPress={() => {}} style={{marginVertical:4}}>
              <Card.Content>
                <Title>{item.key}</Title>
              </Card.Content>
            </Card>
          )}
        />
      </View>
    </React.Fragment>
  );
};

export default StudentsList;
