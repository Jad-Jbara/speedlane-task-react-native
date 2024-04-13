import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  containerForAbsolute: {
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 999,
    backgroundColor: 'black',
    opacity: 0.5,
  },
  viewForAbsolute: {
    width: 80,
    height: 80,
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
})
