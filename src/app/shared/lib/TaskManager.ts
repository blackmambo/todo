import { DtoTask } from "../dto/dtoTask";
import { TaskInterface } from "./TaskInterface";

export class TaskManagerLocalStorage implements TaskInterface {
    constructor() {}
    create( task: DtoTask): void {

        const data = localStorage.getItem("tasks");

        if (data != null) {
            let dataObject: DtoTask[]  = <DtoTask[]>JSON.parse(data);
            console.log(dataObject);
            dataObject.unshift(task);
            localStorage.setItem("tasks", JSON.stringify(dataObject));
        } else { 
            let tasks: DtoTask[] = [];
            tasks.push(task);
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }
    }
    update(id: number, status: boolean): void {
        const data = localStorage.getItem("tasks");

        if (data != null) {
            let dataObject: DtoTask[]  = <DtoTask[]>JSON.parse(data);

            const newDataObject = dataObject.map(obj => {
                if (obj.id === id) {
                  return {...obj, status: status};
                }
              
                return obj;
              });

            localStorage.setItem("tasks", JSON.stringify(newDataObject));
        }
    }
    load(): DtoTask[] {
        const data = localStorage.getItem("tasks");
        let dataObject: DtoTask[] = [];

        if (data != null) {
            dataObject  = <DtoTask[]>JSON.parse(data);
        }

        return dataObject;
    }
}