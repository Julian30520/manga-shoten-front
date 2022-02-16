export class Params {
    limit: number;
    offset: number;
    title: string;
    includedTags: string[];
    contentRating: string[];
    publicationDemographic: string[];
    status: string[];

    constructor(limit: number, offset: number,title:string, includedTags: string[], contentRating: string[], publicationDemographic: string[], status: string[] ) {
        this.limit = limit;
        this.offset = offset;
        this.title = title;
        this.includedTags = includedTags;
        this.contentRating = contentRating;
        this.publicationDemographic = publicationDemographic;
        this.status = status;
    }
}
