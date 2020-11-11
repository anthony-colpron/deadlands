import { copyObject } from '../Tools/functions';
import { NPCStatuses, WoundLocationKeys } from './enums';
import { defaultTraits, Aptitudes } from './interfaces';

class NPC {
  name = 'No name';

  size = 6;

  pace = 6;

  wounds = {
    [WoundLocationKeys.Head]: 0,
    [WoundLocationKeys.LeftArm]: 0,
    [WoundLocationKeys.RightArm]: 0,
    [WoundLocationKeys.Guts]: 0,
    [WoundLocationKeys.LeftLeg]: 0,
    [WoundLocationKeys.RightLeg]: 0,
  };

  killLocations = [WoundLocationKeys.Head, WoundLocationKeys.Guts];

  otherModifiers = 0;

  stun = 0;

  note?: string;

  wind = 12;

  currentWind = 12;

  undead = false;

  cannotBeWinded = false;

  cannotBeStunned = false;

  thickSkinned = false;

  sand = 0;

  woundsToKill = 5;

  traits = { ...defaultTraits };

  aptitudes: Aptitudes = { corporeal: {}, mental: {} };

  attacks = ['No weapon'];

  constructor(data?: Partial<NPC>) {
    if (data) {
      if (data.name !== undefined) this.name = data.name;
      if (data.size !== undefined) this.size = data.size;
      if (data.pace !== undefined) this.pace = data.pace;
      if (data.note !== undefined) this.note = data.note;
      if (data.wind !== undefined) {
        this.wind = data.wind;
        this.currentWind = data.wind;
      }
      if (data.undead !== undefined) {
        this.undead = data.undead;
        this.killLocations = [WoundLocationKeys.Head];
      }
      if (data.killLocations !== undefined) this.killLocations = copyObject(data.killLocations);
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

  get highestWound(): number {
    return Object.values(this.wounds).reduce((accumulator, value) => (value > accumulator ? value : accumulator), 0);
  }

  get woundPenalties(): number {
    let woundPenaltiesReductions = 0;

    if (this.undead) woundPenaltiesReductions += 2;
    if (this.thickSkinned) woundPenaltiesReductions += 1;

    const woundPenalties = this.highestWound - woundPenaltiesReductions;

    if (woundPenalties < 0) return 0;

    if (woundPenalties > 5 - woundPenaltiesReductions) return 5 - woundPenaltiesReductions;

    return woundPenalties;
  }

  get status(): NPCStatuses {
    const isDead = this.killLocations.some((woundLocationKey) => this.wounds[woundLocationKey] >= 5);
    if (isDead) return NPCStatuses.Dead;

    if (this.currentWind <= 0) return NPCStatuses.Winded;

    if (this.stun > 0) return NPCStatuses.Stunned;

    return NPCStatuses.Ok;
  }
}

export default NPC;
