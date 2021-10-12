import React, {useState} from 'react';
import {Text, View, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {Header} from '../../Component/Header';
import COLORS from '../../Utils/Color';
import {Button} from '../../Component/Button';
import {Chart} from '../../Component/Chart';
import style from './style';

let precision = 100;
let FILTER_DATA = [
  {
    text: 'Apr to Jun',
    width: 100,
  },
  {
    text: 'Month',
    month: 1,
    width: 70,
  },
  {
    text: 'Month',
    month: 6,
    width: 70,
  },
  {
    text: 'Year',
    month: 1,
    width: 70,
  },
];

let RANDOM_DATA = [
  Math.floor(Math.random() * (10 * precision - 1 * precision) + 1 * precision) /
    (1 * precision),
  Math.floor(Math.random() * (10 * precision - 1 * precision) + 1 * precision) /
    (1 * precision),
  Math.floor(Math.random() * (10 * precision - 1 * precision) + 1 * precision) /
    (1 * precision),
  Math.floor(Math.random() * (10 * precision - 1 * precision) + 1 * precision) /
    (1 * precision),
  Math.floor(Math.random() * (10 * precision - 1 * precision) + 1 * precision) /
    (1 * precision),
];

const Balance = ({navigation}) => {
  let [tooltipPos, setTooltipPos] = useState({
    x: 0,
    y: 0,
    visible: false,
    value: 0,
  });

  const [filterByData, setFilterByData] = useState(FILTER_DATA);

  const [chacked, setChacked] = useState(0);
  const [randomData, setRandomData] = useState(RANDOM_DATA);

  const onChangeValue = val => {
    setChacked(val);
    setRandomData(RANDOM_DATA);
  };

  const balanceView = () => {
    return (
      <View>
        <Text style={style.blanaceText}>Your Balance</Text>
        <Text style={style.blanaceSubText}>Money Received</Text>
        <View style={style.balanceTextContainer}>
          <Text style={[style.blanaceText, {fontSize: 25}]}>$27,802.05</Text>
          <View style={style.balanceContainer}>
            <Text style={[style.blanaceSubText, style.balanceSubTextPer]}>
              15%
            </Text>
            <Icon name="arrowup" size={20} color={COLORS.WHITE} />
          </View>
        </View>
      </View>
    );
  };

  const chartView = () => {
    return (
      <View style={style.chartView}>
        <Chart
          randomData={randomData}
          tooltipPos={tooltipPos}
          setTooltipPos={setTooltipPos}
        />
      </View>
    );
  };

  const fillterView = () => {
    return (
      <View style={style.buttonContainer}>
        {filterByData.map((item, index) => {
          return chacked == index ? (
            <Button
              width={index === 0 ? 90 : 70}
              backgroundColor={
                chacked == index ? COLORS.PRIMARY : COLORS.LIGHTGRAY
              }
              color={chacked == index ? COLORS.WHITE : COLORS.TEXTCOLOR}
              onPress={() => onChangeValue(index)}
              setChecked={setChacked}
              month={item.month}
              text={item.text}
            />
          ) : (
            <Button
              width={index === 0 ? 90 : 70}
              onPress={() => onChangeValue(index)}
              backgroundColor={
                chacked == index ? COLORS.PRIMARY : COLORS.LIGHTGRAY
              }
              color={chacked == index ? COLORS.WHITE : COLORS.TEXTCOLOR}
              setChecked={setChacked}
              month={item.month}
              text={item.text}
            />
          );
        })}
      </View>
    );
  };

  const incomContainer = () => {
    return (
      <View>
        <View style={style.incomeContainer}>
          <Text style={[style.blanaceSubText, style.incomeTextSize]}>
            Income
          </Text>
          <View style={style.incomeSubContainer}>
            <Text style={[style.blanaceSubText, style.incomeText]}>75%</Text>
            <Icon name="arrowdown" size={20} color={COLORS.WHITE} />
          </View>
        </View>
        <View style={[style.incomeContainer, style.outIncomeText]}>
          <Text style={[style.blanaceSubText, style.incomeTextSize]}>
            OutIncome
          </Text>
          <View style={style.incomeSubContainer}>
            <Text style={[style.blanaceSubText, style.incomeText]}>25%</Text>
            <Icon name="arrowup" size={20} color={COLORS.WHITE} />
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={style.mainContainer}>
      <Header onPress={() => navigation.openDrawer()} />
      <ScrollView style={style.Container}>
        {balanceView()}
        {chartView()}
        {fillterView()}
        {incomContainer()}
      </ScrollView>
    </View>
  );
};

export default Balance;
