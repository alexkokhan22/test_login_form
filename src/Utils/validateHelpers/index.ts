export const emailValidation = (email: string) => {
  const re = new RegExp(
    "^\\w+([-+.']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$"
  );

  if (!email.trim().length) return 'Поле обязательное для заполнения';

  if (!re.test(email)) return 'Укажите корректный email адрес';

  return null;
};

export const passwordValidation = (password: string) => {
  if (!password.trim().length) return 'Поле обязательное для заполнения';

  if (password.trim().length < 8) return 'Длина пароля не менее 8 символов';

  return null;
};
