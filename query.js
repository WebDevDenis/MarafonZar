class  Query {
    getPockemons = async () => {
        const response = await fetch("https://reactmarathon-api.netlify.app/api/pokemons")
        return await response.json();
    }
    getDamage = async (attackerID, defenderID, attackID = 0) => {
        const response = await fetch(`https://reactmarathon-api.netlify.app/api/fight?player1id=${attackerID}&attackId=${attackID}&player2id=${defenderID}`);
        return await response.json();

    }
}

export default Query;