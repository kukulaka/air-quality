import React from 'react';
import { CUIAutoComplete } from 'chakra-ui-autocomplete';
import { City } from '../../types/City';
import { SearchIcon } from '@chakra-ui/icons';
import { InputGroup, InputLeftElement, Input, Box, Flex} from '@chakra-ui/react';

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
    <Flex width="100%" alignItems="center" justifyContent="center" color="#000000">
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
        <Box width="100%"  >
        <InputGroup rounded="md" color="#000000">
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input {...inputProps} width="100%" borderColor="gray.300"/>
        </InputGroup>
        </Box>
      )}
      listStyleProps={{ overflow: "auto", rounded:"md"}}
    />
    </ Flex>
  );
};

export default AutoComplete;
