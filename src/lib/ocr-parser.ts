export interface ParsedTicket {
    game: 'BALOTO' | 'CHANCE';
    varianteChance?: string;
    numbers: number[];
    stars?: number[];
    serial?: string;
    date?: string;
    confidence: {
        game: number;
        numbers: number;
        date: number;
    };
}

export function parseOCRText(text: string): Partial<ParsedTicket> {
    const result: Partial<ParsedTicket> = {
        numbers: [],
        stars: [],
        confidence: { game: 0, numbers: 0, date: 0 }
    };

    const cleanText = text.toUpperCase();

    // Detect Game
    if (cleanText.includes('BALOTO')) {
        result.game = 'BALOTO';
        result.confidence!.game = 1;
    } else if (cleanText.includes('CHANCE') || cleanText.includes('LOTERIA')) {
        result.game = 'CHANCE';
        result.confidence!.game = 0.8;
    }

    // Basic Number Extraction (Regex for 4-6 digits or arrays of numbers)
    // This is a placeholder for more sophisticated parsing
    const numberMatches = cleanText.match(/\b\d{1,2}\b/g);
    if (numberMatches) {
        result.numbers = numberMatches.slice(0, 6).map(n => parseInt(n));
        result.confidence!.numbers = 0.7;
    }

    // Basic Date Extraction (DD/MM/YYYY or similar)
    const dateMatch = cleanText.match(/\d{2}[\/\-\.]\d{2}[\/\-\.]\d{4}/);
    if (dateMatch) {
        result.date = dateMatch[0];
        result.confidence!.date = 0.9;
    }

    return result;
}
