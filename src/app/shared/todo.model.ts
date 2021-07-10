//todo model, only hold variables for what makes the todo
export class Todo {
    constructor(
        public text: String,
        public completed: boolean = false
    ) {}
}