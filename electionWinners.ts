// votes - this represents the votes casted so far per canditates
// k represents the number of votes hypthetically left

function electionWinners(votes: number[], k:number): number {
  let intheRunning = 0;
  const mostVotes = Math.max(...votes);
  const sortedVotes = votes.sort((a,b)=>b-a);

  if (sortedVotes[0] !== sortedVotes[1] && k === 0) {
    return 1;
  }
  votes.forEach((voteCount) => {
    if (mostVotes - voteCount < k) {
      intheRunning++;
    }
  })

  return intheRunning;
}
console.log(electionWinners([2, 3, 5, 2], 3));
console.log(electionWinners([], 3));