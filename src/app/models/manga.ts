export class Manga {
    mangaId: string;
    title: string;
    tomes: any[]

    constructor(mangaId: string, title: string, tomes: any[]) {
        this.mangaId = mangaId
        this.title = title;
        this.tomes = tomes
    }
}
