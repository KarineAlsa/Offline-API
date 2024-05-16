export class Note {

    public name:string;
    public content:string;
    public date:string;

    constructor(
        name:string,
        content:string,
        date:string,
        id?:number
    ) {
        this.name = name;
        this.content = content;
        this.date = date;
    }

    

}