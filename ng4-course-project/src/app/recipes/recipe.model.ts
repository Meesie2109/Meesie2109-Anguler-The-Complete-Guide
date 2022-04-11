export class Recipe{
    public name: string;
    public description: string;
    public imagePath: string;

    constructor(name: string, discription: string, imagePath: string) {
        this.name = name;
        this.description = discription;
        this.imagePath = imagePath;
    }
}