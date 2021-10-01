require 'rest-client'

# Add some dummy test users
1.upto(10) do |i|
    User.create(
        username: "test" + i.to_s,
        password_digest: "$2a$12$n6uKoKr4bvYoGiN.RYxL1.qDC.dtWTxosRhNfUCi6//dp6/FdOBJO"
    )
end

rm = RestClient.get 'https://api.tvmaze.com/shows'
rm_array = JSON.parse(rm)
j = 0
rm_array.each do |show|
    Show.create(
        title: show['name'],
        genre: show['genres'],
        description: show['summary'],
        image_url: show['image']['medium']
    )
    j = j + 1

    1.upto(1 + rand(10)) do |k|
        Rating.create(
            score: 1 + rand(5),
            note: "",
            user_id: k,
            show_id: j
        )
    end
end
