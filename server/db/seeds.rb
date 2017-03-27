# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

restaurants = [
	{yelp_id: "gary-danko", nyc_id: "41704868", title: "Gary Danko", location: "BROADWAY", yelp_rating: 4.2, nyc_rating: "A"},
	{yelp_id: "pizza-topia", nyc_id: "71912734", title: "Pizza Topia", location: "4th Ave", yelp_rating: 3.1, nyc_rating: "C"},
	{yelp_id: "ninja-tacos-galore", nyc_id: "10384752", title: "Ninja Tacos", location: "14th St", yelp_rating: 2.2, nyc_rating: "B"},
	{yelp_id: "franks-seaweed", nyc_id: "01928462", title: "Franks Seaweed", location: "Jay St", yelp_rating: 4.8, nyc_rating: "A"},
	{yelp_id: "fries-n-carrots", nyc_id: "74893012", title: "Fries N Carrots", location: "2nd AVE", yelp_rating: 1.9, nyc_rating: "A"},
	{yelp_id: "pirate-tacos", nyc_id: "18264981", title: "I am not sure if I need this title column", location: "DELANCY ST", yelp_rating: 3.6, nyc_rating: "D"},
	{yelp_id: "jimmys-french-burritos", nyc_id: "47292901", title: "Jimmy's Burritos", location: "ESSEX", yelp_rating: 5.0, nyc_rating: "B"},
	{yelp_id: "bodaga-deluxe-plus", nyc_id: "46728191", title: "Bodaga Deluxe Plus", location: "23RD ST", yelp_rating: 2.1, nyc_rating: "C"}
]

SavedRestaurant.create(restaurants)
