export interface MatchResult {
    isWinner: boolean;
    matchCount: number;
    hasSpecialBall?: boolean;
}

export function matchBaloto(userNumbers: number[], userStar: number, resultNumbers: number[], resultStar: number): MatchResult {
    const matchingNumbers = userNumbers.filter(n => resultNumbers.includes(n));
    const hasSpecialBall = userStar === resultStar;

    // Baloto winning tiers (Colombia simplified)
    // 5 numbers + star, 5 numbers, 4 numbers + star, etc.
    const isWinner = matchingNumbers.length >= 3 || (matchingNumbers.length >= 0 && hasSpecialBall);

    return {
        isWinner,
        matchCount: matchingNumbers.length,
        hasSpecialBall
    };
}

export function matchChance(userNumbers: number[], resultNumbers: number[], mode: 'CUATRO' | 'TRES' | 'DOS' | 'UNO'): MatchResult {
    // Simple check for exact match depending on the mode
    // Convert arrays to strings for easy comparison
    const userStr = userNumbers.join('');
    const resultStr = resultNumbers.join('');

    let isWinner = false;
    if (mode === 'CUATRO') isWinner = userStr === resultStr;
    else if (mode === 'TRES') isWinner = userStr.slice(-3) === resultStr.slice(-3);
    else if (mode === 'DOS') isWinner = userStr.slice(-2) === resultStr.slice(-2);
    else if (mode === 'UNO') isWinner = userStr.slice(-1) === resultStr.slice(-1);

    return {
        isWinner,
        matchCount: isWinner ? userNumbers.length : 0
    };
}
