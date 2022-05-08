class Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    image: string;
    created: string;

    constructor(
        id: number,
        name: string,
        status: string,
        species: string,
        type: string,
        gender: string,
        image: string,
        created: string,
    ) {
        this.id = id;
        this.name = name;
        this.status = status;
        this.species = species;
        this.type = type;
        this.gender = gender;
        this.image = image;
        this.created = created;
    }

    static fromJSON(json: any): Character {
        return new Character(
            json.id,
            json.name,
            json.status,
            json.species,
            json.type,
            json.gender,
            json.image,
            json.created,
        )
    }
}

export {Character}