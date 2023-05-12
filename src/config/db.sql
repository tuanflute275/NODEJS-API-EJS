create database nodebasic
go
create table users(
    id int PRIMARY key AUTO_INCREMENT,
    name varchar(150) not null,
    email varchar(150) not null,
    address varchar(150) not null
)