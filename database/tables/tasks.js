const tasks = `CREATE TABLE IF NOT EXISTS tasks(
  idTask INT PRIMARY KEY AUTO_INCREMENT,
  idUser INT NOT NULL,
  taskHeader VARCHAR(50) NOT NULL,
  dateStart VARCHAR(10) NOT NULL,
  dateEnd VARCHAR(10) NOT NULL,
  priority VARCHAR(20) NOT NULL,
  status VARCHAR(20) NOT NULL,
  updated VARCHAR(10) NULL,
  description VARCHAR(1200) NOT NULL
)`;

module.exports = tasks