export enum Commands {
  HELLO = 'hello',
  BYE = 'bye',
  GOOD_AFTERNOON = 'good_afternoon',
}

export type CommandPattern = {
  cmd: Commands;
};

export type CommandSend = {
  cmd: Commands;
  transaction_id?: number;
};
