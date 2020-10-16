/* eslint-disable import/extensions */
import validateFiled from "./validateField.js";

export default function validateObject(object, objectScheme) {
  const errorList = [];

  Object.keys(objectScheme).forEach((key) => {
    errorList.push(...validateFiled(object, key, objectScheme[key]));
  });

  return errorList;
}