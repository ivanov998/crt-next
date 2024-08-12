type index = {
  index: number;
};

export interface ICongruenceInput {
  remainder?: string;
  modulo?: string;
}

export interface ICongruenceInputProps extends ICongruenceInput {
  index: number;
  handleValues: (props: index & ICongruenceInput) => void;
  handleDelete: (index: number) => void;
}
