
var allItems = [
	{
		"name": "Cecil",
		"loves": 
			[ "Pink Melon", "Relax Tea", "Fruit Sandwich", "Ammonite" ],
		"likes": 
			[ "All fruits", "All brooches", "Crystal Skull", "Fish Fossil", "Ancient Fish Feather Fins", "Dragon Bones", "Unbroken Ivory Tusk", "Conqueror Melon" ],
		"dislikes": 
			[ "Milk", "Yogurt", "Cheese", "Object X", "Scrap Metal", "Weeds", "Withered Grass", "Failed Dish", "Disgusting Food", "Rock", "Branch", "Can", "Rare Can", "Boot" ],
		"hates": 
			[ "Hot Milk", "Milk Porridge" ]
	},
	{
		"name": "Lucas",
		"loves": 
			[ "Tempura", "Fried Udon", "Tempura Udon", "Curry Udon" ],
		"likes": 
			[ "All crystals", "All liquids", "Udon", "Curry Rice", "Mysterious Powder", "Can", "Rare Can"],
		"dislikes": 
			[ "Object X", "Scrap Metal", "Weeds", "Withered Grass", "Failed Dish", "Disgusting Food", "Rock", "Branch", "Boot"],
		"hates": 
			[ "None" ]
	},
	{
		"name": "Martin",
		"loves":
			[ "Dragonic Stone", "Orichalcum", "Fruit Sandwich" ],
		"likes":
			[ "All other ores", "All fruits", "Scrap Metal", "Scrap Metal+", "Ammonite", "Pink Melon", "Conqueror Melon" ],
		"dislikes":
			[ "All mushrooms", "Abalone", "Blowfish", "Object X", "Weeds", "Withered Grass", "Failed Dish", "Disgusting Food", "Rock", "Branch", "Can", "Rare Can", "Boot" ],
		"hates":
			[ "Butter Grilled Abalone", "Blowfish Sashimi", "Grilled Blowfish" ]
	},
	{
		"name": "Murakumo",
		"loves":
			[ "Power Gloves", "Champion Belt", "Hero's Proof", "Grilled Skipjack", "Union Stew" ],
		"likes":
			[ "All golem stones", "Big Giant's Nail", "Dragon Fang", "Blue Giant's Glove", "Pizza", "Seafood Pizza", "Dumplings", "Meat Dumpling", "Chinese Manju", "Gyoza", "Steamed Gyoza", "Boiled Gyoza"],
		"dislikes":
			[ "Cake", "Cheesecake", "Pancakes", "French Toast", "Chocolate", "Object X", "Scrap Metal", "Weeds", "Withered Grass", "Failed Dish", "Disgusting Food", "Rock", "Branch", "Can", "Rare Can", "Boot" ],
		"hates":
			[ "Chocolate Cake", "Chocolate Cookies", "Chocolate Sponge" ]
	},
	{
		"name": "Reinhard",
		"loves":
			[ "Farm tools over level 45", "Sandwich", "Toast", "Jam Roll" ],
		"likes":
			[ "Formuade", "Invinciroid", "Cold Medicine", "Object X", "Silver Boots", "Iron Shield", "Mail", "Turnip Seeds", "Pink Turnip Seeds", "Strawberry Seeds", "Yam Seeds", "Potato Seeds", "Failed Dish", "Disgusting Food" ],
		"dislikes":
			[ "All crystals", "All gems", "Scrap Metal", "Weeds", "Withered Grass", "Rock", "Branch", "Can", "Rare Can", "Boot" ],
		"hates":
			[ "Cores" ]
	},
	{
		"name": "Ryker",
		"loves":
			[ "Devil Horn", "Devil Blood", "Mermaid Scales", "Ice Cream", "Croquettes" ],
		"likes":
			[ "Fairy Elixir", "Great Hammer Shard", "Ancient Fish Feather Fins", "Poison King", "Wind Crystal", "Popcorn", "Roasted Yam", "Glazed Yam", "French Fries", "Toast", "Jam Roll", "Baked Onigiri", "Baked Apple" ],
		"dislikes":
			[ "Curry Rice", "Curry Manju", "Curry Bread", "Dry Curry", "Curry Udon", "Object X", "Scrap Metal", "Weeds", "Withered Grass", "Failed Dish", "Disgusting Food", "Rock", "Branch", "Can", "Rare Can", "Boot" ],
		"hates":
			[ "Ultimate Curry", "Royal Curry" ]
	},
	{
		"name": "Beatrice",
		"loves":
			[ "Meteor Strawberry Jam", "Strawberry Jam", "Strawberry Milk", "Gold Juice", "Mixed Smoothie" ],
		"likes":
			[ "Strawberry", "Sultan Strawberry", "Meteor Strawberry", "Jam Roll", "Mixed Juice", "Apple", "Baked Apple", "Apple Jam", "Apple Pie", "Cake", "Fruit Sandwich", "Flan", "Pumpkin Flan", "Bread" ],
		"dislikes":
			[ "Doria", "Seafood Doria", "Gratin", "Seafood Gratin", "Object X", "Scrap Metal", "Weeds", "Withered Grass", "Failed Dish", "Disgusting Food", "Rock", "Branch", "Can", "Rare Can", "Boot" ],
		"hates":
			[ "Hot Milk", "Hot Chocolate", "Union Stew" ]
	},
	{
		"name": "Fuuka",
		"loves":
			[ "Golden Salmon", "Golden Octopus", "Marlin", "Emerald" ],
		"likes":
			[ "All other fish", "All crystal flowers", "Platinum", "Gold", "Silver", "Love Crystal", "Ruby", "Diamond", "Aquamarine", "Amethyst", "Crystal Skull" ],
		"dislikes":
			[ "Carrot", "Royal Carrot", "Green Pepper", "Green Pepper Rex", "Pickles", "Pickled Turnips", "Object X", "Scrap Metal", "Weeds", "Withered Grass", "Failed Dish", "Disgusting Food", "Rock", "Branch", "Can", "Rare Can", "Boot" ],
		"hates":
			[ "Onion", "Ultra Onion", "Pickle Mix" ]
	},
	{
		"name": "Lucy",
		"loves":
			[ "Glitter Snapper", "Tuna", "Salmon Onigiri", "Sacred Pole", "Famous Pole" ],
		"likes":
			[ "All other fish", "All other poles", "All fruits", "Milk", "Monkey Plush" ],
		"dislikes":
			[ "Ghost Hood", "Spider's Thread", "Pretty Thread", "Object X", "Scrap Metal", "Weeds", "Withered Grass", "Failed Dish", "Disgusting Food", "Rock", "Branch", "Can", "Rare Can", "Boot" ],
		"hates":
			[ "Devil Horn", "Devil Blood", "Crystal Skull" ]
	},
	{
		"name": "Ludmila",
		"loves":
			[ "Emery Flower", "Great Emery Flower", "White Crystal", "Big White Crystal", "Salted R. Trout" ],
		"likes":
			[ "All flowers without 'grass' names", "All flower seeds", "All rings", "Rainbow Trout", "Rainbow Sashimi", "Hand-Knit Scarf", "Fluffy Scarf", "Love Scale", "Prelude to Love" ],
		"dislikes":
			[ "Fur", "Quality Fur", "Quality Puffy Fur", "Yellow Fur", "Penguin Down", "Object X", "Scrap Metal", "Weeds", "Withered Grass", "Failed Dish", "Disgusting Food", "Rock", "Branch", "Can", "Rare Can", "Boot" ],
		"hates":
			[ "Crimson Fur", "Wolf Fur" ]
	},
	{
		"name": "Priscilla",
		"loves":
			[ "Chocolate Cake", "Chocolate Sponge", "Chocolate Cookies", "Cake", "Yam of the Ages" ],
		"likes":
			[ "Chocolate", "Hot Chocolate", "Cheesecake", "Apple Pie", "Hot Milk", "Flan", "Pancakes", "French Toast", "Pink Cat", "King Pink Cat", "Charm Blue", "Great Charm Blue", "Fireflower", "Big Fireflower", "All feathers" ],
		"dislikes":
			[ "All fish except squids", "All liquids", "Mushroom", "Monarch Mushroom", "Object X", "Scrap Metal", "Weeds", "Withered Grass", "Failed Dish", "Disgusting Food", "Rock", "Branch", "Can", "Rare Can", "Boot" ],
		"hates":
			[ "Sunsquid", "Lamp Squid", "Squid" ]
	},
	{
		"name": "Scarlett",
		"loves":
			[ "Tempura", "Tempura Udon", "Tempura Bowl", "Golden Octopus Rice", "Boiled Rockfish" ],
		"likes":
			[ "Onigiri", "Baked Onigiri", "Salmon Onigiri", "Bamboo Rice", "Rice Porridge", "Milk Porridge", "Egg Bowl", "Octopus Rice", "Fried Veggies", "Boiled Spinach" ],
		"dislikes":
			[ "Union Stew", "Cabbage Cakes", "Object X", "Scrap Metal", "Weeds", "Withered Grass", "Failed Dish", "Disgusting Food", "Rock", "Branch", "Can", "Rare Can", "Boot" ],
		"hates":
			[ "Onion", "Ultra Onion" ]
	},
	{
		"name": "Darroch",
		"loves":
			[ "Splash Star", "Gravity Hammer", "Dragonic Stone", "Orichalcum", "Emerald" ],
		"likes":
			[ "All crystals", "All other ore", "Scrap Metal", "Double Steel", "Light Ore", "White Stone", "Glitter Stone", "Rune Stone Fragment", "Salted C. Salmon", "Salted Char", "Salted Taimen", "Salted Pond Smelt" ],
		"dislikes":
			[ "All pendants", "Annette's Necklace", "Focus Earring", "Witch Earring", "Magic Earring", "Object X", "Weeds", "Withered Grass", "Failed Dish", "Disgusting Food", "Rock", "Branch", "Can", "Rare Can", "Boot" ],
		"hates":
			[ "Hand-Knit Scarf", "Fluffy Scarf" ]
	},
	{
		"name": "Elsje",
		"loves":
			[ "Chocolate Sponge", "Chocolate Cake", "Cheesecake", "Pancakes" ],
		"likes":
			[ "Chocolate", "Hot Chocolate", "Chocolate Cookies", "Yam of the Ages", "Apple Pie", "Flan", "French Toast", "Grape Liqueur", "Sandwich", "Fruit Sandwich", "Onigiri", "Salmon Onigiri", "Salad", "Bread", "Toast" ],
		"dislikes":
			[ "White Crystal Seeds", "Green Crystal Seeds", "Red Crystal Seeds", "Emery Flower Seeds", "Object X", "Scrap Metal", "Weeds", "Withered Grass", "Failed Dish", "Disgusting Food", "Rock", "Branch", "Can", "Rare Can", "Boot" ],
		"hates":
			[ "Gold Turnip Seeds", "Gold Cabbage Seeds" ]
	},
	{
		"name": "Heinz",
		"loves":
			[ "Crystal Skull" ],
		"likes":
			[ "All other gems", "Dragonic Stone", "Copper", "Platinum", "Orichalcum", "Gold", "Silver", "Tuna Teriyaki", "Grilled Blowfish", "Grilled Mackerel", "Grilled Needlefish", "Salted Pike", "Salted R. Trout" ],
		"dislikes":
			[ "Recovery Potion", "Healing Potion", "Roundoff", "Para-Gone", "Object X", "Scrap Metal", "Weeds", "Withered Grass", "Failed Dish", "Disgusting Food", "Rock", "Branch", "Can", "Rare Can", "Boot" ],
		"hates":
			[ "Cold Medicine", "Antidote Potion" ]
	},
	{
		"name": "Hina",
		"loves":
			[ "Mixed Juice", "Mixed Smoothie", "Fruit Smoothie", "Stew" ],
		"likes":
			[ "Orange Juice", "Grape Juice", "Apple Juice", "Pineapple Juice", "Fruit Juice", "Ice Cream", "Strawberry Milk", "Hot Milk", "Hot Chocolate", "Omelet Rice", "Seafood Doria", "Seafood Gratin", "Doria", "Gratin" ],
		"dislikes":
			[ "Tomato", "Titan Tomato", "Green Pepper", "Green Pepper Rex", "Object X", "Scrap Metal", "Weeds", "Withered Grass", "Failed Dish", "Disgusting Food", "Rock", "Branch", "Can", "Rare Can", "Boot" ],
		"hates":
			[ "Mushroom", "Monarch Mushroom" ]
	},
	{
		"name": "Julian",
		"loves":
			[ "Ultimate Curry", "Supreme Curry", "Curry Rice", "Omelet" ],
		"likes":
			[ "Curry Udon", "Curry Manju", "Curry Bread", "Dry Curry", "Pancakes", "French Fries", "Orange Juice", "Grape Juice", "Apple Juice", "Pineapple Juice", "Fruit Juice", "Ice Cream", "Strawberry Milk", "Fruit Smoothie" ],
		"dislikes":
			[ "Vegetable Juice", "Veggie Smoothie", "Green Pepper", "Green Pepper Rex", "Object X", "Scrap Metal", "Weeds", "Withered Grass", "Failed Dish", "Disgusting Food", "Rock", "Branch", "Can", "Rare Can", "Boot" ],
		"hates":
			[ "Stew" ]
	},
	{
		"name": "Laedia",
		"loves":
			[ "Dragon Fang", "Dragon Scale", "Basilisk Scale", "Stone Dragon Scale", "Grimoire Scale" ],
		"likes":
			[ "All other scales", "Flan", "Pumpkin Flan", "Meteor Pumpkin Flan", "Strawberry Jam", "Grape Jam", "Apple Jam", "Grapes", "Strawberry", "Apple", "Mealy Apple" ],
		"dislikes":
			[ "Devil Blood", "Poison King", "Paralysis Poison", "Object X", "Scrap Metal", "Weeds", "Withered Grass", "Failed Dish", "Disgusting Food", "Rock", "Branch", "Can", "Rare Can", "Boot" ],
		"hates":
			[ "Dragon Bones", "Viscous Liquid" ]
	},
	{
		"name": "Livia",
		"loves":
			[ "Pumpkin Flan", "Meteor Pumpkin Flan" ],
		"likes":
			[ "Flan", "Donuts", "Pancakes", "Ice Cream", "Cookies", "Chocolate Cookies", "Strawberry Jam", "Grape Jam", "Apple Jam", "Rice Porridge", "Milk Porridge", "French Toast", "Honey" ],
		"dislikes":
			[ "All horns", "Dragon Fang", "Object X", "Scrap Metal", "Weeds", "Withered Grass", "Failed Dish", "Disgusting Food", "Rock", "Branch", "Can", "Rare Can", "Boot" ],
		"hates":
			[ "Dragon Bones" ]
	},
	{
		"name": "Misasagi",
		"loves":
			[ "Tempura", "Tempura Udon" ],
		"likes":
			[ "Wine", "Grape Liqueur", "Stew", "Grilled Skipjack", "Miso Eggplant", "Grilled Miso", "Boiled Rockfish", "Egg Bowl", "Magic Charm", "Boiled Spinach", "Rice Porridge", "Udon", "Baked Onigiri", "Salmon Onigiri", "Charm" ],
		"dislikes":
			[ "Seafood Doria", "Doria", "Seafood Gratin", "Gratin", "Cheese Fondue", "Object X", "Scrap Metal", "Weeds", "Withered Grass", "Failed Dish", "Disgusting Food", "Rock", "Branch", "Can", "Rare Can", "Boot" ],
		"hates":
			[ "Pizza", "Seafood Pizza" ]
	},
	{
		"name": "Palmo",
		"loves":
			[ "Fairy Elixir", "Thunderbird Feather", "Devil Horn" ],
		"likes":
			[ "Unbroken Ivory Tusk", "Wood", "Stone", "Moving Branch", "Thick Stick", "Ancient Fish Feather Fins", "Tablet of Truth", "Quality Worn Cloth", "Grimoire Scale", "Big Bird's Comb", "Wine" ],
		"dislikes":
			[ "Octopus", "Squid", "Sunsquid", "Lamp Squid", "Object X", "Scrap Metal", "Weeds", "Withered Grass", "Failed Dish", "Disgusting Food", "Rock", "Branch", "Can", "Rare Can", "Boot" ],
		"hates":
			[ "Octopus and squid dishes" ]
	},
	{
		"name": "Randolph",
		"loves":
			[ "Curry Bread", "Curry Manju", "Jam Roll" ],
		"likes":
			[ "Bread", "Toast", "Steamed Bread", "Raisin Bread", "Pancakes", "Butter Roll", "Cake", "Chocolate Cake", "Chocolate Sponge", "Cheesecake", "Dumplings", "Basilisk Scale", "Stone Dragon Scale" ],
		"dislikes":
			[ "Rice", "Onigiri", "Salmon Onigiri", "Baked Onigiri", "Rice Porridge", "Object X", "Scrap Metal", "Weeds", "Withered Grass", "Failed Dish", "Disgusting Food", "Rock", "Branch", "Can", "Rare Can", "Boot" ],
		"hates":
			[ "Tempura Bowl", "Egg Bowl", "Milk Porridge" ]
	},
	{
		"name": "Simone",
		"loves":
			[ "Invinciroid", "Levelizer", "Sandwich", "Syringe" ],
		"likes":
			[ "All other medicines", "Wine", "Grape Liqueur", "Relax Tea", "Vegetable Juice", "Rice Porridge", "Mushroom", "Monarch Mushroom", "Aquamarine Brooch", "Amethyst Brooch", "Emerald Brooch", "Sapphire Brooch", "Ruby Brooch", "Diamond Brooch", "Dolphin Brooch" ],
		"dislikes":
			[ "Tomato", "Tomato Seeds", "Apple", "Mealy Apple", "Scrap Metal", "Weeds", "Withered Grass", "Failed Dish", "Disgusting Food", "Rock", "Branch", "Can", "Rare Can", "Boot" ],
		"hates":
			[ "Titan Tomato" ]
	},
	{
		"name": "Terry",
		"loves":
			[ "Star Pendant", "Sun Pendant", "Field Pendant", "Dew Pendant", "Earth Pendant" ],
		"likes":
			[ "Work Gloves", "Gloves", "Leather Belt", "Proof of Wisdom", "Milk", "Toast", "Raisin Bread", "Jam Roll", "Donuts", "Popcorn", "Apple", "Baked Apple", "Mealy Apple" ],
		"dislikes":
			[ "Orange Juice", "Mixed Juice", "Fruit Smoothie", "Mixed Smoothie", "Strawberry Milk", "Object X", "Scrap Metal", "Weeds", "Withered Grass", "Failed Dish", "Disgusting Food", "Rock", "Branch", "Can", "Rare Can", "Boot" ],
		"hates":
			[ "Relax Tea" ]
	},
	{
		"name": "Yuki",
		"loves":
			[ "Butter Roll" ],
		"likes":
			[ "Risotto", "Seafood Gratin", "Raisin Bread", "Jam Roll", "Apple Pie", "Vegetable Juice", "Flour", "Sour Drop", "Sweet Powder", "Heavy Spice", "Mixed Herbs" ],
		"dislikes":
			[ "Dumplings", "Insect Carapace", "Pretty Thread", "Spider's Thread", "Insect Horn", "Object X", "Scrap Metal", "Weeds", "Withered Grass", "Failed Dish", "Disgusting Food", "Rock", "Branch", "Can", "Rare Can", "Boot" ],
		"hates":
			[ "Viscous Liquid" ]
	}
];

