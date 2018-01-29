import React from "react";
import { AppRegistry, Image, StatusBar } from "react-native";
import {
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Icon
} from "native-base";
const routes = ["Home"];
export default class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <Image
            source={{
              uri: "http://via.placeholder.com/350x120"
            }}
            style={{
              height: 120,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
          </Image>
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data)}
                >
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}
