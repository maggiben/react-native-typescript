import { StyleSheet, TextStyle, ViewStyle, ImageStyle } from 'react-native';

interface Styles {
  main: ViewStyle;
  closeButton: ViewStyle;
  closeText: TextStyle;
  image: ImageStyle;
}

export const styles = StyleSheet.create<Styles>({
  main: {
    flex: 1,
  },
  closeButton: {
    textAlign: 'center',
    zIndex: 3,
  },
  closeText: {
    fontSize: 48,
  },
  image: {
    borderWidth: 0,
  },
});
