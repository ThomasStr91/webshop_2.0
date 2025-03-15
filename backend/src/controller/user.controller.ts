import { userDatabase } from "../models/user";
import { Request,  Response } from "express"
import { UserDto } from "src/dtos/user/userDto";
import { UserLoginDto } from "src/dtos/user/userLoginDto"


export const loginUser = async (req: Request<{}, {}, UserLoginDto>, res: Response): Promise<void> => {
    try {
        const { username, password }: UserLoginDto = req.body;
        if (!username || !password) {
            res.status(400).json({
                message: "Es sind nicht alle Felder ausgefüllt"
            });
            return;
        }

        const existingUser = userDatabase.find((user) => {
            return user.username === username || undefined
        })

        if (!existingUser) {
            res.status(401).json({ message: "user existiert nicht" });
            return;
        }

        if (existingUser.password !== password) {
            res.status(401).json({ message: "Das Password ist falsch" });
            return;
        }

        const responseUserDto: UserDto = {
            id: existingUser.id,
            username: existingUser.username,
            userRoleId: existingUser.userRoleId
        }

        res.status(200).json(responseUserDto);
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}