var vm = new Vue({
  el: '#app',
  data: {
    characters: allItems,
    selected: '',
    selectedInfo: '',
    items: [],
    selectedItem: ''
  },
  mounted() {
	let newArray = [];

	this.characters.forEach(function(element) {
		for (const [key, value] of Object.entries(element)) {
			if (key != 'name')
			{
				value.forEach(function(el)
				{
					if (!newArray.includes(el))
					{
						newArray.push(el);
					}
				})
			}
		  }
    })

	this.items = newArray.sort();
  },
  methods: {
    displaySelectedNameInfo: function(event) {
      this.selectedInfo = '';
		let selectedName = event.target.value;
      
      this.characters.forEach(function(element) {
        if (selectedName == element.name)
        {
          vm.selectedInfo = `Loves: ${element.loves.join(', ')}<br /><br />
          Likes: ${element.likes.sorty().join(', ')}<br /><br />
          Dislikes: ${element.dislikes.sort().join(', ')}<br /><br />
          Hates: ${element.hates.sort().join(', ')}`;
        }
      });
    },
	displaySelectedItemInfo: function(event) {
		let selectedItem = event.target.value;
		let textString = '';
		this.selectedInfo = '';
			
		this.characters.forEach(function(element){
			// iterate through each character(element)'s loves/likes/dislikes/hates
			// key is the preference, value is the list in preference
			for (const [key, value] of Object.entries(element)) {
				if (key == 'loves') {
					value.forEach(function(el)
					{
						if (el == selectedItem)
						{
							textString += `${element.name} loves ${selectedItem}<br />`;
						}
					})
				}
				if (key == 'likes') {
					value.forEach(function(el)
					{
						if (el == selectedItem)
						{
							textString += `${element.name} likes ${selectedItem}<br />`;
						}
					})
				}
				if (key == 'dislikes') {
					value.forEach(function(el)
					{
						if (el == selectedItem)
						{
							textString += `${element.name} dislikes ${selectedItem}<br />`;
						}
					})
					
				}
				if (key == 'hates') {
					value.forEach(function(el)
					{
						if (el == selectedItem)
						{
							textString += `${element.name} hates ${selectedItem}<br />`;
						}
					})
				}
			}
		})

		this.selectedInfo = textString;
	}
  }
})
