const ranged = {
  "preciseness":
  {
    "name": "preciseness",
    "content": [
      {
        "id": "reaction",
        "type": "preciseness",
        "rank": 1,
        "title": "Reaction shot",
        "icon": "ra ra-archer",
        "color": "green",
        "tooltip": "You prepare your shot for the enemy to appear. You can make one shot at the target during its turn, with no penalty during your turn. Use your <b>INS</b> score instead of your DEX in this situation. Weapons that need to be reloaded still suffer this penalty."
      },
      {
        "id": "rechange",
        "type": "preciseness",
        "rank": 2,
        "title": "Quick Repair",
        "icon": "ra ra-cog-wheel",
        "color": "green",
        "tooltip": "You handle your broken weapon and quickly find a way to repair it using a rope or a dedicated tool. Roll a DEX save with disadvantage: if successful your weapon is functional again and you can fire within the turn if it is loaded and you have enough actions."
      },
      {
        "id": "bleed",
        "type": "preciseness",
        "rank": 3,
        "title": "Bleeding shot",
        "icon": "ra ra-droplet",
        "color": "green",
        "tooltip": "You choose an exposed part of your target to inflict a deep wound. Make a shot with disadvantage that causes 1d3 additional bleeds. The target suffers a penalty to its bleed resistance rolls equal to your thoroughness score."
      },
      {
        "id": "aim",
        "type": "preciseness",
        "rank": 4,
        "title": "True Aim",
        "icon": "ra ra-archery-target",
        "color": "green",
        "tooltip": "You relax your body and steady your breathing as you wait for the best moment to fire. Your shot is made with advantage, ignoring adverse conditions if you use 2 primary actions, and deals weapon damage + DEX bonus + your thoroughness score. The target hit must either succeed at a COU save or move away from you to take cover or flee."
      },
      {
        "id": "friendly",
        "type": "preciseness",
        "rank": 5,
        "title": "Friendly fire",
        "icon": "ra ra-on-target",
        "color": "green",
        "tooltip": "You can shoot without disadvantage to and from melee range, even if your allies are in contact with the enemy. Immediately after shooting, you can take a free leap action, making an AGI check."
      }
    ],
  },
  "shooting":
  {
    "name": "shooting",
    "content": [
      {
        "id": "barrage",
        "type": "shooting",
        "rank": 1,
        "title": "Barrage shot",
        "icon": "ra ra-arrow-flights",
        "color": "green",
        "tooltip": "You can move during your turns as long as you maintain a barrage of fire. Enemy creatures that attempt to approach within range must succeed at an AGI save against your shooting score or suffer 1 + your DEX bonus."
      },
      {
        "id": "penalty",
        "type": "shooting",
        "rank": 2,
        "title": "Penalty shot",
        "icon": "ra ra-player-shot",
        "color": "green",
        "tooltip": "You target a limb on your target to hinder its progress. You make your shot with disadvantage by aiming at the legs to give -5 MOV and disadvantage on combat and AGI rolls if successful..."
      },
      {
        "id": "reload",
        "type": "shooting",
        "rank": 3,
        "title": "Quick reload",
        "icon": "ra ra-ammo-bag",
        "color": "green",
        "tooltip": "You know your weapon and are able to reload with your eyes closed. You reduce the number of reload turns required by 1 for every ten DEX. If the reload time is then 0, you can fire in the same turn as you would with a bow."
      },
      {
        "id": "giant",
        "type": "shooting",
        "rank": 4,
        "title": "Giant killer",
        "icon": "ra ra-barbed-arrow",
        "color": "green",
        "tooltip": "When facing a large or larger creature, you muster up your courage to deal heavy damage while waiting to get close enough to your enemy. Roll a normal shooting roll with advantage depending on the size of the enemy. You deal your damage + shooting score (+ STR bonus if you are wielding a bow or throwing weapon), and reroll the damage die if you roll a 1. (Follow the rules for huge creatures if they apply: if you are at close range, roll a fear roll instead of your to hit roll.)"
      },
      {
        "id": "double",
        "type": "shooting",
        "rank": 5,
        "title": "Double shot",
        "icon": "ra ra-target-arrows",
        "color": "green",
        "tooltip": "You place two bolts in your weapon and fire both at once, adjusting your movement. Your shot suffers disadvantage to hit, but you roll twice your damage if successful. OR You use your other hand to wield a second weapon. You roll two rolls to hit (one for each weapon). You can choose different targets for your 2 shots, but you then fire with disadvantage on each roll."
      }
    ],
  },
  "discretion":
  {
    "name": "discretion",
    "content": [
      {
        "id": "hunt",
        "type": "discretion",
        "rank": 1,
        "title": "Hunt",
        "icon": "ra ra-pawprint",
        "color": "green",
        "tooltip": "You target a target you can see. As long as you maintain sight of it, you gain advantage on your shots against that target. Only one creature can be the target of Hunt at a time, and you can’t change the target of this action until the first creature is prone or out of combat. During exploration phases, you can use Hunt to gain food with advantage on the Survival check and an extra unit of weight."
      },
      {
        "id": "conceal",
        "type": "discretion",
        "rank": 2,
        "title": "Concealing shot",
        "icon": "ra ra-thorn-arrow",
        "color": "green",
        "tooltip": "You choose an opportune moment to shoot and take advantage of your surroundings to go unnoticed. Your shooting roll gains a bonus equal to your stealth. If your roll is successful you are considered stealthy with your raw score."
      },
      {
        "id": "suppressing",
        "type": "discretion",
        "rank": 3,
        "title": "Supressing fire",
        "icon": "ra ra-supersonic-arrow",
        "color": "green",
        "tooltip": "If you shoot at the same target as the previous turn, you can make a suppressive shot with advantage, and if it has not moved,. If successful, your damage inflicts 2x your Dexterity bonuses. The opponent suffers disadvantage on his COU rolls until his next turn."
      },
      {
        "id": "ambush",
        "type": "discretion",
        "rank": 4,
        "title": "Ambush",
        "icon": "ra ra-zigzag-leaf",
        "color": "green",
        "tooltip": "While stealthy, you take a free shot at a target during Initiative. If your shot was the trigger for Initiative, then you can take a second shot. This action does not break your stealth."
      },
      {
        "id": "killer",
        "type": "discretion",
        "rank": 5,
        "title": "Killer shot",
        "icon": "ra ra-shot-through-the-heart",
        "color": "green",
        "tooltip": "You make a precise shot with disadvantage, aiming at your opponent’s vital point with your attention to detail. If your target is hit, you deal critical damage with your weapon and your opponent is knocked prone. This action does not break your stealth."
      },
    ],
  },
}

export default ranged