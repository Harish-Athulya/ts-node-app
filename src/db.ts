import {Sequelize} from 'sequelize';

const sequelize = new Sequelize("theatgg6_sal_subscriber102", "theatgg6_flutter", "=sO%KCwGZQYn", {
  host: '162.241.123.158',
  dialect: 'mysql',
  port: 3306, // default MySQL port
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

sequelize.sync({ force: false })
.then(() => {
    console.log('Database synchronized');
})
.catch((error: any) => {
  console.log("Error");
    console.error('Failed to synchronize DB:', error);
});

export default sequelize;