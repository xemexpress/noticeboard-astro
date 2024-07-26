// src/middleware/authMiddleware.ts
import { defineMiddleware } from "astro/middleware";
import {
    projectAuth,
    signInAnonymously,
    onAuthStateChanged,
} from "./firebase/client";

export const onRequest = defineMiddleware(async (context, next) => {
    // Check if user is logged in
    const checkUser = (): Promise<string | null> => {
        return new Promise((resolve) => {
            onAuthStateChanged(projectAuth, (user) => {
                if (user) {
                    // User is logged in
                    resolve(user.uid);
                } else {
                    // User is not logged in, perform anonymous login
                    signInAnonymously(projectAuth)
                        .then((result) => {
                            resolve(result.user.uid);
                        })
                        .catch((error) => {
                            console.error("Anonymous login failed", error);
                            resolve(null);
                        });
                }
            });
        });
    };

    try {
        const uid = await checkUser();
        if (uid) {
            console.log("User logged in with UID:", uid);
            context.locals.user = { uid };
        } else {
            console.log("Failed to log in user");
        }
    } catch (error) {
        console.error("Failed to check user", error);
    }

    return next();
});
