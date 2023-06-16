export interface Task{
    id?:number;
    title:string;
    responsible:string | null;
    description?:string;
    status?: string;
}
