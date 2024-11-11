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
  "combat": [
    {
      "name": "mouvement",
      "content": [
        {
          "id": "feinte",
          "type": "mouvement",
          "rank": 1,
          "title": "Feinte",
          "action": "principale",
          "icon": highpunch,
          "color": "red",
          "tooltip": "Avant une attaque adversaire ou à la place de votre attaque, vous pouvez essayer de feinter. Ajoutez votre bonus de perception à votre score d’attaque ou de défense. Si vous échouez en défense, votre adversaire double ses dégats. Si vous jouez cette technique en réaction considérée la comme une action gratuite,"
        },
        {
          "id": "évasion",
          "type": "mouvement",
          "rank": 2,
          "title": "Évasion",
          "action": "gratuite",
          "icon": highpunch,
          "color": "red",
          "tooltip": "Vous frappez vivement puis vous glissez sous votre adversaire et utilisez votre vitesse pour sortir du combat sans heurt. Faites votre attaque puis lancez un jet d’AGI + défense avec désavantage pour chaque ennemi au contact. Si vous réussissez vous pouvez sortir de la mêlée sans subir d’attaque de vos adversaires (1m). Vous pouvez utiliser cette action en réaction lors d'une attaque manquée contre vous."
        },
        {
          "id": "équilibre",
          "type": "mouvement",
          "rank": 3,
          "title": "Équilibre",
          "action": "gratuite",
          "icon": highpunch,
          "color": "red",
          "tooltip": "Vous infligez vos bonus de FOR même si vous attaquez en AGI. Vous pouvez utiliser cette action pour gagner un avantage sur la prochaine attaque ou technique."
        },
        {
          "id": "interception",
          "type": "mouvement",
          "rank": 4,
          "title": "Interception",
          "action": "limitée",
          "icon": highpunch,
          "color": "red",
          "tooltip": "Vous concentrez votre attention sur un nouvel assaillant et déviez le coup d’un ennemi au contact vers cette nouvelle cible, ou bloquez la charge vous-même. Lancez un jet d’AGI avec désavantage contre l’attaque de la cible. En cas de réussite vous infligez vos dégâts + 1d4 et la cible est arrêtée dans son attaque."
        },
        {
          "id": "coupbas",
          "type": "mouvement",
          "rank": 5,
          "title": "Coup bas",
          "action": "principale",
          "icon": highpunch,
          "color": "red",
          "tooltip": "Lorsque vous réussissez un attaque, vous pouvez réaliser une seconde attaque d'AGI avec avantage avec votre arme secondaire ou votre poing contre un adversaire au corps a corps. Cette attaque compte comme une réaction qui peut etre réalisée plusieurs fois par tour. Vous devez avoir une arme dans votre main secondaire ou un bouclier de poing pour appliquer ces dégats (sinon 1-2 dmg bagarre)."
        },
      ],
    },
    {
      "name": "combat",
      "content": [
        {
          "id": "charge",
          "type": "combat",
          "rank": 1,
          "title": "Charge",
          "action": "principale",
          "icon": highpunch,
          "color": "red",
          "tooltip": "Vous avancez jusqu’à votre distance de course et frappez votre cible brutalement. Lancez une attaque en FOR avec désavantage pour battre le score de défense de votre cible, infligeant le double des degats de Force en plus de votre arme. Si vous échouez, vous subissez un désavantage sur votre défense jusqu'au début de votre prochain tour. Si vous réussissez, votre adversaire subit également un désavantage en combat jusqu'à la fin de son prochain tour."
        },
        {
          "id": "appuis",
          "type": "combat",
          "rank": 2,
          "title": "Appuis",
          "action": "gratuite",
          "icon": highpunch,
          "color": "red",
          "tooltip": "Vous restez leste sur vos appuis, prêt à assener un coup à vos ennemis. Vous vous tenez aux aguets pour frapper quiconque passerait proche de vous. Vous avez une attaque d'opportunité en AGI avec désavantage contre les ennemis au contact qui fuient ou qui se déplaceraient en passant à moins de 3 m de votre position, et ce même s'ils réussissent leur jet de dérobade. "
        },
        {
          "id": "désarmement",
          "type": "combat",
          "rank": 3,
          "title": "Désarmement",
          "action": "principale",
          "icon": highpunch,
          "color": "red",
          "tooltip": "À la place de votre attaque, vous pouvez essayer de désarmer l’adversaire. Lancez un jet d12 + AGI + défense avec désavantage ; en cas d’échec l’adversaire peut tenter une attaque contre vous. Vous n’infligez pas de dégâts en cas de réussite mais votre adversaire est désarmé."
        },
        {
          "id": "riposte",
          "type": "combat",
          "rank": 4,
          "title": "Riposte",
          "action": "limitée",
          "icon": highpunch,
          "color": "red",
          "tooltip": "Après avoir subi une attaque qui n’est pas un coup critique, vous pouvez tenter une riposte et battre le score de défense de votre adversaire en additionnant d12 + arme + attaque. Considérez ce jet comme une attaque normale supplémentaire qui inflige ses dégâts normalement."
        },
        {
          "id": "tactiques",
          "type": "combat",
          "rank": 5,
          "title": "Tactiques",
          "action": "limitée",
          "icon": highpunch,
          "color": "red",
          "tooltip": "Vous pouver identifier à l'oeil la créature la plus faible visible dans un combat et la créature la plus forte. Une fois par combat, avant votre première action, vous pouvez utiliser cette action en limitée pour identifier la créature la plus dangereuse : lancez un jet d'ERU contre son niveau pour identifier un desavantage ou une caractéristique clef. De plus, vous savez identifier l'état de santé de votre adversaire direct."
        },
      ],
    },
    {
      "name": "physique",
      "content": [
        {
          "id": "cohue",
          "type": "physique",
          "rank": 1,
          "title": "Cohue",
          "action": "gratuite",
          "icon": highpunch,
          "color": "red",
          "tooltip": "Vous avez appris à vous battre dans des ruelles étroites et des tavernes encombrées et savez réagir face à plusieurs adversaires. Les ennemis à votre contact obtiennent un avantage de moins pour la supériorité numérique. Vous pouvez également utiliser cette technique en réaction une fois par combat pour vous retourner vers un adversaire qui vous attaque."
        },
        {
          "id": "renfort",
          "type": "combat",
          "rank": 2,
          "title": "Renfort",
          "action": "limitée",
          "icon": highpunch,
          "color": "red",
          "tooltip": "Vous vous placez proche d’un allié et vous essayez d’attirer les coups ennemis vers vous. Vous subissez les prochaines attaques ennemies en réussissant un jet de défense et protégez ainsi votre allié. Vous et votre allié gagnez un avantage sur votre prochain jet de combat."
        },
        {
          "id": "punition",
          "type": "combat",
          "rank": 3,
          "title": "Punition",
          "action": "gratuite",
          "icon": highpunch,
          "color": "red",
          "tooltip": "Vous pouvez réaliser une attaque gratuite avec avantage contre un ennemi qui a manqué son attaque en réaction. Vous infligez vos dégats normalement"
        },
        {
          "id": "assassinat",
          "type": "combat",
          "rank": 4,
          "title": "Assassinat",
          "action": "principale",
          "icon": highpunch,
          "color": "red",
          "tooltip": "Vous pouvez realiser une attaque en furtivité avec avantage + 1 avantage si votre adversaire est deja en combat avec un allié ou si vous l'attaquez de dos. La cible doit echouer un jet de perception contre votre discrétion pour que l'attaque soit considérée discrete. Si vous réussissez l'attaque vous infligez vos dégats comme si vous aviez fait un critique."
        },
        {
          "id": "puissance",
          "type": "combat",
          "rank": 5,
          "title": "Puissance",
          "action": "gratuite",
          "icon": highpunch,
          "color": "red",
          "tooltip": "Vous pouvez relancer un jet de dégat en cas de résultat de 1. Vous pouvez utiliser cette action pour donner un bonus de 1d4 a une de vos attaques ce tour."
        },
      ],
    }
  ],
  "magie": [
    {
      "name": "minutie",
      "content": [
        {
          "id": "lueur",
          "type": "minutie",
          "rank": 1,
          "title": "Lueur",
          "action": "gratuite",
          "icon": highpunch,
          "color": "purple",
          "tooltip": "Vous envoyez une légère brise d'énergie magique autour de votre corps pour générer une lumière douce, que  vous pouvez concentrer sur votre catalyseur pour l'illuminer comme s'il s'agissait d'une petite torche. Cet effect perdure jusqu'à l'utilisation d'une autre technique ou votre déconcentration, volontaire ou non. En combat vous pouvez utiliser cette action pour créeer un flash brillant sur le bout de votre catalyseur pour donner un désavantage à un ennemi vous attaquant."
        },
        {
          "id": "message",
          "type": "minutie",
          "rank": 2,
          "title": "Message",
          "action": "limitée",
          "icon": highpunch,
          "color": "purple",
          "tooltip": "Vous concentrez les flux magiques pour transmettre un message court à un allié visible. Le message peut comporter un maximum de #magie mots. Accessoirement, vous pouvez lancez un jet de magie pour transmettre ce message à un individu connu éloigné, avec une difficulté relative au nombre de jours de marche vous séparant (1 jour = 20, 2 jours = 25, etc,)."
        },
        {
          "id": "voile",
          "type": "minutie",
          "rank": 3,
          "title": "Voile",
          "action": "limitée",
          "icon": highpunch,
          "color": "purple",
          "tooltip": "Vous former une couche de magie autour de vous pour brouiller votre image. Vos adversaires ont un désavantage pour vous toucher et vous percevoir."
        },
        {
          "id": "télékinésie",
          "type": "minutie",
          "rank": 4,
          "title": "Télékinésie",
          "action": "principale",
          "icon": highpunch,
          "color": "purple",
          "tooltip": "Vous ciblez un objet proche à moins de 10 m pour le faire se déplacer à votre volonté. Le poids de l'objet de peut être supérieur à votre bonus de SEN"
        },
        {
          "id": "lévitation",
          "type": "minutie",
          "rank": 5,
          "title": "Lévitation",
          "action": "principale",
          "icon": highpunch,
          "color": "purple",
          "tooltip": "Vous placez une force magique sous vos pieds pour léviter à quelques cm du sol. Vous pouvez vous déplacer de cette façon de votre distance de course sur un sol ferme, ou de votre bonus de SEN dans le vide. Cet effet dure jusqu'au début de votre prochain tour mais vous pouvez le prolonger en dépensant cette action à nouveau."
        },
      ],
    },
    {
      "name": "magie",
      "content": [
        {
          "id": "zaaap",
          "type": "magie",
          "rank": 1,
          "title": "Zaaap",
          "action": "gratuite",
          "icon": highpunch,
          "color": "purple",
          "tooltip": "Vous projetez une pointe magique concentréee pour piquer un ennemi ou allumer un feu de brindilles. Lancez un jet de tir+magie et infligez 1d3 dmg magiques."
        },
        {
          "id": "barrière",
          "type": "magie",
          "rank": 2,
          "title": "Barrière",
          "action": "limitée",
          "icon": highpunch,
          "color": "purple",
          "tooltip": "Vous concentrez votre magie pour former une armure protectrice devant vous. Vous annulez #bonus de SEN dmg magiques jusqu'à votre prochain tour ou jusqu'à ce que la protection soit annulée. "
        },
        {
          "id": "infusion",
          "type": "magie",
          "rank": 3,
          "title": "Infusion",
          "action": "limitée",
          "icon": highpunch,
          "color": "purple",
          "tooltip": "Vous envoyez un flux de magie dans un objet ou une arme que vous touchez pour lui conférer une force magique. L'objet est considéré magique et inflige un dé de dégat le plus proche de votre score de magie juqu'à votre prochain tour."
        },
        {
          "id": "contresort",
          "type": "magie",
          "rank": 4,
          "title": "Contresort",
          "action": "gratuite",
          "icon": highpunch,
          "color": "purple",
          "tooltip": "En réaction, vous pouvez envoyer votre magie pour contrer un sort adverse. Si votre score de #magie est supérieur à la difficulté de lancer du sort ennemi, il est contré instantanément. Sinon vous devez lancer un jet de lancer et battre le score de votre adversaire."
        },
        {
          "id": "transmutation",
          "type": "magie",
          "rank": 5,
          "title": "Transmutation",
          "action": "principale",
          "icon": highpunch,
          "color": "purple",
          "tooltip": "Vous utilisez votre magie pour déformer un petit objet ou un membre pendant maximum bonus de SEN heures. Contre une créature, elle doit réussir un jet de SEN contre votre score de magie ou étre déformée. La cible garde sa nature intrasèque."
        },
      ],
    },
    {
      "name": "savoir",
      "content": [
        {
          "id": "identification",
          "type": "savoir",
          "rank": 1,
          "title": "Identification",
          "action": "gratuite",
          "icon": highpunch,
          "color": "purple",
          "tooltip": "Vous inspectez un objet magique ou un lieu pour déceler le type de magie employé pour l'enchanter, ainsi que la puissance du sort. Lancez un jet de perception magique sur la difficulté du sort. En cas de succès, et si vous connaissez le sort en place, vous pouvez également le nommer et expliquer ses effets. En combat vous pouvez utiliser cette action pour étudier un rituel en cours.."
        },
        {
          "id": "dissipation",
          "type": "savoir",
          "rank": 2,
          "title": "Dissipation",
          "action": "gratuite",
          "icon": highpunch,
          "color": "purple",
          "tooltip": "Face à un enchantement externe, vous projetez votre magie pour défaire les liens qui le maintiennent actif. Lancez un jet de magie avec avantage si vous avez identifié le sort et connaissez son type de magie. Si vous dépasser la difficulté de lancement du sort vous pouvez le briser et annuler ses effets. En combat vous pouvez utiliser cette action pour lever un charme ou un enchantement contre le score de votre adversaire."
        },
        {
          "id": "backhand",
          "type": "savoir",
          "rank": 3,
          "title": "Parchemin",
          "action": "principale",
          "icon": highpunch,
          "color": "purple",
          "tooltip": "Vous prenez un moment pour rédiger un parchemin d'un sort que vous connaissez. Lancez un jet d'apprentissage contre la difficulté du sort avec avantage pour sceller le sort au papier. Le sort ne peut pas avoir un niveau supérieur à votre bonus de SEN."
        },
        {
          "id": "backhand",
          "type": "savoir",
          "rank": 4,
          "title": "Préparation",
          "action": "principale",
          "icon": highpunch,
          "color": "purple",
          "tooltip": "Vous choisissez de placer votre attention lors d'un repos sur la préparation d'un sort dont le niveau doit êre inférieur à votre bonus de SEN. Lancez le jet de difficulté avec avantage. En cas de succès, vous pouvez lancer ce sort à votre tour pour une action principale sans lancer la difficulté. En combat, vous pouvez utiliser cette action pour donner avantage au lancer d'un de vos sorts ou de celui d'un allié en réaction."
        },
        {
          "id": "backhand",
          "type": "savoir",
          "rank": 5,
          "title": "Enchantement",
          "action": "principale",
          "icon": highpunch,
          "color": "purple",
          "tooltip": "Vous ciblez un objet pour lui attacher un sort connu de niveau maximum égal à votre bonus de SEN. L'objet conserve ces effets pendant 1 jour et ne peut avoir qu'un seul enchantement associé. Lancez un jet de lancer avec avantage pour réaliser l'action. Vous pouvez utiliser cette action en combat pour amplifier les effets d'un enchantement d'un objet que vous touchez d'1d4 ou 1 tour."
        },
      ],
    }
  ]
}

export default featsFR
