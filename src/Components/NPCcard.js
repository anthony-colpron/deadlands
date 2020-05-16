import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { rollSkillCheck } from '../Tools/functions'
import { UPDATE_NPC_STATUS, REMOVE_NPC } from '../Redux/ACTIONS';

import aptitudesList from '../DATA/aptitudes'

class NPCcard extends PureComponent {

    constructor(props) {
        super(props)

        this.addWounds = this.addWounds.bind(this);
        this.rollTrait = this.rollTrait.bind(this);
        this.rollAptitude = this.rollAptitude.bind(this);
        this.updateStatus = this.updateStatus.bind(this);

        this.state = {
            display: 'stats',
            collapsed: false,
            magicAttack: false,
            wounds:
            {
                head: 0,
                leftArm: 0,
                rightArm: 0,
                guts: 0,
                leftLeg: 0,
                rightLeg: 0
            },
            singleRollModifiers: 0,
            woundsToAdd: 0,
            //PROPS: woundPenalties: 0,
            wind: this.props.stats.wind,
            attacks: this.props.stats.attacks[0],
            //PROPS: stun: 0,
            note: this.props.stats.note ? this.props.stats.note : ''
        }
    }

    handleMagicAttack = (event) => {
        this.setState(({ magicAttack }) => {
            return { magicAttack: !magicAttack };
        });
    }

    handleWoundsToAddChange = (event) => {

        this.setState({ woundsToAdd: parseInt(event.target.value, 10) });

    }

    handleWindChange = (event) => {
        this.updateStatus(undefined, undefined, parseInt(event.target.value, 10));

        this.setState({ wind: parseInt(event.target.value, 10) });
    }

    handleNoteChange = (event) => {

        this.setState({ note: event.target.value });

    }

    handleOtherModifiersChange = (event) => {
        this.updateStatus(undefined, parseInt(event.target.value, 10));
    }

    handleSingleRollModifiersChange = (event) => {
        this.setState({ singleRollModifiers: parseInt(event.target.value, 10) });
    }

    removeSelf = () => {
        if (window.confirm('Are you sure you want to remove this NPC?')) {
            this.props.removeSelf(this.props.index);
        }
    }

    removeStun = () => {
        this.updateStatus(undefined, undefined, undefined, this.props.stats.stun - 1)
    }

    toggleCollapsed = () => {
        if (this.state.collapsed === true) {
            this.setState({ collapsed: false })
        } else {
            this.setState({ collapsed: true })
        }
    }

    toggleView = () => {
        if (this.state.display === 'wounds') {
            this.setState({ display: 'stats' })
        } else {
            this.setState({ display: 'wounds' })
        }
    }


    addWounds(event, wind = true, stun = true) {

        if (this.props.stats.cannotBeWinded || (this.props.stats.undead && !this.state.magicAttack)) { wind = false }
        if (this.props.stats.cannotBeStunned || (this.props.stats.undead && !this.state.magicAttack)) { stun = false }

        let newWind = this.state.wind;
        let newStun = this.props.stats.stun;

        let newWounds = JSON.parse(JSON.stringify(this.state.wounds))

        newWounds[event.target.value] += this.state.woundsToAdd

        if (newWounds[event.target.value] < 0) {newWounds[event.target.value] = 0}

        if (wind && this.state.woundsToAdd > -1) {
            if (this.state.woundsToAdd === 0) {
                newWind -= Math.ceil(Math.random() * 3)
            } else {
                for (let i = 0; i < this.state.woundsToAdd; i++) {
                    newWind -= Math.ceil(Math.random() * 6)
                }
            }
            alert('Wind lost :' + (this.state.wind - newWind))
        }

        if (stun && this.state.woundsToAdd > -1) {
            let target;

            switch (this.state.woundsToAdd) {
                case 0: target = 3;
                    break;
                case 1: target = 5;
                    break;
                case 2: target = 7;
                    break;
                case 3: target = 9;
                    break;
                case 4: target = 11;
                    break;
                case 5: target = 13;
                    break;
                default: target = 5;
                    break;
            }

            let { level, diceType, dicePlus = 0 } = this.props.stats.traits.vigor;

            let sandTraitBonus = this.props.stats.sand ? this.props.stats.sand : 0;

            let modifiers = - this.props.stats.woundPenalties + this.props.stats.otherModifiers + sandTraitBonus;

            let vigorRoll = rollSkillCheck(level, diceType, target, dicePlus, modifiers)

            if (!vigorRoll.success && newStun < 2) { newStun += 1 };

            alert('Stun roll:\n' + vigorRoll.note + '! Target: ' + target + '\nResult: ' + vigorRoll.result + ' (Modifiers: ' + modifiers + ')\nDices: ' + vigorRoll.diceRolls)
        }

        this.updateStatus(newWounds, undefined, newWind, newStun);

        this.setState({ wounds: newWounds, woundsToAdd: 0, wind: newWind })
    }

