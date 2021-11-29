create database futnews;

use futnews;

create table times(
idtimes int auto_increment,
nome_do_time varchar(100),
primary key (idTimes)
);

create table cadastro(
idcadastro int primary key auto_increment,
nome varchar (100),
email varchar (100),
senha char (8),
fktimes int,
foreign key (fktimes) references times(idTimes)
);

insert into times values
(null, 'Atlético-MG'),
(null, 'Flamengo'),
(null, 'Palmeiras'),
(null, 'Bragantino'),
(null, 'Corinthians'),
(null, 'Fortaleza'),
(null, 'Internacional'),
(null, 'Fluminense'),
(null, 'América-MG'),
(null, 'Ceará'),
(null, 'Santos'),
(null, 'Cuiabá'),
(null, 'Athletico-PR'),
(null, 'São Paulo'),
(null, 'Juventude'),
(null, 'Atlético-GO'),
(null, 'Bahia'),
(null, 'Grêmio'),
(null, 'Sport'),
(null, 'Chapecoense');


select cadastro.nome as 'Nome torcedor', cadastro.email as 'Email do torcedor', cadastro.senha 'Senha do torcedor',
times.nome_do_time as 'Nome do Time' from cadastro join times on fktimes = idTimes;

select * from cadastro  right join times on fktimes = idTimes;