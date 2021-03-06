class YelpApiController < ApplicationController
	include HTTParty

  def index
  	search_term = params[:queryterm]
  	yelp_key = "Bearer " + ENV['YELP_API_KEY']
    url = "https://api.yelp.com/v3/businesses/search"
    response =  HTTParty.get(
    	url, 
    	headers: {
    		Authorization: yelp_key
    	},
    	query: {
    		term: search_term, 
    		latitude: 40.762951,
    		longitude: -73.980833
    	}
    	# ,debug_output: $stdout
    )
    parsed_body = JSON.parse(response.body)
    render json: parsed_body
  end

end
