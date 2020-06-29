export interface ShortLinkServiceInterface {
    CheckShortLink(message: string): string;
    DetailShortLink(message: string): string;
}

export class ShortLinkService implements ShortLinkServiceInterface{
    
    CheckShortLink(message: string): string {
        throw new Error("Method not implemented.");
    }
    DetailShortLink(message: string): string {
        throw new Error("Method not implemented.");
    }
}
