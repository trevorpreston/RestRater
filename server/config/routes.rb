Rails.application.routes.draw do
  get 'yelp_api/:queryterm', to: 'yelp_api#index'
	get '/saved_restaurants', to: 'saved_restaurants#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