    updateStatus(wounds, otherModifiers = this.props.stats.otherModifiers, wind = this.state.wind, stun = this.props.stats.stun) {

        let status = this.props.stats.status;
        let highestWound = 0;

        let woundsToKill = this.props.stats.woundsToKill || 5

        if (wounds) {
            let woundKeys = Object.keys(wounds);

            for (let i = 0; i < woundKeys.length; i++) {
                if (wounds[woundKeys[i]] > highestWound) { highestWound = wounds[woundKeys[i]] }
            }

            if (woundsToKill !== 'special') {
                if (wounds.head >= woundsToKill || (wounds.guts >= woundsToKill && !this.props.stats.undead)) {
                    status = 'Dead'
                }
            }

            // TODO: refaire les checks de undead et thick skinned mieux.
            if (this.props.stats.undead) {
                highestWound = highestWound - 2
                if (highestWound > 3) { highestWound = 3 }
            }
            if (this.props.stats.thickSkinned) {
                highestWound = highestWound - 1
                if (highestWound > 4) { highestWound = 4 }
            }

            if (highestWound < 0) { highestWound = 0 }

        } else {
            highestWound = this.props.stats.woundPenalties;
        }

        if (status !== 'Dead') {
            if (wind <= 0) {
                status = 'Winded'
            } else if (stun > 0) {
                status = 'Stunned'
            } else {
                status = 'Ok'
            }

        }




        this.props.updateNPCStatus(highestWound, otherModifiers, status, stun, this.props.index)
    }

    rollTrait(event) {
        let { level, diceType, dicePlus = 0 } = this.props.stats.traits[event.target.value];
        let target = 5;
        let modifiers = - this.props.stats.woundPenalties + this.props.stats.otherModifiers + this.state.singleRollModifiers;

        let roll = rollSkillCheck(level, diceType, target, dicePlus, modifiers);

        alert('Result: ' + roll.result + ' (Modifiers: ' + modifiers + ')\nDices: ' + roll.diceRolls + ' ' + (roll.botch ? roll.note : ''));

        this.setState({ singleRollModifiers: 0 });
    }

    rollAptitude(event) {
        //let {level, dicetype: diceType, diceplus: dicePlus = 0} = event.target.attributes

        let level = event.target.attributes.level.value;
        let diceType = event.target.attributes.dicetype.value;
        let dicePlus = event.target.attributes.diceplus.value;

        let target = 5;
        let modifiers = - this.props.stats.woundPenalties + this.props.stats.otherModifiers + this.state.singleRollModifiers;

        let roll = rollSkillCheck(parseInt(level, 10), parseInt(diceType, 10), target, parseInt(dicePlus, 10), modifiers);

        alert('Result: ' + roll.result + ' (Modifiers: ' + modifiers + ')\nDices: ' + roll.diceRolls + ' ' + (roll.botch ? roll.note : ''))

        this.setState({ singleRollModifiers: 0 });
    }




