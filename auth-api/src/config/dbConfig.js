import Sequelize from "sequelize"

const sequelize = new Sequelize("auth-db", "postgres", "daniel123", {
    host: "localhost",
    dialect: "postgres",
    quoteIdentifiers: false,
    define: {
        syncOnAssociation: true,
        timestamp: false,
        underscored: true,
        underscoredAll: true,
        freezeTableName: true
    }
});

sequelize.authentication().then(() => {
    console.info("Connection has been stablished!")
})
.catch((err) => {
    consople.error("Unable to connect to the database")
    console.error(err.message)
})

export default sequelize;