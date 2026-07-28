-- V67 one-time cleanup: remove guessed soil fields from shared trail records.
-- Preserves trail names, locations, weather centers, links, canopy,
-- rain sensitivity, notes, status, and all rider reports.

begin;

update public.ohio_trails
set
  data = data - 'surface' - 'surfaces' - 'drying' - 'drainage',
  updated_at = now()
where
  data ? 'surface'
  or data ? 'surfaces'
  or data ? 'drying'
  or data ? 'drainage';

commit;

select
  count(*) filter (
    where data ? 'surface'
       or data ? 'surfaces'
       or data ? 'drying'
       or data ? 'drainage'
  ) as records_with_guessed_soil_fields,
  count(*) as total_trails
from public.ohio_trails;
