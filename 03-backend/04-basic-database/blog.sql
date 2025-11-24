-- Create
create table if not exists articles (
	id serial primary key,
	title varchar(255) not null,
	image varchar(500),
	content text not null,
	likes int default 0,
	category varchar(100) not null,
	createdAt timestamp default now(),
	updatedAt timestamp	
);

-- Create
insert into articles (title, image, content, category)
values ('The Calm of Early Morning Forests', 'https://images.unsplash.com/photo-1501785888041-af3ef285b470', 'Walking through a quiet forest at sunrise feels like stepping into a different world. The air is colder, the colors softer, and everything moves slower. It’s one of those rare moments where your mind finally stops rushing.', 'nature');

-- Create
insert into articles (
  title,
  image,
  content,
  likes,
  category
) values
(
  
  'The Calm of Early Morning Forests',
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470',
  'Walking through a quiet forest at sunrise feels like stepping into a different world. The air is colder, the colors softer, and everything moves slower. It’s one of those rare moments where your mind finally stops rushing.',
  34,
  'nature'
),
(
  'How Technology Shapes Our Daily Habits',
  'https://images.unsplash.com/photo-1518770660439-4636190af475',
  'We check our phones before we even open our eyes fully, and that small habit already says so much about our digital lifestyle. Technology blends into every part of our day, often without us noticing the shift.',
  58,
  'technology'
),
(
  'A Simple Guide to Staying Motivated',
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4',
  'Motivation doesn’t magically appear every morning. Most days, it’s a small push—drinking water, stretching, or cleaning your desk—that gets the engine running. Consistency matters more than inspiration.',
  22,
  'lifestyle'
),
(
  'Capturing Emotions Through Portrait Photography',
  'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c',
  'Good portraits don’t focus on perfect poses—they capture small expressions you almost miss. A slight smile, a glance away, or a relaxed posture can tell a deeper story than a staged photo.',
  77,
  'photography'
),
(
  'The Beauty of Slow Living',
  'https://images.unsplash.com/photo-1528476513691-07e6f563d97a',
  'Slow living doesn’t mean doing nothing; it means doing things with intention. Even simple routines like making tea or reading before bed become meaningful when you’re not rushing through them.',
  19,
  'lifestyle'
);

-- Create
create table authors (
  id serial primary key,
  name varchar(255) not null,
  username varchar(255) unique not null,
  email varchar(100) unique not null,
  password varchar(500) not null,
  createdAt timestamp default now(),
  updatedAt timestamp,
  deletedAt timestamp
);

-- Read
select * from articles;
select title, likes from articles;
select distinct category from articles;
select title, likes from articles order by likes desc;
select title, likes from articles order by likes desc offset 2 limit 1;

-- Update
update articles
set title = 'The Beauty of Me', category = 'photography'
where id = 6;

alter table articles add column author varchar(255);

alter table articles add column author_id int;

alter table articles 
add constraint fk_author
foreign key (author_id)
references authors(id);

alter table articles
drop column category;

-- Delete
delete from articles where id = 2;
drop table articles;
drop database postgres;