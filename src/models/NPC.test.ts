import { NPCStatuses, WoundLocationKeys } from './enums';
import NPC from './NPC';

describe('highest wound', () => {
  it('returns highest wound', () => {
    const npc = new NPC();

    expect(npc.highestWound).toBe(0);

    npc.wounds.leftArm = 3;
    npc.wounds.head = 4;
    expect(npc.highestWound).toBe(4);
  });
});

describe('wound penalties', () => {
  it('returns wound penalties equals to highest wound', () => {
    const npc = new NPC();

    expect(npc.woundPenalties).toBe(0);
    expect(npc.woundPenalties).toBe(npc.highestWound);

    npc.wounds.leftArm = 5;
    npc.wounds.head = 3;
    expect(npc.woundPenalties).toBe(5);
    expect(npc.woundPenalties).toBe(npc.highestWound);
  });

  it('returns wound penalties for thick skinned', () => {
    const npc = new NPC({ thickSkinned: true });

    expect(npc.woundPenalties).toBe(0);

    npc.wounds.leftArm = 3;
    npc.wounds.head = 4;
    expect(npc.woundPenalties).toBe(3);
    expect(npc.woundPenalties).toBe(npc.highestWound - 1);
  });

  it('returns wound penalties for undead', () => {
    const npc = new NPC({ undead: true });

    expect(npc.woundPenalties).toBe(0);

    npc.wounds.leftArm = 3;
    npc.wounds.head = 4;
    expect(npc.woundPenalties).toBe(2);
    expect(npc.woundPenalties).toBe(npc.highestWound - 2);
  });

  it('cannot be higher than 5 minus reductions', () => {
    const npc = new NPC();

    npc.wounds.leftArm = 12;
    expect(npc.woundPenalties).toBe(5);

    npc.thickSkinned = true;
    expect(npc.woundPenalties).toBe(4);

    npc.thickSkinned = false;
    npc.undead = true;
    expect(npc.woundPenalties).toBe(3);

    npc.thickSkinned = true;
    expect(npc.woundPenalties).toBe(2);
  });
});

describe('status', () => {
  it('checks if dead', () => {
    // normal NPC
    const npc = new NPC();
    npc.wounds.head = npc.woundsToKill;
    expect(npc.status).toBe(NPCStatuses.Dead);

    npc.wounds.head = 0;
    npc.wounds.guts = npc.woundsToKill;
    expect(npc.status).toBe(NPCStatuses.Dead);

    npc.wounds.guts = npc.woundsToKill - 1;
    expect(npc.status).toBe(NPCStatuses.Ok);

    // undead
    const undeadNpc = new NPC({ undead: true });

    undeadNpc.wounds.guts = undeadNpc.woundsToKill;
    expect(undeadNpc.status).toBe(NPCStatuses.Ok);

    undeadNpc.wounds.head = undeadNpc.woundsToKill;
    expect(undeadNpc.status).toBe(NPCStatuses.Dead);

    undeadNpc.wounds.head = undeadNpc.woundsToKill - 1;
    expect(undeadNpc.status).toBe(NPCStatuses.Ok);

    // left leg focus
    const npcWithLegFocus = new NPC({ killLocations: [WoundLocationKeys.LeftLeg] });

    npcWithLegFocus.wounds.guts = npcWithLegFocus.woundsToKill;
    expect(npcWithLegFocus.status).toBe(NPCStatuses.Ok);

    npcWithLegFocus.wounds.head = npcWithLegFocus.woundsToKill;
    expect(npcWithLegFocus.status).toBe(NPCStatuses.Ok);

    npcWithLegFocus.wounds.leftLeg = npcWithLegFocus.woundsToKill;
    expect(npcWithLegFocus.status).toBe(NPCStatuses.Dead);

    npcWithLegFocus.wounds.leftLeg = npcWithLegFocus.woundsToKill - 1;
    expect(npcWithLegFocus.status).toBe(NPCStatuses.Ok);
  });

  it('checks if winded', () => {
    const npc = new NPC();
    npc.currentWind = 0;
    expect(npc.status).toBe(NPCStatuses.Winded);

    npc.currentWind = -1000;
    expect(npc.status).toBe(NPCStatuses.Winded);

    npc.currentWind = 1;
    expect(npc.status).toBe(NPCStatuses.Ok);
  });

  it('checks if stunned', () => {
    const npc = new NPC();
    npc.stun = 1;
    expect(npc.status).toBe(NPCStatuses.Stunned);

    npc.stun = 2;
    expect(npc.status).toBe(NPCStatuses.Stunned);

    npc.stun = 0;
    expect(npc.status).toBe(NPCStatuses.Ok);
  });

  it('checks status priority', () => {
    const npc = new NPC();
    npc.wounds.head = npc.woundsToKill;
    npc.currentWind = 0;
    npc.stun = 1;
    expect(npc.status).toBe(NPCStatuses.Dead);

    npc.wounds.head = 0;
    expect(npc.status).toBe(NPCStatuses.Winded);

    npc.currentWind = 12;
    expect(npc.status).toBe(NPCStatuses.Stunned);

    npc.stun = 0;
    expect(npc.status).toBe(NPCStatuses.Ok);
  });

  it('takes wounds', () => {
    const npc = new NPC();

    npc.addWounds(WoundLocationKeys.LeftLeg, 3);
    expect(npc.wounds.leftLeg).toBe(3);

    npc.addWounds(WoundLocationKeys.Head, 5);
    expect(npc.wounds.head).toBe(5);
    expect(npc.status).toBe(NPCStatuses.Dead);
  });

  it('takes wind from wounds', () => {
    const npc = new NPC();

    npc.addWounds(WoundLocationKeys.LeftLeg, 2);
    expect(npc.currentWind <= npc.wind - 2 && npc.currentWind >= npc.wind - 12).toBe(true);
  });

  it('takes stun from wounds', () => {
    const npc = new NPC();

    npc.otherModifiers = Infinity;
    npc.addWounds(WoundLocationKeys.LeftLeg, 5);
    expect(npc.stun).toBe(0);

    npc.otherModifiers = -Infinity;
    npc.addWounds(WoundLocationKeys.RightLeg, 5);
    expect(npc.stun).toBe(1);

    npc.otherModifiers = -Infinity;
    npc.addWounds(WoundLocationKeys.RightArm, 5);
    expect(npc.stun).toBe(2);

    // max stun is 2
    npc.otherModifiers = -Infinity;
    npc.addWounds(WoundLocationKeys.LeftArm, 5);
    expect(npc.stun).toBe(2);
  });
});
