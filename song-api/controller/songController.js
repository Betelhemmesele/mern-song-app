const Song = require('../model/song');

exports.createSong = async (req, res) => {
  try {
    const song = new Song(req.body);
    await song.save();
    res.status(201).json(song);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.listSongs = async (req, res) => {
  try {
    const songs = await Song.find();
    res.status(200).json(songs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateSong = async (req, res) => {
  try {
    const song = await Song.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!song) return res.status(404).json({ message: 'Song not found' });
    res.status(200).json(song);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.removeSong = async (req, res) => {
  try {
    const song = await Song.findByIdAndDelete(req.params.id);
    if (!song) return res.status(404).json({ message: 'Song not found' });
    res.status(200).json({ message: 'Song deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getStatistics = async (req, res) => {
  try {
    const totalSongs = await Song.countDocuments();
    const totalArtists = await Song.distinct('artist').length;
    const totalAlbums = await Song.distinct('album').length;
    const totalGenres = await Song.distinct('genre').length;

    const songsByGenre = await Song.aggregate([
      { $group: { _id: '$genre', count: { $sum: 1 } } }
    ]);

    const songsByArtist = await Song.aggregate([
      { $group: { _id: '$artist', count: { $sum: 1 }, albums: { $addToSet: '$album' } } }
    ]);

    const songsByAlbum = await Song.aggregate([
      { $group: { _id: '$album', count: { $sum: 1 } } }
    ]);

    res.status(200).json({
      totalSongs,
      totalArtists,
      totalAlbums,
      totalGenres,
      songsByGenre,
      songsByArtist,
      songsByAlbum,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
