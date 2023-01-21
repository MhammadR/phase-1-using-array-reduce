const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce(function (firstValue, nextValue) {
  return firstValue + nextValue;
}, 0);
