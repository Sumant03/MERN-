-- create a table
create table stu(
    name varchar (255) not null,
    id int primary key 
);

insert into  stu(name,id) values('Sum',1);
-- insert into  stu(name,id) values('ABC',1);


select * from stu;