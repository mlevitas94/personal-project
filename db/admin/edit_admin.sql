update privs
set add=$2,
delete=$3,
edit = $4
where user_id = $1