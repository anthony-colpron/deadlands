import { copyObject } from '../Tools/functions';
import { NPCStatuses } from './enums';
import { defaultTraits, Aptitudes } from './interfaces';

class NPC {
  name = 'No name';

  size = 6;

  pace = 6;

  woundPenalties = 0;

  otherModifiers = 0;

  status = NPCStatuses.Ok;

  stun = 0;

  note?: string;

  wind = 12;

  undead = false;

  cannotBeWinded = false;

  cannotBeStunned = false;

  thickSkinned = false;

  sand = 0;

  woundsToKill = 5;

  traits = { ...defaultTraits };

  aptitudes: Aptitudes = { corporeal: {}, mental: {} };

  attacks = ['No weapon'];

  constructor(data: Partial<NPC>) {
    if (data) {
      if (data.name !== undefined) this.name = data.name;
      if (data.size !== undefined) this.size = data.size;
      if (data.pace !== undefined) this.pace = data.pace;
      if (data.note !== undefined) this.note = data.note;
      if (data.wind !== undefined) this.wind = data.wind;
      if (data.undead !== undefined) this.undead = data.undead;
      if (data.cannotBeWinded !== undefined) this.cannotBeWinded = data.cannotBeWinded;
      if (data.cannotBeStunned !== undefined) this.cannotBeStunned = data.cannotBeStunned;
      if (data.thickSkinned !== undefined) this.thickSkinned = data.thickSkinned;
      if (data.sand !== undefined) this.sand = data.sand;
      if (data.woundsToKill !== undefined) this.woundsToKill = data.woundsToKill;
      if (data.traits !== undefined) this.traits = copyObject(data.traits);
      if (data.aptitudes !== undefined) this.aptitudes = copyObject(data.aptitudes);
      if (data.attacks !== undefined) this.attacks = copyObject(data.attacks);
    }
  }
}

export default NPC;
