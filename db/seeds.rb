# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.create(email: "BumbershootEquip@Gmail.com", password: ENV['dmin_password'], username: "Admin")

categories = Category.create([{name: "Sleep"}, {name: "Cook"}, {name: "Recreation"}, {name: "Miscellaneous"}])

descriptions = [
  {size: "2 Burner",
  color: "Green",
  body: "With legendary durability and 2 powerful burners, the manual-start Triton Series 2-Burner Stove stands up to frequent use at your campground or a tailgate party.",
  },
  {size: "72 x 20 inches",
  color: "Grey",
  body: "A counterpart to the RidgeRest Solar, the Therm-a-Rest SOLite sleeping pad is lighter yet also features an aluminized surface to reflect body heat for a boost in warmth and comfort.",
  },
  {size: "4 Person",
  color: "Grey",
  body: "The multi-diameter pole configuration enables the walls to stay steep and aggressively arch toward the top to produce a large livable space.",
  }
  {size: "2 Person",
  color: "Grey",
  body: "This 2-person tent is so light, you'll almost forget it's in your pack. With ample vestibule space, compact folding poles and high sidewall protection, it's got everything you need for 3 seasons.",
  }
  {size: "60 Liter Capacity",
  color: "Blue",
  body: "Hit the wilderness with the light, simple and value-conscious Osprey Volt 60 pack. Enjoy its comfortable fit with all the essential features, but without extraneous bells and whistles.",
  }
  {size: "8.5 x 6.5 x 2 inches",
  color: "Yellow",
  body: "Pared down to a weight-saving bare minimum, this Adventure Medical Ultralight / Watertight .7 first-aid kit contains the most essential supplies.",
  }
  {size: "27 x 17 inches",
  color: "Blue",
  body: "Take it camping, fishing or to the kid's game—the lightweight GCI Quik-E-Seat chair offers comfort and easy portability.",
  }
  {size: "12.3 x 2.25 inches",
  color: "Black",
  body: "A third generation of the legendary Maglite, this water-resistant LED flashlight casts a powerful beam with 3 D-cell batteries. It offers a range of modes and spot-to-flood to light up your world.",
  }
  {size: "27.5 inches",
  color: "Black & White",
  body: "Just a standard soccer ball, nothing to see here.",
  }
]


descriptions.each do |description|
  Drescription.create(size: description[0], color: description[1], body: description[2])
end


items = [
  {name: "Coleman Stove",
  category: 2,
  paypalID: ,
  price: 10,
  description: Description.find(1)
  },
  {name: "Therm-a-rest Sleeping Pad",
  category: 1,
  paypalID: ,
  price: 2,
  description: Description.find(2)
  },
  {name: "Kelty - 4 Person Tent",
  category: 1,
  paypalID: ,
  price: 35,
  description: Description.find(3)
  },
  {name: "Kelty Lightweight - 2 Person Tent",
  category: 1,
  paypalID: ,
  price: 15,
  description: Description.find(4)
  },
  {name: "Osprey Backpack",
  category: 1,
  paypalID: ,
  price: 10,
  description: Description.find(5)
  },
  {name: "First Aid Kit",
  category: 4,
  paypalID: ,
  price: 5,
  description: Description.find(6)
  },
  {name: "CGI Folding Chair",
  category: 4,
  paypalID: ,
  price: 5,
  description: Description.find(7)
  },
  {name: "Maglite LED Flashlight",
  category: 4,
  paypalID: ,
  price: 5,
  description: Description.find(8)
  },
  {name: "Soccer Ball",
  category: 3,
  paypalID: ,
  price: 5,
  description: Description.find(9)
  },
]

items.each do |item|
  Item.create(name: item[0], category: item[1], paypalID: item[2])
end

