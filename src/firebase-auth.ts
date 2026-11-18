import { getAuth } from "firebase/auth";
import { app } from "./firebase";

/**
 * Firebase Auth শুধু অ্যাডমিন প্যানেলে ব্যবহৃত হয়।
 * আলাদা ফাইলে রাখায় পাবলিক পোর্টফোলিও সাইটের বান্ডলে Auth-এর কোড ঢোকে না।
 */
export const auth = getAuth(app);
