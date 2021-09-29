Rails.application.routes.draw do
  post '/signup', to: "users#create"
  get "/me", to: "users#show"
  post '/login', to: 'sessions#create'
  delete "/logout", to: "sessions#destroy"
  # post '/ratings', to: 'ratings#create'
  get "/shows", to: "shows#show_user_shows"
  post "/shows", to: "shows#create"
  delete "/shows", to: "shows#destroy"
end
