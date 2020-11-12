export interface IBook {
        id?: number;
        title: string;
        author: string;
        genre: string;
        series: string;
        type: string;
        notes: string;
        status: string;
        cover: string;
        loaned: boolean;
        userId?: string;
}
