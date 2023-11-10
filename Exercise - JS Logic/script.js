//A1

// Clean the room function: given an input of
// [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20],
// make a function that organizes these into
// individual array that is ordered.
// For example answer(ArrayFromAbove) should return :
// [[1, 1, 1, 1], [2, 2, 2], 4, 5, 10, [20, 20], 391, 392, 591].

// Bonus: Make it so it organizes strings differently
// from number types.i.e.[1, "2", "3", 2] should return
// [ [1, 2], ["2", "3"]]

// Solution
function arraySort(arr) {
  // First sort all elements into numeric order.
  arr.sort(function (a, b) {
    return a - b;
  });

  let counter = 0;
  arr.forEach(function (_num, i) {
    /*First statement checks the element one by one
        If elements are equal, it counts how many of similar ones*/
    if (arr[i] === arr[i + 1]) {
      counter++;
    }
    // second statement finds the last element of similar element.
    else if (arr[i] !== arr[i + 1] && arr[i] === arr[i - 1]) {
      /*i-counter is the first index of similar ones
            i is the last index of similar ones
            create a new array between similar elements and put it into first index of similar ones*/
      arr[i - counter] = arr.slice(i - counter, i + 1);
      // counter is 0 and ready count new similar ones
      counter = 0;
    }
  });
  /*nested array have been built but need to delete similar ones from original array
    check the first element of nested array equal to next element and delete it*/
  arr.forEach(function (_num, ind) {
    while (arr[ind][0] && arr[ind][0] === arr[ind + 1]) {
      arr.splice(ind + 1, 1);
    }
  });
  return arr;
}

// BONUS QUESTION

let arr = ["1", 2, "4", "591", 392, "391", 2, 5, "10", 2, "1", "1", 1, 20, 20];

arrSort(arr);
// ["1", "4", "591", "391", "10", "1", "1", 2, 392, 2, 5, 2, 1, 20, 20]

function arrSort(_argument) {
  switch (typeof arr[0]) {
    case "string":
      let arr2 = arr.filter(function (_num, i) {
        return typeof arr[i] == "string";
      });
      let arr3 = arr.filter(function (_num, i) {
        return typeof arr[i] == "number";
      });
      arr = arr2.concat(arr3);
      break;
    case "number":
      let arr4 = arr.filter(function (_num, i) {
        return typeof arr[i] == "number";
      });
      let arr5 = arr.filter(function (_num, i) {
        return typeof arr[i] == "string";
      });
      arr = arr4.concat(arr5);
      break;
  }
  return arr;
}

//A2

/*Question 2: Write a javascript function that takes an array of numbers and a target number. 
The function should find two different numbers in the array that, when added together, give the target number. 
For example: answer([1,2,3], 4)should return [1,3]*/

function arraySum(arr, target) {
  arr.forEach(function (_num, i) {
    for (let j = 1; j <= arr.length; j++) {
      // check each element and iterate over the rest to find out if their sum is the target
      // j is 1, we don't want to sum each element with themselves
      if (arr[i] + arr[i + j] === target) {
        // create a new array and put correct elements into that
        let arr2 = [arr[i], arr[i + j]];
        console.log(arr2);
        return arr2;
      }
    }
  });
}

const target = 14;

function arraySum(arr, target) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        result.push([arr[i], arr[j]]);
      }
    }
  }
  return result;
}

console.log(arraySum([1, 3, 6, 7, 9, 10], target));
// [[3, 11], [6, 8], [7, 7], [9, 5], [10, 4]]

//A3

// Question 3: Write a function that converts HEX to RGB. Then Make that function auto-detect
// the formats so that if you enter HEX color
// format it returns RGB and if you enter RGB color format it returns HEX.

function convertToRGB(str) {
  // put each char into an array and remove #
  let strArr = str.split("");
  strArr.shift();
  for (let i = 0; i < strArr.length; i++) {
    // check the value of string number
    if (strArr[i] <= 10) {
      strArr[i] = Number(strArr[i]);
    }
    switch (strArr[i]) {
      case "a":
        strArr[i] = 10;
        break;
      case "b":
        strArr[i] = 11;
        break;
      case "c":
        strArr[i] = 12;
        break;
      case "d":
        strArr[i] = 13;
        break;
      case "e":
        strArr[i] = 14;
        break;
      case "f":
        strArr[i] = 15;
        break;
    }
  }
  // calculate RGB values
  let r = strArr[0] * 16 + strArr[1];
  let g = strArr[2] * 16 + strArr[3];
  let b = strArr[4] * 16 + strArr[5];
  return `RGB(${r}, ${g}, ${b})`;
}

function convertToHex(str) {
  // split the string into an array of numbers
  let rgbArr = str.split(/[^\d]+/);
  // convert each number to hex and concatenate them
  let hex = rgbArr.reduce((acc, val) => {
    let hexVal = Number(val).toString(16);
    if (hexVal.length < 2) {
      hexVal = "0" + hexVal;
    }
    return acc + hexVal;
  }, "");
  return `#${hex}`;
}

function convertColor(str) {
  if (str.startsWith("#")) {
    return convertToRGB(str);
  } else {
    return convertToHex(str);
  }
}

console.log(convertColor("#f4e3d8")); // RGB(244, 227, 216)
console.log(convertColor("RGB(244, 227, 216)")); // #f4e3d8
// format it returns RGB and if you enter RGB color format it returns HEX.

convertToRGB("#f4e3d8");
// Your color is RGB(244, 227, 216)

function convertToRGB(str) {
  // put each char into an array and remove #
  let strArr = str.split("");
  strArr.shift();
  for (let i = 0; i < strArr.length; i++) {
    // check the value of string number
    if (strArr[i] <= 10) {
      strArr[i] = Number(strArr[i]);
    }
    switch (strArr[i]) {
      case "a":
        strArr[i] = 10;
        break;
      case "b":
        strArr[i] = 11;
        break;
      case "c":
        strArr[i] = 12;
        break;
      case "d":
        strArr[i] = 13;
        break;
      case "e":
        strArr[i] = 14;
        break;
      case "f":
        strArr[i] = 15;
        break;
      default:
        break;
    }
  }
  let red = 16 * strArr[0] + strArr[1];
  let green = 16 * strArr[2] + strArr[3];
  let blue = 16 * strArr[4] + strArr[5];
  console.log(`Your color is RGB(${red}, ${green}, ${blue})`);
}

convertToHex(231, 55, 145);
// Your Hex Number is #E73791

function convertToHex(red, green, blue) {
  let r1 = parseInt(red / 16);
  let r2 = red % 16;
  let g1 = parseInt(green / 16);
  let g2 = green % 16;
  let b1 = parseInt(blue / 16);
  let b2 = blue % 16;
  let strArr = [r1, r2, g1, g2, b1, b2];

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] < 10) {
      strArr[i] = strArr[i].toString();
    }
    switch (strArr[i]) {
      case 10:
        strArr[i] = "A";
        break;
      case 11:
        strArr[i] = "B";
        break;
      case 12:
        strArr[i] = "C";
        break;
      case 13:
        strArr[i] = "D";
        break;
      case 14:
        strArr[i] = "E";
        break;
      case 15:
        strArr[i] = "F";
        break;
      default:
        break;
    }
  }

  console.log(
    `Your Hex Number is #${strArr[0]}${strArr[1]}${strArr[2]}${strArr[3]}${strArr[4]}${strArr[5]}`
  );
}
