-- V77.4 consolidates the two Alum Creek phase records into one riding area.
-- Existing reports and weather history are preserved; the retired record is archived.
begin;

update public.trail_systems
set
  name = 'Alum Creek Trail System',
  data = data || jsonb_build_object(
    'name', 'Alum Creek Trail System',
    'official', 'https://www.combomtb.com/combo-trails',
    'mtbProject', 'https://www.mtbproject.com/directory/8015214/alum-creek-state-park',
    'note', 'Official Alum Creek riding area covering Phase 1 and Phase 2. The condition estimate uses the established Phase 1 weather sensitivity.'
  )
where id = 'alum-p1';

update public.trail_systems
set
  record_status = 'Archived',
  data = data || jsonb_build_object(
    'recordStatus', 'Archived',
    'duplicateOf', 'alum-p1',
    'retiredReason', 'Consolidated into the Alum Creek Trail System riding-area record in V77.4.'
  )
where id = 'alum-p2';

commit;
