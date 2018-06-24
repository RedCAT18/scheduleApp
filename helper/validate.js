function validateEmail(email) {
  let regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+(?:[AZ]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/;
  return regExp.test(email);
}

function validatePassword(p1, p2) {
  // console.log(p1, p2);
  return p1 === p2 ? true : false;
}

function validateDatetime(insertedTime) {
  const currentTime = new Date();
  const currentMonth =
    currentTime.getMonth() + 1 < 10
      ? '0' + (currentTime.getMonth() + 1)
      : currentTime.getMonth() + 1;
  const datetime =
    currentTime.getFullYear() +
    '-' +
    currentMonth +
    '-' +
    currentTime.getDate() +
    ' ' +
    currentTime.getHours() +
    ':' +
    currentTime.getMinutes();

  return insertedTime < datetime ? false : true;
}

export { validateEmail, validatePassword, validateDatetime };
