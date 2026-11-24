import { cookies } from "next/headers";
import * as jwt from "jsonwebtoken";

// Returns the username of the logged in user, or null when there is no valid token.
export const getCurrentUsername = async (): Promise<string | null> => {
    const cookieStore = await cookies();
    const token = cookieStore.get("jwt")?.value;

    if (!token) return null;

    try {
        const { username } = jwt.verify(token, process.env.JWT_SECRET!) as { username: string };
        return username;
    } catch {
        return null;
    }
}
