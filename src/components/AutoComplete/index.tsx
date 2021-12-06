import React from 'react';
import { CUIAutoComplete } from 'chakra-ui-autocomplete';
import { City } from '../../types/City';
import { SearchIcon } from '@chakra-ui/icons';
import { InputGroup, InputLeftElement, Input, Box} from '@chakra-ui/react';

interface Props {
  label: string;
  placeholder: string;
  itemsList: City[];
  selectedItems: City[];
  handleSelectedItemsChange(selectedItems?: City[]): any;
}

const AutoComplete: React.FC<Props> = ({
  label,
  placeholder,
  itemsList,
  handleSelectedItemsChange,
  selectedItems,
}) => {
  const [pickerItems, setPickerItems] = React.useState(itemsList);

  return (
    <Box width="100%" alignItems="center" justifyContent="center">
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
          <Input {...inputProps} color="#ffffff" width="50%" />
        </InputGroup>
      )}
      listStyleProps={{ overflow: "auto", rounded:"md"}}
    />
    </Box>
  );
};

export default AutoComplete;