    render() {


        let display = '';




        let { deftness, nimbleness, strength, quickness, vigor, cognition, knowledge, smarts, mien, spirit } = this.props.stats.traits
        let { head, leftArm, rightArm, guts, leftLeg, rightLeg } = this.state.wounds



        if (this.state.display === 'wounds') {
            display = (<div>
                <strong>Wind:</strong> <input className='numeric-input-wind' type='number' onChange={this.handleWindChange} value={this.state.wind} /> <br />
                <strong>Wounds:</strong> <br />
                Add Wounds: <input className='numeric-input' type='number' onChange={this.handleWoundsToAddChange} value={this.state.woundsToAdd} />&nbsp;
                <input type='checkbox' value={this.state.magicAttack} onChange={this.handleMagicAttack} />Magic <br />

                <div className='wounds-location'>
                    Head: {head} <button onClick={this.addWounds} value='head'>Add</button><br />
                    Left Arm: {leftArm} <button onClick={this.addWounds} value='leftArm'>Add</button> Right Arm: {rightArm} <button onClick={this.addWounds} value='rightArm'>Add</button> <br />
                    Guts: {guts} <button onClick={this.addWounds} value='guts'>Add</button> <br />
                    Left Leg: {leftLeg} <button onClick={this.addWounds} value='leftLeg'>Add</button> Right Leg: {rightLeg} <button onClick={this.addWounds} value='rightLeg'>Add</button> <br />
                </div>
            </div>)
        } else {

            let { stats } = this.props

            let corpAptitudes = Object.keys(this.props.stats.aptitudes.corporeal)
            let mentAptitudes = Object.keys(this.props.stats.aptitudes.mental)


            let corporeal = corpAptitudes.map(item => {

                let trait = aptitudesList[item].associatedTrait
                let level = stats.aptitudes.corporeal[item].level
                let { diceType, dicePlus = 0 } = stats.traits[trait]


                return (<div className='aptitude'>{aptitudesList[item].name}:&nbsp;
                    <button onClick={this.rollAptitude} level={level} dicetype={diceType} diceplus={dicePlus}>
                        {level}d{diceType}{dicePlus > 0 ? '+' + dicePlus : ''}
                    </button>&nbsp;
                </div>)
            })

            let mental = mentAptitudes.map(item => {

                let trait = aptitudesList[item].associatedTrait
                let level = stats.aptitudes.mental[item].level
                let { diceType, dicePlus = 0 } = stats.traits[trait]

                return (<div className='aptitude'>{aptitudesList[item].name}:&nbsp;
                    <button onClick={this.rollAptitude} level={level} dicetype={diceType} diceplus={dicePlus}>
                        {level}d{diceType}{dicePlus > 0 ? '+' + dicePlus : ''}
                    </button>&nbsp;
                </div>)

            })




            display = (<div className='traits'>
                Corporeal: <br />
                D:<button onClick={this.rollTrait} value='deftness'>{deftness.level}d{deftness.diceType}{deftness.dicePlus ? '+' + deftness.dicePlus : ''}</button>&nbsp;
                N:<button onClick={this.rollTrait} value='nimbleness'>{nimbleness.level}d{nimbleness.diceType}{nimbleness.dicePlus ? '+' + nimbleness.dicePlus : ''}</button>&nbsp;
                S:<button onClick={this.rollTrait} value='strength'>{strength.level}d{strength.diceType}{strength.dicePlus ? '+' + strength.dicePlus : ''}</button>&nbsp;
                Q:<button onClick={this.rollTrait} value='quickness'>{quickness.level}d{quickness.diceType}{quickness.dicePlus ? '+' + quickness.dicePlus : ''}</button>&nbsp;
                V:<button onClick={this.rollTrait} value='vigor'>{vigor.level}d{vigor.diceType}{vigor.dicePlus ? '+' + vigor.dicePlus : ''}</button> <br />
                {corporeal}
                <br />

                Mental: <br />
                C:<button onClick={this.rollTrait} value='cognition'>{cognition.level}d{cognition.diceType}{cognition.dicePlus ? '+' + cognition.dicePlus : ''}</button>&nbsp;
                K:<button onClick={this.rollTrait} value='knowledge'>{knowledge.level}d{knowledge.diceType}{knowledge.dicePlus ? '+' + knowledge.dicePlus : ''}</button>&nbsp;
                Sm:<button onClick={this.rollTrait} value='smarts'>{smarts.level}d{smarts.diceType}{smarts.dicePlus ? '+' + smarts.dicePlus : ''}</button>&nbsp;
                M:<button onClick={this.rollTrait} value='mien'>{mien.level}d{mien.diceType}{mien.dicePlus ? '+' + mien.dicePlus : ''}</button>&nbsp;
                Sp:<button onClick={this.rollTrait} value='spirit'>{spirit.level}d{spirit.diceType}{spirit.dicePlus ? '+' + spirit.dicePlus : ''}</button> <br />
                {mental}
                <br />
                Size: {this.props.stats.size} Pace: {this.props.stats.pace}  <br />
                Single roll modifiers: {this.state.singleRollModifiers > -1 ? '+' : ''}
                <input className='numeric-input' type='number' value={this.state.singleRollModifiers} onChange={this.handleSingleRollModifiersChange} /> Bullets: <input type="number" className='numeric-input-wind' /><br />
                Damage: <select>{this.props.stats.attacks.map(item => <option value={item}>{item}</option>)}</select> Curr: <input type="number" className='numeric-input-wind' />
            </div>)
        }




        return (<div className='npc-card'>
            {!this.state.collapsed ? <strong>
                {this.props.stats.name + ' ( ' + (parseInt(this.props.index, 10) + 1) + ' )'}
                <button onClick={this.removeSelf} className='remove-npc-button'>X</button></strong>
                :
                <strong>{' ( ' + (parseInt(this.props.index, 10) + 1) + ' )'}</strong>}

            &nbsp;<button onClick={this.toggleCollapsed}>{this.state.collapsed ? '□' : '_'}</button> <br />

            {!this.state.collapsed ? (<div>
                <button onClick={this.toggleView}>{this.state.display === 'wounds' ? 'Display Stats' : 'Display Wounds'}</button>&nbsp;&nbsp;
                <span style={{ fontWeight: 'bold' }}>Sleeve</span> <input type="checkbox" />
                <br />
                {display}

                Wound penalties: {this.props.stats.woundPenalties}&nbsp;
                Other modifiers: {this.props.stats.otherModifiers > -1 ? '+' : ''}
                <input className='numeric-input' type='number' value={this.props.stats.otherModifiers} onChange={this.handleOtherModifiersChange} /><br />
                Status: <strong>{this.props.stats.status} {this.props.stats.status === 'Stunned' ?
                    <div onClick={this.removeStun} className='stun-button'>{'x' + this.props.stats.stun}</div> : null}</strong> <br />
                Note: <input type='text' onChange={this.handleNoteChange} value={this.state.note} /></div>)
                :
                <strong>{this.props.stats.status} {this.props.stats.status === 'Stunned' ? 'x' + this.props.stats.stun : null}</strong>}
        </div>)

    }

}



let mapStateToProps = (state) => {
    return {}
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNPCStatus: (woundPenalties, otherModifiers, status, stun, index) => dispatch({ type: UPDATE_NPC_STATUS, woundPenalties: woundPenalties, otherModifiers: otherModifiers, status: status, stun: stun, index: index }),
        removeSelf: (index) => dispatch({ type: REMOVE_NPC, index: index })
    }
}

let ConnectedNPCcard = connect(mapStateToProps, mapDispatchToProps)(NPCcard)

export default ConnectedNPCcard;