export class Manga {
    mangaId: string;
    title: string;
    tomes: any[];
    nbTomes: any;

    constructor(mangaId: string, title: string, tomes: any[], nbTomes: any) {
        this.mangaId = mangaId;
        this.title = title;
        this.tomes = tomes;
        this.nbTomes = nbTomes
    }
}
