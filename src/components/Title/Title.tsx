import { Person } from '../../types/Person';

interface Props {
  isSelected: Person | null;
}

export const Title: React.FC<Props> = ({ isSelected }) => {
  return (
    <h1 className="title">
      {isSelected ? (
        `${isSelected.name} (${isSelected.born} - ${isSelected.died} = ${isSelected.died - isSelected.born})`
      ) : (
        'No selected person'
      )}
    </h1>
  );
};
