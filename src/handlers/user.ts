import { hashPassword, createJWT, comparePassword } from './../modules/auth';
import prisma from '../db'


export const createNewUser = async (req: { body: { username: any; password: string; }; }, res: { json: (arg0: { token: string; }) => void; }) => {
    const user = await prisma.user.create({
        data: {
            username: req.body.username,
            password: await hashPassword(req.body.password)
        }
    })

    const token = createJWT(user)
    res.json({ token })

}


export const signin = async (req: { body: { username: any; password: string; }; }, res: any) => {
    /* A query to find a user by username. */
    const user: any = await prisma.user.findUnique({
        where: {
            username: req.body.username,
        }
    })

    const isValid = await comparePassword(req.body.password, user.password)

    if (!isValid) {
        return res.status(401).json({ message: "Not found" });
    }

    const token = createJWT(user)
    res.json({ token })

}







