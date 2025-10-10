function phoneNumberDirectory(phoneNumbers) {
  return phoneNumbers.reduce((map, phoneNumber) => {
    const formatted = phoneNumber.split(':');
    return map.set(formatted[0], formatted[1]);
  }, new Map());
}

module.exports = phoneNumberDirectory;
