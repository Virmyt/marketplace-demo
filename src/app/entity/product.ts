export class Product {
    constructor(name?, type?, price?, image?, petCategories?) {
        this.name = name;
        this.type = type;
        this.price = price;
        this.image = image;
        this.petCategories = petCategories || [];
    }
    name: string;
    type: string;
    petCategories: string[];
    price: number;
    image: string;
}
