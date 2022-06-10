import { DtoTask } from "../dto/dtoTask";

export interface TaskInterface {
    create( task: DtoTask): void;
    delete(id: number): void;
    load(): DtoTask[];
  }