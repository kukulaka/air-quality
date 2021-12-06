import React, { FC, useState } from 'react';
import { CUIAutoComplete } from 'chakra-ui-autocomplete';
import { City } from '../../types/City';
import { SearchIcon } from '@chakra-ui/icons';
import { InputGroup, InputLeftElement, Input } from '@chakra-ui/react';

export interface Props {
  label: string;
  placeholder: string;
  itemsList: City[];
  selectedItems: City[];
  handleSelectedItemsChange(selectedItems?: City[]): any;
}

const AutoComplete: FC<Props> = ({
  label,
  placeholder,
  itemsList,
  handleSelectedItemsChange,
  selectedItems,
}) => {
  const [pickerItems, setPickerItems] = useState(itemsList);

  return (
    <CUIAutoComplete
      label={label}
      placeholder={placeholder}
      items={pickerItems}
      disableCreateItem={true}
      selectedItems={selectedItems}
      onSelectedItemsChange={(changes) =>
        handleSelectedItemsChange(changes.selectedItems)
      }
      hideToggleButton={true}
      renderCustomInput={(inputProps) => (
        <InputGroup rounded="md">
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input {...inputProps} color="#ffffff" />
        </InputGroup>
      )}
      listStyleProps={{ overflow: "auto", rounded:"md"}}
    />
  );
};

export default AutoComplete;
