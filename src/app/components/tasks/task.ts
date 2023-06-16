export interface Task{
    id?:number | undefined;
    title:string;
    responsible:string | null;
    description:string;
    status?: string;
}
