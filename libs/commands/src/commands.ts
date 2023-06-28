export enum Commands {
  CUSTOMER_SIGN_IN = 'CUSTOMER_SIGN_IN',
  CUSTOMER_SIGN_UP = 'CUSTOMER_SIGN_UP',
}

export type CommandPattern = {
  cmd: Commands;
};

export type CommandSend = {
  cmd: Commands;
  transaction_id?: number;
};
