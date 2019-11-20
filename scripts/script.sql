SET timezone = 'UTC';

CREATE TABLE client(
	id serial not null, 
	name varchar(255),    
	created_at timestamp,
	updated_at timestamp,
	CONSTRAINT pk_client_id PRIMARY KEY (id)
);