export const fetchQueenById = (id) => {
  return fetch(`http://www.nokeynoshade.party/api/queens/${id}`)
    .then(res => res.json())
    .then(queen => ({
      name: queen.name,
      image: queen.image_url,
      winner: queen.winner,
      missCongeniality: queen.missCongeniality,
      quote: queen.quote
    }));
};
  
