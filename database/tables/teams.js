const teams = `CREATE TABLE IF NOT EXISTS teams(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL UNIQUE,
    hashedPassword VARCHAR(255),
    adding VARCHAR(10),
    admin INT NOT NULL
)`;

module.exports = teams