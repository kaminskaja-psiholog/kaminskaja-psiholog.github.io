function x() {
  return [[["kami", "nskaja"].join(""), "psiholog"].join("."), [["gma", "il"].join(""), "com"].join(".")].join("@");
}

function decode(subject) {
  let result = ["mai", "lto", ":"].join("");
  result += x();
  result += "?";
  result += ["subject", subject].join("=");
  return result;
}

function openMailer(element, subject) {
  let y = decode(subject);
  element.setAttribute("href", y);
  element.setAttribute("onclick", "");
  element.setAttribute("rel", "noreferrer noopener");
}
