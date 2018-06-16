function validateEmail(email) {
  let regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+(?:[AZ]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/;
  return regExp.test(email);
}

function validatePassword(p1, p2) {
  // console.log(p1, p2);
  return p1 === p2 ? true : false;
}

export { validateEmail, validatePassword };
