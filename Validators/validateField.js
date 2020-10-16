/* eslint-disable valid-typeof */
/* eslint-disable no-console */

export default function validateFiled(object, key, keyDescription) {
  const errorList = [];

  const objectKeyValue = object[key];

  keyDescription.forEach((descr) => {
    const argsArray = [objectKeyValue, ...descr.validator.params];
    if (!descr.validator.rule.apply(null, argsArray)) {
      errorList.push({
        key,
        message: descr.validationMessage,
      });
    }
  });
  return errorList;
}

