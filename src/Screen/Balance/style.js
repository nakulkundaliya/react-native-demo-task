import {StyleSheet} from 'react-native';
import COLORS from '../../Utils/Color';

const style = StyleSheet.create({
  Container: {
    backgroundColor: COLORS.BLACK,
    flex: 1,
    paddingVertical: 20,
  },
  blanaceText: {
    color: COLORS.WHITE,
    fontWeight: 'bold',
    fontSize: 25,
    paddingHorizontal: 20,
  },
  blanaceSubText: {
    color: COLORS.GRAY,
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 15,
    marginBottom: 5,
    paddingHorizontal: 20,
  },
  balanceTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  incomeContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
  },
  incomeText: {
    color: COLORS.WHITE,
    marginRight: 10,
    marginTop: 2,
    fontSize: 15,
  },
  incomeTextSize: {
    fontSize: 14,
  },
  incomeSubContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  balanceContainer: {
    flexDirection: 'row',
    marginRight: 20,
  },
  balanceSubTextPer: {
    marginRight: 5,
    marginTop: 2,
    color: COLORS.WHITE,
  },
  chartView: {
    marginTop: 20,
  },
  outIncomeText: {
    marginTop: 5,
    marginBottom: 50,
  },
  mainContainer: {
    backgroundColor: COLORS.BLACK,
    flex: 1,
  },
});

export default style;
