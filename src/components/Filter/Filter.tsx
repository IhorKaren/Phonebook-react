import { FC, ChangeEvent } from 'react';
import { useForm, Controller } from 'react-hook-form';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import { StyledForm, Thumb } from './Filter.styled';
import Box from '@mui/joy/Box';

import { Filter } from 'Pages/Home/Home';

type FormValues = {
  filter: string;
};

type FilterFormProps = {
  onFilterChange: (e: ChangeEvent<HTMLInputElement>) => void;
  selectChange: (e: any, newValue: any) => void;
  selectedValue: string;
};

const FilterForm: FC<FilterFormProps> = ({
  onFilterChange,
  selectedValue,
  selectChange,
}) => {
  const { control } = useForm<FormValues>();

  return (
    <StyledForm>
      <Thumb>
        <Box sx={{ flexShrink: 0, flexBasis: '60%', width: '70%' }}>
          <FormLabel htmlFor="filter">Find contacts by name:</FormLabel>
          <Controller
            control={control}
            name="filter"
            render={({ field }) => (
              <Input
                startDecorator={<SearchIcon />}
                type="text"
                id="filter"
                value={field.value}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  onFilterChange(e)
                }
              />
            )}
          />
        </Box>
        <Box sx={{ flexShrink: 1, flexBasis: '30%', width: '25%' }}>
          <FormLabel htmlFor="sortBy">Sort by:</FormLabel>
          <Select
            name="sortBy"
            value={selectedValue}
            placeholder="Sort by..."
            onChange={selectChange}
          >
            <Option value={Filter.dateLast}>
              <ArrowDownwardIcon />
              Oldest
            </Option>
            <Option value={Filter.dateFirst}>
              <ArrowDownwardIcon />
              Newest
            </Option>
            <Option value={Filter.byName}>
              <ArrowDownwardIcon />
              Name a-z
            </Option>
            <Option value={Filter.byNameReverse}>
              <ArrowDownwardIcon />
              Name z-a
            </Option>
          </Select>
        </Box>
      </Thumb>
    </StyledForm>
  );
};

export default FilterForm;
