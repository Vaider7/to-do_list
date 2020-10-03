const tasks = `CREATE TABLE IF NOT EXISTS tasks(
  idTask INT PRIMARY KEY AUTO_INCREMENT,
  idUser INT NOT NULL UNIQUE,
  taskHeader VARCHAR(50) NOT NULL,
  dateStart DATE NOT NULL,
  dateEnd DATE NOT NULL,
  priority VARCHAR(20) NOT NULL,
  status VARCHAR(20) NOT NULL,
  updated DATE NOT NULL,
  description VARCHAR(1200) NOT NULL
)`;

module.exports = tasks