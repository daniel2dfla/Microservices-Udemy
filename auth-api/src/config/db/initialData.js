import bcrypt from "bcrypt";
import User from "../../modules/user/model/User.js";

export async function createInitialData() {
    try{
        await User.sync({force: true});

        let password = await bcrypt.hash('daniel123', 10);

        await User.create({
            name: 'admin 1',
            email: 'testeuser1@gmail.com',
            password: password
        });

        await User.create({
            name: 'admin2',
            email: 'testeuser2@gmail.com',
            password: password
        })

    } catch (err) {
        console.log(err)
    }
}