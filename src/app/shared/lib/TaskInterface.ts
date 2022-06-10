import { DtoTask } from "../dto/dtoTask";

export interface TaskInterface {
    create( task: DtoTask): void;
    update(id: number, status: boolean): void;
    load(): DtoTask[];
  }