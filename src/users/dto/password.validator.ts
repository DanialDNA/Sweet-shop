import { registerDecorator, ValidationOptions } from 'class-validator';
import * as zxcvbn from 'zxcvbn';
import { errorList } from 'src/errorList';


export function IsPasswordValid(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: any) {
          if (!value) {
            this.error = errorList.emptyPassword;
            return false;
          }
          const result = zxcvbn(value);
          if (result.score === 0) {
            this.error = errorList.weakPassword;
            return false;
          }
          return true;
        },
        defaultMessage(): string {
          return this.error || 'Something went wrong';
        }
      },
    });
  };
}