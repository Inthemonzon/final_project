require 'rest-client'

rm = RestClient.get 'https://api.tvmaze.com/shows'

rm_array = JSON.parse(rm)

rm_array.each do |show|
    Show.create(
    user_id: 1,    
    title: show['name'],
    genre: show['genres'],
    description: show['summary'],
    image_url: show['image']['medium'],
    )
   end