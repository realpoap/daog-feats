import bowman from '../assets/svg/bowman.svg'
import bowstring from '../assets/svg/bow-string.svg'
import target from '../assets/svg/bullseye.svg'
import killershot from '../assets/svg/pierced-heart.svg'
import arrowflight from '../assets/svg/arrow-flights.svg'
import penalty from '../assets/svg/achilles-heel.svg'
import quiver from '../assets/svg/quiver.svg'
import doubleshot from '../assets/svg/double-shot.svg'
import concealing from '../assets/svg/leaf-swirl.svg'
import hunt from '../assets/svg/spearfishing.svg'
import supressing from '../assets/svg/arrowed.svg'
import ambush from '../assets/svg/hood.svg'
import giantkiller from '../assets/svg/charged-arrow.svg'
import friendly from '../assets/svg/branch-arrow.svg'
import bleed from '../assets/svg/drop.svg'

import wind from '../assets/svg/backup.svg'
import balance from '../assets/svg/boot-stomp.svg'
import neck from '../assets/svg/distraction.svg'
import thrown from '../assets/svg/falling.svg'
import grab from '../assets/svg/grab.svg'
import kick from '../assets/svg/high-kick.svg'
import insens from '../assets/svg/muscular-torso.svg'
import punchblast from '../assets/svg/punch-blast.svg'
import strangle from '../assets/svg/totem-head.svg'
import boxing from '../assets/svg/boxing-glove.svg'
import dump from '../assets/svg/acrobatic.svg'
import downpour from '../assets/svg/icicles-aura.svg'
import bootkick from '../assets/svg/boot-kick.svg'
import backpain from '../assets/svg/back-pain.svg'
import highpunch from '../assets/svg/high-punch.svg'



