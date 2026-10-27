function check(number) {
  (number > 0 && console.log("Number is positive")) ||
    console.log("Default value");
}

check(-5);
check(4);
check(0);
