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
          "id": "chasse",
          "type": "discrétion",
          "rank": 1,
          "title": "Chasse",
          "action": "gratuite",
          "icon": hunt,
          "color": "green",
          "tooltip": "Vous prenez pour cible une cible que vous pouvez voir. Tant que vous gardez la vue sur elle, vous gagnez un avantage sur vos tirs contre cette cible. Seule une créature peut être la cible de Chasse à la fois et vous ne pouvez pas changer la cible de cette action tant que la première n'est pas à terre ou hors du combat. Lors des phases d'exploration, vous pouvez utiliser Chasse pour obtenir de la nourriture avec un avantage au jet de Survie et une unité de poids supplémentaire."
        },
        {
          "id": "camouflage",
          "type": "discrétion",
          "rank": 2,
          "title": "Camouflage",
          "action": "principale",
          "icon": concealing,
          "color": "green",
          "tooltip": "Vous choisissez un moment opportun pour tirer et profiter de votre environnement pour passer inaperçu. Votre jet de tir gagne un bonus égal à votre discrétion. Si votre jet est réussi vous ne brisez pas votre furtivité avec cette attaque."
        },
        {
          "id": "suppression",
          "type": "discrétion",
          "rank": 3,
          "title": "Supression",
          "action": "principale",
          "icon": supressing,
          "color": "green",
          "tooltip": "Si vous tirez sur la même cible qu’au tour précédent vous pouvez faire un tir de suppression avec avantageet si celle-ci ne s’est pas déplacée,. En cas de succes vos dégats infligent 2x vos bonus de Dextérité. L'adveraire subit un désavantage à ses jets de COU jusqu'à son prochain tour."
        },
        {
          "id": "ambuscade",
          "type": "discrétion",
          "rank": 4,
          "title": "Embuscade",
          "action": "principale",
          "icon": ambush,
          "color": "green",
          "tooltip": "En étant furtif, vous réalisez un tir gratuit contre un cible durant l'Initiative. Si votre tir était le déclencheur de l'Initiative, alors vous pouvez effectuer un second tir. Cette action ne brise pas votre discrétion."
        },
        {
          "id": "tirmortel",
          "type": "discrétion",
          "rank": 5,
          "title": "Tir mortel",
          "action": "principale",
          "icon": killershot,
          "color": "green",
          "tooltip": "Vous réalisez un tir précis avec désavantage en visant le point vital de votre adversaire, avec votre minutie. Si votre cible est touché, vous effectuez les dégats critiques de votre arme et votre adversaire est mis à terre. Cette action ne brise pas votre furtivité en cas de succès."
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
  ],
  "performance": [
    {
      "name": "éloquence",
      "content": [
        {
          "id": "apaisement",
          "type": "éloquence",
          "rank": 1,
          "title": "Apaisement",
          "action": "gratuite",
          "icon": highpunch,
          "color": "yellow",
          "tooltip": "Vous prenez le temps de discuter avec vos alliés et les rassurez par votre stature sereine et vos calembours. Lancez un jet de SOC (+ éloquence si compétence) contre la difficulté de la journée. Vous et vos alliés gagnent un avantage au prochain soin."
        },
        {
          "id": "déconcentration",
          "type": "éloquence",
          "rank": 2,
          "title": "Déconcentration",
          "action": "limitée",
          "icon": highpunch,
          "color": "yellow",
          "tooltip": "Vous entamez une gigue destabilisante agrémentée de gestes moqueurs ou d'invectives acerbes. Lancez un jet de SOC + éloquence contre le COU d'un adversaire. En cas de succès, l'ennemi subit un désavantage à sa prochaine action, et vos alliés ont un avantage aux jets de peur contre lui. Vous pouvez réaliser cette action en réaction."
        },
        {
          "id": "captivation",
          "type": "éloquence",
          "rank": 3,
          "title": "Captivation",
          "action": "limitée",
          "icon": highpunch,
          "color": "yellow",
          "tooltip": "Test de CHA+éloquence contre la difficulté de l'aventure. En cas de succès, vous donnez un dé d'avantage à un de vos alliés. Sa valeur est celle la plus proche de votre score de performance, arrondi à l'inférieure,"
        },
        {
          "id": "hardiesse",
          "type": "éloquence",
          "rank": 4,
          "title": "Hardiesse",
          "action": "principale",
          "icon": highpunch,
          "color": "yellow",
          "tooltip": "Vous ralliez vos amis et leur insufflez le courage par un chant mémorable et des paroles inspirantes. Vous parlez à leur amour propre et les enjoignez à donner leur meilleur. Lancez un jet de SOC + éloquence contre la difficulté de l'aventure. En cas de succès, vos camarades ont un avantage permanent à leurs jets et un bonus de COU égal à votre éloquence, jusqu'à leur premier échec. À chaque jet manqué durant la Hardiesse, vos camarades doivent lancez un jet de COU sur la même difficulté ou perdre leur avantage."
        },
        {
          "id": "exhaltation",
          "type": "éloquence",
          "rank": 5,
          "title": "Exhaltation",
          "action": "principale",
          "icon": highpunch,
          "color": "yellow",
          "tooltip": "Vous encensez vos alliés et contez les succès à venir pour votre groupe lors d'un repos ou d'un temps calme. Lancez un jet de CHA + éloquence contre la difficulté de l'aventure. En cas de succès, vos alliés gagnent un point de chance jusqu'à leur prochain repos et un avantage sur leurs jet de COU. Vous pouvez utilisez l'exaltation en combat pour cibler un joueur à votre portée de voix et lui donner un soin agal a votre score d'éloquence et une immunité contre son prochain jet de PEUR (Ces effets s'appliquent uniquement à ce joueur)."
        },
      ],
    },
    {
      "name": "performance",
      "content": [
        {
          "id": "apaisement",
          "type": "performance",
          "rank": 1,
          "title": "Inspiration",
          "action": "gratuite",
          "icon": highpunch,
          "color": "yellow",
          "tooltip": "Lors d'un temps calme avant un repos, vous usez de votre art pour faire oublier les difficultées de la journée à vos compagnons, tout en vous maintenant aux aguets. Lancez un jet de CHA (+ performance si compétence). Vous gagnez un avantage sur un prochain jet, jusqu'au matin suivant et vos alliés peuvent relancer leur jet de repos en cas de 1. Vous pouvez utiliser cette action pour donner un avantage à un allié à distance d'écoute une fois par tour."
        },
        {
          "id": "provocation",
          "type": "performance",
          "rank": 2,
          "title": "Provocation",
          "action": "principale",
          "icon": highpunch,
          "color": "yellow",
          "tooltip": "Vous réalisez une véritable fanfare à vous seul.e et dirigez l'attention de vos adversaires vers vous. Ils doivent réussir un jet de ERU contre votre CHA + performance ou subir un désavantage en perception et réagir vivement à votre présence ou rester pantois en cas de réussite."
        },
        {
          "id": "exemple",
          "type": "performance",
          "rank": 3,
          "title": "Exemple",
          "action": "limitée",
          "icon": highpunch,
          "color": "yellow",
          "tooltip": "Vous décidez de montrer l'exemple à vos alliés en proie à l'adversité. Lancez un jet de CHA + performance sur la difficulté de l'aventure. En cas de réussite, à chaque fois que vous réussissez un jet de dé, vous pouvez donner un dé d'avantage à un allié, et ce autant de fois que votre score de performance jusqu'à la fin du combat."
        },
        {
          "id": "dépassement",
          "type": "performance",
          "rank": 4,
          "title": "Dépassement",
          "action": "gratuite",
          "icon": highpunch,
          "color": "yellow",
          "tooltip": "Vous décidez de donner votre maximum et vous mettez dans une transe endiablée tout en chantonnant et faisant des cabrioles. Lancez un jet de COU+ performance contre la difficulté en cours ou le score d'attaque de l'ennemi le plus puissant avec lequel vous êtes engagé. En cas de succès, vous obtenez un bonus de +performance à vos jets jusqu'au début de votre prochain tour. En cas d'échec, vous faite désormais vos jets de performance avec désavantage à la place."
        },
        {
          "id": "glorification",
          "type": "éloquence",
          "rank": 5,
          "title": "Glorification",
          "action": "principale",
          "icon": highpunch,
          "color": "yellow",
          "tooltip": "Vous utilisez vos talents de conteur et amuseur pour rappelez à la populace les faits d'arme de vos compagnons. En présence d'une foule (ou d'un bar bien peuplé), lancez un jet de CHA + gloire contre la difficulté en cours. En cas de succès, vous et vos alliés gagnez instantanément les bénéfices d'un repos long et un point de chance temporaire. Vous pouvez utiliser cette action en combat sur vous et vos alliés pour gagner à la place un bonus de VIE temporaire égal à votre score de performance. En cas d'échec, vous n'impressionnez personne."
        },
      ],
    },
    {
      "name": "persuasion",
      "content": [
        {
          "id": "insulte",
          "type": "persuasion",
          "rank": 1,
          "title": "Insulte",
          "action": "gratuite",
          "icon": highpunch,
          "color": "yellow",
          "tooltip": "Vous ciblez un ennemi à portée de voix et lui lancez des noms d'oiseaux, Il doit réussir un jet d'ÉRU contre votre CHA+éloquence ou avoir un désavantage à sa prochaine action"
        },
        {
          "id": "suggestion",
          "type": "persuasion",
          "rank": 2,
          "title": "Suggestion",
          "action": "limitée",
          "icon": highpunch,
          "color": "yellow",
          "tooltip": "Vous instillez une idée dans le crane de votre ennemi, pour le faire réagir selon votre volonté. Vous lancez un jet de CHA+persuasion contre COU+ERU de votre cible. En cas d'échec elle doit utiliser une de ses actions principales pour agir selon votre suggestion."
        },
        {
          "id": "sappe",
          "type": "persuasion",
          "rank": 3,
          "title": "Sappe",
          "action": "limitée",
          "icon": highpunch,
          "color": "yellow",
          "tooltip": "Vous instillez le doute chez vos adversaires et nuisez à leur efficacité au combat. Tous les ennemis à portée d'écoute doivent lancer un jet de COU contre votre CHA ou subir un désavantage à leurs jets de COU et ERU, Ils peuvent lancer un jet de COU au debut de leur tour pour annuler l'effet."
        },
        {
          "id": "accablement",
          "type": "persuasion",
          "rank": 4,
          "title": "Accablement",
          "action": "principale",
          "icon": highpunch,
          "color": "yellow",
          "tooltip": "Vous harcelez votre cible avec des mots blessants, des ritournelles moqueuses et votre prestance, jetez un jet de CHA+persuasion contre le COU de votre adversaire. En cas de succès vous lui infligez 1 dégat psychique par bonus de CHA et lui faites perdre une action principale sur son prochain tour."
        },
        {
          "id": "domination",
          "type": "persuasion",
          "rank": 5,
          "title": "Domination",
          "action": "principale",
          "icon": highpunch,
          "color": "yellow",
          "tooltip": "Vous utilisez votre charisme spectaculaire pour stopper un ennemi et lui imposer votre volonté. La cible doit réussir un jet de COU contre votre CHA+persuasion ou réagir à votre ordre simple avant de finir son tour."
        },
      ],
    },
  ],
  "survie": [
    {
      "name": "perception",
      "content": [
        {
          "id": "depeçage",
          "type": "perception",
          "rank": 1,
          "title": "Dépeçage",
          "action": "gratuite",
          "icon": highpunch,
          "color": "green-dark",
          "tooltip": "Vous savez appréter vos proies et sélectionner les morceaux de choix. Vos jets de découpe ont avantage et vous pouvez obtenir 1 ration sur les créatures mortes. Utilisez en action gratuite pour donner +1 à votre prochaine attaque."
        },
        {
          "id": "survivalisme",
          "type": "perception",
          "rank": 2,
          "title": "Survivalisme",
          "action": "principale",
          "icon": highpunch,
          "color": "green-dark",
          "tooltip": "Quand vous réalisez une action de camp lors d'un repos, vous donnez +1 rémission au groupe par compétence utilisée. Vous avez avantage à un de vos jets de mort une fois après aveir effectué cette action lors d'un repos long."
        },
        {
          "id": "prédation",
          "type": "perception",
          "rank": 3,
          "title": "Prédation",
          "action": "limitée",
          "icon": highpunch,
          "color": "green-dark",
          "tooltip": "Vous vous remémorez les caractéristiques des créatures que vous affrontez pour porter des coups efficaces. Lancez un jet d'ERU+survie pour reconnaitre une créature sur laquelle vous avez des connaissances. Vous et vos alliés informés infligez 1d4 dmg supplémentaires jusqu'à la fin du combat en cas de réussite."
        },
        {
          "id": "sauvagerie",
          "type": "perception",
          "rank": 4,
          "title": "Sauvagerie",
          "action": "limitée",
          "icon": highpunch,
          "color": "green-dark",
          "tooltip": "Vous sentez les individus jusqu'à une pièce annexe ou INS mètres et gagnez un avantage à vos jets de perception dans ces conditions. Vous reconnaissez les espèces d'individus à l'odeur."
        },
        {
          "id": "Sixième sens",
          "type": "perception",
          "rank": 5,
          "title": "Sixième sens",
          "action": "limitée",
          "icon": highpunch,
          "color": "green-dark",
          "tooltip": "Vous avez avantage en initiative et aux jets de veille. Action limitée en réaction pour gagner un avantage contre un tir ou attaque sournoise."
        },
      ],
    },
    {
      "name": "survie",
      "content": [
        {
          "id": "ressources",
          "type": "survie",
          "rank": 1,
          "title": "Ressources",
          "action": "principale",
          "icon": highpunch,
          "color": "green-dark",
          "tooltip": "Vous êtes prompt dans l'établissement d'un camp de base et pouvez réaliser les actions de feu et nourriture en une seule action automatique. "
        },
        {
          "id": "économie",
          "type": "survie",
          "rank": 2,
          "title": "Économie",
          "action": "principale",
          "icon": highpunch,
          "color": "green-dark",
          "tooltip": "Lors d'un jet de cuisine vous pouvez augmenter le nombre de rations préparées de +1, et de +1 additionnel par désavantage que vous ajoutez à votre jet. De plus, vous collectez les ressources utilisées après leur utilisation et récupérez flèches et armes de jet éparpillées."
        },
        {
          "id": "fortitude",
          "type": "survie",
          "rank": 3,
          "title": "Fortitude",
          "action": "gratuite",
          "icon": highpunch,
          "color": "green-dark",
          "tooltip": "Vous pouvez consommer de la viande avariée et des légumes pourris et résister aux poisons avec avantage à vos jets d'END. Si les aliments ont été cuits vous n'avez pas besoin de lancer de dé."
        },
        {
          "id": "exploration",
          "type": "survie",
          "rank": 4,
          "title": "Exploration",
          "action": "gratuite",
          "icon": highpunch,
          "color": "green-dark",
          "tooltip": "Vous faites attention où vous mettez vos pieds et à votre environnement immédiat. Vous avez avantage en perception du danger et détection des pièges. Vous pouvez utiliser cette action en réaction d'un jet d'Initiative pour effectuer un déplacement de 3m avant le combat."
        },
        {
          "id": "Tueur froid",
          "type": "survie",
          "rank": 5,
          "title": "Tueur froid",
          "action": "gratuite",
          "icon": highpunch,
          "color": "green-dark",
          "tooltip": "Vos coups furtifs et de tir sont réalisés avec une précision terrifiante. Vous pouver relancer vos jets de dégats en cas de 1."
        },
      ],
    },
    {
      "name": "discrétion",
      "content": [
        {
          "id": "effacement",
          "type": "discrétion",
          "rank": 1,
          "title": "Effacement",
          "action": "gratuite",
          "icon": highpunch,
          "color": "green-dark",
          "tooltip": "Votre action de furtivité est désormais une action gratuite et confère un avantage supplémentaire."
        },
        {
          "id": "traque",
          "type": "discrétion",
          "rank": 2,
          "title": "Traque",
          "action": "principale",
          "icon": highpunch,
          "color": "green-dark",
          "tooltip": "Vous suivez la trace de vos ennemis à travers l'environnement. Faites des jets d'INS + percepion pour progresser jusqu'à tomber sur votre cible. Vous et vos alliés avez avantage au prochain jet d'Initiative. En combat, vous pouvez utiliser cette action principale pour repérer une créature furtive."
        },
        {
          "id": "voyageur",
          "type": "discrétion",
          "rank": 3,
          "title": "Voyageur",
          "action": "gratuite",
          "icon": highpunch,
          "color": "green-dark",
          "tooltip": "Vos expériences en nature vous ont permis de développer une grande aisance en voyages. Vous avez avantage à vos jets de déplacement, survie et discrétion lorsque vous êtes dans votre milieu de prédilection (rural ou urbain)."
        },
        {
          "id": "dissimulation",
          "type": "discrétion",
          "rank": 4,
          "title": "Dissimulation",
          "action": "limitée",
          "icon": highpunch,
          "color": "green-dark",
          "tooltip": "Vous savez utiliser les éléments de votre environnement de prédilection (rural ou urbain) pour vous dissimuler. Une fois après un repos long, vous pouvez relancer un jet de furtivité dans ces conditions. En combat, vous pouver utiliser une action limitée pour donner un avantage au score de furtivité d'un joueur adjacent. "
        },
        {
          "id": "leurre",
          "type": "discrétion",
          "rank": 5,
          "title": "Leurre",
          "action": "limitée",
          "icon": highpunch,
          "color": "green-dark",
          "tooltip": "Vous vous fondez dans votre environnement tout en faisant croire à vos adversaires que vous maintenez votre position initiale. lancez un jet d'INS+discrétion pour effectuer un mouvement gratuit en réaction à une action adverse avant le début de votre prochain tour. De plus, vous avez avantage à vos jets de discrétion."
        },
      ],
    },
  ],
  "ésotérisme": [
    {
      "name": "détection",
      "content": [
        {
          "id": "assiduité",
          "type": "détection",
          "rank": 1,
          "title": "Assiduité",
          "action": "gratuite",
          "icon": highpunch,
          "color": "blue-dark",
          "tooltip": "Vous êtes atentifs lors de vos recherches et pouvez relancer vos jets de fouille et d'enquête, sauf en cas de fiasco."
        },
        {
          "id": "alignement",
          "type": "détection",
          "rank": 2,
          "title": "Alignement",
          "action": "gratuite",
          "icon": highpunch,
          "color": "blue-dark",
          "tooltip": "Votre connaissance des caractères et vos sens surnaturels vous permettent de déduire l'alignement d'une créature ou d'un individu en réussissant un jet d'INS + perception."
        },
        {
          "id": "faiblesses",
          "type": "détection",
          "rank": 3,
          "title": "Faiblesses",
          "action": "limitée",
          "icon": highpunch,
          "color": "blue-dark",
          "tooltip": "Vous avez étudié les différents mythes et monstres et pouver trouver les points faibles de vos ennemis connus. Lancez un jet d'Enquête contre un type de monstre pour déceler un point faible ou une propriété particulière."
        },
        {
          "id": "nerfs",
          "type": "détection",
          "rank": 4,
          "title": "Nerfs d'acier",
          "action": "limitée",
          "icon": highpunch,
          "color": "blue-dark",
          "tooltip": "Vos expériences avec le surnaturel ont renforcé votre esprit. Vous avez avantage contre les jets de PEUR et COU. Vous pouvez utiliser cette action en combat pour gagner une resistance aux dégats spectraux jusqu'à votre prochain tour."
        },
        {
          "id": "Clairvoyance",
          "type": "détection",
          "rank": 5,
          "title": "clairvoyance",
          "action": "principale",
          "icon": highpunch,
          "color": "blue-dark",
          "tooltip": "Vos yeux et votre esprit voient au-dela des artifices : vous percez à jour les déguisements magiques et les transformations temporaires ou permanentes. En combat, vous pouvez utiliser cette action pour détecter un personnage invisible, un spectre ou un esprit, ou une créature cachée en réussissant un jet de perception."
        },
      ],
    },
    {
      "name": "ésotérisme",
      "content": [
        {
          "id": "augures",
          "type": "ésotérisme",
          "rank": 1,
          "title": "Augures",
          "action": "principale",
          "icon": highpunch,
          "color": "blue-dark",
          "tooltip": "Vous utilisez vos dons de divination pour obtenir des signes du destin proche. Lancez un jet d'INS + divination pour obtenir des augures vagues en réponse à une question."
        },
        {
          "id": "communion",
          "type": "ésotérisme",
          "rank": 2,
          "title": "communion",
          "action": "gratuite",
          "icon": highpunch,
          "color": "blue-dark",
          "tooltip": "Vous posez une question aux cieux et attendez une manifestation divine. Lancez un jet de CHA + divination pour obtenir une réponse binaire mais assurée."
        },
        {
          "id": "talisman",
          "type": "ésotérisme",
          "rank": 3,
          "title": "Talisman",
          "action": "gratuite",
          "icon": highpunch,
          "color": "blue-dark",
          "tooltip": "Vous façonnez un talisman protecteur que vous pouvez donner, et qui éloigne les mauvais esprits. Un seul talisman peut être actif en tout temps. Il confère une protection aux dégats spectraux égal à votre bonus de SEN et les spectres doivent faire un jet de COU contre le CHA du porteur ou garder leurs distances."
        },
        {
          "id": "spiritisme",
          "type": "ésotérisme",
          "rank": 4,
          "title": "Spiritisme",
          "action": "gratuite",
          "icon": highpunch,
          "color": "blue-dark",
          "tooltip": "Vous purifiez un lieu ou un objet de sa présence en lançant un jet de SEN+ésotérisme. Si vous réussissez vous pouvez également donner + 1 degat/protection spectraux à un objet ou une armure que vous touchez jusqu'à la fin du combat."
        },
        {
          "id": "divination",
          "type": "ésotérisme",
          "rank": 5,
          "title": "Divination",
          "action": "principale",
          "icon": highpunch,
          "color": "blue-dark",
          "tooltip": "Vous pouvez cibler un endroit ou une créature pour observer quelaues instants de sa localisation et son apparence lors d'un repos. Ajoutez un désavantage à chaque fois si vous ne connaissez pas le nom, n'avez jamais croisé ou avez une description indirecte de la cible."
        },
      ],
    },
    {
      "name": "perception",
      "content": [
        {
          "id": "présence",
          "type": "perception",
          "rank": 1,
          "title": "Présence",
          "action": "principale",
          "icon": highpunch,
          "color": "blue-dark",
          "tooltip": "Vos sens paranormaux vous permettent de ressentir la présence de créatures surnaturelles. Votre perception agit contre les spectres, esprits et morts-vivants comme s'il s'agissaient de créatures vivantes."
        },
        {
          "id": "vision",
          "type": "perception",
          "rank": 2,
          "title": "Vision nocturne",
          "action": "gratuite",
          "icon": highpunch,
          "color": "blue-dark",
          "tooltip": "Vos yeux se sont impregnés d'une force psychique et vous pouvez désormais capter plus de lumière, vous permettant de voir dans la pénombre. Vous pouvez voir dans le noir tant qu'il existe une faible lueur."
        },
        {
          "id": "sévérité",
          "type": "perception",
          "rank": 3,
          "title": "Sévérité",
          "action": "gratuite",
          "icon": highpunch,
          "color": "blue-dark",
          "tooltip": "Vous résistez aux jets de séduction et de charme avec un avantage et obtenez un bonus de CHA à vos jets d'Intimidation."
        },
        {
          "id": "sensocculte",
          "type": "perception",
          "rank": 4,
          "title": "Sens occulte",
          "action": "gratuite",
          "icon": highpunch,
          "color": "blue-dark",
          "tooltip": "Votre prescience vous permet d'anticiper les épreuves et de voir les dangers quelaues instancts avant leur apparition, vous pouvez relancer vos jets de perception et de logique, sauf en cas de 1. En combat, utilisez cette action limitée pour gagner un avantage en défense."
        },
        {
          "id": "transe",
          "type": "perception",
          "rank": 5,
          "title": "Transe",
          "action": "principale",
          "icon": highpunch,
          "color": "blue-dark",
          "tooltip": "Vous réaliser un rituel lors d'un repos pour pour vous octroyer un niveau de conscience augmenté pendant 4h. Vos sorts et vos divinations sont réalisêes avec avantage et vous pouvez relancer les jets contre les charmes et les ensorcelements qui vous ciblent. En combat, cette action utilise tout votre tour et dure #esoterisme tours."
        },
      ],
    },
  ],
  "défense": [
    {
      "name": "combat",
      "content": [
        {
          "id": "choc",
          "type": "combat",
          "rank": 1,
          "title": "Choc",
          "action": "gratuite",
          "icon": highpunch,
          "color": "blue",
          "tooltip": "Lors d'une attaque ennemie, vous usez de votre bouclier comme d'une arme et frappez dans la mêlée. Si l'attaque de votre adversaire èchoue, il subit 1d3 dégats de votre bouclier."
        },
        {
          "id": "deviation",
          "type": "combat",
          "rank": 2,
          "title": "Déviation",
          "action": "limitée",
          "icon": highpunch,
          "color": "blue",
          "tooltip": "Vous tendez votre bouclier pour sauver votre allié au contact ou essayez de bloquer au moment opportun votre adversaire. Vous lancez un jet d'attaque avec votre bouclier avec désavantage contre l'attaque de votre adversaire. En cas de réussite, vous bloquez l'attaque adverse."
        },
        {
          "id": "vengeance",
          "type": "combat",
          "rank": 3,
          "title": "Vengeance",
          "action": "limitée",
          "icon": highpunch,
          "color": "blue",
          "tooltip": "Attaque en action limitée avec avantage contre un adversaire apres une attaque réussie contre un allié."
        },
        {
          "id": "parade",
          "type": "combat",
          "rank": 4,
          "title": "Parade",
          "action": "gratuite",
          "icon": highpunch,
          "color": "blue-dark",
          "tooltip": "Vous vous lancez dans la mêlée le bouclier en avant et prêt à frapper. Lancez un score d'attaque avec votre bouclier contre une attaque réussie adverse. En cas de succès, vous brisez l'attaque réussie et produisez une attaque avec +1d4 dégats avec votre arme contre l'adversaire. En cas d'échec, votre adversaire inflige des dégats critiques."
        },
        {
          "id": "ouverture",
          "type": "combat",
          "rank": 5,
          "title": "Ouverture",
          "action": "limitée",
          "icon": highpunch,
          "color": "blue",
          "tooltip": "Vous ouvrez la garde adverse et votre prochaine attaque ce tour a 2 avantages. Les alliés au contact ont un avantage supplémentaire pour toucher la cible."
        },
      ],
    },
    {
      "name": "défense",
      "content": [
        {
          "id": "couverture",
          "type": "défense",
          "rank": 1,
          "title": "Couverture",
          "action": "limitée",
          "icon": highpunch,
          "color": "blue",
          "tooltip": "Vous placez votre bouclier au dessus de votre tête pour vous protéger, vous ou vos alliés. Vous pévenez les dégats de tir de la valeur du bouclier, mais réduisez votre score de défense (sans bouclier)."
        },
        {
          "id": "encaisse",
          "type": "défense",
          "rank": 2,
          "title": "Encaisse",
          "action": "limitée",
          "icon": highpunch,
          "color": "blue",
          "tooltip": "Vous vous campez derrière votre bouclier et subissez les attaques ennemies. Les adversaire ont un avantage pour vous toucher tant que vous gardez la position, mais vous réduisez les dégats physiques que vous recevez de la valeur de votre bouclier jusqu'au début du prochain tour. Vous ne pouvez pas attaquer dans cette position."
        },
        {
          "id": "bélier",
          "type": "défense",
          "rank": 3,
          "title": "Bélier",
          "action": "principale",
          "icon": highpunch,
          "color": "blue",
          "tooltip": "À la place de votre attaque, vous avancez en ligne droite jusqu’à votre distance de marche et frappez votre cible brutalement. Lancez d12 + FOR pour battre le score de défense de votre cible et vous infligez 2x bonus FOR dégâts. Si vous échouez, vous subissez un désavantage sur votre défense jusqu'au début de votre prochain tour. Si vous réussissez, votre adversaire tombe au sol et doit se relever à son prochain tour en mobilisant une action."
        },
        {
          "id": "domination",
          "type": "défense",
          "rank": 4,
          "title": "Domination",
          "action": "gratuite",
          "icon": highpunch,
          "color": "blue",
          "tooltip": "Après attaque une réussie, votre prochaine attaque contre cette même cible entraine un jet d'END pour éviter un renversement"
        },
        {
          "id": "protection",
          "type": "défense",
          "rank": 5,
          "title": "Protection",
          "action": "principale",
          "icon": highpunch,
          "color": "blue",
          "tooltip": "Vous effectuez votre défense avec un bonus de la Valeur de Bouclier pour reduire tous les dégats physiques et la moitié des dégats magiques."
        },
      ],
    },
    {
      "name": "physique",
      "content": [
        {
          "id": "posture",
          "type": "physique",
          "rank": 1,
          "title": "Posture",
          "action": "gratuite",
          "icon": highpunch,
          "color": "blue",
          "tooltip": "Évite une perte de durabilité sur armure en cas de jet d'AGI+physique réussi contre le score d'attaque adverse. Peut être utilisé en réaction gratuite pour gagner un avantage pour résister à un jet de renversement ou poussée."
        },
        {
          "id": "mule",
          "type": "physique",
          "rank": 2,
          "title": "Mûle",
          "action": "gratuite",
          "icon": highpunch,
          "color": "blue",
          "tooltip": "Réduit la charge des armures par le bonus de FOR. Peut utiliser cette action pour retirer un désavantage sur un jet d'AGI ou MOU en réaction."
        },
        {
          "id": "rempart",
          "type": "physique",
          "rank": 3,
          "title": "Rempart",
          "action": "limitée",
          "icon": highpunch,
          "color": "blue",
          "tooltip": "Vous vous placez dans une position difficile ou vous bloquez le passage ennemi et protégez les arrières de vos alliés ou un emplacement. Les ennemis qui veulent se déplacer autour de vous (3m) doivent réussir un jet d’AGI ou subir une de vos attaques. Faites un jet de COU au debut de vos prochains tours avec désavantage pour chaque ennemi au corps à corps avec vous au-delà de 1. En cas d’échec vous devez quitter votre position (vous subissez une attaque de la part de l’ennemi le plus direct si vous manquez votre dérobade)."
        },
        {
          "id": "duracuir",
          "type": "physique",
          "rank": 4,
          "title": "Dur-à-cuir",
          "action": "gratuite",
          "icon": highpunch,
          "color": "blue",
          "tooltip": "Vous réduisez les dégats physiques de votre bonus d'END brut. Peut utiliser l'action pour réduire les dégats de la valeur d'armure une fois par repos long."
        },
        {
          "id": "indomptable",
          "type": "physique",
          "rank": 5,
          "title": "Indomptable",
          "action": "gratuite",
          "icon": highpunch,
          "color": "blue",
          "tooltip": "Si une attaque ennemie doit vous mettre inconscient, lance un jet d'END avec bonus de valeur d'armure contre le score d'attaque. En cas de succès vous restez de bout avec 1d3+bonus d'END VIE ou votre VIE initiale. Cette technique est utilisée en réaction."
        },
      ],
    },
  ],
  "soin": [
    {
      "name": "survie",
      "content": [
        {
          "id": "cueilleuir",
          "type": "survie",
          "rank": 1,
          "title": "Cueilleur",
          "action": "principale",
          "icon": highpunch,
          "color": "pink",
          "tooltip": "Vous êtes capable d'identifier les plantes et champignons avec précisions : lancez un jet d'ERU + survie pour trouver de nouvelles ressources (bonus d'ERU). De plus vos récoltes sont augmentées de 1."
        },
        {
          "id": "tisane",
          "type": "survie",
          "rank": 2,
          "title": "Tisane",
          "action": "principale",
          "icon": highpunch,
          "color": "pink",
          "tooltip": "Vous préparez des infusions en usant de vos ingrédients récoltés pour apaiser vos compagnons. Vous et vos alliés gagnez un avantage en rémission ou en veille durant le repos en cours. Vous pouvez également utiliser cette action pour donner avantage à un jet de mort ou un jet de sobriété d'un allié."
        },
        {
          "id": "stimulant",
          "type": "survie",
          "rank": 3,
          "title": "Stimulant",
          "action": "limitée",
          "icon": highpunch,
          "color": "pink",
          "tooltip": "Vous concoctez de puissants stimulants et remèdes à partir des ingrédients en votre possession lors d'un repos. Vos compagnons ont un avantage aux jets d'END et FOR durant les prochaines 4h. Vous pouvez utiliser cette action pour gagner +survie en MOU, AGI ou FOR jusqu'à votre prochain tour."
        },
        {
          "id": "poison",
          "type": "survie",
          "rank": 4,
          "title": "Poison",
          "action": "limitée",
          "icon": highpunch,
          "color": "pink",
          "tooltip": "Vous préparez de terribles poisons pour enduire vos armes ou empoisonner des mets. Vous pouvez imbiber du poison sur une de vos armes qui infligera 1d4 dmg supplémentaire pour votre bonus d'ERU en cas d'èchec de jet d'END. De plus vous avantage à vos jets de résistance au poison."
        },
        {
          "id": "regen",
          "type": "survie",
          "rank": 5,
          "title": "Régénération",
          "action": "limitée",
          "icon": highpunch,
          "color": "pink",
          "tooltip": "Vous préparez un elixir de soin fulgurant en consommant vos ressources. Une potion de votre concoction ou une potion de soin confère de la VIE temporaire et 1d4 de régénération pour 4h."
        },
      ],
    },
    {
      "name": "soin",
      "content": [
        {
          "id": "désinfection",
          "type": "soin",
          "rank": 1,
          "title": "Désinfection",
          "action": "principale",
          "icon": highpunch,
          "color": "pink",
          "tooltip": "Vous pouvez retirer les conditions d'infection et de plaie purulente lors de vos soins. En combat, vous pouvez aussi utiliser cette action pour retirer 1 point nécrotique s'il a été obtenu ce combat."
        },
        {
          "id": "affliction",
          "type": "soin",
          "rank": 2,
          "title": "Affliction",
          "action": "principale",
          "icon": highpunch,
          "color": "pink",
          "tooltip": "Vous utilisez vos connaissances pour analyser et soigner les maux qui affectent vos alliés. Lancez un jet d'ERU + soin pour retirer une affliction suivante après un repos court : paralysie, poison, brûlure, saignement"
        },
        {
          "id": "coupe-feu",
          "type": "soin",
          "rank": 3,
          "title": "Coupe-feu",
          "action": "principale",
          "icon": highpunch,
          "color": "pink",
          "tooltip": "Vous soignez vos alliés ou vous même en leur conférant 1d3 VIE temporaire et une résistance au feu pendant #soin tours ou jusqu'à recevoir leurs premiers dégats de feu."
        },
        {
          "id": "renouveau",
          "type": "soin",
          "rank": 4,
          "title": "Renouveau",
          "action": "principale",
          "icon": highpunch,
          "color": "pink",
          "tooltip": "Vos soins confèrent de la VIE temporaire non-récupérable. En combat vous pouvez utilisez cette action pour vous donner un bonus de 1d3VIE et retirer une condition physique qui vous affecte."
        },
        {
          "id": "vitalité",
          "type": "soin",
          "rank": 5,
          "title": "Vitalité",
          "action": "principale",
          "icon": highpunch,
          "color": "pink",
          "tooltip": "Vous repoussez les limites de la vie en conférant à votre allié un second souffle alors qu'il était inconscient : le joueur doit toujours lancer un jet de mort croissant au début de son tour mais il peut agir après s'être relever. Les attaques qu'il subit sont réduites de 1d3 dégats pour son prochain tour."
        },
      ],
    },
    {
      "name": "science",
      "content": [
        {
          "id": "assurance",
          "type": "science",
          "rank": 1,
          "title": "Assurance",
          "action": "principale",
          "icon": highpunch,
          "color": "pink",
          "tooltip": "Votre entraînement vous permet de soigner vos alliés efficacement. Vous pouvez relancer les jets de soin en cas de  1. En combat vous pouvez donner un bonus de +1d3 VIE à un allié inconscient, sans dépasser 0 VIE."
        },
        {
          "id": "engourdissement",
          "type": "science",
          "rank": 2,
          "title": "Engourdissement",
          "action": "limitée",
          "icon": highpunch,
          "color": "pink",
          "tooltip": "Vous ciblez une créature adjacente ou vous-même : elle réduit les dégats subis de 1d3  et fait ses jets d'END avec avantage pendant #soin tours, mais réalise ses jets de morts et de combat avec désavantage. "
        },
        {
          "id": "stabilisation",
          "type": "science",
          "rank": 3,
          "title": "Stabilisation",
          "action": "principale",
          "icon": highpunch,
          "color": "pink",
          "tooltip": "Vos connaissances en médecine vous permettent de secourir vos alliés tombés au combat. Lancez un jet de DEX + soin pour ramener une créature inconsciente à 1 VIE."
        },
        {
          "id": "chirurgie",
          "type": "science",
          "rank": 4,
          "title": "Chirurgie",
          "action": "gratuite",
          "icon": highpunch,
          "color": "pink",
          "tooltip": "Vos compétences de médecine et vos connaissances en anatomie vous permettent de réparer les corps. Lancez un jet de DEX+soin pour guérir une affliction suivante chez une créature : nécrose, amputation, fracture. Vos dégats de saignements sont augmentés de 1 et leur difficulté est augmentée."
        },
        {
          "id": "pointvital",
          "type": "science",
          "rank": 5,
          "title": "Point vital",
          "action": "principale",
          "icon": highpunch,
          "color": "pink",
          "tooltip": "Votre connaissance des organes vitaux vous permet d'effectuer une action précise et fatale. Vous pouvez utiliser cette action pour effectuer une attaque qui provoque un jet de COU. En cas d'èchec de votre adversaire il subit #soin dmg supplémentaires. En cas de touche critique la créature tombe également inconsciente."
        },
      ],
    },
  ]
}


export default featsFR
