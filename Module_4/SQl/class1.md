-- create a table
create table stu(
    name varchar (255) not null,
    id int primary key 
);

insert into  stu(name,id) values('Sum',1);
-- insert into  stu(name,id) values('ABC',1);


select * from stu;



#####
-- -- create a table
-- create table stu(
--     name varchar (255) not null,
--     id int primary key 
-- );

-- insert into  stu(name,id) values('Sum',1);
-- -- insert into  stu(name,id) values('ABC',1);


-- select * from stu;


create table employee(
ecode int primary key ,
salary int default 9000


);



insert into employee (ecode) values (1),(2);



select * from employee;


####
-- -- create a table
-- create table stu(
--     name varchar (255) not null,
--     id int primary key 
-- );

-- insert into  stu(name,id) values('Sum',1);
-- -- insert into  stu(name,id) values('ABC',1);


-- select * from stu;


create table employee(
ecode int primary key ,
salary int check (salary>10000)


);



insert into employee (ecode,salary) values (1,11000),(2,12000);



select * from employee;


#####
create table emp(name varchar ,ecode varchar);

insert into emp values('Sum',1),('Tum',2);

select * from emp;

create table emp_bkp(name varchar ,ecode varchar);

insert into emp_bkp select * from emp;

select * from emp_bkp;
























