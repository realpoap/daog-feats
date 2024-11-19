//ranged
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

//brawl
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
import skelet from '../assets/svg/skeleton-inside.svg'
import highpunch from '../assets/svg/slap.svg'

//fight
import power from '../assets/svg/mighty-force.svg'
import hammering from '../assets/svg/hammer-drop.svg'
import vortex from '../assets/svg/spinning-sword.svg'
import suckerblow from '../assets/svg/rogue.svg'
import barfight from '../assets/svg/broken-bottle.svg'
import allforone from '../assets/svg/all-for-one.svg'
import charging from '../assets/svg/charging-bull.svg'
import thunderblade from '../assets/svg/thunder-blade.svg'
import backpain from '../assets/svg/back-pain.svg'
import backstab from '../assets/svg/backstab.svg'
import conqueror from '../assets/svg/conqueror.svg'
import split from '../assets/svg/split-body.svg'
import riposte from '../assets/svg/riposte.svg'
import muscleup from '../assets/svg/muscle-up.svg'
import ricochet from '../assets/svg/ricochet.svg'
import sprint from '../assets/svg/sprint.svg'
import swordclash from '../assets/svg/sword-clash.svg'
import desarm from '../assets/svg/drop-weapon.svg'

// healing
import collect from '../assets/svg/berries-bowl.svg'
import coffee from '../assets/svg/coffee-mug.svg'
import anatomy from '../assets/svg/anatomy.svg'
import poison from '../assets/svg/poison-bottle.svg'
import stimulant from '../assets/svg/miracle-medecine.svg'
import transfuse from '../assets/svg/transfuse.svg'
import firehand from '../assets/svg/fire-spell-cast.svg'
import deadlystrike from '../assets/svg/deadly-strike.svg'
import armbandage from '../assets/svg/arm-bandage.svg'
import healingpotion from '../assets/svg/heart-bottle.svg'
import vitalpoint from '../assets/svg/internal-injury.svg'
import desinfect from '../assets/svg/healing.svg'
import stabilize from '../assets/svg/bleeding-heart.svg'
import plaster from '../assets/svg/sticking-plaster.svg'
import coma from '../assets/svg/coma.svg'

//defense
import crackedhelm from '../assets/svg/cracked-helm.svg'
import shieldbash from '../assets/svg/shield-bash.svg'
import choc from '../assets/svg/spiked-shield.svg'
import deviation from '../assets/svg/shield-impact.svg'
import pummeled from '../assets/svg/pummeled.svg'
import vengeance from '../assets/svg/one-eyed.svg'
import parade from '../assets/svg/shield-reflect.svg'
import cover from '../assets/svg/attached-shield.svg'
import domination from '../assets/svg/armor-punch.svg'
import protection from '../assets/svg/armor-upgrade.svg'
import stomp from '../assets/svg/quake-stomp.svg'
import tough from '../assets/svg/black-knight-helm.svg'
import rempart from '../assets/svg/surrounded-shield.svg'
import opening from '../assets/svg/winged-shield.svg'
import armor from '../assets/svg/breastplate.svg'



//crafting
import anvil from '../assets/svg/anvil-impact.svg'
import repair from '../assets/svg/auto-repair.svg'
import swiss from '../assets/svg/swiss-army-knife.svg'
import sabotage from '../assets/svg/broken-axe.svg'
import metalarm from '../assets/svg/mechanical-arm.svg'
import trap from '../assets/svg/wolf-trap.svg'
import lovemachine from '../assets/svg/love-mystery.svg'
import patron from '../assets/svg/inspiration.svg'
import sketch from '../assets/svg/pencil-brush.svg'
import desarmorce from '../assets/svg/hair-strands.svg'
import decoration from '../assets/svg/bow-tie-ribbon.svg'
import runesword from '../assets/svg/diamond-hilt.svg'
import jewelbox from '../assets/svg/ring-box.svg'
import efficiency from '../assets/svg/gear-hammer.svg'
import analyse from '../assets/svg/fleur-de-lys.svg'

