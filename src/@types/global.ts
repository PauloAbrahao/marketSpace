export type SignInProps = {
  email: string;
  password: string;
};

export type SignUpProps = {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirm_password: string;
};

export type IconButtonProps = {
  onPress: () => void;
  color: string;
};