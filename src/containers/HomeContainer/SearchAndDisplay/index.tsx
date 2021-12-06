import React, { FC, useState } from 'react';
import AutoComplete from '../../../components/AutoComplete';
import { City } from '../../../types/City';

export interface Props {
  label: string;
  placeholder: string;
  itemsList: City[];
}

const SearchAnDisplay: FC<Props> = ({ label, placeholder, itemsList }) => {
  const [selectedItems, setSelectedItems] = useState<City[]>([]);

  const handleSelectedItemsChange = (selectedItems?: City[]) => {
    if (selectedItems) {
      setSelectedItems(selectedItems);
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
    </>
  );
};

export default SearchAnDisplay;
