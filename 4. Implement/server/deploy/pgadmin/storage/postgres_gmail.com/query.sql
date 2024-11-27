SELECT 
	(p.product_id, p.product_name, r.star, p.product_price, p.product_sale, pic.pic_name, pic.url) 
	FROM Product p 
	INNER JOIN pictures pic ON p.product_id = pic.product_id
	LEFT JOIN review r ON r.product_id = p.product_id
	-- ORDER BY RANDOM()
	-- LIMIT 5

SELECT 
	p.product_id, p.product_name, COALESCE(r.star, 0) AS star, p.product_price, p.product_sale, pic.pic_name, pic.url
	FROM Product p 
	INNER JOIN pictures pic ON p.product_id = pic.product_id
	LEFT JOIN review r ON r.product_id = p.product_id

SELECT 
	p.product_id, p.product_name, COALESCE(r.star, 0) AS star, p.product_price, p.product_sale, COALESCE(pic.pic_name, '') AS pic_name, COALESCE(pic.url, '') AS url 
	FROM Product p 
	LEFT JOIN pictures pic ON p.product_id = pic.product_id
	LEFT JOIN review r ON r.product_id = p.product_id
	ORDER BY RANDOM()
	LIMIT 5

SELECT * FROM Product
	
INSERT INTO pictures VALUES ('31743b63-d11d-481c-b12e-b8027a631a6b','31743b63-d11d-481c-b12e-b8027a631a6b','Pic test','URL')
DELETE FROM pictures