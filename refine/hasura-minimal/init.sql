CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    title text NOT NULL,
    created_at timestamp with time zone NOT NULL DEFAULT now()
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title text NOT NULL,
    content text NOT NULL,
    category_id integer REFERENCES categories(id) ON DELETE RESTRICT ON UPDATE RESTRICT,
    created_at timestamp with time zone DEFAULT now()
);
