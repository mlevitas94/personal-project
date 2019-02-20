select * from admins
inner join privs on admins.admin_id=privs.user_id and admins.admin_id = $1;