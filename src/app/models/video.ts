import { Category } from "./category";
import { User } from "./user";

export interface Video {
    id: string;
    type: string;
    director: string;
    title: string;
    date: string;
    status: string;
    renter: User;
    categories: Category[];
}
