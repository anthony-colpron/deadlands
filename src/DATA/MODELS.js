const defaultTrait = {
	level: 2,
	diceType: 6,
	dicePlus: 0,
};

const defaultProps = {
	name: 'default NPC',
	pace: 6,
	size: 6,
	wind: 12,
	cannotBeWinded: false,
	cannotBeStunned: false,
	thickSkinned: false,
	undead: false,
	woundsToKill: null,
	traits: {
		deftness: defaultTrait,
		nimbleness: defaultTrait,
		strength: defaultTrait,
		quickness: defaultTrait,
		vigor: defaultTrait,
		cognition: defaultTrait,
		knowledge: defaultTrait,
		mien: defaultTrait,
		smarts: defaultTrait,
		spirit: defaultTrait,
	},
	aptitudes: {
		corporeal: {},
		mental: {},
	},
	attacks: [
		'No weapon',
	],
	note: '',
}

export class NPC {
	constructor(props) {
		this.name = props.name || defaultProps.name;
		this.pace = props.pace || defaultProps.pace;
		this.size = props.size || defaultProps.size;
		this.wind = props.wind || defaultProps.wind;
		this.cannotBeWinded = props.cannotBeWinded || defaultProps.cannotBeWinded;
		this.cannotBeStunned = props.cannotBeStunned || defaultProps.cannotBeStunned;
		this.thickSkinned = props.thickSkinned || defaultProps.thickSkinned;
		this.undead = props.undead || defaultProps.undead;
		this.woundsToKill = props.woundsToKill || defaultProps.woundsToKill;
		this.traits = props.traits || defaultProps.traits;
		this.aptitudes = props.aptitudes || defaultProps.aptitudes;
		this.attacks = props.attacks || defaultProps.attacks;
		this.note = props.note || defaultProps.note;
	}

	addCorporealAptitude(aptitude) {
		this.aptitude.corporeal.push(aptitude);
	}

	addMentalAptitude(aptitude) {
		this.aptitude.mental.push(aptitude);
	}

	addAttack(attack) {
		this.attacks.push(attack);
	}

	setTrait(trait, level, diceType, dicePlus) {
		this.traits[trait] = { level, diceType, dicePlus };
	}
}