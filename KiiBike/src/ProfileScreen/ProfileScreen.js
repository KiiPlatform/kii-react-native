import React, { Component } from 'react';
import {
  Button,
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Left,
  Right,
  Icon,
  Title,
  Input,
  InputGroup,
  Item,
  Tab,
  Tabs,
  Footer,
  FooterTab,
  Label
} from "native-base";

export default class ProfileScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>My Profiles</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Card>
            <CardItem header>
              <Text>Profiles</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  Profile Text 1
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  Profile Text 2
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>Footer</Text>
            </CardItem>
         </Card>
        </Content>
      </Container>
    );
  }
}