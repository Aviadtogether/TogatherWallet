export const transferRewards = (users, cardsId) => {
  // Find the source and target users
  const sourceUser = users[0];
  const targetUser = users[1];

  // Convert the card IDs to numbers
  let cardIdsAsNumbers;
  if (Array.isArray(cardsId)) {
    cardIdsAsNumbers = cardsId.map(Number);
  } else {
    cardIdsAsNumbers = [Number(cardsId)];
  }

  // Find the rewards to transfer from the source user
  const rewardsToTransfer = sourceUser.rewards.filter((reward) =>
    cardIdsAsNumbers.includes(reward.id)
  );

  // Set the status of transferred rewards to "pending"
  rewardsToTransfer.forEach((reward) => {
    reward.status = "pending";
  });

  // Remove the transferred rewards from the source user
  sourceUser.rewards = sourceUser.rewards.filter(
    (reward) => !cardIdsAsNumbers.includes(reward.id)
  );

  // Add the transferred rewards to the target user
  targetUser.rewards.push(...rewardsToTransfer);

  // Return the updated users array
  return users;
};
