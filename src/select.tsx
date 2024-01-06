type SelectOptions = {
  label: string;
  value: string;
};
type SelectProps = {
  value?: SelectOptions;
  onChange: (value: SelectOptions | undefined) => void;
  options: SelectOptions[];
};

export function Select({ value, onChange, options }: SelectProps) {}
