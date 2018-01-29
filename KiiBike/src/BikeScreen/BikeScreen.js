import React from "react";
import { AppRegistry, View, StatusBar,StyleSheet,InteractionManager, } from "react-native";
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
import MapView from 'react-native-maps';
import HomeScreen from "../HomeScreen/HomeScreen.js";


export default class BikeScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isMapReady: false,
      region: {
        latitude: 35.6895,
        longitude: 139.6917,
        latitudeDelta: 0.5,
        longitudeDelta: 0.2
      }
    }
  }

  state = {
    loading: true,
  }

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this.setState({ loading: false });
    });
  }

  render() {
    

    const coordinates = {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.092
    };

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
            <Title>Available Bikes</Title>
          </Body>
          <Right />
        </Header>
        <Tabs initialPage={1}>
          <Tab heading="Map">
          <View style={styles.container}>
          {this.state.loading ? (
            <Loading />
          ) : (
            <MapView
          onPress={e => console.log(e.nativeEvent)}
          style={styles.map}
          provider='google'
          mapType='standard'
          showsScale
          showsCompass
          showsPointsOfInterest
          showsBuildings
          region={this.state.region}
          onLayout={this.onMapLayout}
        >
          <MapView.Marker
              title={this.props.title}
              coordinate={{
                latitude: this.state.region.latitude,
                longitude: this.state.region.longitude
              }} />
          <MapView.Marker
              title={this.props.title}
              coordinate={{
                latitude: this.state.region.latitude + 0.05,
                longitude: this.state.region.longitude
              }} />
        </MapView>
          )}
        </View>
          </Tab>
          <Tab heading="Lists">
            
          </Tab>
          
        </Tabs>
        

        
      </Container>
    );
  }
}

const Loading = () => (
  <View style={styles.container}>
    <Text>Loading...</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    marginTop: 1.5,
    ...StyleSheet.absoluteFillObject,
  },
});