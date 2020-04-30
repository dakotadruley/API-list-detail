export const fetchQueens = () => {
  return fetch('http://www.nokeynoshade.party/api/queens/all')
    .then(res => res.json())
    .then(json => json.map(queen => ({
      id: queen.id,
      name: queen.name,
      image: queen.image_url,
      winner: queen.winner,
      missCongeniality: queen.missCongeniality,
      quote: queen.quote
    })));
};
