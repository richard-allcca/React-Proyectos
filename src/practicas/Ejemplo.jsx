
// 1° endpoint for tournament list (competencia)
export const touranmentList = "https://a9zy1qtl8g.execute-api.us-east-1.amazonaws.com/prod/soccer";
const tournamentId = "59tpnfrwnvhnhzmnvfyug68hj";

// 2° endpoint for season id (temporada)
// https://a9zy1qtl8g.execute-api.us-east-1.amazonaws.com/prod/soccer/59tpnfrwnvhnhzmnvfyug68hj
export const seasonUrl = `https://a9zy1qtl8g.execute-api.us-east-1.amazonaws.com/prod/soccer/${tournamentId}`;
const seasonId = "5o7xsd3r0dummvoddy4r35e6s";

// 3° endpoint for round list, matchId and team ids (lista de rondas e id de equipos)
// https://a9zy1qtl8g.execute-api.us-east-1.amazonaws.com/prod/soccer/59tpnfrwnvhnhzmnvfyug68hj/5o7xsd3r0dummvoddy4r35e6s
export const roundList = `https://a9zy1qtl8g.execute-api.us-east-1.amazonaws.com/prod/soccer/${tournamentId}/${seasonId}`;
const matchId = "46mkghhikqc4wbcmpewpo8npw";
const teamId1 = "3d9c158350xh1oq4mhpdrkz3x";
const teamId2 = "50127xit7gxvh20pvvv2lyh0r";

// 4° endpoint for data team1 vs team2 (home away and logoUrl)
// https://a9zy1qtl8g.execute-api.us-east-1.amazonaws.com/prod/soccer/teams?teamsIds=3d9c158350xh1oq4mhpdrkz3x,50127xit7gxvh20pvvv2lyh0r
export const matchList = `https://a9zy1qtl8g.execute-api.us-east-1.amazonaws.com/prod/soccer/teams?teamsIds=${teamId1},${teamId2}`;

// 5° endpoint for team1 vd team2 banner
// https://static.scores.infobae.com/soccer/index.html#5o7xsd3r0dummvoddy4r35e6s/46mkghhikqc4wbcmpewpo8npw
export const bannerMatch = `https://static.scores.infobae.com/soccer/index.html#${seasonId}/${matchId}`;

// endpoint for result match
// https://data.scores.infobae.com/5o7xsd3r0dummvoddy4r35e6s/46mkghhikqc4wbcmpewpo8npw.json
export const matchResult = `https://data.scores.infobae.com/${seasonId}/${matchId}.json`;


// https://data.scores.infobae.com/2a8elwzsufmguwymxbshcx756/3f0123w3yjdwtargl0woxj5zo.json