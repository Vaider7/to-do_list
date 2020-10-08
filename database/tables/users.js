const users = `create table if not exists users(
  id int primary key auto_increment,
  login varchar(20) not null unique,
  hashedPassword varchar(255) not null,
  email varchar(50) not null unique,
  name varchar(40) not null,
  surname varchar(40) not null,
  patronymic varchar(40) not null
)`;

module.exports = users