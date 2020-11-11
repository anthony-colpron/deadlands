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
    npc.wounds.head = 5;
    expect(npc.status).toBe(NPCStatuses.Dead);

    npc.wounds.head = 0;
    npc.wounds.guts = 5;
    expect(npc.status).toBe(NPCStatuses.Dead);

    npc.wounds.guts = 4;
    expect(npc.status).toBe(NPCStatuses.Ok);

    // undead
    const undeadNpc = new NPC({ undead: true });

    undeadNpc.wounds.guts = 5;
    expect(undeadNpc.status).toBe(NPCStatuses.Ok);

    undeadNpc.wounds.head = 5;
    expect(undeadNpc.status).toBe(NPCStatuses.Dead);

    undeadNpc.wounds.head = 4;
    expect(undeadNpc.status).toBe(NPCStatuses.Ok);

    // left leg focus
    const npcWithLegFocus = new NPC({ killLocations: [WoundLocationKeys.LeftLeg] });

    npcWithLegFocus.wounds.guts = 5;
    expect(npcWithLegFocus.status).toBe(NPCStatuses.Ok);

    npcWithLegFocus.wounds.head = 5;
    expect(npcWithLegFocus.status).toBe(NPCStatuses.Ok);

    npcWithLegFocus.wounds.leftLeg = 5;
    expect(npcWithLegFocus.status).toBe(NPCStatuses.Dead);

    npcWithLegFocus.wounds.leftLeg = 4;
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
    npc.wounds.head = 5;
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
});
