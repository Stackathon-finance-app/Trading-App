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
  },
  position: {
    flex: 1,
    flexDirection: 'row',
    margin: 5,
    borderWidth: 1,
    padding: 5,
    borderRadius: 5
  },
  positionsLeftBox: {
    flex: 4,
  },
  positionsRightBox: {
    flex: 1
  },
  symbol: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black'
  },
  subheading: {
    color: 'grey'
  },
  price: {
    fontSize: 15,
    fontWeight: 'bold',
    color:'green'
  }
});
