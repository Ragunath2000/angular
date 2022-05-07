
import { Course } from "./Course";
import { User } from "./user";

export interface CourseFeedback {
    id: number;
    courseId: number;
    ownerId: number;
    feddback: string;
    rating: number;
    course: Course | null;
    owner: User | null;
}