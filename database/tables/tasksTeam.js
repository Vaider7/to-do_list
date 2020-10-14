const teamTasks = `CREATE TABLE IF NOT EXISTS teamTasks(
  idTask INT PRIMARY KEY AUTO_INCREMENT,
  idUser INT NOT NULL,
  idTeam INT NOT NULL,
  taskHeader VARCHAR(50) NOT NULL,
  dateStart DATE NOT NULL,
  dateEnd DATE NOT NULL,
  priority VARCHAR(20) NOT NULL,
  status VARCHAR(20) NOT NULL,
  updated DATE NOT NULL,
  responsible VARCHAR(20),
  createdBy VARCHAR(20) NOT NULL,
  description VARCHAR(1200) NOT NULL
)`;

module.exports = teamTasks