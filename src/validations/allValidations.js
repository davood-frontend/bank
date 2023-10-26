import * as Yup from 'yup'
//regex for validating only persian and english characters
const persianOrEnglishPattern = /^[A-Za-z\u0600-\u06FF\s]+$/;
const englishPattern = /^[a-zA-Z]*$/;


export const getLoanSchema = Yup.object().shape({
    fullName: Yup.string().required('نام و نام خوانوادگی الزامی میباشد').matches(persianOrEnglishPattern, 'لطفا یک نام معتبر وارد کنید').min(5, 'نام و نام خوانوادگی باید حداقل پنچ حرف باشد'),
    birthDateDay: Yup.number().required('روز تولد الزامی میباشد').min(1, 'لطفا یک روز معتبر وارد کنید').max(32, 'لطفا یک روز معتبر وارد کنید'),
    birthDateMonth: Yup.number().required('ماه تولد الزامی میباشد').min(1, 'لطفا یک ماه معتبر وارد کنید').max(12, 'لطفا یک ماه معتبر وارد کنید'),
    birthDateYear: Yup.number().required('سال تولد الزامی میباشد').min(1310, 'لطفا یک سال معتبر وارد کنید').max(1403, 'لطفا یک سال معتبر وارد کنید'),
    id: Yup.string().required('شماره ملی یا شناسایی الزامی میباشد').min(10, 'شماره ملی یا شناسایی باید حداقل ده رقم باشد'),
    residence: Yup.string().matches(persianOrEnglishPattern, 'لطفا از حروف معتبر استفاده کنید').required('اقامت الزامی میباشد').min(3, ' اقامت باید حداقل سه حرف باشد'),
    nationality: Yup.string().matches(persianOrEnglishPattern, 'لطفا از حروف معتبر استفاده کنید').required('ملیت الزامی میباشد').min(3, 'ملیت باید حداقل سه حرف باشد'),
    phone: Yup.string().required('تلفن همراه الزامی میباشد').length(10, 'تلفن همراه باید یازده رقم باشد'),
    firstAdress: Yup.string().matches(persianOrEnglishPattern, 'لطفا از حروف معتبر استفاده کنید').required('آدرس الزامی میباشد').min(10, 'آدرس باید حداقل ده حرف باشد'),
    secondAdress: Yup.string().matches(persianOrEnglishPattern, 'لطفا از حروف معتبر استفاده کنید').required('آدرس الزامی میباشد').min(10, 'آدرس باید حداقل ده حرف باشد'),
    state: Yup.string().matches(persianOrEnglishPattern, 'لطفا از حروف معتبر استفاده کنید').required('استان الزامی میباشد').min(3, 'استان باید حداقل سه حرف باشد'),
    city: Yup.string().matches(persianOrEnglishPattern, 'لطفا از حروف معتبر استفاده کنید').required('شهر الزامی میباشد').min(3, ' باید حداقل سه حرف باشد'),
    postalCode: Yup.string().required('کد پستی الزامی میباشد').length(10, 'کد پستی باید ده رقم باشد'),
    amount: Yup.string().required('مبلغ وام الزامی میباشد').min(7, 'مبلغ وام باید حداقل هفت رقم باشد'),
})

export const transferMoneySchema = Yup.object().shape({
    fullName: Yup.string().required('نام و نام خوانوادگی الزامی میباشد').matches(persianOrEnglishPattern, 'لطفا یک نام معتبر وارد کنید').min(5, 'نام و نام خوانوادگی باید حداقل پنچ حرف باشد'),
    birthDateDay: Yup.number().required('روز تولد الزامی میباشد').min(1, 'لطفا یک روز معتبر وارد کنید').max(32, 'لطفا یک روز معتبر وارد کنید'),
    birthDateMonth: Yup.number().required('ماه تولد الزامی میباشد').min(1, 'لطفا یک ماه معتبر وارد کنید').max(12, 'لطفا یک ماه معتبر وارد کنید'),
    birthDateYear: Yup.number().required('سال تولد الزامی میباشد').min(1310, 'لطفا یک سال معتبر وارد کنید').max(1403, 'لطفا یک سال معتبر وارد کنید'),
    id: Yup.string().required('شماره ملی یا شناسایی الزامی میباشد').min(10, 'شماره ملی یا شناسایی باید حداقل ده رقم باشد'),
    amount: Yup.string().required('مبلغ ارسالی الزامی میباشد').min(4, 'مبلغ ارسالی باید حداقل چهار رقم باشد'),
    recieverId: Yup.string().required('نام کاربری فرد دریافت کننده الزامی میباشد').matches(persianOrEnglishPattern, 'لطفا یک نام کاربری معتبر وارد کنید')
})

export const loginSchema = Yup.object().shape({
    first_name: Yup.string().required('نام الزامی میباشد').matches(persianOrEnglishPattern, 'لطفا یک نام معتبر وارد کنید').min(3, 'نام باید حداقل سه حرف باشد'),
    last_name: Yup.string().required('نام خوانوادگی الزامی میباشد').matches(persianOrEnglishPattern, 'لطفا یک نام معتبر وارد کنید').min(2, 'نام خوانوادگی باید حداقل دو حرف باشد'),
    username: Yup.string().required('نام کاربری الزامی میباشد').matches(englishPattern, 'لطفا یک نام کاربری معتبر وارد کنید'),
    password : Yup.number().typeError('لطفا یک عدد معتبر وارد کنید').required('رمز عبور الزامی میباشد'),
})

export const signupSchema = Yup.object().shape({
    first_name: Yup.string().required('نام الزامی میباشد').matches(persianOrEnglishPattern, 'لطفا یک نام معتبر وارد کنید').min(3, 'نام باید حداقل سه حرف باشد'),
    last_name: Yup.string().required('نام خوانوادگی الزامی میباشد').matches(persianOrEnglishPattern, 'لطفا یک نام معتبر وارد کنید').min(2, 'نام خوانوادگی باید حداقل دو حرف باشد'),
    username: Yup.string().required('نام کاربری الزامی میباشد').matches(englishPattern, 'لطفا یک نام کاربری معتبر وارد کنید'),
    password : Yup.number().typeError('لطفا یک عدد معتبر وارد کنید').required('رمز عبور الزامی میباشد'),
})