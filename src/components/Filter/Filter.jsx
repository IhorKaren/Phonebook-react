import * as React from 'react';
import { useForm, Controller, useWatch } from 'react-hook-form';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import SearchIcon from '@mui/icons-material/Search';
import { StyledForm, Thumb } from './Filter.styled';

const FilterForm = ({ onChange }) => {
  const { control } = useForm();

  const filterValue = useWatch({
    control,
    name: 'filter',
    defaultValue: '',
  });

  return (
    <StyledForm>
      <Thumb>
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
              sx={{ width: '100%' }}
            />
          )}
        />
      </Thumb>
    </StyledForm>
  );
};

export default FilterForm;
