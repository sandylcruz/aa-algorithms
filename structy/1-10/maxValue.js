const maxValue = (nums) => {
  let maximum = nums[0];

  nums.forEach((num) => (num > maximum ? (maximum = num) : null));

  return maximum;
};

module.exports = {
  maxValue,
};
