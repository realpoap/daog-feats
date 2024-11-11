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



const featsEN = {
  "ranged": [
    {
      "name": "preciseness",
      "content": [
        {
          "id": "reaction",
          "type": "preciseness",
          "rank": 1,
          "title": "Reaction shot",
          "action": "free",
          "icon": bowman,
          "color": "green",
          "tooltip": "You prepare your shot for the enemy to appear. You can make one shot at the target during its turn, with no penalty during your turn. Use your INS score instead of your DEX in this situation. Weapons that need to be reloaded still suffer this penalty."
        },
        {
          "id": "rechange",
          "type": "preciseness",
          "rank": 2,
          "title": "Quick Repair",
          "action": "limited",
          "icon": bowstring,
          "color": "green",
          "tooltip": "You handle your broken weapon and quickly find a way to repair it using a rope or a dedicated tool. Roll a DEX save with disadvantage: if successful your weapon is functional again and you can fire within the turn if it is loaded and you have enough actions."
        },
        {
          "id": "bleed",
          "type": "preciseness",
          "rank": 3,
          "title": "Bleeding shot",
          "action": "main",
          "icon": bleed,
          "color": "green",
          "tooltip": "You choose an exposed part of your target to inflict a deep wound. Make a shot with disadvantage that causes 1d3 additional bleeds. The target suffers a penalty to its bleed resistance rolls equal to your thoroughness score."
        },
        {
          "id": "aim",
          "type": "preciseness",
          "rank": 4,
          "title": "True Aim",
          "action": "main",
          "icon": target,
          "color": "green",
          "tooltip": "You relax your body and steady your breathing as you wait for the best moment to fire. Your shot is made with advantage, ignoring adverse conditions if you use 2 primary actions, and deals weapon damage + DEX bonus + your thoroughness score. The target hit must either succeed at a COU save or move away from you to take cover or flee."
        },
        {
          "id": "friendly",
          "type": "preciseness",
          "rank": 5,
          "title": "Friendly fire",
          "action": "free",
          "icon": friendly,
          "color": "green",
          "tooltip": "You can shoot without disadvantage to and from melee range, even if your allies are in contact with the enemy. Immediately after shooting, you can take a free leap action, making an AGI check."
        }
      ],
    },
    {
      "name": "ranged",
      "content": [
        {
          "id": "barrage",
          "type": "ranged",
          "rank": 1,
          "title": "Barrage shot",
          "action": "main",
          "icon": arrowflight,
          "color": "green",
          "tooltip": "You can move during your turns as long as you maintain a barrage of fire. Enemy creatures that attempt to approach within range must succeed at an AGI save against your shooting score or suffer 1 + your DEX bonus."
        },
        {
          "id": "penalty",
          "type": "ranged",
          "rank": 2,
          "title": "Penalty shot",
          "action": "main",
          "icon": penalty,
          "color": "green",
          "tooltip": "You target a limb on your target to hinder its progress. You make your shot with disadvantage by aiming at the legs to give -5 MOV and disadvantage on combat and AGI rolls if successful..."
        },
        {
          "id": "reload",
          "type": "ranged",
          "rank": 3,
          "title": "Quick reload",
          "action": "free",
          "icon": quiver,
          "color": "green",
          "tooltip": "You know your weapon and are able to reload with your eyes closed. You reduce the number of reload turns required by 1 for every ten DEX. If the reload time is then 0, you can fire in the same turn as you would with a bow."
        },
        {
          "id": "giant",
          "type": "ranged",
          "rank": 4,
          "title": "Giant killer",
          "action": "main",
          "icon": giantkiller,
          "color": "green",
          "tooltip": "When facing a large or larger creature, you muster up your courage to deal heavy damage while waiting to get close enough to your enemy. Roll a normal shooting roll with advantage depending on the size of the enemy. You deal your damage + shooting score (+ STR bonus if you are wielding a bow or throwing weapon), and reroll the damage die if you roll a 1. (Follow the rules for huge creatures if they apply: if you are at close range, roll a fear roll instead of your to hit roll.)"
        },
        {
          "id": "double",
          "type": "ranged",
          "rank": 5,
          "title": "Double shot",
          "action": "main",
          "icon": doubleshot,
          "color": "green",
          "tooltip": "You place two bolts in your weapon and fire both at once, adjusting your movement. Your shot suffers disadvantage to hit, but you roll twice your damage if successful. OR You use your other hand to wield a second weapon. You roll two rolls to hit (one for each weapon). You can choose different targets for your 2 shots, but you then fire with disadvantage on each roll."
        }
      ],
    },
    {
      "name": "discretion",
      "content": [
        {
          "id": "hunt",
          "type": "discretion",
          "rank": 1,
          "title": "Hunt",
          "action": "free",
          "icon": hunt,
          "color": "green",
          "tooltip": "You target a target you can see. As long as you maintain sight of it, you gain advantage on your shots against that target. Only one creature can be the target of Hunt at a time, and you can’t change the target of this action until the first creature is prone or out of combat. During exploration phases, you can use Hunt to gain food with advantage on the Survival check and an extra unit of weight."
        },
        {
          "id": "conceal",
          "type": "discretion",
          "rank": 2,
          "title": "Concealing shot",
          "action": "main",
          "icon": concealing,
          "color": "green",
          "tooltip": "You choose an opportune moment to shoot and take advantage of your surroundings to go unnoticed. Your shooting roll gains a bonus equal to your stealth. If your roll is successful you are considered stealthy with your raw score."
        },
        {
          "id": "suppressing",
          "type": "discretion",
          "rank": 3,
          "title": "Supressing fire",
          "action": "main",
          "icon": supressing,
          "color": "green",
          "tooltip": "If you shoot at the same target as the previous turn, you can make a suppressive shot with advantage, and if it has not moved,. If successful, your damage inflicts 2x your Dexterity bonuses. The opponent suffers disadvantage on his COU rolls until his next turn."
        },
        {
          "id": "ambush",
          "type": "discretion",
          "rank": 4,
          "title": "Ambush",
          "action": "main",
          "icon": ambush,
          "color": "green",
          "tooltip": "While stealthy, you take a free shot at a target during Initiative. If your shot was the trigger for Initiative, then you can take a second shot. This action does not break your stealth."
        },
        {
          "id": "killer",
          "type": "discretion",
          "rank": 5,
          "title": "Killer Shot",
          "action": "main",
          "icon": killershot,
          "color": "green",
          "tooltip": "You make a precise shot with disadvantage, aiming at your opponent’s vital point with your attention to detail. If your target is hit, you deal critical damage with your weapon and your opponent is knocked prone. This action does not break your stealth."
        },
      ],
    },
  ],
  "brawl": [
    {
      "name": "physique",
      "content": [
        {
          "id": "jostling",
          "type": "physique",
          "rank": 1,
          "title": "Jostling",
          "action": "main",
          "icon": boxing,
          "color": "orange",
          "tooltip": "You give your opponent a well-placed shoulder blow to push them. Roll an attack against the opponent's DEF with 1d4 advantage for each ten STR above your opponent's. If successful, your target is pushed back a few meters and is no longer engaged in melee with you. It will suffer a DEF disadvantage until the start of its next turn."
        },
        {
          "id": "throw",
          "type": "physique",
          "rank": 2,
          "title": "Throw",
          "action": "main",
          "icon": thrown,
          "color": "orange",
          "tooltip": "You must immobilize your opponent to perform this technique or make an AGI attack roll. You grab your opponent and push up on your thighs to throw him away. You can throw your opponent at other targets. The opponent is sent a distance equal to your STR bonus and takes 1d3 damage + STR bonus (those hit by the target of the throw take 1d3 damage)."
        },
        {
          "id": "balance",
          "type": "physique",
          "rank": 3,
          "title": "Balance",
          "action": "free",
          "icon": balance,
          "color": "orange",
          "tooltip": "Your balance is perfected to its paroxysm and your footing is solid: you have no disadvantage on STR rolls against a target larger than you. You can use this action to resist a knockdown effect and reroll your die roll."
        },
        {
          "id": "insensitivity",
          "type": "physique",
          "rank": 4,
          "title": "Insensitivity",
          "action": "limited",
          "icon": insens,
          "color": "orange",
          "tooltip": "Your body is hardened by blows and training: you are resistant to blunt blows and reduce all other physical damage by 1. You can use this action to automatically recover from being stunned once per combat."
        },
        {
          "id": "suplex",
          "type": "physique",
          "rank": 5,
          "title": "Suplex",
          "action": "main",
          "icon": backpain,
          "color": "orange",
          "tooltip": "You get behind your opponent or grab him from the ground to lift him up and turn him behind you. Roll a STR check with disadvantage against your target’s defense. As his body crashes to the ground, he takes 3d4 damage + his armor + your STR bonus. The opponent is stunned at the start of his next turn and must succeed at an END check to regain his senses the following turn. You have no disadvantage on the STR check if you immobilize the target."
        },
      ],
    },
    {
      "name": "brawl",
      "content": [
        {
          "id": "hold",
          "type": "brawl",
          "rank": 1,
          "title": "Hold",
          "action": "limited",
          "icon": grab,
          "color": "orange",
          "tooltip": "You grab your opponent's body with your limbs, preventing them from moving. For the duration of the immobilization, you suffer automatic hits from other opponents in melee with you. At the start of its turn, the immobilized target must succeed at a STR roll against you with disadvantage or remain immobilized and suffer 1d3 damage. You can use grappling techniques against your immobilized target."
        },
        {
          "id": "pinch",
          "type": "brawl",
          "rank": 2,
          "title": "Pinch",
          "action": "main",
          "icon": bootkick,
          "color": "orange",
          "tooltip": "You grab your opponent by the collar and wrap your hip around them to make them lose their balance. Roll AGI + 1d12 against your opponent’s attack. If successful, your target is prone and has disadvantage on all rolls until the end of his next turn. You have advantage in this action if you already have your opponent pinned."
        },
        {
          "id": "blow",
          "type": "brawl",
          "rank": 3,
          "title": "Strong blow",
          "action": "main",
          "icon": punchblast,
          "color": "orange",
          "tooltip": "You elbow or knee your nearby opponent in the ribs to gain a major advantage in the fight. Make your attack: if successful, the opponent takes an additional 2d4 damage, and must succeed at an END roll or lose 1 main action for their next turn and cancel their concentration and reactions. If critically failed, the target is stunned."
        },
        {
          "id": "strangulation",
          "type": "brawl",
          "rank": 4,
          "title": "Strangulation",
          "action": "main",
          "icon": strangle,
          "color": "orange",
          "tooltip": "You must immobilize the opponent to perform this technique or succeed at an AGI attack roll. You place your hands around your opponent's neck in a swift and relentless gesture. He loses 1d4 LIFE + STR bonus for each turn spent strangled. At the start of his turn, the target must make an END test of increasing difficulty each turn or be unconscious. Roll a STR roll against the target's STR each new turn of strangulation to maintain your hold and inflict damage."
        },
        {
          "id": "neck",
          "type": "brawl",
          "rank": 5,
          "title": "Neck breaker",
          "action": "main",
          "icon": neck,
          "color": "orange",
          "tooltip": "You must immobilize the opponent to perform this technique or succeed at an AGI attack roll. You stand behind the enemy and slide your hands around his head to snap his neck with a sharp blow. The player takes 4d4 damage + STR bonus. He is stunned and prone unless he succeeds at his END roll against your STR."
        },
      ],
    },
    {
      "name": "movement",
      "content": [
        {
          "id": "backhand",
          "type": "movement",
          "rank": 1,
          "title": "Backhand",
          "action": "free",
          "icon": highpunch,
          "color": "orange",
          "tooltip": "You can take this action after a creature attacks you. Add your INS bonus to your defense. If the attack misses, you deliver a lightning strike, avoiding your opponent's blow, and deal your damage with an additional 1d4 bonus."
        },
        {
          "id": "kick",
          "type": "movement",
          "rank": 2,
          "title": "Kick",
          "action": "main",
          "icon": kick,
          "color": "orange",
          "tooltip": "You stop an attacker’s advance with a well-placed kick to the supports or head. Launch an AGI attack. If successful, you disorient your opponent who is stunned until the end of the turn in the event of a failed END roll, and who suffers 1d6 additional damage. You can play this action as a reaction with disadvantage if the target charges you."
        },
        {
          "id": "fling",
          "type": "movement",
          "rank": 3,
          "title": "Fling",
          "action": "main",
          "icon": dump,
          "color": "orange",
          "tooltip": "You must immobilize the opponent to perform this technique or succeed at an AGI attack roll. You place your hip against your opponent, gripping him firmly, and throw him over you in a dynamic movement. The target Lfaka is sent flying and must succeed at an INS check or be disarmed. She takes 2d3 damage from your STR bonus and must succeed at a COU check at the start of her turn before she can take an action or react."
        },
        {
          "id": "wind",
          "type": "movement",
          "rank": 4,
          "title": "Windwalker",
          "action": "free",
          "icon": wind,
          "color": "orange",
          "tooltip": "You have advantage against ranged attacks and on dodges. You can use this action to make a free jump without rolling a die once per turn."
        },
        {
          "id": "downpour",
          "type": "movement",
          "rank": 5,
          "title": "Downpour",
          "action": "main",
          "icon": downpour,
          "color": "orange",
          "tooltip": "You unleash a barrage of blows against a single target in melee combat. Make an attack that deals 1d6 times your +1 MOV bonus, taking any bonuses you have. You can perform this action more than once per turn."
        },
      ],
    }
  ],
 "fighting": [
    {
      "name": "movement",
      "content": [
        {
          "id": "feint",
          "type": "movement",
          "rank": 1,
          "title": "Feint",
          "action": "main",
          "icon": highpunch,
          "color": "red",
          "tooltip": "Before an opponent's attack or instead of your own attack, you can attempt to feint. Add your perception bonus to your attack or defense score. If you fail in defense, your opponent doubles their damage. If you use this technique as a reaction, treat it as a free action."
        },
        {
          "id": "evasion",
          "type": "movement",
          "rank": 2,
          "title": "Evasion",
          "action": "free",
          "icon": highpunch,
          "color": "red",
          "tooltip": "You strike swiftly then slide under your opponent, using your speed to exit combat smoothly. Make your attack, then roll AGI + defense with disadvantage for each enemy in contact. If successful, you can leave the melee without taking attacks (1m). You can use this action as a reaction when an attack misses you."
        },
        {
          "id": "balance",
          "type": "movement",
          "rank": 3,
          "title": "Balance",
          "action": "free",
          "icon": highpunch,
          "color": "red",
          "tooltip": "You apply your STR bonuses even when attacking with AGI. Use this action to gain an advantage on your next attack or technique."
        },
        {
          "id": "interception",
          "type": "movement",
          "rank": 4,
          "title": "Interception",
          "action": "limited",
          "icon": highpunch,
          "color": "red",
          "tooltip": "You focus your attention on a new attacker and deflect an enemy's blow towards this new target or block the charge yourself. Roll AGI with disadvantage against the target's attack. If successful, deal your damage + 1d4 and stop the attacker's advance."
        },
        {
          "id": "sucker",
          "type": "movement",
          "rank": 5,
          "title": "Sucker Blow",
          "action": "main",
          "icon": highpunch,
          "color": "red",
          "tooltip": "When you succeed in an attack, you can perform a second AGI attack with advantage using your secondary weapon or fist against a melee opponent. This counts as a reaction that can be performed multiple times per turn. You must have a weapon in your off-hand or a fist shield to apply damage (otherwise, 1-2 brawl damage)."
        }
      ]
    },
    {
      "name": "combat",
      "content": [
        {
          "id": "charge",
          "type": "combat",
          "rank": 1,
          "title": "Charge",
          "action": "main",
          "icon": highpunch,
          "color": "red",
          "tooltip": "You advance up to your running distance and strike your target brutally. Roll a STR attack with disadvantage to beat the target's defense, dealing double your STR damage in addition to your weapon's damage. If you fail, you suffer disadvantage on defense until the start of your next turn. If successful, your opponent suffers disadvantage in combat until the end of their next turn."
        },
        {
          "id": "footing",
          "type": "combat",
          "rank": 2,
          "title": "Footing",
          "action": "free",
          "icon": highpunch,
          "color": "red",
          "tooltip": "You stay light on your feet, ready to strike at your enemies. You are on guard to hit anyone who passes close to you. You have an opportunity attack with AGI disadvantage against enemies in contact who flee or move within 3m of your position, even if they succeed in their dodge roll."
        },
        {
          "id": "disarm",
          "type": "combat",
          "rank": 3,
          "title": "Disarm",
          "action": "main",
          "icon": highpunch,
          "color": "red",
          "tooltip": "Instead of attacking, you can attempt to disarm your opponent. Roll d12 + AGI + defense with disadvantage; if you fail, the opponent can attempt an attack against you. You do not deal damage if successful, but your opponent is disarmed."
        },
        {
          "id": "riposte",
          "type": "combat",
          "rank": 4,
          "title": "Riposte",
          "action": "limited",
          "icon": highpunch,
          "color": "red",
          "tooltip": "After taking a non-critical hit, you can attempt a riposte to beat your opponent's defense score by adding d12 + weapon + attack. Treat this as an additional normal attack that deals damage as usual."
        },
        {
          "id": "tactics",
          "type": "combat",
          "rank": 5,
          "title": "Tactics",
          "action": "limited",
          "icon": highpunch,
          "color": "red",
          "tooltip": "You can identify the weakest visible creature in combat and the strongest one. Once per combat, before your first action, use this limited action to identify the most dangerous creature: roll an INT check against its level to identify a disadvantage or key characteristic. Additionally, you can determine the health status of your direct opponent."
        }
      ]
    },
    {
      "name": "physique",
      "content": [
        {
          "id": "ruckus",
          "type": "physique",
          "rank": 1,
          "title": "Ruckus",
          "action": "free",
          "icon": highpunch,
          "color": "red",
          "tooltip": "You have learned to fight in narrow alleys and crowded taverns, and know how to react against multiple opponents. Enemies in contact with you receive one less advantage for numerical superiority. You can also use this technique as a reaction once per combat to turn towards an opponent attacking you."
        },
        {
          "id": "reinforcement",
          "type": "physique",
          "rank": 2,
          "title": "Reinforcement",
          "action": "limited",
          "icon": highpunch,
          "color": "red",
          "tooltip": "You position yourself close to an ally and try to draw enemy attacks towards yourself. You take the next enemy attacks by succeeding on a defense roll, thereby protecting your ally. Both you and your ally gain an advantage on your next combat roll."
        },
        {
          "id": "punishment",
          "type": "physique",
          "rank": 3,
          "title": "Punishment",
          "action": "free",
          "icon": highpunch,
          "color": "red",
          "tooltip": "You can perform a free attack with advantage against an enemy who missed their attack in reaction. You deal your normal damage."
        },
        {
          "id": "assassination",
          "type": "physique",
          "rank": 4,
          "title": "Assassination",
          "action": "main",
          "icon": highpunch,
          "color": "red",
          "tooltip": "You can perform a stealth attack with advantage, plus an additional advantage if your target is already engaged in combat with an ally or if you attack them from behind. The target must fail a perception check against your stealth for the attack to be considered discreet. If you succeed, you deal damage as if it were a critical hit."
        },
        {
          "id": "power",
          "type": "physique",
          "rank": 5,
          "title": "Power",
          "action": "free",
          "icon": highpunch,
          "color": "red",
          "tooltip": "You can reroll a damage roll if the result is a 1. You can also use this action to add a 1d4 bonus to one of your attacks this turn."
        }
      ]
    }
  ],
  "magic": [
    {
      "name": "preciseness",
      "content": [
        {
          "id": "glow",
          "type": "preciseness",
          "rank": 1,
          "title": "Glow",
          "action": "free",
          "icon": highpunch,
          "color": "purple",
          "tooltip": "You send a slight magical breeze around your body to generate a soft light, which you can focus on your catalyst to illuminate it like a small torch. This effect lasts until you use another technique or lose concentration, whether voluntarily or not. In combat, you can use this action to create a bright flash at the tip of your catalyst to give a disadvantage to an enemy attacking you."
        },
        {
          "id": "message",
          "type": "preciseness",
          "rank": 2,
          "title": "Message",
          "action": "limited",
          "icon": highpunch,
          "color": "purple",
          "tooltip": "You concentrate magical flows to send a short message to a visible ally. The message can contain a maximum of #magic words. Additionally, you can roll a magic check to send this message to a known distant individual, with difficulty based on the number of days of travel separating you (1 day = 20, 2 days = 25, etc.)."
        },
        {
          "id": "veil",
          "type": "preciseness",
          "rank": 3,
          "title": "Veil",
          "action": "limited",
          "icon": highpunch,
          "color": "purple",
          "tooltip": "You form a layer of magic around yourself to blur your image. Your opponents have a disadvantage when trying to hit or perceive you."
        },
        {
          "id": "telekinesis",
          "type": "preciseness",
          "rank": 4,
          "title": "Telekinesis",
          "action": "main",
          "icon": highpunch,
          "color": "purple",
          "tooltip": "You target a nearby object within 10 meters to move it at will. The object's weight cannot exceed your SEN bonus."
        },
        {
          "id": "levitation",
          "type": "preciseness",
          "rank": 5,
          "title": "Levitation",
          "action": "main",
          "icon": highpunch,
          "color": "purple",
          "tooltip": "You place a magical force under your feet to levitate a few centimeters above the ground. You can move this way at your running distance on solid ground, or at your SEN bonus distance in the air. This effect lasts until the beginning of your next turn, but you can extend it by using this action again."
        }
      ]
    },
    {
      "name": "magic",
      "content": [
        {
          "id": "zaaap",
          "type": "magic",
          "rank": 1,
          "title": "Zaaap",
          "action": "free",
          "icon": highpunch,
          "color": "purple",
          "tooltip": "You project a concentrated magical spike to sting an enemy or ignite a twig fire. Roll a shot+magic check and inflict 1d3 magical damage."
        },
        {
          "id": "barrier",
          "type": "magic",
          "rank": 2,
          "title": "Barrier",
          "action": "limited",
          "icon": highpunch,
          "color": "purple",
          "tooltip": "You concentrate your magic to form a protective shield in front of you. You cancel #SEN bonus magical damage until your next turn or until the protection is broken."
        },
        {
          "id": "infusion",
          "type": "magic",
          "rank": 3,
          "title": "Infusion",
          "action": "limited",
          "icon": highpunch,
          "color": "purple",
          "tooltip": "You send a flow of magic into an object or weapon you touch, granting it magical strength. The object is considered magical and deals damage equivalent to the closest die to your magic score until your next turn."
        },
        {
          "id": "counterspell",
          "type": "magic",
          "rank": 4,
          "title": "Counterspell",
          "action": "free",
          "icon": highpunch,
          "color": "purple",
          "tooltip": "As a reaction, you can send your magic to counter an enemy spell. If your #magic score is higher than the spell difficulty, it is countered instantly. Otherwise, you must roll a check to beat your opponent's score."
        },
        {
          "id": "transmutation",
          "type": "magic",
          "rank": 5,
          "title": "Transmutation",
          "action": "main",
          "icon": highpunch,
          "color": "purple",
          "tooltip": "You use your magic to deform a small object or a limb for a maximum of SEN bonus hours. Against a creature, it must succeed in a SEN check against your magic score or be deformed. The target retains its intrinsic nature."
        }
      ]
    },
    {
      "name": "knowledge",
      "content": [
        {
          "id": "identification",
          "type": "knowledge",
          "rank": 1,
          "title": "Identification",
          "action": "free",
          "icon": highpunch,
          "color": "purple",
          "tooltip": "You inspect a magical object or location to detect the type of magic used to enchant it, as well as the spell's strength. Roll a magical perception check against the spell's difficulty. If successful, and if you are familiar with the spell, you can also name it and explain its effects. In combat, you can use this action to study an ongoing ritual."
        },
        {
          "id": "dissipation",
          "type": "knowledge",
          "rank": 2,
          "title": "Dissipation",
          "action": "free",
          "icon": highpunch,
          "color": "purple",
          "tooltip": "Faced with an external enchantment, you project your magic to undo the bonds that keep it active. Roll a magic check with advantage if you have identified the spell and know its type of magic. If you exceed the spell's casting difficulty, you can break it and cancel its effects. In combat, you can use this action to remove a charm or enchantment against your opponent's score."
        },
        {
          "id": "scroll",
          "type": "knowledge",
          "rank": 3,
          "title": "Scroll",
          "action": "main",
          "icon": highpunch,
          "color": "purple",
          "tooltip": "You take a moment to write a scroll of a spell you know. Roll a learning check against the spell’s difficulty with advantage to seal the spell onto paper. The spell level cannot exceed your SEN bonus."
        },
        {
          "id": "preparation",
          "type": "knowledge",
          "rank": 4,
          "title": "Preparation",
          "action": "main",
          "icon": highpunch,
          "color": "purple",
          "tooltip": "During a rest, you focus on preparing a spell whose level must be lower than your SEN bonus. Roll a difficulty check with advantage. If successful, you can cast this spell on your turn as a main action without needing to roll for difficulty. In combat, you can use this action to give advantage to the casting of one of your spells or that of an ally as a reaction."
        },
        {
          "id": "enchantment",
          "type": "knowledge",
          "rank": 5,
          "title": "Enchantment",
          "action": "main",
          "icon": highpunch,
          "color": "purple",
          "tooltip": "You target an object to attach a known spell of maximum level equal to your SEN bonus. The object retains these effects for one day and can only have one associated enchantment. Roll a casting check with advantage to complete the action. In combat, you can use this action to amplify the effects of an enchantment on an object you touch by 1d4 or 1 turn."
        }
      ]
    }
  ]
}

export default featsEN
