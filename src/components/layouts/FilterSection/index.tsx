import { useSearchParams } from 'react-router-dom';

import { FILTER_STATUS } from '@/constants';

import FilterRadios from '@/components/public/FilterRadios';
import { querySplit } from '@/utils/querySplit';

const FilterSection = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filters = querySplit(searchParams.toString());

  const handleStatus = (event: React.MouseEvent<HTMLElement>, status: string) => {
    setSearchParams({ ...filters, status });
  };

  return <FilterRadios radios={FILTER_STATUS} filters={searchParams} handleStatus={handleStatus} />;
};

export default FilterSection;
