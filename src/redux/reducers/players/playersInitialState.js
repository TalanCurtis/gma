export default 
  [
  {
    "id":0,
    "playerName": "Johnny",
    "character": {
      "attributes": {
        "tableName": "Attributes",
        "columns":[
          {
            "header": "Attribute",
            "accessor": "attribute"
          },
          {
            "header": "Value",
            "accessor": "value"
          },
          {
            "header": "Saving Through",
            "accessor": "savingThrough"
          }
        ],
        "data":[
          {
            "attribute": "Strength",
            "value": 14,
            "savingThrough": 10
          },
          {
            "attribute": "Dexterity",
            "value": 14,
            "savingThrough": 10
          },
          {
            "attribute": "Constitution",
            "value": 14,
            "savingThrough": 10
          },
          {
            "attribute": "Intelligence",
            "value": 14,
            "savingThrough": 10
          },
          {
            "attribute": "Wisdom",
            "value": 14,
            "savingThrough": 10
          },
          {
            "attribute": "Charisma",
            "value": 14,
            "savingThrough": 10
          }
        ]
      },
      "info": {
        "characterName": "Dances with Wolves",
        "Alignment": "Chaotic Good",
        "Race": "Dwarf",
        "Class": "Fighter",
        "Flaws": [
          "Cowardly",
          "Addicted to Gambling"
        ],
        "notes": [
          "Player is liked in the city of Bueman",
          "Confronted and Orc, that survived and now hunts this character"
        ]
      },
      "outfit": {
        "header": {
          "title": "Outfit",
          "subTitle": "AC",
          "value": 0
        },
        "columns":{
          "note": "*",
          "item": "Item",
          "modifier": "Mod" ,
          "equipped": "Eq"
        },
        "items": [
          {
            "id": 0,
            "name": "Black Chain mail",
            "isMagical": true,
            "modifier": 18,
            "notes": [
              "this Item is Magical",
              "it does not reflect light"
            ],
            "bonuses": [
              "good area to put objects the effect attributes like str + 2 while wearing armor"
            ],
            "isEquipped": true
          },
          {
            "id": 1,
            "name": "Black Horned Helmet",
            "isMagical": false,
            "modifier": -3,
            "notes": [],
            "bonuses": [],
            "isEquipped": true
          },
          {
            "id": 2,
            "name": "Large Black Shield",
            "isMagical": false,
            "modifier": 4,
            "notes": ["this is one big shield"],
            "bonuses": [],
            "isEquipped": false
          }
        ]
      },
      "weapons": {
        "header": {
          "title": "Weapons",
          "subTitle": null,
          "value": null
        },
        "columns":{
          "note": "*",
          "item": "Item",
          "dice": "Dice" 
        },
        "items": [
          {
            "id": 0,
            "name": "Golden Battle Axe",
            "isMagical": true,
            "dice": {
              "amount": 2,
              "type": 8
            },
            "bonuses":[
             {
               "type": "hit",
               "value" : 2
              },
             {
               "type": "damage",
               "value": 4
              }
            ]  ,
            "notes": [
              "this Item is Magical",
              "glows in the dark"
            ],
            "isEquipped": true
          },
          {
            "id": 1,
            "name": "Dagger",
            "isMagical": false,
            "dice": {
              "amount": 1,
              "type": 4
            },
            "bonuses":[],
            "notes": [],
            "isEquipped": false
          },
          {
            "id": 2,
            "name": "Heavy Crossbow",
            "isMagical": false,
            "dice": {
              "amount": 1,
              "type": 4
            },
            "notes": [],
            "bonuses": [],
            "isEquipped": false
          }
        ]
      },
      "spells": {
        "_comment": "this needs to thought out way more very complex system, multipliers by level and how long they last.",
        "learned": [
          {
            "id":0,
            "level": 1,
            "name": "Lightning Touch",
            "isReady": false,
            "charges": 3,
            "dice": {
              "amount": 2,
              "type": 4
            }
          }
        ]
      },
      "ammo": {
        "items": [
          {
            "id":0,
            "name": "Poisoned Arrows",
            "dice": {
              "amount": 1,
              "type": 4
            },
            "quantity": 30,
            "isMagical": false,
            "bonuses":[],
            "notes": ["poisoned arrows inflict 2dmg each turn after hit"]
          },
          {
            "id":1,
            "name": "Darts",
            "dice": {
              "amount": 1,
              "type": 4
            },
            "quantity": 9,
            "isMagical": false,
            "bonuses":[],
            "notes": []
          }
        ]
      },
      "inventory": {
        "items": [
          {
            "id":0,
            "name": "Torches",
            "quantity": 4,
            "isMagical": false,
            "bonuses":[],
            "notes": []
          },
          {
            "id":1,
            "name": "Small Iron Box",
            "quantity": 1,
            "isMagical": true,
            "bonuses":[],
            "notes": ["Can hold infinite amount of money"]
          }
        ]
      },
      "wealth": {
        "items": [
          {
            "id":0,
            "name": "Gold",
            "quantity": 150,
            "isMagical": false,
            "bonuses":[],
            "notes": []
          },
          {
            "id":1,
            "name": "Diamond",
            "quantity": 1,
            "isMagical": true,
            "bonuses": [],
            "penalties": [
              {
                "type": "hit",
                "value": -4
              }
            ],
            "notes": ["Can hold infinite amount of money"]
          }
        ]
      }
    }
  },
  {
    "id":0,
    "playerName": "Matt the Quick",
    "character": {
      "attributes": {
        "tableName": "Attributes",
        "columns":[
          {
            "header": "Attribute",
            "accessor": "attribute"
          },
          {
            "header": "Value",
            "accessor": "value"
          },
          {
            "header": "Saving Through",
            "accessor": "savingThrough"
          }
        ],
        "data":[
          {
            "attribute": "Strength",
            "value": 14,
            "savingThrough": 10
          },
          {
            "attribute": "Dexterity",
            "value": 14,
            "savingThrough": 10
          },
          {
            "attribute": "Constitution",
            "value": 14,
            "savingThrough": 10
          },
          {
            "attribute": "Intelligence",
            "value": 14,
            "savingThrough": 10
          },
          {
            "attribute": "Wisdom",
            "value": 14,
            "savingThrough": 10
          },
          {
            "attribute": "Charisma",
            "value": 14,
            "savingThrough": 10
          }
        ]
      },
      "info": {
        "characterName": "Dances with Wolves",
        "Alignment": "Chaotic Good",
        "Race": "Dwarf",
        "Class": "Fighter",
        "Flaws": [
          "Cowardly",
          "Addicted to Gambling"
        ],
        "notes": [
          "Player is liked in the city of Bueman",
          "Confronted and Orc, that survived and now hunts this character"
        ]
      },
      "outfit": {
        "header": {
          "title": "Outfit",
          "subTitle": "AC",
          "value": 0
        },
        "columns":{
          "note": "*",
          "item": "Item",
          "modifier": "Mod" ,
          "equipped": "Eq"
        },
        "items": [
          {
            "id": 0,
            "name": "Black Chain mail",
            "isMagical": true,
            "modifier": 18,
            "notes": [
              "this Item is Magical",
              "it does not reflect light"
            ],
            "bonuses": [
              "good area to put objects the effect attributes like str + 2 while wearing armor"
            ],
            "isEquipped": true
          },
          {
            "id": 1,
            "name": "Black Horned Helmet",
            "isMagical": false,
            "modifier": -3,
            "notes": [],
            "bonuses": [],
            "isEquipped": true
          },
          {
            "id": 2,
            "name": "Large Black Shield",
            "isMagical": false,
            "modifier": 4,
            "notes": ["this is one big shield"],
            "bonuses": [],
            "isEquipped": false
          }
        ]
      },
      "weapons": {
        "header": {
          "title": "Weapons",
          "subTitle": null,
          "value": null
        },
        "columns":{
          "note": "*",
          "item": "Item",
          "dice": "Dice" 
        },
        "items": [
          {
            "id": 0,
            "name": "Golden Battle Axe",
            "isMagical": true,
            "dice": {
              "amount": 2,
              "type": 8
            },
            "bonuses":[
             {
               "type": "hit",
               "value" : 2
              },
             {
               "type": "damage",
               "value": 4
              }
            ]  ,
            "notes": [
              "this Item is Magical",
              "glows in the dark"
            ],
            "isEquipped": true
          },
          {
            "id": 1,
            "name": "Dagger",
            "isMagical": false,
            "dice": {
              "amount": 1,
              "type": 4
            },
            "bonuses":[],
            "notes": [],
            "isEquipped": false
          },
          {
            "id": 2,
            "name": "Heavy Crossbow",
            "isMagical": false,
            "dice": {
              "amount": 1,
              "type": 4
            },
            "notes": [],
            "bonuses": [],
            "isEquipped": false
          }
        ]
      },
      "spells": {
        "_comment": "this needs to thought out way more very complex system, multipliers by level and how long they last.",
        "learned": [
          {
            "id":0,
            "level": 1,
            "name": "Lightning Touch",
            "isReady": false,
            "charges": 3,
            "dice": {
              "amount": 2,
              "type": 4
            }
          }
        ]
      },
      "ammo": {
        "items": [
          {
            "id":0,
            "name": "Poisoned Arrows",
            "dice": {
              "amount": 1,
              "type": 4
            },
            "quantity": 30,
            "isMagical": false,
            "bonuses":[],
            "notes": ["poisoned arrows inflict 2dmg each turn after hit"]
          },
          {
            "id":1,
            "name": "Darts",
            "dice": {
              "amount": 1,
              "type": 4
            },
            "quantity": 9,
            "isMagical": false,
            "bonuses":[],
            "notes": []
          }
        ]
      },
      "inventory": {
        "items": [
          {
            "id":0,
            "name": "Torches",
            "quantity": 4,
            "isMagical": false,
            "bonuses":[],
            "notes": []
          },
          {
            "id":1,
            "name": "Small Iron Box",
            "quantity": 1,
            "isMagical": true,
            "bonuses":[],
            "notes": ["Can hold infinite amount of money"]
          }
        ]
      },
      "wealth": {
        "items": [
          {
            "id":0,
            "name": "Gold",
            "quantity": 150,
            "isMagical": false,
            "bonuses":[],
            "notes": []
          },
          {
            "id":1,
            "name": "Diamond",
            "quantity": 1,
            "isMagical": true,
            "bonuses": [],
            "penalties": [
              {
                "type": "hit",
                "value": -4
              }
            ],
            "notes": ["Can hold infinite amount of money"]
          }
        ]
      }
    }
  }
]
