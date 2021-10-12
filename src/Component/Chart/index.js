import React from 'react';
import {Text, View, Dimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {Rect, Text as TextSVG, Svg} from 'react-native-svg';
import COLORS from '../../Utils/Color';

const WIDTH = Dimensions.get('window').width;

export const Chart = props => {
  const {randomData, tooltipPos, setTooltipPos} = props;
  return (
    <LineChart
      data={{
        datasets: [{data: randomData}],
      }}
      width={WIDTH}
      height={256}
      verticalLabelRotation={30}
      withInnerLines={false}
      withOuterLines={false}
      withVerticalLines={false}
      withHorizontalLabels={false}
      withVerticalLabels={false}
      strokeWidth={20}
      chartConfig={{
        backgroundColor: COLORS.WHITE,
        backgroundGradientFrom: COLORS.BLACK,
        backgroundGradientTo: COLORS.BLACK,
        decimalPlaces: 2,
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        propsForDots: {
          r: '6',
          strokeWidth: '3',
          stroke: COLORS.PRIMARY,
        },
        style: {
          borderRadius: 16,
        },
      }}
      onDataPointClick={data => {
        let isSamePoint = tooltipPos.x === data.x && tooltipPos.y === data.y;

        isSamePoint
          ? setTooltipPos(previousState => {
              return {
                ...previousState,
                value: data.value,
                visible: !previousState.visible,
              };
            })
          : setTooltipPos({
              x: data.x,
              value: data.value,
              y: data.y,
              visible: true,
            });
      }}
      decorator={() => {
        return tooltipPos.visible ? (
          <View>
            <Svg>
              <Rect
                x={tooltipPos.x - 15}
                y={tooltipPos.y + 10}
                width="40"
                height="30"
                fill="#252525"
              />
              <TextSVG
                x={tooltipPos.x + 5}
                y={tooltipPos.y + 30}
                fill="white"
                fontSize="16"
                fontWeight="bold"
                textAnchor="middle">
                {tooltipPos.value}
              </TextSVG>
            </Svg>
          </View>
        ) : null;
      }}
      bezier
    />
  );
};
