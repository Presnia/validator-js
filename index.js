/* eslint-disable import/named */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import { checkType, nonEmptyString, numberInRange } from "./checkers.js";
import { validateObject } from "./validators.js";
import dumpErrors from "./showErrors.js";
import { userScheme } from "./compareScheme.js";

const user = {
  firstName: "test",
  lastName: "test",
  age: 78,
  phone: "212412342134",
};

user.firstName = "";
user.age = 40;

checkType(user.firstName, user.lastName, user.age);
nonEmptyString(user.firstName, user.lastName, user.phone);
numberInRange(user.age);


const result = validateObject(user, userScheme);

if (result.length !== 0) {
  dumpErrors(result, user);
} else {
  console.log(`All is ok`);
}