import { Label, Input } from './Filter.styled';

export const Filter = ({ filter, onFilter }) => {
  return (
    <Label>
      Find contacts by name
      <Input type="text" value={filter} onChange={onFilter} />
    </Label>
  );
};
