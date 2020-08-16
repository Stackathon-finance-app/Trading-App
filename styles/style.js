import { StyleSheet } from 'react-native';

export const dashboardStyle = StyleSheet.create({
  account: {
    margin: 15,
    flex: 3,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
  },
  label: {
    paddingTop: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  accountBox: {
    flex: 1,
    flexDirection: 'row'
  },
  leftBox: {
    flex: 1
  },
  rightBox: {
    flex: 1
  }
});
