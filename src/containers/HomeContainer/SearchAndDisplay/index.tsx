import React from 'react';
import AutoComplete from '../../../components/AutoComplete';
import { City } from '../../../types/City';
import ResultsLayout from '../../../components/ResultsLayout';
import { Box } from '@chakra-ui/react';

interface Props {
  label: string;
  placeholder: string;
  itemsList: City[];
}

const SearchAndDisplay: React.FC<Props> = ({
  label,
  placeholder,
  itemsList,
}) => {
  const [selectedItems, setSelectedItems] = React.useState<City[]>([]);

  const handleSelectedItemsChange = (selectedItems?: City[]) => {
    if (selectedItems) {
      setSelectedItems(selectedItems);
      console.log(selectedItems, 'selected items');
    }
  };

  return (
    <>
      <AutoComplete
        label={label}
        placeholder={placeholder}
        itemsList={itemsList}
        handleSelectedItemsChange={handleSelectedItemsChange}
        selectedItems={selectedItems}
      />
      <ResultsLayout selectedItems={selectedItems} />
    </>
  );
};

export default SearchAndDisplay;
