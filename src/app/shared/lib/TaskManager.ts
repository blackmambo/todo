import { DtoTask } from "../dto/dtoTask";
import { TaskInterface } from "./TaskInterface";

export class TaskManagerLocalStorage implements TaskInterface {
    constructor() {}
    create( task: DtoTask): void {

        const data = localStorage.getItem("tasks");

        if (data != null) {
            let dataObject: DtoTask[]  = <DtoTask[]>JSON.parse(data);
            console.log(dataObject);
            dataObject.push(task);
            localStorage.setItem("tasks", JSON.stringify(dataObject));
        } else { 
            let tasks: DtoTask[] = [];
            tasks.push(task);
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }
    }
    delete(id: number): void {
        throw new Error("Method not implemented.");
    }
    load(): void {
        throw new Error("Method not implemented.");
    }
}