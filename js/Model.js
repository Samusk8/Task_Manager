

// constructor categoria
export class Category {
    name;
    color;
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }


}

// constructor actividad
export class Activity {
    title;
    description;
    date;
    category;
    priority;
    constructor(title, description, date, category, priority) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.category = category;
        this.priority = priority
    }
}
