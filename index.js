exports.maxLength = (a, k) => {
  var longest = 0;
  var floor = 0;
  var ceiling = 0;
  var buildingSubArray = { sum: 0, length: 0 };

  for(var i = 0; i < a.length; i++) {
    ceiling = i;

    if (buildingSubArray.sum + a[i] <= k) {
      if(a[i] <= k) {
        if (floor == ceiling) {
          buildingSubArray = { sum: a[i], length: 1 }; // reset building sub array to start next iteration
        }
        else {
          buildingSubArray.sum += a[i]
          buildingSubArray.length++;
        }
      }
      else { // current element value is greater than target
        floor = i + 1;
      }
    }
    else { // building subarray reached its maximum, reset buildingSubArray and set floor to the next index
      if (buildingSubArray.length > longest) longest = buildingSubArray.length;
      buildingSubArray = { sum: 0, length: 0 };
      floor++;
    }
  }

  if (buildingSubArray.length > longest) longest = buildingSubArray.length;

  return longest;
}
