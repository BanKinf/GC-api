const getUser = async (req, res) => {
  const idReq = req.params.id;
  async function getDataPlayerById(id) {
    try {
      const response = await fetch(
        `https://gamersclub.com.br/api/box/init/${id}`
      );
      if (!response.ok) {
        throw new Error("No se pudo obtener los datos del jugador");
      }

      const data = await response.json();
      const playerData = {
        nick: data.playerInfo.nick,
        level: data.playerInfo.level,
        rating: data.playerInfo.rating,
        calibrationMatches: data.playerInfo.calibrationMatches
      };

      return playerData;
    } catch (e) {
      return null;
    }
  }

  try {
    const playerData = await getDataPlayerById(idReq);
    if (playerData.nick === "") {
        res.status(404).json({message: "Player not found"}) 
    } else  {
        res.status(200).json(playerData)
    }
  } catch (e) {
    res.status(404).json({message: "Input is not id"})
  }
};

module.exports = {
  getUser,
};