//magic
import candle from '../assets/svg/candle-flame.svg'
import zaap from '../assets/svg/bolt-spell-cast.svg'
import aura from '../assets/svg/aura.svg'
import ghost from '../assets/svg/ghost-ally.svg'
import glowing from '../assets/svg/glowing-hands.svg'
import magicshield from '../assets/svg/magic-shield.svg'
import book from '../assets/svg/spell-book.svg'
import scroll from '../assets/svg/scroll-unfurled.svg'
import telepathy from '../assets/svg/telepathy.svg'
import infusion from '../assets/svg/sparkling-sabre.svg'
import wisdom from '../assets/svg/wisdom.svg'
import pentagram from '../assets/svg/pentagram-rose.svg'
import magicpalm from '../assets/svg/magic-palm.svg'
import windhole from '../assets/svg/wind-hole.svg'
import monkey from '../assets/svg/monkey.svg'

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
          "tooltip": "Vous préparez votre tir pour l’apparition de l’ennemi. Vous pouvez faire un tir contre la cible lors de son tour, sans malus pendant votre tour suivant. Les armes devant être rechargées subissent tout de même ce malus."
        },
        {
          "id": "rechange",
          "type": "minutie",
          "rank": 2,
          "title": "Rechange",
          "action": "limitée",
          "icon": bowstring,
          "color": "green",
          "tooltip": "Vous manipulez votre arme brisée et trouvez rapidement un moyen de la réparer en utilisant une corde ou un outil dédié. Lancez un jet de DEX avec désavantage : en cas de réussite votre arme est à nouveau fonctionnelle et vous pouvez tirer dans le tour si elle est chargée et que vous avez assez d'action."
        },
        {
          "id": "bleed",
          "type": "minutie",
          "rank": 3,
          "title": "Saignée",
          "action": "principale",
          "icon": bleed,
          "color": "green",
          "tooltip": "Vous choisissez une partie exposée de votre cible pour lui infliger une blessure profonde. Faites un tir avec désavantage qui provoque 1d3 saignements supplémentaire. La cible subit un malus a ses jets de resistance aux saignements égal a votre score de minutie."
        },
        {
          "id": "aim",
          "type": "minutie",
          "rank": 4,
          "title": "Visée Juste",
          "action": "principale",
          "icon": target,
          "color": "green",
          "tooltip": "Vous relaxez votre corps et posez votre respiration alors que vous attendez le meilleur instant pour tirer. Votre tir est fait avec avantage  et ignore les conditions defavorables si vous utilisez 2 actions principaes, et inflige les dégâts de l’arme + bonus de DEX + votre score de minutie. La cible touchée doit réussir un jet de COU ou s'éloigner de vous pour se mettre a couvert ou fuir."
        },
        {
          "id": "friendly",
          "type": "minutie",
          "rank": 5,
          "title": "Tir allié",
          "action": "gratuite",
          "icon": friendly,
          "color": "green",
          "tooltip": "Vous pouvez tirer sans désavantage vers et depuis une mêlée, même si vos alliés sont au contact de l'ennemi. Tout de suite après avoir tiré, vous pouvez faire une action de bond gratuite en lançant un jet d'AGI."
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
          "tooltip": "Vous pouvez vous déplacer durant vos tours tant que vous maintenez un tir de barrage. Les créatures ennemies qui voudraient approcher à portée de tir doivent réussir un jet d’AGI contre votre score de tir ou subir 1 + votre bonus de DEX."
        },
        {
          "id": "penalty",
          "type": "tir",
          "rank": 2,
          "title": "Tir pénalisant",
          "action": "principale",
          "icon": penalty,
          "color": "green",
          "tooltip": "Vous ciblez un membre sur votre cible pour nuire à sa progression. Vous effectuez votre tir avec désavantage en visant les jambes pour donner -5 MOU et désavantage aux jets de combat et AGI en cas de succès."
        },
        {
          "id": "reload",
          "type": "tir",
          "rank": 3,
          "title": "Recharge rapide",
          "action": "gratuite",
          "icon": quiver,
          "color": "green",
          "tooltip": "Vous connaissez votre arme et êtes capable de recharger les yeux fermés. Vous diminuez de 1 le nombre de tours de rechargement requis par dizaine de DEX. Si le temps de rechargement est alors de 0, vous pouvez tirer dans le même tour comme dans le cas d'un arc."
        },
        {
          "id": "giant",
          "type": "tir",
          "rank": 4,
          "title": "Chasse-Géant",
          "action": "principale",
          "icon": giantkiller,
          "color": "green",
          "tooltip": "Face à une créature large ou plus grande vous prenez votre courage à deux mains pour infliger des dégâts lourds en attendant d’etre assez proche de votre ennemi. Jetez un jet de tir normal avec avantage selon la taille de l’ennemi. Vous infligez vos dégâts +  score de tir (+ bonus de FOR si vous maniez un arc ou une arme à lancer), et relancez le dé de dégat en cas de 1. (Suivez les règles de créature immense si elles s'appliquent: si vous êtes à courte distance, lancez un jet de peur à la place de votre jet pour toucher)."
        },
        {
          "id": "double",
          "type": "tir",
          "rank": 5,
          "title": "Double tir",
          "action": "principale",
          "icon": doubleshot,
          "color": "green",
          "tooltip": "Vous placez deux traits dans votre arme et tirez les deux conjointement en adaptant votre geste. Votre tir subit un désavantage pour toucher mais vous lancez 2 fois vos dégâts en cas de réussite. OU Vous utilisez votre autre main pour manier une seconde arme. Vous lancez deux jets pour toucher (un pour chaque arme). Vous pouvez choisir des cibles différentes pour vos 2 tirs, mais vous tirez alors avec un désavantage sur chacun des jets."
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
          "tooltip": "Vous mettez un coup d’épaule bien placé à votre adversaire afin de le pousser. Lancez un jet d'attaque contre la DEF adverse avec 1d4 avantage pour chaque dizaine en FOR au dessus de celle de votre adversaire. En cas de réussite votre cible est repoussée de quelques mètres et n’est plus engagée au corps à corps avec vous. Elle subira un désavantage en DEF jusqu’au début de son prochain tour. "
        },
        {
          "id": "throw",
          "type": "physique",
          "rank": 2,
          "title": "Jeté",
          "action": "principale",
          "icon": thrown,
          "color": "orange",
          "tooltip": "Vous devez immobiliser l'adversaire pour réaliser cette technique ou réussir un jet d'attaque AGI. Vous saisissez votre adversaire et vous poussez sur vos cuisses pour le projeter au loin. Vous pouvez lancer votre adversaire sur d’autres cibles. L’adversaire est envoyé à une distance égale à votre bonus de FOR et subit 1d3 dégâts + bonus de FOR (ceux qui sont touchés par la cible du jeté subissent 1d3 dégats)."
        },
        {
          "id": "balance",
          "type": "physique",
          "rank": 3,
          "title": "Appuis",
          "action": "gratuite",
          "icon": balance,
          "color": "orange",
          "tooltip": "Votre équilibre est perfectionné à son paroxysme et vos appuis sont solides : vous n'avez pas de désavantage aux jets de FOR contre une cible plus grande que vous. Vous pouvez utilier cette action pour résister à un effet de renversement et relancer votre jet de dé."
        },
        {
          "id": "insensitivity",
          "type": "physique",
          "rank": 4,
          "title": "Insensibilité",
          "action": "limitée",
          "icon": insens,
          "color": "orange",
          "tooltip": "Votre corps est endurci par les coups et les entraînements : vous êtes résistant aux coups contondants et réduisez de 1 tous les autres dégats physiques. Vous pouvez utiliser cette action pour récupérer automatiquement aprés être sonné une fois par combat."
        },
        {
          "id": "suplex",
          "type": "physique",
          "rank": 5,
          "title": "Souplesse",
          "action": "principale",
          "icon": skelet,
          "color": "orange",
          "tooltip": "Vous vous placez dans le dos de votre adversaire ou le saisissez par terre pour le soulever et le retourner derrière vous. Lancez un jet de FOR avec désavantage contre la défense de votre cible. Alors que son corps s’écrase au sol, il subit 3d4 dégâts + son armure + votre bonus de FOR. L’adversaire est sonné au début de son prochain tour et doit réussir un jet d’END pour reprendre ses esprits au tour suivant. Vous n'avez pas de désavantage au jet de FOR si vous immobilisez la cible."
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
          "tooltip": "Vous saisissez le corps de votre adversaire avec vos membres et vous l'empêchez de se mouvoir. Pendant toute la durée de l’immobilisation vous subissez des touches automatiques de la part des autres adversaires en mêlée avec vous. Au début de son tour, la cible immobilisée doit réussir un jet de FOR contre vous avec désavantage ou rester immobilisée et subir 1d3 dégats. Vous pouvez placer des techniques de lutte contre votre cible immobilisée."
        },
        {
          "id": "pinch",
          "type": "lutte",
          "rank": 2,
          "title": "Jambette",
          "action": "principale",
          "icon": bootkick,
          "color": "orange",
          "tooltip": "Vous saisissez votre adversaire par le col et passez votre hanche autour de votre adversaire pour lui faire perdre l’équilibre. Lancez un jet d’AGI + 1d12 contre l’attaque de votre adversaire. En cas de réussite, votre cible est à terre et subit un désavantage sur tous ses jets jusqu’à la fin de son prochain tour. Vous avez avantage à cette action si vous immobilisez déjà votre adversaire."
        },
        {
          "id": "blow",
          "type": "lutte",
          "rank": 3,
          "title": "Coup appuyé",
          "action": "principale",
          "icon": punchblast,
          "color": "orange",
          "tooltip": "Vous placez un coup de coude ou de genou dans les côtes de votre adversaire proche afin de gagner un avantage majeur sur le combat. Réalisez votre attaque : en cas de succès, l’adversaire subit 2d4 dégâts supplémentaires, et doit réussir un jet d’END ou perdre 1 action principale pour son prochain tour et annuler ses concentrations et réactions. En cas d'échec critique la cible est sonnée."
        },
        {
          "id": "strangulation",
          "type": "lutte",
          "rank": 4,
          "title": "Étranglement",
          "action": "principale",
          "icon": strangle,
          "color": "orange",
          "tooltip": "Vous devez immobiliser l'adversaire pour réaliser cette technique ou réussir un jet d'attaque AGI. Vous placez vos mains autour du cou de votre adversaire dans un geste vif et implacable. Il perd 1d4 VIE+bonus FOR, pour chaque tour passé étranglé. Au début de son tour, la cible doit effectuer un test d'END de difficulté croissante à chaque tour ou être inconscient. Lancez un jet de FOR contre la FOR de la cible à chaque nouveau tour d'étranglement pour maintenir votre emprise et infliger les dégats."
        },
        {
          "id": "neck",
          "type": "lutte",
          "rank": 5,
          "title": "Brise-nuque",
          "action": "principale",
          "icon": neck,
          "color": "orange",
          "tooltip": "Vous devez immobiliser l'adversaire pour réaliser cette technique ou réussir un jet d'attaque AGI. Vous vous placez derrière l’ennemi et glissez vos mains autour de sa tête pour lui briser d’un coup sec la nuque. Le joueur subit 4d4 dégâts+bonus FOR. Il est sonné et à terre à moins de réussir son jet d'END contre votre FOR."
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
          "tooltip": "Vous pouvez jouer cette action après qu'une creature vous attaque. Ajoutez votre bonus d'INS à votre défense. En cas d'échec de l'attaque, vous assénez une frappe fulgurante en évitant le coup de votre adversaire et infligez vos dégats avec un bonus de 1d4 additionnel.."
        },
        {
          "id": "kick",
          "type": "mouvement",
          "rank": 2,
          "title": "Chassé",
          "action": "principale",
          "icon": kick,
          "color": "orange",
          "tooltip": "Vous stoppez l’avancée d’un assaillant d’un coup de pied bien placé dans les appuis ou la tête. Lancez une attaque en AGI.  En cas de réussite, vous désorientez votre adversaire qui est sonné jusqu’à la fin du tour en cas d’échec de jet d’END, et qui subit 1d6 dommages additionnels. Vous pouvez jouer cette action en réaction avec désavantage si la cible vous charge."
        },
        {
          "id": "fling",
          "type": "mouvement",
          "rank": 3,
          "title": "Projection",
          "action": "principale",
          "icon": dump,
          "color": "orange",
          "tooltip": "Vous devez immobiliser l'adversaire pour réaliser cette technique ou réussir un jet d'attaque AGI. Vous placez votre hanche contre votre adversaire en le saisissant fermement, et vous le faites passer par-dessus vous dans un mouvement dynamique. Lfaka cible est envoyée au loin et doit réussir un test d’INS ou se retrouver désarmée. Elle subit 2d3 dégâts + votre bonus de FOR et doit réussir un test de COU au début de son tour pour pouvoir effectuer une action ou réagir."
        },
        {
          "id": "wind",
          "type": "mouvement",
          "rank": 4,
          "title": "Passe-vent",
          "action": "gratuite",
          "icon": wind,
          "color": "orange",
          "tooltip": "Vous avez un avantage contre les attaques à distance et pour les esquives. Vous pouvez utiliser cette action pour effectuer un bond gratuit sans jeter de dé une fois par tour."
        },
        {
          "id": "downpour",
          "type": "mouvement",
          "rank": 5,
          "title": "Déluge",
          "action": "principale",
          "icon": downpour,
          "color": "orange",
          "tooltip": "Vous assénez un véritable déluge de coups contre une cible unique au corps-à-corps. Lancez une attaque qui inflige 1d6 fois votre bonus de MOU +1 et à laquelle s'applique vos éventuels bonus. Vous pouvez réaliser cette action plus d'une fois par tour."
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
          "icon": ricochet,
          "color": "red",
          "tooltip": "Avant une attaque adversaire ou à la place de votre attaque, vous pouvez essayer de feinter. Ajoutez votre bonus de perception à votre score d’attaque ou de défense. Si vous échouez en défense, votre adversaire double ses dégats. Si vous jouez cette technique en réaction considérée la comme une action gratuite,"
        },
        {
          "id": "évasion",
          "type": "mouvement",
          "rank": 2,
          "title": "Évasion",
          "action": "gratuite",
          "icon": sprint,
          "color": "red",
          "tooltip": "Vous frappez vivement puis vous glissez sous votre adversaire et utilisez votre vitesse pour sortir du combat sans heurt. Faites votre attaque puis lancez un jet d’AGI + défense avec désavantage pour chaque ennemi au contact. Si vous réussissez vous pouvez sortir de la mêlée sans subir d’attaque de vos adversaires (1m). Vous pouvez utiliser cette action en réaction lors d'une attaque manquée contre vous."
        },
        {
          "id": "tension",
          "type": "mouvement",
          "rank": 3,
          "title": "Tension",
          "action": "gratuite",
          "icon": muscleup,
          "color": "red",
          "tooltip": "Vos bonus de FOR sont appliqués à votre attaque d'AGI, mais vous n'effectuez qu'un seul coup. Vous pouvez utiliser cette action pour relancer un jet de renversement ou de chute."
        },
        {
          "id": "interception",
          "type": "mouvement",
          "rank": 4,
          "title": "Interception",
          "action": "limitée",
          "icon": swordclash,
          "color": "red",
          "tooltip": "Vous concentrez votre attention sur un nouvel assaillant et déviez le coup d’un ennemi au contact vers cette nouvelle cible, ou bloquez la charge vous-même. Lancez un jet d’AGI avec désavantage contre l’attaque de la cible. En cas de réussite vous infligez vos dégâts + 1d4 et la cible est arrêtée dans son attaque."
        },
        {
          "id": "coupbas",
          "type": "mouvement",
          "rank": 5,
          "title": "Coup bas",
          "action": "principale",
          "icon": suckerblow,
          "color": "red",
          "attackType": "AGI",
          "tooltip": "Lorsque vous réussissez un attaque, vous pouvez réaliser une seconde attaque d'AGI avec avantage avec votre arme secondaire ou votre poing contre un adversaire au corps a corps. Cette attaque compte comme une réaction qui peut etre réalisée plusieurs fois par tour. Vous devez avoir une arme dans votre main secondaire ou un bouclier de poing pour appliquer ces dégats (sinon 1-2 dmg bagarre)."
        },
        {
          "id": "tourbilon",
          "type": "mouvement",
          "rank": 5,
          "title": "Tourbillon",
          "action": "principale",
          "icon": vortex,
          "color": "red",
          "attackType": "FOR",
          "tooltip": "Vous observez les ennemis autour de vous et décidez de prolonger votre attaque pour toucher le plus de cibles. Choisissez le nombre de cibles que vous souhaitez frapper: lancez votre première attaque de façon normale, puis lancez un désavantage par ennemi prévu, cumulatifs. Chacune des attaques se base sur le premier score d’attaque + les d4 de désavantage associés à chaque ennemi. Vous ne pouvez faire cette action que durant votre tour."
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
          "icon": charging,
          "color": "red",
          "tooltip": "Vous avancez jusqu’à votre distance de course et frappez votre cible brutalement. Lancez une attaque en FOR avec avantage. Si vous échouez à votre attaque, vous subissez un désavantage sur votre défense jusqu'au début de votre prochain tour."
        },
        {
          "id": "reflexe",
          "type": "combat",
          "rank": 2,
          "title": "Réflexes",
          "action": "gratuite",
          "icon": thunderblade,
          "color": "red",
          "tooltip": "Vous restez leste sur vos appuis, prêt à assener un coup à vos ennemis. Vous vous tenez aux aguets pour frapper quiconque passerait proche de vous. Vous avez une attaque d'opportunité en AGI avec désavantage contre les ennemis au contact qui fuient ou qui se déplaceraient en passant à moins de 3 m de votre position, et ce même s'ils réussissent leur jet de dérobade. "
        },
        {
          "id": "désarmement",
          "type": "combat",
          "rank": 3,
          "title": "Désarmement",
          "action": "principale",
          "icon": desarm,
          "color": "red",
          "attackType": "AGI",
          "tooltip": "À la place de votre attaque, vous pouvez essayer de désarmer l’adversaire. Lancez un jet d12 + AGI + défense avec désavantage ; en cas d’échec l’adversaire peut tenter une attaque contre vous. Vous n’infligez pas de dégâts en cas de réussite mais votre adversaire est désarmé."
        },
        {
          "id": "frappelourde",
          "type": "combat",
          "rank": 3,
          "title": "Frappe lourde",
          "action": "principale",
          "icon": hammering,
          "color": "red",
          "attackType": "FOR",
          "tooltip": "Vous réalisez une attaque à deux mains avec désavantage pour doubler les bonus de FOR."
        },
        {
          "id": "riposte",
          "type": "combat",
          "rank": 4,
          "title": "Riposte",
          "action": "limitée",
          "icon": riposte,
          "color": "red",
          "tooltip": "Après avoir subi une attaque qui n’est pas un coup critique, vous pouvez tenter une riposte et battre le score de défense de votre adversaire en additionnant d12 + arme + attaque. Considérez ce jet comme une attaque normale supplémentaire qui inflige ses dégâts normalement."
        },
        {
          "id": "tactiques",
          "type": "combat",
          "rank": 5,
          "title": "Tactiques",
          "action": "limitée",
          "icon": conqueror,
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
          "icon": barfight,
          "color": "red",
          "tooltip": "Vous avez appris à vous battre dans des ruelles étroites et des tavernes encombrées et savez réagir face à plusieurs adversaires. Les ennemis à votre contact obtiennent un avantage de moins pour la supériorité numérique. Vous pouvez également utiliser cette technique en réaction une fois par combat pour vous retourner vers un adversaire qui vous attaque."
        },
        {
          "id": "renfort",
          "type": "physique",
          "rank": 2,
          "title": "Renfort",
          "action": "limitée",
          "icon": allforone,
          "color": "red",
          "tooltip": "Vous vous placez proche d’un allié et vous essayez d’attirer les coups ennemis vers vous. Vous subissez les prochaines attaques ennemies en réussissant un jet de défense et protégez ainsi votre allié. Vous et votre allié gagnez un avantage sur votre prochain jet de combat."
        },
        {
          "id": "punition",
          "type": "physique",
          "rank": 3,
          "title": "Punition",
          "action": "gratuite",
          "icon": split,
          "color": "red",
          "tooltip": "Vous pouvez réaliser une attaque gratuite avec avantage contre un ennemi qui a manqué son attaque en réaction. Vous infligez vos dégats normalement"
        },
        {
          "id": "assassinat",
          "type": "physique",
          "rank": 4,
          "title": "Assassinat",
          "action": "principale",
          "icon": backstab,
          "color": "red",
          "attackType": "AGI",
          "tooltip": "Vous pouvez realiser une attaque en furtivité avec avantage + 1 avantage si votre adversaire est deja en combat avec un allié ou si vous l'attaquez de dos. La cible doit echouer un jet de perception contre votre discrétion pour que l'attaque soit considérée discrete. Si vous réussissez l'attaque vous infligez vos dégats comme si vous aviez fait un critique."
        },
        {
          "id": "martelement",
          "type": "physique",
          "rank": 4,
          "title": "Martelement",
          "action": "principale",
          "icon": backpain,
          "color": "red",
          "attackType": "FOR",
          "tooltip": "Vous pouvez realiser une attaque en furtivité avec avantage + 1 avantage si votre adversaire est deja en combat avec un allié ou si vous l'attaquez de dos. La cible doit echouer un jet de perception contre votre discrétion pour que l'attaque soit considérée discrete. Si vous réussissez l'attaque vous infligez vos dégats comme si vous aviez fait un critique."
        },
        {
          "id": "puissance",
          "type": "physique",
          "rank": 5,
          "title": "Puissance",
          "action": "gratuite",
          "icon": power,
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
          "icon": candle,
          "color": "purple",
          "tooltip": "Vous envoyez une légère brise d'énergie magique autour de votre corps pour générer une lumière douce, que  vous pouvez concentrer sur votre catalyseur pour l'illuminer comme s'il s'agissait d'une petite torche. Cet effect perdure jusqu'à l'utilisation d'une autre technique ou votre déconcentration, volontaire ou non. En combat vous pouvez utiliser cette action pour créeer un flash brillant sur le bout de votre catalyseur pour donner un désavantage à un ennemi vous attaquant."
        },
        {
          "id": "message",
          "type": "minutie",
          "rank": 2,
          "title": "Message",
          "action": "limitée",
          "icon": telepathy,
          "color": "purple",
          "tooltip": "Vous concentrez les flux magiques pour transmettre un message court à un allié visible. Le message peut comporter un maximum de #magie mots. Accessoirement, vous pouvez lancez un jet de magie pour transmettre ce message à un individu connu éloigné, avec une difficulté relative au nombre de jours de marche vous séparant (1 jour = 20, 2 jours = 25, etc,)."
        },
        {
          "id": "voile",
          "type": "minutie",
          "rank": 3,
          "title": "Voile",
          "action": "limitée",
          "icon": ghost,
          "color": "purple",
          "tooltip": "Vous formez une couche de magie autour de vous pour brouiller votre image. Vos adversaires ont un désavantage pour vous toucher et vous percevoir."
        },
        {
          "id": "télékinésie",
          "type": "minutie",
          "rank": 4,
          "title": "Télékinésie",
          "action": "principale",
          "icon": glowing,
          "color": "purple",
          "tooltip": "Vous ciblez un objet proche à moins de 10 m pour le faire se déplacer à votre volonté. Le poids de l'objet de peut être supérieur à votre bonus de SEN"
        },
        {
          "id": "lévitation",
          "type": "minutie",
          "rank": 5,
          "title": "Lévitation",
          "action": "principale",
          "icon": aura,
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
          "icon": zaap,
          "color": "purple",
          "tooltip": "Vous projetez une pointe magique concentréee pour piquer un ennemi ou allumer un feu de brindilles. Lancez un jet de tir+magie et infligez 1d3 dmg magiques."
        },
        {
          "id": "barrière",
          "type": "magie",
          "rank": 2,
          "title": "Barrière",
          "action": "limitée",
          "icon": magicshield,
          "color": "purple",
          "tooltip": "Vous concentrez votre magie pour former une armure protectrice devant vous. Vous annulez #bonus de SEN dmg magiques jusqu'à votre prochain tour ou jusqu'à ce que la protection soit annulée. "
        },
        {
          "id": "infusion",
          "type": "magie",
          "rank": 3,
          "title": "Infusion",
          "action": "limitée",
          "icon": infusion,
          "color": "purple",
          "tooltip": "Vous envoyez un flux de magie dans un objet ou une arme que vous touchez pour lui conférer une force magique. L'objet est considéré magique et inflige un dé de dégat le plus proche de votre score de magie juqu'à votre prochain tour."
        },
        {
          "id": "contresort",
          "type": "magie",
          "rank": 4,
          "title": "Contresort",
          "action": "gratuite",
          "icon": magicpalm,
          "color": "purple",
          "tooltip": "En réaction, vous pouvez envoyer votre magie pour contrer un sort adverse. Si votre score de #magie est supérieur à la difficulté de lancer du sort ennemi, il est contré instantanément. Sinon vous devez lancer un jet de lancer et battre le score de votre adversaire."
        },
        {
          "id": "transmutation",
          "type": "magie",
          "rank": 5,
          "title": "Transmutation",
          "action": "principale",
          "icon": monkey,
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
          "icon": book,
          "color": "purple",
          "tooltip": "Vous inspectez un objet magique ou un lieu pour déceler le type de magie employé pour l'enchanter, ainsi que la puissance du sort. Lancez un jet de perception magique sur la difficulté du sort. En cas de succès, et si vous connaissez le sort en place, vous pouvez également le nommer et expliquer ses effets. En combat vous pouvez utiliser cette action pour étudier un rituel en cours.."
        },
        {
          "id": "dissipation",
          "type": "savoir",
          "rank": 2,
          "title": "Dissipation",
          "action": "gratuite",
          "icon": windhole,
          "color": "purple",
          "tooltip": "Face à un enchantement externe, vous projetez votre magie pour défaire les liens qui le maintiennent actif. Lancez un jet de magie avec avantage si vous avez identifié le sort et connaissez son type de magie. Si vous dépasser la difficulté de lancement du sort vous pouvez le briser et annuler ses effets. En combat vous pouvez utiliser cette action pour lever un charme ou un enchantement contre le score de votre adversaire."
        },
        {
          "id": "parchemin",
          "type": "savoir",
          "rank": 3,
          "title": "Parchemin",
          "action": "principale",
          "icon": scroll,
          "color": "purple",
          "tooltip": "Vous prenez un moment pour rédiger un parchemin d'un sort que vous connaissez. Lancez un jet d'apprentissage contre la difficulté du sort avec avantage pour sceller le sort au papier. Le sort ne peut pas avoir un niveau supérieur à votre bonus de SEN."
        },
        {
          "id": "preparation",
          "type": "savoir",
          "rank": 4,
          "title": "Préparation",
          "action": "principale",
          "icon": wisdom,
          "color": "purple",
          "tooltip": "Vous choisissez de placer votre attention lors d'un repos sur la préparation d'un sort dont le niveau doit êre inférieur à votre bonus de SEN. Lancez le jet de difficulté avec avantage. En cas de succès, vous pouvez lancer ce sort à votre tour pour une action principale sans lancer la difficulté. En combat, vous pouvez utiliser cette action pour donner avantage au lancer d'un de vos sorts ou de celui d'un allié en réaction."
        },
        {
          "id": "enchantement",
          "type": "savoir",
          "rank": 5,
          "title": "Enchantement",
          "action": "principale",
          "icon": pentagram,
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
          "color": "teal",
          "tooltip": "Vous savez appréter vos proies et sélectionner les morceaux de choix. Vos jets de découpe ont avantage et vous pouvez obtenir 1 ration sur les créatures mortes. Utilisez en action gratuite pour donner +1 à votre prochaine attaque."
        },
        {
          "id": "survivalisme",
          "type": "perception",
          "rank": 2,
          "title": "Survivalisme",
          "action": "principale",
          "icon": highpunch,
          "color": "teal",
          "tooltip": "Quand vous réalisez une action de camp lors d'un repos, vous donnez +1 rémission au groupe par compétence utilisée. Vous avez avantage à un de vos jets de mort une fois après aveir effectué cette action lors d'un repos long."
        },
        {
          "id": "prédation",
          "type": "perception",
          "rank": 3,
          "title": "Prédation",
          "action": "limitée",
          "icon": highpunch,
          "color": "teal",
          "tooltip": "Vous vous remémorez les caractéristiques des créatures que vous affrontez pour porter des coups efficaces. Lancez un jet d'ERU+survie pour reconnaitre une créature sur laquelle vous avez des connaissances. Vous et vos alliés informés infligez 1d4 dmg supplémentaires jusqu'à la fin du combat en cas de réussite."
        },
        {
          "id": "sauvagerie",
          "type": "perception",
          "rank": 4,
          "title": "Sauvagerie",
          "action": "limitée",
          "icon": highpunch,
          "color": "teal",
          "tooltip": "Vous sentez les individus jusqu'à une pièce annexe ou INS mètres et gagnez un avantage à vos jets de perception dans ces conditions. Vous reconnaissez les espèces d'individus à l'odeur."
        },
        {
          "id": "Sixième sens",
          "type": "perception",
          "rank": 5,
          "title": "Sixième sens",
          "action": "limitée",
          "icon": highpunch,
          "color": "teal",
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
          "color": "teal",
          "tooltip": "Vous êtes prompt dans l'établissement d'un camp de base et pouvez réaliser les actions de feu et nourriture en une seule action automatique. "
        },
        {
          "id": "économie",
          "type": "survie",
          "rank": 2,
          "title": "Économie",
          "action": "principale",
          "icon": highpunch,
          "color": "teal",
          "tooltip": "Lors d'un jet de cuisine vous pouvez augmenter le nombre de rations préparées de +1, et de +1 additionnel par désavantage que vous ajoutez à votre jet. De plus, vous collectez les ressources utilisées après leur utilisation et récupérez flèches et armes de jet éparpillées."
        },
        {
          "id": "fortitude",
          "type": "survie",
          "rank": 3,
          "title": "Fortitude",
          "action": "gratuite",
          "icon": highpunch,
          "color": "teal",
          "tooltip": "Vous pouvez consommer de la viande avariée et des légumes pourris et résister aux poisons avec avantage à vos jets d'END. Si les aliments ont été cuits vous n'avez pas besoin de lancer de dé."
        },
        {
          "id": "exploration",
          "type": "survie",
          "rank": 4,
          "title": "Exploration",
          "action": "gratuite",
          "icon": highpunch,
          "color": "teal",
          "tooltip": "Vous faites attention où vous mettez vos pieds et à votre environnement immédiat. Vous avez avantage en perception du danger et détection des pièges. Vous pouvez utiliser cette action en réaction d'un jet d'Initiative pour effectuer un déplacement de 3m avant le combat."
        },
        {
          "id": "Tueur froid",
          "type": "survie",
          "rank": 5,
          "title": "Tueur froid",
          "action": "gratuite",
          "icon": highpunch,
          "color": "teal",
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
          "color": "teal",
          "tooltip": "Votre action de furtivité est désormais une action gratuite et confère un avantage supplémentaire."
        },
        {
          "id": "traque",
          "type": "discrétion",
          "rank": 2,
          "title": "Traque",
          "action": "principale",
          "icon": highpunch,
          "color": "teal",
          "tooltip": "Vous suivez la trace de vos ennemis à travers l'environnement. Faites des jets d'INS + percepion pour progresser jusqu'à tomber sur votre cible. Vous et vos alliés avez avantage au prochain jet d'Initiative. En combat, vous pouvez utiliser cette action principale pour repérer une créature furtive."
        },
        {
          "id": "voyageur",
          "type": "discrétion",
          "rank": 3,
          "title": "Voyageur",
          "action": "gratuite",
          "icon": highpunch,
          "color": "teal",
          "tooltip": "Vos expériences en nature vous ont permis de développer une grande aisance en voyages. Vous avez avantage à vos jets de déplacement, survie et discrétion lorsque vous êtes dans votre milieu de prédilection (rural ou urbain)."
        },
        {
          "id": "dissimulation",
          "type": "discrétion",
          "rank": 4,
          "title": "Dissimulation",
          "action": "limitée",
          "icon": highpunch,
          "color": "teal",
          "tooltip": "Vous savez utiliser les éléments de votre environnement de prédilection (rural ou urbain) pour vous dissimuler. Une fois après un repos long, vous pouvez relancer un jet de furtivité dans ces conditions. En combat, vous pouver utiliser une action limitée pour donner un avantage au score de furtivité d'un joueur adjacent. "
        },
        {
          "id": "leurre",
          "type": "discrétion",
          "rank": 5,
          "title": "Leurre",
          "action": "limitée",
          "icon": highpunch,
          "color": "teal",
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
      "name": "logique",
      "content": [
        {
          "id": "choc",
          "type": "logique",
          "rank": 1,
          "title": "Choc",
          "action": "gratuite",
          "icon": choc,
          "color": "blue",
          "tooltip": "Lors d'une attaque ennemie, vous usez de votre bouclier comme d'une arme et frappez dans la mêlée. Si l'attaque de votre adversaire èchoue, il subit 1d3 dégats de votre bouclier."
        },
        {
          "id": "deviation",
          "type": "logique",
          "rank": 2,
          "title": "Déviation",
          "action": "limitée",
          "icon": deviation,
          "color": "blue",
          "tooltip": "Vous tendez votre bouclier pour sauver votre allié au contact ou essayez de bloquer au moment opportun votre adversaire. Vous lancez un jet d'attaque avec votre bouclier avec désavantage contre l'attaque de votre adversaire. En cas de réussite, vous bloquez l'attaque adverse."
        },
        {
          "id": "vengeance",
          "type": "logique",
          "rank": 3,
          "title": "Vengeance",
          "action": "limitée",
          "icon": vengeance,
          "color": "blue",
          "tooltip": "Attaque en action limitée avec avantage contre un adversaire apres une attaque réussie contre un allié."
        },
        {
          "id": "parade",
          "type": "logique",
          "rank": 4,
          "title": "Parade",
          "action": "gratuite",
          "icon": parade,
          "color": "blue-dark",
          "tooltip": "Vous vous lancez dans la mêlée le bouclier en avant et prêt à frapper. Lancez un score d'attaque avec votre bouclier contre une attaque réussie adverse. En cas de succès, vous brisez l'attaque réussie et produisez une attaque avec +1d4 dégats avec votre arme contre l'adversaire. En cas d'échec, votre adversaire inflige des dégats critiques."
        },
        {
          "id": "ouverture",
          "type": "logique",
          "rank": 5,
          "title": "Ouverture",
          "action": "limitée",
          "icon": opening,
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
          "icon": cover,
          "color": "blue",
          "tooltip": "Vous placez votre bouclier au dessus de votre tête pour vous protéger, vous ou vos alliés. Vous pévenez les dégats de tir de la valeur du bouclier, mais réduisez votre score de défense (sans bouclier)."
        },
        {
          "id": "encaisse",
          "type": "défense",
          "rank": 2,
          "title": "Encaisse",
          "action": "limitée",
          "icon": pummeled,
          "color": "blue",
          "tooltip": "Vous vous campez derrière votre bouclier et subissez les attaques ennemies. Les adversaire ont un avantage pour vous toucher tant que vous gardez la position, mais vous réduisez les dégats physiques que vous recevez de la valeur de votre bouclier jusqu'au début du prochain tour. Vous ne pouvez pas attaquer dans cette position."
        },
        {
          "id": "bélier",
          "type": "défense",
          "rank": 3,
          "title": "Bélier",
          "action": "principale",
          "icon": shieldbash,
          "color": "blue",
          "tooltip": "À la place de votre attaque, vous avancez en ligne droite jusqu’à votre distance de marche et frappez votre cible brutalement. Lancez d12 + FOR pour battre le score de défense de votre cible et vous infligez 2x bonus FOR dégâts. Si vous échouez, vous subissez un désavantage sur votre défense jusqu'au début de votre prochain tour. Si vous réussissez, votre adversaire tombe au sol et doit se relever à son prochain tour en mobilisant une action."
        },
        {
          "id": "domination",
          "type": "défense",
          "rank": 4,
          "title": "Domination",
          "action": "gratuite",
          "icon": domination,
          "color": "blue",
          "tooltip": "Après attaque une réussie, votre prochaine attaque contre cette même cible entraine un jet d'END pour éviter un renversement"
        },
        {
          "id": "protection",
          "type": "défense",
          "rank": 5,
          "title": "Protection",
          "action": "principale",
          "icon": protection,
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
          "icon": stomp,
          "color": "blue",
          "tooltip": "Évite une perte de durabilité sur armure en cas de jet d'AGI+physique réussi contre le score d'attaque adverse. Peut être utilisé en réaction gratuite pour gagner un avantage pour résister à un jet de renversement ou poussée."
        },
        {
          "id": "mule",
          "type": "physique",
          "rank": 2,
          "title": "Mûle",
          "action": "gratuite",
          "icon": armor,
          "color": "blue",
          "tooltip": "Réduit la charge des armures par le bonus de FOR. Peut utiliser cette action pour retirer un désavantage sur un jet d'AGI ou MOU en réaction."
        },
        {
          "id": "rempart",
          "type": "physique",
          "rank": 3,
          "title": "Rempart",
          "action": "limitée",
          "icon": rempart,
          "color": "blue",
          "tooltip": "Vous vous placez dans une position difficile ou vous bloquez le passage ennemi et protégez les arrières de vos alliés ou un emplacement. Les ennemis qui veulent se déplacer autour de vous (3m) doivent réussir un jet d’AGI ou subir une de vos attaques. Faites un jet de COU au debut de vos prochains tours avec désavantage pour chaque ennemi au corps à corps avec vous au-delà de 1. En cas d’échec vous devez quitter votre position (vous subissez une attaque de la part de l’ennemi le plus direct si vous manquez votre dérobade)."
        },
        {
          "id": "duracuir",
          "type": "physique",
          "rank": 4,
          "title": "Dur-à-cuir",
          "action": "gratuite",
          "icon": tough,
          "color": "blue",
          "tooltip": "Vous réduisez les dégats physiques de votre bonus d'END brut. Peut utiliser l'action pour réduire les dégats de la valeur d'armure une fois par repos long."
        },
        {
          "id": "indomptable",
          "type": "physique",
          "rank": 5,
          "title": "Indomptable",
          "action": "gratuite",
          "icon": crackedhelm,
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
          "id": "cueilleur",
          "type": "survie",
          "rank": 1,
          "title": "Cueilleur",
          "action": "principale",
          "icon": collect,
          "color": "pink",
          "tooltip": "Vous êtes capable d'identifier les plantes et champignons avec précisions : lancez un jet d'ERU + survie pour trouver de nouvelles ressources (bonus d'ERU). De plus vos récoltes sont augmentées de 1."
        },
        {
          "id": "tisane",
          "type": "survie",
          "rank": 2,
          "title": "Tisane",
          "action": "principale",
          "icon": coffee,
          "color": "pink",
          "tooltip": "Vous préparez des infusions en usant de vos ingrédients récoltés pour apaiser vos compagnons. Vous et vos alliés gagnez un avantage en rémission ou en veille durant le repos en cours. Vous pouvez également utiliser cette action pour donner avantage à un jet de mort ou un jet de sobriété d'un allié."
        },
        {
          "id": "stimulant",
          "type": "survie",
          "rank": 3,
          "title": "Stimulant",
          "action": "limitée",
          "icon": stimulant,
          "color": "pink",
          "tooltip": "Vous concoctez de puissants stimulants et remèdes à partir des ingrédients en votre possession lors d'un repos. Vos compagnons ont un avantage aux jets d'END et FOR durant les prochaines 4h. Vous pouvez utiliser cette action pour gagner +survie en MOU, AGI ou FOR jusqu'à votre prochain tour."
        },
        {
          "id": "poison",
          "type": "survie",
          "rank": 4,
          "title": "Poison",
          "action": "limitée",
          "icon": poison,
          "color": "pink",
          "tooltip": "Vous préparez de terribles poisons pour enduire vos armes ou empoisonner des mets. Vous pouvez imbiber du poison sur une de vos armes qui infligera 1d4 dmg supplémentaire pour votre bonus d'ERU en cas d'èchec de jet d'END. De plus vous avantage à vos jets de résistance au poison."
        },
        {
          "id": "regen",
          "type": "survie",
          "rank": 5,
          "title": "Régénération",
          "action": "limitée",
          "icon": transfuse,
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
          "icon": desinfect,
          "color": "pink",
          "tooltip": "Vous pouvez retirer les conditions d'infection et de plaie purulente lors de vos soins. En combat, vous pouvez aussi utiliser cette action pour retirer 1 point nécrotique s'il a été obtenu ce combat."
        },
        {
          "id": "affliction",
          "type": "soin",
          "rank": 2,
          "title": "Affliction",
          "action": "principale",
          "icon": armbandage,
          "color": "pink",
          "tooltip": "Vous utilisez vos connaissances pour analyser et soigner les maux qui affectent vos alliés. Lancez un jet d'ERU + soin pour retirer une affliction suivante après un repos court : paralysie, poison, brûlure, saignement"
        },
        {
          "id": "coupe-feu",
          "type": "soin",
          "rank": 3,
          "title": "Coupe-feu",
          "action": "principale",
          "icon": firehand,
          "color": "pink",
          "tooltip": "Vous soignez vos alliés ou vous même en leur conférant 1d3 VIE temporaire et une résistance au feu pendant #soin tours ou jusqu'à recevoir leurs premiers dégats de feu."
        },
        {
          "id": "renouveau",
          "type": "soin",
          "rank": 4,
          "title": "Renouveau",
          "action": "principale",
          "icon": healingpotion,
          "color": "pink",
          "tooltip": "Vos soins confèrent de la VIE temporaire non-récupérable. En combat vous pouvez utilisez cette action pour vous donner un bonus de 1d3VIE et retirer une condition physique qui vous affecte."
        },
        {
          "id": "vitalité",
          "type": "soin",
          "rank": 5,
          "title": "Vitalité",
          "action": "principale",
          "icon": deadlystrike,
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
          "icon": plaster,
          "color": "pink",
          "tooltip": "Votre entraînement vous permet de soigner vos alliés efficacement. Vous pouvez relancer les jets de soin en cas de  1. En combat vous pouvez donner un bonus de +1d3 VIE à un allié inconscient, sans dépasser 0 VIE."
        },
        {
          "id": "engourdissement",
          "type": "science",
          "rank": 2,
          "title": "Engourdissement",
          "action": "limitée",
          "icon": coma,
          "color": "pink",
          "tooltip": "Vous ciblez une créature adjacente ou vous-même : elle réduit les dégats subis de 1d3  et fait ses jets d'END avec avantage pendant #soin tours, mais réalise ses jets de morts et de combat avec désavantage. "
        },
        {
          "id": "stabilisation",
          "type": "science",
          "rank": 3,
          "title": "Stabilisation",
          "action": "principale",
          "icon": stabilize,
          "color": "pink",
          "tooltip": "Vos connaissances en médecine vous permettent de secourir vos alliés tombés au combat. Lancez un jet de DEX + soin pour ramener une créature inconsciente à 1 VIE."
        },
        {
          "id": "chirurgie",
          "type": "science",
          "rank": 4,
          "title": "Chirurgie",
          "action": "gratuite",
          "icon": anatomy,
          "color": "pink",
          "tooltip": "Vos compétences de médecine et vos connaissances en anatomie vous permettent de réparer les corps. Lancez un jet de DEX+soin pour guérir une affliction suivante chez une créature : nécrose, amputation, fracture. Vos dégats de saignements sont augmentés de 1 et leur difficulté est augmentée."
        },
        {
          "id": "pointvital",
          "type": "science",
          "rank": 5,
          "title": "Point vital",
          "action": "principale",
          "icon": vitalpoint,
          "color": "pink",
          "tooltip": "Votre connaissance des organes vitaux vous permet d'effectuer une action précise et fatale. Vous pouvez utiliser cette action pour effectuer une attaque qui provoque un jet de COU. En cas d'èchec de votre adversaire il subit #soin dmg supplémentaires. En cas de touche critique la créature tombe également inconsciente."
        },
      ],
    },
  ],
  "négoce": [
    {
      "name": "logique",
      "content": [
        {
          "id": "sincérité",
          "type": "logique",
          "rank": 1,
          "title": "Sincérité",
          "action": "gratuite",
          "icon": highpunch,
          "color": "gold",
          "tooltip": "Vous savez reconnaitre si l'on vous cache quelque chose et si votre interlocuteur se joue de vous. Faites un jet d'INS avec avantage pour savoir si ce que l'on vient de vous dire est un mensonge ou une omission déguisée. Vous avez avantage sur vos jets de persuasion tant que vous dites la vérité."
        },
        {
          "id": "marchandage",
          "type": "logique",
          "rank": 2,
          "title": "Marchandage",
          "action": "gratuite",
          "icon": highpunch,
          "color": "gold",
          "tooltip": "Vous savez comment obtenir le meilleur prix de vos biens et gagnez une somme supplémentaire sur votre vente totale. Lancez un d10 MA par bonus de SOC."
        },
        {
          "id": "rumeurs",
          "type": "logique",
          "rank": 3,
          "title": "Rumeurs",
          "action": "gratuite",
          "icon": highpunch,
          "color": "gold",
          "tooltip": "Le flot de commérage et rumeurs locales constitue une treille lisible pour vous. Vous avez avantage à vos jets de SOC et ERU pour chaque journée passée dans une communauté. Cet avantage est remis à 0 en cas de départ, emprisonnement ou tout autre évènement mettant fin à votre implication dans le bouche-à-oreille."
        },
        {
          "id": "négociation",
          "type": "logique",
          "rank": 4,
          "title": "Négociation",
          "action": "gratuite",
          "icon": highpunch,
          "color": "gold",
          "tooltip": "Votre art diplomatique vous permet d'accéder aux sphères d'autorité et de proposer des requêtes et d'éviter les écueils classiques des négociations. Vous pouvez relancer une fois vos jets de SOC manqués."
        },
        {
          "id": "rebondissement",
          "type": "logique",
          "rank": 5,
          "title": "Rebondissement",
          "action": "principale",
          "icon": highpunch,
          "color": "gold",
          "tooltip": "Votre esprit d'organisation et votre génie vous permette de concevoir des plans tordueux pour arriver à vos fins. Vous pouvez réaliser cette action une fois par jour et par repos pour gagner un avantage sur un jet d'ERU+logique unique à réaliser au moment de votre choix dans le futur contre la difficulté de l'aventure. En cas de succès, vous obtenez la résolution de votre plan ou d'une énigme, à déterminer avec le narrateur."
        },
      ],
    },
    {
      "name": "négoce",
      "content": [
        {
          "id": "Faux-fuyant",
          "type": "négoce",
          "rank": 1,
          "title": "Faux-fuyant",
          "action": "principale",
          "icon": highpunch,
          "color": "gold",
          "tooltip": "Vous savez vous sortir de situations compromettantes ou des noeuds de discussion, engendrés par vous ou vos camarades. Vous pouvez lancer un jet de SOC+négoce avec avantage en utilisant la SOC la plus basse de votre groupe."
        },
        {
          "id": "comédie",
          "type": "négoce",
          "rank": 2,
          "title": "Comédie",
          "action": "gratuite",
          "icon": highpunch,
          "color": "gold",
          "tooltip": "En honnête bonimenteur, vous savez vous mettre en scène pour vendre vos biens mais aussi pour vous attirer des faveurs. Vos jets de mensonge et persuasion sont fait avec un bonus égal à votre score de performance lorsque vous vous donnez en spectacle devant une foule ou une assemblée."
        },
        {
          "id": "intrigue",
          "type": "négoce",
          "rank": 3,
          "title": "Intrigue",
          "action": "principale",
          "icon": highpunch,
          "color": "gold",
          "tooltip": "Vous savez obtenir les informations plus ou moins secrètes d'un marchand, d'un groupe ou d'un courtisan. Moyennant 1MO vous pouvez lancer un jet de SOC pour obtenir une information pertinente au sujet d'un lieu, d'une situation ou d'un évènement qui vous échappe."
        },
        {
          "id": "Prestance",
          "type": "négoce",
          "rank": 4,
          "title": "prestance",
          "action": "gratuite",
          "icon": highpunch,
          "color": "gold",
          "tooltip": "Vous savez vous présenter sous votre meilleur jour. Tant que vous étes propre et habillé convenablement, vos jets de SOC et CHA sont fait avec avantage."
        },
        {
          "id": "laissez-passer",
          "type": "négoce",
          "rank": 5,
          "title": "Laissez-passer",
          "action": "principale",
          "icon": highpunch,
          "color": "teal",
          "tooltip": "Vous savez qui dirige les services de la ville et qui détient le pouvoir : en cas de situation difficile (emprisonnement, condamnation, accès refusé, etc.) vous pouvez lancer un jet de CHA+négoce pour obtenir l'aide de la ville ou d'une figure d'autorité. Vous pouvez payer 1MO par joueur impliqué au lieu de jeter le dé pour cette action. "
        },
      ],
    },
    {
      "name": "persuasion",
      "content": [
        {
          "id": "mensonge",
          "type": "persuasion",
          "rank": 1,
          "title": "Mensonge",
          "action": "gratuite",
          "icon": highpunch,
          "color": "gold",
          "tooltip": "Vous êtes doué pour masquer votre vraie pensée, et vous avez avantage sur vos jets de CHA et SOC tant que vous mentez."
        },
        {
          "id": "charme",
          "type": "persuasion",
          "rank": 2,
          "title": "Charme",
          "action": "limitée",
          "icon": highpunch,
          "color": "gold",
          "tooltip": "Vous savez charmer vos interlouteurs d'un sourire ou d'un regard. Lanez un jet de CHA + persuasion à la place d'un jet de SOC ou ERU lors d'une discussion ou d'une rencontre pour charmer votre interlocuteur et obtenir des informations ou son aide. Lors d'un combat vous pouvez utiliser cette action limitée pour tenter de charmer un ennemi, avec désavantage, et lui retirer une action principale."
        },
        {
          "id": "corruption",
          "type": "persuasion",
          "rank": 3,
          "title": "Corruption",
          "action": "principale",
          "icon": highpunch,
          "color": "gold",
          "tooltip": "Vous savez comment graisser la pate des commerçants, gardes et personnes d'influence pour obtenir vos faveurs. Vous pouvez glisser de l'argent à chaque interlocuteur pour réduire un jet de CHA ou SOC de 1 par 10 MA déboursés. En combat vous pouvez offrir votre bourse à concurrence de 1d10MO par adversaire pour stopper le combat, après avoir réussi un jet de SOC."
        },
        {
          "id": "déguisement",
          "type": "persuasion",
          "rank": 4,
          "title": "Déguisement",
          "action": "gratuite",
          "icon": highpunch,
          "color": "gold",
          "tooltip": "En usant d'habits ou d'accessoires vous pouvez modifier votre apparence ce qui, associé à vos dons naturels, vous permet de vous rendre méconnaissable. Vous déguiser est une action que vous pouvez réaliser en repos et qui vous permet de lancer tous vos jets de CHA et SOC en utilisant votre performance."
        },
        {
          "id": "tromperie",
          "type": "persuasion",
          "rank": 5,
          "title": "Tromperie",
          "action": "principale",
          "icon": highpunch,
          "color": "gold",
          "tooltip": "Après avoir étudier votre cible, vous étes capable de l'incarner jusqu'à berner ses proches. Durant un repos vous pouvez préparer votre tromperie, et les bonus de Déguisement peuvent s'appliquer le cas échéant. Vous avez un avantage sur vos jets de persuasion égal au nombre de jours passés à étudier la personne que vous incarnez."
        },
      ],
    },
  ],
  "artisanat": [
    {
      "name": "savoir",
      "content": [
        {
          "id": "croquis",
          "type": "savoir",
          "rank": 1,
          "title": "Croquis",
          "action": "principale",
          "icon": sketch,
          "color": "brown",
          "tooltip": "Capable de prendre notes des formes et proportions rapidement, vous optenez un avantage à vos jets de fabrication et réparation si vous possédez un croquis associé. Vous pouvez également croquer des portraits et scenes."
        },
        {
          "id": "décoration",
          "type": "savoir",
          "rank": 2,
          "title": "Décoration",
          "action": "principale",
          "icon": decoration,
          "color": "brown",
          "tooltip": "Vous apprétez une pièce ou un individu pour lui donner un peu plus de charme. Lancez un jet d'INS pour donner un avantage à une estimation ou un jet de CHA."
        },
        {
          "id": "patron",
          "type": "savoir",
          "rank": 3,
          "title": "Patron",
          "action": "principale",
          "icon": patron,
          "color": "brown",
          "tooltip": "Vous êtes capable de réaliser des modèles extrêmement détaillés d'objets et d'idées. Vous pouvez faire un patron en action d'entrainement afin de le transmettre à un artisan ou de l'utiliser pour réaliser vous même un objet. Il ne s'agit que d'une question de temps et de ressource pour l'artisan, votre patron otant toute difficulté à la tache."
        },
        {
          "id": "analyse",
          "type": "savoir",
          "rank": 4,
          "title": "Analyse",
          "action": "gratuite",
          "icon": analyse,
          "color": "brown",
          "tooltip": "Vous avez une bonne compréhension des courants artistiques et de l'émergence des tendances. Vous avez un avantage à vos jets de négoce pour les objets dans vos champs d'expertises."
        },
        {
          "id": "chefdoeuvre",
          "type": "savoir",
          "rank": 5,
          "title": "Chef-d'oeuvre",
          "action": "gratuite",
          "icon": jewelbox,
          "color": "brown",
          "tooltip": "Les objets que vous créez sont emplis d'un charme particulier et démontrent d'une technique à couper le souffle. Vos créations se vendent à +minutie MO que le prix courant."
        },
      ],
    },
    {
      "name": "artisanat",
      "content": [
        {
          "id": "rafistolage",
          "type": "artisanat",
          "rank": 1,
          "title": "Rafistolage",
          "action": "principale",
          "icon": swiss,
          "color": "brown",
          "tooltip": "Vous êtes capable de redonner une forme douteuse mais fonctionnelle à une pièce d'équipement détruite en réussissant un jet d'artisanat (DEX). La pièce d'équipement a 0 de durabilité peut maintenant être portée mais n'importe quel choc ou perte de durabilité la rendra impossible à rafistoler à l'avenir."
        },
        {
          "id": "réparation",
          "type": "artisanat",
          "rank": 2,
          "title": "Réparation",
          "action": "principale",
          "icon": repair,
          "color": "brown",
          "tooltip": "Vous utilisez vos outils pour réparer une pièce d'équipement ou un outil dans votre champ de compétence. En cas de réussite de jet d'artisanat, vous donnez +1 à la durabilité actuelle de l'objet jusqu'à concurrence de son maximum."
        },
        {
          "id": "façonnage",
          "type": "artisanat",
          "rank": 3,
          "title": "Façonnage",
          "action": "principale",
          "icon": anvil,
          "color": "brown",
          "tooltip": "Vous créez un objet de votre choix dont vous avez un croquis, dans votre champ d'expertise, et en usant des ressources nécessaires. Cette action peut être une action d'entrainement pour réaliser l'objet avec succès."
        },
        {
          "id": "efficacité",
          "type": "artisanat",
          "rank": 4,
          "title": "Efficacité",
          "action": "gratuite",
          "icon": efficiency,
          "color": "brown",
          "tooltip": "Les gestes de votre métier vous sont entrés dans la peau. Vous pouvez relancer un jet d'artisanat manqué, même en cas de 1."
        },
        {
          "id": "piece",
          "type": "artisanat",
          "rank": 5,
          "title": "Pièce maîtresse",
          "action": "principale",
          "icon": runesword,
          "color": "brown",
          "tooltip": "Vous reforgez ou améliorez un objet déjà existant pour lui conférer de nouvelles propriétés, alléger son poids ou améliorer sa durabilité. Lancez un jet d'artisanat avec les ressources nécessaires. En cas d'échec vous perdez les ressources."
        },
      ],
    },
    {
      "name": "science",
      "content": [
        {
          "id": "sabotage",
          "type": "science",
          "rank": 1,
          "title": "Sabotage",
          "action": "principale",
          "icon": sabotage,
          "color": "brown",
          "tooltip": "Vous modifiez un objet mécanique ou assemblé pour le briser en cas d'utilisation ou pour lui retirer sa durabilité (bonus d'ERU). Lancez un jet de minutie afin de réaliser l'action avec succès. Le score devient la difficulté de perception du sabotage."
        },
        {
          "id": "désamorçage",
          "type": "science",
          "rank": 2,
          "title": "Désamorçage",
          "action": "limitée",
          "icon": desarmorce,
          "color": "brown",
          "tooltip": "Vous avez connaissance des pièges mécaniques et pouvez les rendre inoffensifs. Vous avez avantage à vos jets de DEX pour désamorcer les pièges et mécanismes."
        },
        {
          "id": "Conversion",
          "type": "science",
          "rank": 3,
          "title": "conversion",
          "action": "principale",
          "icon": metalarm,
          "color": "brown",
          "tooltip": "Vous modifiez un objet existant en lui apportant des spécificités mécaniques ou l'associant à une autre pièce. Réalisez un jet d'artisanat avec minutie. En cas d'échec, les objets utilisés perdent 1 durabilité."
        },
        {
          "id": "piégeage",
          "type": "science",
          "rank": 4,
          "title": "Piégeage",
          "action": "limitée",
          "icon": trap,
          "color": "brown",
          "tooltip": "Vous pouvez créer des pièges mécaniques ou traffiquer un mécanisme existant pour le piéger. Lors d'un repos vous pouvez créer un piége avec vos ressources en lançant un jet de minutie. En combat vous pouvez poser un piege avec une action limitée."
        },
        {
          "id": "automate",
          "type": "science",
          "rank": 5,
          "title": "Automate",
          "action": "principale",
          "icon": lovemachine,
          "color": "brown",
          "tooltip": "Vous êtes capable de créer de nouveaux objets et inventer des mécanismes novateurs. En usant des ressources nécessaires, vous pouvez créer des automates et des équipements mobiles avec un jet d'artisanat. Vous pouvez utiliser les énergies disponibles pour animer vos automates en fonction de vos champs d'expertise (vapeur, poudre, magie, fluides)."
        },
      ],
    },
  ],
}


export default featsFR
