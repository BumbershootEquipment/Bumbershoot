# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.create(email: "BumbershootEquip@Gmail.com", password: ENV['admin_password'], username: "Admin")

categories = Category.create([{name: "Sleep"}, {name: "Cook"}, {name: "Recreation"}, {name: "Miscellaneous"}])

descriptions = [
  ["2 Burner",
  "Green",
  "With legendary durability and 2 powerful burners, the manual-start Triton Series 2-Burner Stove stands up to frequent use at your campground or a tailgate party.",
  ],
  ["72 x 20 inches",
  "Grey",
  "A counterpart to the RidgeRest Solar, the Therm-a-Rest SOLite sleeping pad is lighter yet also features an aluminized surface to reflect body heat for a boost in warmth and comfort.",
  ],
  ["4 Person",
  "Grey",
  "The multi-diameter pole configuration enables the walls to stay steep and aggressively arch toward the top to produce a large livable space.",
  ],
  ["2 Person",
  "Grey",
  "This 2-person tent is so light, you'll almost forget it's in your pack. With ample vestibule space, compact folding poles and high sidewall protection, it's got everything you need for 3 seasons.",
  ],
  ["60 Liter Capacity",
  "Blue",
  "Hit the wilderness with the light, simple and value-conscious Osprey Volt 60 pack. Enjoy its comfortable fit with all the essential features, but without extraneous bells and whistles.",
  ],
  ["8.5 x 6.5 x 2 inches",
  "Yellow",
  "Pared down to a weight-saving bare minimum, this Adventure Medical Ultralight / Watertight .7 first-aid kit contains the most essential supplies.",
  ],
  ["27 x 17 inches",
  "Blue",
  "Take it camping, fishing or to the kid's game—the lightweight GCI Quik-E-Seat chair offers comfort and easy portability.",
  ],
  ["12.3 x 2.25 inches",
  "Black",
  "A third generation of the legendary Maglite, this water-resistant LED flashlight casts a powerful beam with 3 D-cell batteries. It offers a range of modes and spot-to-flood to light up your world.",
  ],
  ["27.5 inches",
  "Black & White",
  "Just a standard soccer ball, nothing to see here.",
  ]
]


descriptions.each do |size, color, body|
  Description.create(size: size, color: color, body: body)
end


items = [
  ["Coleman Stove",
  2,
  "",
  10,
  Description.find(1)
  ],
  ["Therm-a-rest Sleeping Pad",
  1,
  "",
  2,
  Description.find(2)
  ],
  ["Kelty - 4 Person Tent",
  1,
  "",
  35,
  Description.find(3)
  ],
  ["Kelty Lightweight - 2 Person Tent",
  1,
  "",
  15,
  Description.find(4)
  ],
  ["Osprey Backpack",
  1,
  "",
  10,
  Description.find(5)
  ],
  ["First Aid Kit",
  4,
  "",
  5,
  Description.find(6)
  ],
  ["CGI Folding Chair",
  4,
  "",
  5,
  Description.find(7)
  ],
  ["Maglite LED Flashlight",
  4,
  "",
  5,
  Description.find(8)
  ],
  ["Soccer Ball",
  3,
  "",
  5,
  Description.find(9)
  ],
]

items.each do |name, category_id, paypalID, price, description|
  Item.create(name: name, category_id: category_id, paypalID: paypalID, price: price, description: description, corporate: true)
end

