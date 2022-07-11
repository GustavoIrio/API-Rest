import { Sequelize } from "sequelize";

const dbConfig = process.env.DATABASE_URL || ''

export const sequelize = new Sequelize(dbConfig, {
    define: {
        underscored: true //snake_case
    }
})