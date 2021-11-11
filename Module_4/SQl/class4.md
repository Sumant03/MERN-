https://codeshare.io/r9LreK



















##update functions
BEGIN TRANSACTION;
CREATE TABLE student( name varchar(20),school_id integer );

alter table student add column marks int;

insert into student values('foo',1,98);
insert into student values('aa',2,60);
insert into student values('foos',3,65);
insert into student values('food',1,70);
insert into student values('fooc',3,80);


/* Display all the records from the table */
SELECT * from student where marks>=60 order by marks desc;

select distinct name from student where name=='aa';

-- select school_id from student group by school_id

-- --function with group by 
-- select school_id,count(name) as number_of_student from student group by school_id;

-- select * or colnames from table_name where condition  group by having ;

-- --names of students whose marks are greater then average marks 

-- select name from student where marks>(select sum(marks)/count(*) from student)

select * from student where marks between 60 and 80 and name like '%f%';



update 
student set marks=1000,school_id=10 where name like 'f%';

insert into student values('Himanshu',1,100) ;

-- alter table student add column id serial

delete from student where name like '%a';


--delete all rows
-- truncate table student 

select * from student;


create table building (
building _no serial primary key ,
building_name varchar(255) not null
);

create table rooms (

room_no serial primary key,
room_name 
)






































###
subquery







