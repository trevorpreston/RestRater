class SavedRestaurantsController < ApplicationController
	def index
		@savedrestaurants = SavedRestaurant.all
		render json: @savedrestaurants
	end
end
