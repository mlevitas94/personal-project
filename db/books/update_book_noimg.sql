update books
set 
title = $2,
link = $3,
price = $4,
info = $5,
fav_snip = $6,
kindle_price = $7
where book_id = $1
