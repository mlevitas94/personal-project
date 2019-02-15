insert into admins(
    first_name,
    last_name,
    username,
    hash
)values(
    $1,
    $2,
    $3,
    $4
)

returning admin_id;