import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { rollSkillCheck } from '../Tools/functions'
import { UPDATE_NPC_STATUS } from '../Redux/ACTIONS';

class NPCcard extends PureComponent {

    constructor(props) {
        super(props)

        this.addWounds = this.addWounds.bind(this);
        this.rollTrait = this.rollTrait.bind(this);
        this.updateStatus = this.updateStatus.bind(this);

        this.state = {
            wounds:
            {
                head: 0,
                leftArm: 0,
                rightArm: 0,
                guts: 0,
                leftLeg: 0,
                rightLeg: 0
            },
            woundsToAdd: 0,
            //PROPS: woundPenalties: 0,
            wind: this.props.stats.wind,
            weaponInHand: 'None',
            //PROPS: stun: 0,
            notes: ''
        }
    }

    handleWoundsToAddChange = (event) => {

        this.setState({ woundsToAdd: parseInt(event.target.value, 10) })

    }


    addWounds(event, wind = true, stun = true) {

        let newWind = this.state.wind;
        let newStun = this.props.stats.stun;

        let newWounds = JSON.parse(JSON.stringify(this.state.wounds))

        newWounds[event.target.value] += this.state.woundsToAdd


        if (wind) {
            if (this.state.woundsToAdd === 0) {
                newWind -= Math.ceil(Math.random() * 3)
            } else {
                for (let i = 0; i < this.state.woundsToAdd; i++) {
                    newWind -= Math.ceil(Math.random() * 6)
                }
            }
            alert('Wind lost :' + (this.state.wind - newWind))
        }

        if (stun) {
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

            let modifiers = - this.props.stats.woundPenalties;

            let vigorRoll = rollSkillCheck(level, diceType, target, dicePlus, modifiers)

            if (!vigorRoll.success && newStun < 2) {newStun += 1};

            alert('Stun roll:\n' + vigorRoll.note + '! Target: ' + target + '\nResult: ' + vigorRoll.result + ' (Modifiers: ' + modifiers + ')\nDices: ' + vigorRoll.diceRolls)
        }

        this.updateStatus(newWounds, newWind, newStun);

        this.setState({ wounds: newWounds, woundsToAdd: 0, wind: newWind })
    }

    updateStatus(wounds, wind, stun) {

        let status = this.props.stats.status;

        let woundKeys = Object.keys(wounds);
        let highestWound = 0;

        for (let i = 0; i < woundKeys.length; i++) {
            if (wounds[woundKeys[i]] > highestWound) { highestWound = wounds[woundKeys[i]] }
        }

        if (wounds.head >= 5 || wounds.guts >= 5) {
            status = 'Dead'
        } else if (wind <= 0) {
            status = 'Winded'
        } else if (stun > 0) {
            status = 'Stunned'
        }

        

        this.props.updateNPCStatus(highestWound, status, stun, this.props.stats.index)
    }

    rollTrait(event) {
        let { level, diceType, dicePlus = 0 } = this.props.stats.traits[event.target.value];
        let target = 5;
        let modifiers = - this.props.stats.woundPenalties;

        let roll = rollSkillCheck(level, diceType, target, dicePlus, modifiers)

        alert('Result: ' + roll.result + ' (Modifiers: ' + modifiers + ')\nDices: ' + roll.diceRolls + ' ' + (roll.botch ? roll.note : ''))
    }


    render() {

        let { deftness, nimbleness, strength, quickness, vigor, cognition, knowledge, smarts, mien, spirit } = this.props.stats.traits
        let { head, leftArm, rightArm, guts, leftLeg, rightLeg } = this.state.wounds

        return (<div className='npc-card'>
            <strong>{this.props.stats.name + ' ( ' + (parseInt(this.props.stats.index, 10) + 1) + ' )'}</strong> <br />
            Corporeal: <br />
            D:<button onClick={this.rollTrait} value='deftness'>{deftness.level}d{deftness.diceType}</button>&nbsp;
            N:<button onClick={this.rollTrait} value='nimbleness'>{nimbleness.level}d{nimbleness.diceType}</button>&nbsp;
            S:<button onClick={this.rollTrait} value='strength'>{strength.level}d{strength.diceType}</button>&nbsp;
            Q:<button onClick={this.rollTrait} value='quickness'>{quickness.level}d{quickness.diceType}</button>&nbsp;
            V:<button onClick={this.rollTrait} value='vigor'>{vigor.level}d{vigor.diceType}</button> <br />
            Mental: <br />
            C:<button onClick={this.rollTrait} value='cognition'>{cognition.level}d{cognition.diceType}</button>&nbsp;
            K:<button onClick={this.rollTrait} value='knowledge'>{knowledge.level}d{knowledge.diceType}</button>&nbsp;
            Sm:<button onClick={this.rollTrait} value='smarts'>{smarts.level}d{smarts.diceType}</button>&nbsp;
            M:<button onClick={this.rollTrait} value='mien'>{mien.level}d{mien.diceType}</button>&nbsp;
            Sp:<button onClick={this.rollTrait} value='spirit'>{spirit.level}d{spirit.diceType}</button> <br />

            Size: {this.props.stats.size} Pace: {this.props.stats.pace} Wind: {this.state.wind} <br />

            Wounds: To Add: <input type='number' cols='1' onChange={this.handleWoundsToAddChange} value={this.state.woundsToAdd} /><br />

            Head: {head} <button onClick={this.addWounds} value='head'>Add</button><br />
            Left Arm: {leftArm} <button onClick={this.addWounds} value='leftArm'>Add</button> Right Arm: {rightArm} <button onClick={this.addWounds} value='rightArm'>Add</button> <br />
            Guts: {guts} <button onClick={this.addWounds} value='guts'>Add</button> <br />
            Left Leg: {leftLeg} <button onClick={this.addWounds} value='leftLeg'>Add</button> Right Leg: {rightLeg} <button onClick={this.addWounds} value='rightLeg'>Add</button> <br />
            Wound penalties: {this.props.stats.woundPenalties} <br />
            Status: <strong>{this.props.stats.status} {this.props.stats.status === 'Stunned' ? 'x' + this.props.stats.stun : null }</strong>
        </div>)
    }

}

let mapStateToProps = (state) => {
    return {}
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNPCStatus: (woundPenalties, status, stun, index) => dispatch({ type: UPDATE_NPC_STATUS, woundPenalties: woundPenalties, status: status, stun: stun, index: index })
    }
}

let ConnectedNPCcard = connect(mapStateToProps, mapDispatchToProps)(NPCcard)

export default ConnectedNPCcard;