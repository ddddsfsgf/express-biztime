/** Database setup for BizTime. */

const { Client } = require("pg");

const client = new Client({
  connectionString: "postgresql://ddebernardo:General1!@localhost:5432/biztime"
});

client.connect();

module.exports = client;