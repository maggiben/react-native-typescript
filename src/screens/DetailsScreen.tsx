import React from 'react';
import { View, Text, Button, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

interface Styles {
  container: ViewStyle;
  title: TextStyle;
}

type RootStackParamList = {
  Details: { date?: Date };
  Home: { date: Date };
};

type DetailScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

interface DetailsScreenProps {
  navigation: DetailScreenNavigationProp;
  route: DetailScreenRouteProp;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
});

const DetailsScreen: React.FunctionComponent<DetailsScreenProps> = ({ navigation, route }) => {
  console.log('route', route.params?.date);
  console.log('navigation', navigation);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details Screen</Text>
      <Text>{JSON.stringify(route, null, 2)}</Text>
      <Button title="Go to details screen...again" onPress={() => navigation.push('Details', { date: new Date() })} />
      <Button title="Go to home" onPress={() => navigation.navigate('Home', { date: new Date() })} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default DetailsScreen;
