export interface ScrapeResult {
    game: 'BALOTO' | 'CHANCE';
    varianteChance?: string;
    sorteoFechaHora: Date;
    numerosGanadores: number[];
    sourceName: string;
    sourceUrl: string;
    hashIntegridad: string;
}

export abstract class BaseScraper {
    abstract name: string;
    abstract url: string;
    abstract scrape(): Promise<ScrapeResult[]>;

    generateHash(data: Record<string, unknown>): string {
        return Buffer.from(JSON.stringify(data)).toString('base64').slice(0, 32);
    }
}
