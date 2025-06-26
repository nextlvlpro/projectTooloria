function normalizePlayerData(data) {
    if (!data) return null;
    return {
      basicInfo: {
        tag: data.tag,
        name: data.name,
        expLevel: data.expLevel,
        townHallLevel: data.townHallLevel,
        townHallWeaponLevel: data.townHallWeaponLevel,
        trophies: data.trophies,
        bestTrophies: data.bestTrophies,
        league: {
          id: data.league?.id || null,
          name: data.league?.name || "Unranked",
          iconUrls: data.league?.iconUrls || null,
        },
        defenseWins: data.defenseWins,
        attackWins: data.attackWins,
      },
  
      clanInfo: data.clan
        ? {
            name: data.clan.name,
            tag: data.clan.tag,
            level: data.clan.clanLevel,
            badgeUrls: data.clan.badgeUrls,
            role: data.role,
            warPreference: data.warPreference,
            donations: data.donations,
            donationsReceived: data.donationsReceived,
            clanCapitalContributions: data.clanCapitalContributions,
          }
        : null,
  
      builderBase: {
        builderHallLevel: data.builderHallLevel,
        builderBaseTrophies: data.builderBaseTrophies,
        bestBuilderBaseTrophies: data.bestBuilderBaseTrophies,
        builderBaseLeague: {
          id: data.builderBaseLeague?.id || null,
          name: data.builderBaseLeague?.name || "None",
          iconUrls: data.builderBaseLeague?.iconUrls || null,
        },
      },
  
      armies: {
        troops: data.troops || [],
        heroes: data.heroes || [],
        spells: data.spells || [],
        heroEquipment: data.heroEquipment || [],
      },
  
      achievements: data.achievements || [],
      playerHouse: data.playerHouse || null,
      labels: data.labels?.map((label) => ({
        id: label.id,
        name: label.name,
        iconUrls: label.iconUrls,
      })) || [],
    };
}

module.exports = normalizePlayerData;
