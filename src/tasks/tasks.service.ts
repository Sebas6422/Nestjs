import { Injectable } from "@nestjs/common";

@Injectable({})
export class TasksService {

    getTaks(){
        return ['Taks 1', 'Taks 2', 'Taks 3']
    }

}