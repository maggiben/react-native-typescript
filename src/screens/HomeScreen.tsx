import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar, ViewStyle } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useTheme } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

interface Styles {
  container: ViewStyle;
}

type RootStackParamList = {
  Details: { date?: Date };
  Home: { date: Date };
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Details'>;
type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

interface HomesScreenProps {
  navigation: HomeScreenNavigationProp;
  route?: HomeScreenRouteProp;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const HomeScreen: React.FunctionComponent<HomesScreenProps> = ({ navigation }) => {
  const { colors } = useTheme();
  const theme = useTheme();
  const barStyle = theme.dark ? 'light-content' : 'dark-content';
  const backgroundColor = theme.dark ? '#000000AA' : '#FFFFFFAA';

  return (
    <View style={styles.container}>
      <StatusBar barStyle={barStyle} backgroundColor={backgroundColor} translucent />
      <Text style={{ color: colors.text }}>Home Screen</Text>
      <Button title="Go to details screen" onPress={() => navigation.navigate('Details', { date: new Date() })} />
      <Ionicons name="md-checkmark-circle" size={32} color="green" />
    </View>
  );
};

export default HomeScreen;
