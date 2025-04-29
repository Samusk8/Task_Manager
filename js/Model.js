

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
    name;
    description;
    date;
    category;
    constructor(name, description, date, category) {
        this.name = name;
        this.description = description;
        this.date = date;
        this.category = category;
    }
}
