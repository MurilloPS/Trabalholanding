create database db_landiapi;
use db_landiapi;
create table tasks(
	id int auto_increment primary key,
    email varchar (255) not null,
    nome varchar(255),
    reclamações varchar(255),
    telefone int,
    created_at timestamp default current_timestamp
);
select*from tasks;