data = [
  {
    principal: 2500,
    time: 1.8
  },
  {
    principal: 1000,
    time: 5
  },
  {
    principal: 3000,
    time: 1
  },
  {
    principal: 2000,
    time: 3
  }
];

function interestCalculator(anArray) {
  let rate,
    interestData = [];

  for (const data of anArray) {
    if (data.principal >= 2500 && data.time > 1 && data.time < 3) {
      rate = 3;
      // principal is greater than or equal to 2500 and the time is greater than or equal to 3
    } else if (data.principal >= 2500 && data.time >= 3) {
      rate = 4;
      // principal is less than 2500 or the time is less than or equal to 1
    } else if (data.principal < 2500 || data.time <= 1) {
      rate = 2;
    } else {
      rate = 1;
    }
    const interestGained = (data.principal * rate * data.time) / 100;

    // create a new object caled investment and add the properties of the object
    const investment = {};
    investment.principal = data.principal;
    investment.rate = rate;
    investment.time = data.time;
    investment.interest = interestGained;

    interestData.push(investment);
  }

  console.log(interestData);
  return interestData;
}

interestCalculator(data);
