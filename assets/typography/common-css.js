import { COLORS } from './colors';
import { globalStyles } from './typography';

export const CommonStyles = {
    btn: {
        paddingVertical: 20,
        backgroundColor : COLORS.primary,
    },

    input: {
      width: '100%',
      height: 50,
      borderWidth: 1,
      borderColor: '#D1D5DB',
      borderRadius: 8,
      paddingHorizontal: 15,
      backgroundColor: '#FFFFFF',
      ...globalStyles.paragraph
    },

  focusedLabel: {
    color: '#888',
    marginBottom: 10,
    textTransform: 'lowercase',
    position: 'absolute',
    top: -7,
    left: 15,
    backgroundColor: '#F8FBFF',
    paddingHorizontal: 5,
    zIndex: 1,
    fontSize: 12,
  },

  normalLabel: {
    color: '#888',
    marginBottom: 10,
    textTransform: 'capitalize',
  },
}