import { HttpStatus } from "@nestjs/common";

export const errorList = {
    internalServerError: {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'خطای داخلی سرور',
    },

    Unauthorized: {
        status: HttpStatus.UNAUTHORIZED,
        message: "نام کاربری یا رمز عبور اشتباه است"
    },

    duplicateUsername: {
        status: HttpStatus.CONFLICT,
        message: "این نام کاربری قبلا ثبت شده است"
    },

    duplicateEmail: {
        status: HttpStatus.CONFLICT,
        message: "این ایمیل قبلا ثبت شده است"
    },

    notFound: {
        status: HttpStatus.NOT_FOUND,
        message: "داده مورد نظر پیدا نشد"
    },

    wrongUsernameFormat: {
        message: "شماره تلفن همراه اشتباه است"
    },

    minPasswordLength: {
        message: "رمز عبور باید بیشتر از ۸ کاراکتر باشد"
    },

    wrongEmail: {
        message: "ایمیل وارد شده نامعتبر است"
    },

    emptyPassword: "رمز عبور نباید خالی باشد",

    weakPassword: "لطفا پسورد قوی تری را وارد کنید "

}