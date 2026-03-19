use manutencaoTecnico;


-- tabelas 
create table usuario(
idUsuario int auto_increment primary key, 
nome varchar(50) not null,
email varchar(50) not null unique,
senha varchar(50) not null,
cpf varchar(11) not null unique,
perfil varchar(50) not null
);

create table clientes(
id_cliente int auto_increment primary key,
idProduto int not null,

constraint fk_equipamento foreign key clientes(id_Cliente) references usuario(idUsuario)
);

create table equipamento(
idEquipamento int  auto_increment primary key, 
nome varchar(50) not null,
ProblemaDescricao varchar(50) not null,
 foreign key equipamento(idEquipamento) references clientes(id_cliente)

);

create table ordemDeservico(
idOrdemServico int auto_increment primary key,
idProduto int not null,
idUsuario int not null,
idTecnico int not null,
descricao text not null,
preco int not null,
constraint fk_orderSer_Equipamento foreign key ordemServico(idproduto) references equipamento(idEquipamento),
constraint fk_ordemSer_Cliente foreign key ordemServico(idUsuario) references usuario(idUsuario),
constraint fk_tecnico foreign key ordemServico(idUsuario) references usuario(idUsuario)
);


-- insers


insert into usuario(nome,email,senha, cpf, perfil) 
values("Miguel Vargas" , "miguel@gmail.com", "76548765","04631817003","Técnico"),
("João Pereira Tavares", "tavares536@gmail.com", "98765678", "987654367","Cliente"),
("Caique Nunes","Caka09877@gmail.com","87653NA6","86546351787","Cliente"),
("Gilmar Ferreira","gilmarNunes@gmail.com","5456678H","08654312221","Administrador"),
("Moira Santos","moiraa342@gmail.com","09767654","98675765443","Cliente")


-- uptade


update 