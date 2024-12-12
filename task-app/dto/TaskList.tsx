import Task from "@/repository/Task";

class TaskList {
    id: number;
    title: string;
    tasks: Task[];
    updatedAt: Date;
    deleted: boolean;


    constructor(id: number, title: string, tasks: Task[], updatedAt: Date, deleted: boolean) {
        this.id = id;
        this.title = title;
        this.tasks = tasks;
        this.updatedAt = updatedAt;
        this.deleted = deleted;
    }
}

export default TaskList