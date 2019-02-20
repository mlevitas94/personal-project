select * from admins
inner join privs on admins.admin_id=privs.user_id;