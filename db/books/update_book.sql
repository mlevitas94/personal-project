update books
set 
title = $2,
link = $3,
image = $4,
price = $5,
info = $6,
fav_snip = $7,
kindle_price = $8
where book_id = $1
