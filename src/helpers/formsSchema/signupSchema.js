import * as yup from "yup";

export const signUpSchema = yup.object({
  name: yup.string().required("Informe o nome."),
  email: yup.string().required("Informe o e-mail.").email("E-mail inválido."),
  phone: yup.string().required("Informe o telefone."),
  password: yup
    .string()
    .required("Informe a senha.")
    .min(6, "A senha deve ter pelo menos 6 dígitos"),
  confirm_password: yup
    .string()
    .required("Confirme sua senha.")
    .oneOf([yup.ref("password"), ""], "A confirmação de senha não confere."),
});
