# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

Movie.destroy_all
Review.destroy_all

10.times do 
    m = Movie.create(title: Faker::Movie.title, genre: Faker::Book.genre)
    3.times do 
        m.reviews.create(text: Faker::Restaurant.review, author: Faker::Name.name)
    end
end


puts "Created #{Movie.all.size} movies"
puts "Created #{Review.all.size} reviews"