import NPC from '../models/NPC';

export const getNPCIndex = (NPCsList: NPC[], updatedNPC: NPC): number => {
  return NPCsList.findIndex((npc) => npc.id === updatedNPC.id);
};
