import Like from '../models/like.js';

export const getLike = async (req, res) => {
  const like = await Like.findOne();
  res.json({ count: like ? like.count : 0 });
};

export const incrementLike = async (req, res) => {
  let like = await Like.findOne();
  if (!like) {
    like = new Like({ count: 1 });
  } else {
    like.count += 1;
  }
  await like.save();
  res.json({ count: like.count });
};

export const initLike = async () => {
  const exists = await Like.findOne();
  if (!exists) {
    await new Like({ count: 0 }).save();
  }
};