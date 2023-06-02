import * as React from 'react';
import { useForm, Controller, useWatch } from 'react-hook-form';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import { StyledForm, Thumb } from './Filter.styled';

import Box from '@mui/joy/Box';

const FilterForm = ({ onChange, selectedValue, selectChange }) => {
  const { control } = useForm();

  const filterValue = useWatch({
    control,
    name: 'filter',
    defaultValue: '',
  });

  return (
    <StyledForm>
      <Thumb>
        <Box sx={{ flexShrink: 0, flexBasis: '60%', width: '70%' }}>
          <FormLabel htmlFor="filter">Find contacts by name:</FormLabel>
          <Controller
            control={control}
            name="filter"
            value={filterValue}
            render={({ field }) => (
              <Input
                startDecorator={<SearchIcon />}
                type="text"
                id="filter"
                value={field.value}
                onChange={onChange}
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
            <Option value="dateFromLast">
              <ArrowDownwardIcon />
              Oldest
            </Option>
            <Option value="dateFromFirst">
              <ArrowDownwardIcon />
              Newest
            </Option>
            <Option value="byName">
              <ArrowDownwardIcon />
              Name a-z
            </Option>
            <Option value="byNameReverse">
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
