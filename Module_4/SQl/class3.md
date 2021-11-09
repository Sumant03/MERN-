 ### alter commands 

 BEGIN TRANSACTION;

/* Create a table called NAMES */
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

select * or colnames from table_name where condition  group by having ;

--names of students whose marks are greater then average marks 

select name from student where marks>(select sum(marks)/count(*) from student) 



## including which are not colums 

-- create table exp(val1 int ,val2 int);

-- insert into exp values(10,20),(20,30);

-- select val1,val2,val1+val2 from exp;




## like vale commands

select count(*),name,sum(marks) from student group by school_id;
-- select count(*),sum(marks) from student where name like 'f%';


