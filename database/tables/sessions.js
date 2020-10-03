const sessions = `CREATE TABLE IF NOT EXISTS sessions(
  sid varchar(255) NOT NULL PRIMARY KEY,
  session varchar(255) NOT NULL,
  expires datetime NOT NULL
)`;

module.exports = sessions