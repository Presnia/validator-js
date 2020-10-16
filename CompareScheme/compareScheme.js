/* eslint-disable import/extensions */
/* eslint-disable valid-typeof */
/* eslint-disable no-console */
import { checkType, nonEmptyString, numberInRange } from '../Checkers/checkers.js';

const userScheme = {
  firstName: [
    {
      validator: {
        params: ["string"],
        rule: checkType
      },
      validationMessage: "First Name not string",
    },
    {
      validator: {
        params: [],
        rule: nonEmptyString,
      },
      validationMessage: "First Name is empty",
    },
  ],
  lastName: [
    {
      validator: {
        params: ["string"],
        rule: checkType
      },
      validationMessage: "Last Name not string",
    },
    {
      validator: {
        params: [],
        rule: nonEmptyString,
      },
      validationMessage: "Last Name is empty",
    },
  ],
  age: [
    {
      validator: {
        params: ["number"],
        rule: checkType,
      },
      validationMessage: "Age not number",
    },
    {
      validator: {
        params: [18, 65],
        rule: numberInRange,
      },
      validationMessage: `Age not in range between 18 and 65`,
    },
  ],
  phone: [
    {
      validator: {
        params: ["string"],
        rule: checkType,
      },
      validationMessage: "Phone not string",
    },
  ],
};


export { userScheme, checkType, nonEmptyString, numberInRange };