const featsFR = {
  "tir": [
    {
      "name": "minutie",
      "content": [
        {
          "id": "reaction",
          "type": "minutie",
          "rank": 1,
          "title": "Réaction",
          "action": "gratuite",
          "icon": bowman,
          "color": "green",
          "tooltip": "You prepare your shot for the enemy to appear. You can make one shot at the target during its turn, with no penalty during your turn. Use your INS score instead of your DEX in this situation. Weapons that need to be reloaded still suffer this penalty."
        },
        {
          "id": "rechange",
          "type": "minutie",
          "rank": 2,
          "title": "Rechange",
          "action": "limitée",
          "icon": bowstring,
          "color": "green",
          "tooltip": "You handle your broken weapon and quickly find a way to repair it using a rope or a dedicated tool. Roll a DEX save with disadvantage: if successful your weapon is functional again and you can fire within the turn if it is loaded and you have enough actions."
        },
        {
          "id": "bleed",
          "type": "minutie",
          "rank": 3,
          "title": "Saignée",
          "action": "principale",
          "icon": bleed,
          "color": "green",
          "tooltip": "You choose an exposed part of your target to inflict a deep wound. Make a shot with disadvantage that causes 1d3 additional bleeds. The target suffers a penalty to its bleed resistance rolls equal to your thoroughness score."
        },
        {
          "id": "aim",
          "type": "minutie",
          "rank": 4,
          "title": "Visée Juste",
          "action": "principale",
          "icon": target,
          "color": "green",
          "tooltip": "You relax your body and steady your breathing as you wait for the best moment to fire. Your shot is made with advantage, ignoring adverse conditions if you use 2 primary actions, and deals weapon damage + DEX bonus + your thoroughness score. The target hit must either succeed at a COU save or move away from you to take cover or flee."
        },
        {
          "id": "friendly",
          "type": "minutie",
          "rank": 5,
          "title": "Tir allié",
          "action": "gratuite",
          "icon": friendly,
          "color": "green",
          "tooltip": "You can shoot without disadvantage to and from melee range, even if your allies are in contact with the enemy. Immediately after shooting, you can take a free leap action, making an AGI check."
        }
      ],
    },
    {
      "name": "tir",
      "content": [
        {
          "id": "barrage",
          "type": "tir",
          "rank": 1,
          "title": "Barrage",
          "action": "principale",
          "icon": arrowflight,
          "color": "green",
          "tooltip": "You can move during your turns as long as you maintain a barrage of fire. Enemy creatures that attempt to approach within range must succeed at an AGI save against your shooting score or suffer 1 + your DEX bonus."
        },
        {
          "id": "penalty",
          "type": "tir",
          "rank": 2,
          "title": "Tir pénalisant",
          "action": "principale",
          "icon": penalty,
          "color": "green",
          "tooltip": "You target a limb on your target to hinder its progress. You make your shot with disadvantage by aiming at the legs to give -5 MOV and disadvantage on combat and AGI rolls if successful..."
        },
        {
          "id": "reload",
          "type": "tir",
          "rank": 3,
          "title": "Recharge rapide",
          "action": "gratuite",
          "icon": quiver,
          "color": "green",
          "tooltip": "You know your weapon and are able to reload with your eyes closed. You reduce the number of reload turns required by 1 for every ten DEX. If the reload time is then 0, you can fire in the same turn as you would with a bow."
        },
        {
          "id": "giant",
          "type": "tir",
          "rank": 4,
          "title": "Chasse-Géant",
          "action": "principale",
          "icon": giantkiller,
          "color": "green",
          "tooltip": "When facing a large or larger creature, you muster up your courage to deal heavy damage while waiting to get close enough to your enemy. Roll a normal shooting roll with advantage depending on the size of the enemy. You deal your damage + shooting score (+ STR bonus if you are wielding a bow or throwing weapon), and reroll the damage die if you roll a 1. (Follow the rules for huge creatures if they apply: if you are at close range, roll a fear roll instead of your to hit roll.)"
        },
        {
          "id": "double",
          "type": "tir",
          "rank": 5,
          "title": "Double tir",
          "action": "principale",
          "icon": doubleshot,
          "color": "green",
          "tooltip": "You place two bolts in your weapon and fire both at once, adjusting your movement. Your shot suffers disadvantage to hit, but you roll twice your damage if successful. OR You use your other hand to wield a second weapon. You roll two rolls to hit (one for each weapon). You can choose different targets for your 2 shots, but you then fire with disadvantage on each roll."
        }
      ],
    },
    {
      "name": "discrétion",
      "content": [
        {
          "id": "hunt",
          "type": "discrétion",
          "rank": 1,
          "title": "Chasse",
          "action": "gratuite",
          "icon": hunt,
          "color": "green",
          "tooltip": "You target a target you can see. As long as you maintain sight of it, you gain advantage on your shots against that target. Only one creature can be the target of Hunt at a time, and you can’t change the target of this action until the first creature is prone or out of combat. During exploration phases, you can use Hunt to gain food with advantage on the Survival check and an extra unit of weight."
        },
        {
          "id": "conceal",
          "type": "discrétion",
          "rank": 2,
          "title": "Dissimulation",
          "action": "principale",
          "icon": concealing,
          "color": "green",
          "tooltip": "You choose an opportune moment to shoot and take advantage of your surroundings to go unnoticed. Your shooting roll gains a bonus equal to your stealth. If your roll is successful you are considered stealthy with your raw score."
        },
        {
          "id": "suppressing",
          "type": "discrétion",
          "rank": 3,
          "title": "Supression",
          "action": "principale",
          "icon": supressing,
          "color": "green",
          "tooltip": "If you shoot at the same target as the previous turn, you can make a suppressive shot with advantage, and if it has not moved,. If successful, your damage inflicts 2x your Dexterity bonuses. The opponent suffers disadvantage on his COU rolls until his next turn."
        },
        {
          "id": "ambush",
          "type": "discrétion",
          "rank": 4,
          "title": "Embuscade",
          "action": "principale",
          "icon": ambush,
          "color": "green",
          "tooltip": "While stealthy, you take a free shot at a target during Initiative. If your shot was the trigger for Initiative, then you can take a second shot. This action does not break your stealth."
        },
        {
          "id": "killer",
          "type": "discrétion",
          "rank": 5,
          "title": "Tir mortel",
          "action": "principale",
          "icon": killershot,
          "color": "green",
          "tooltip": "You make a precise shot with disadvantage, aiming at your opponent’s vital point with your attention to detail. If your target is hit, you deal critical damage with your weapon and your opponent is knocked prone. This action does not break your stealth."
        },
      ],
    },
  ],
  "lutte": [
    {
      "name": "physique",
      "content": [
        {
          "id": "jostling",
          "type": "physique",
          "rank": 1,
          "title": "Bousculade",
          "action": "principale",
          "icon": boxing,
          "color": "orange",
          "tooltip": "You give your opponent a well-placed shoulder blow to push them. Roll an attack against the opponent's DEF with 1d4 advantage for each ten STR above your opponent's. If successful, your target is pushed back a few meters and is no longer engaged in melee with you. It will suffer a DEF disadvantage until the start of its next turn."
        },
        {
          "id": "throw",
          "type": "physique",
          "rank": 2,
          "title": "Jeté",
          "action": "principale",
          "icon": thrown,
          "color": "orange",
          "tooltip": "You must immobilize your opponent to perform this technique or make an AGI attack roll. You grab your opponent and push up on your thighs to throw him away. You can throw your opponent at other targets. The opponent is sent a distance equal to your STR bonus and takes 1d3 damage + STR bonus (those hit by the target of the throw take 1d3 damage)."
        },
        {
          "id": "balance",
          "type": "physique",
          "rank": 3,
          "title": "Appuis",
          "action": "gratuite",
          "icon": balance,
          "color": "orange",
          "tooltip": "Your balance is perfected to its paroxysm and your footing is solid: you have no disadvantage on STR rolls against a target larger than you. You can use this action to resist a knockdown effect and reroll your die roll."
        },
        {
          "id": "insensitivity",
          "type": "physique",
          "rank": 4,
          "title": "Insensibilité",
          "action": "limitée",
          "icon": insens,
          "color": "orange",
          "tooltip": "Your body is hardened by blows and training: you are resistant to blunt blows and reduce all other physical damage by 1. You can use this action to automatically recover from being stunned once per combat."
        },
        {
          "id": "suplex",
          "type": "physique",
          "rank": 5,
          "title": "Souplesse",
          "action": "principale",
          "icon": backpain,
          "color": "orange",
          "tooltip": "You get behind your opponent or grab him from the ground to lift him up and turn him behind you. Roll a STR check with disadvantage against your target’s defense. As his body crashes to the ground, he takes 3d4 damage + his armor + your STR bonus. The opponent is stunned at the start of his next turn and must succeed at an END check to regain his senses the following turn. You have no disadvantage on the STR check if you immobilize the target."
        },
      ],
    },
    {
      "name": "lutte",
      "content": [
        {
          "id": "hold",
          "type": "lutte",
          "rank": 1,
          "title": "Immobilisation",
          "action": "limitée",
          "icon": grab,
          "color": "orange",
          "tooltip": "You grab your opponent's body with your limbs, preventing them from moving. For the duration of the immobilization, you suffer automatic hits from other opponents in melee with you. At the start of its turn, the immobilized target must succeed at a STR roll against you with disadvantage or remain immobilized and suffer 1d3 damage. You can use grappling techniques against your immobilized target."
        },
        {
          "id": "pinch",
          "type": "lutte",
          "rank": 2,
          "title": "Jambette",
          "action": "principale",
          "icon": bootkick,
          "color": "orange",
          "tooltip": "You grab your opponent by the collar and wrap your hip around them to make them lose their balance. Roll AGI + 1d12 against your opponent’s attack. If successful, your target is prone and has disadvantage on all rolls until the end of his next turn. You have advantage in this action if you already have your opponent pinned."
        },
        {
          "id": "blow",
          "type": "lutte",
          "rank": 3,
          "title": "Coup appuyé",
          "action": "principale",
          "icon": punchblast,
          "color": "orange",
          "tooltip": "You elbow or knee your nearby opponent in the ribs to gain a major advantage in the fight. Make your attack: if successful, the opponent takes an additional 2d4 damage, and must succeed at an END roll or lose 1 main action for their next turn and cancel their concentration and reactions. If critically failed, the target is stunned."
        },
        {
          "id": "strangulation",
          "type": "lutte",
          "rank": 4,
          "title": "Étranglement",
          "action": "principale",
          "icon": strangle,
          "color": "orange",
          "tooltip": "You must immobilize the opponent to perform this technique or succeed at an AGI attack roll. You place your hands around your opponent's neck in a swift and relentless gesture. He loses 1d4 LIFE + STR bonus for each turn spent strangled. At the start of his turn, the target must make an END test of increasing difficulty each turn or be unconscious. Roll a STR roll against the target's STR each new turn of strangulation to maintain your hold and inflict damage."
        },
        {
          "id": "neck",
          "type": "lutte",
          "rank": 5,
          "title": "Brise-nuque",
          "action": "principale",
          "icon": neck,
          "color": "orange",
          "tooltip": "You must immobilize the opponent to perform this technique or succeed at an AGI attack roll. You stand behind the enemy and slide your hands around his head to snap his neck with a sharp blow. The player takes 4d4 damage + STR bonus. He is stunned and prone unless he succeeds at his END roll against your STR."
        },
      ],
    },
    {
      "name": "mouvement",
      "content": [
        {
          "id": "backhand",
          "type": "mouvement",
          "rank": 1,
          "title": "Revers",
          "action": "gratuite",
          "icon": highpunch,
          "color": "orange",
          "tooltip": "You can take this action after a creature attacks you. Add your INS bonus to your defense. If the attack misses, you deliver a lightning strike, avoiding your opponent's blow, and deal your damage with an additional 1d4 bonus."
        },
        {
          "id": "kick",
          "type": "mouvement",
          "rank": 2,
          "title": "Chassé",
          "action": "principale",
          "icon": kick,
          "color": "orange",
          "tooltip": "You stop an attacker’s advance with a well-placed kick to the supports or head. Launch an AGI attack. If successful, you disorient your opponent who is stunned until the end of the turn in the event of a failed END roll, and who suffers 1d6 additional damage. You can play this action as a reaction with disadvantage if the target charges you."
        },
        {
          "id": "fling",
          "type": "mouvement",
          "rank": 3,
          "title": "Projection",
          "action": "principale",
          "icon": dump,
          "color": "orange",
          "tooltip": "You must immobilize the opponent to perform this technique or succeed at an AGI attack roll. You place your hip against your opponent, gripping him firmly, and throw him over you in a dynamic movement. The target Lfaka is sent flying and must succeed at an INS check or be disarmed. She takes 2d3 damage from your STR bonus and must succeed at a COU check at the start of her turn before she can take an action or react."
        },
        {
          "id": "wind",
          "type": "mouvement",
          "rank": 4,
          "title": "Passe-vent",
          "action": "gratuite",
          "icon": wind,
          "color": "orange",
          "tooltip": "You have advantage against ranged attacks and on dodges. You can use this action to make a free jump without rolling a die once per turn."
        },
        {
          "id": "downpour",
          "type": "mouvement",
          "rank": 5,
          "title": "Déluge",
          "action": "principale",
          "icon": downpour,
          "color": "orange",
          "tooltip": "You unleash a barrage of blows against a single target in melee combat. Make an attack that deals 1d6 times your +1 MOV bonus, taking any bonuses you have. You can perform this action more than once per turn."
        },
      ],
    }
  ],
  "fight": [
    {
      "name": "dodge",
      "content": [

      ],
    },
    {
      "name": "weapon",
      "content": [

      ],
    },
    {
      "name": "brawl",
      "content": [

      ],
    }
  ],
  "wizardry": [
    {
      "name": "pantomime",
      "content": [

      ],
    },
    {
      "name": "incantation",
      "content": [

      ],
    },
    {
      "name": "enchantment",
      "content": [

      ],
    }
  ]
}

export default featsFR