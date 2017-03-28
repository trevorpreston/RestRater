class YelpApiController < ApplicationController
	include HTTParty



  def index
    url = "https://api.yelp.com/v3/businesses/search"
    response =  HTTParty.get(
    	url, 
    	headers: {
    		Authorization: "Bearer 2fO7NlMASnl0NTRpV6j75XHVhcrP3_QVsGBu7GgVSO9iZP6-r-sn-VpbzrdwSFRjz-AIeSi3pQn9G2U2vAd6FTlsZhuqz5LuO1FszS94B12ZK63vhwY9-V6gJEvYWHYx"
    	},
    	query: {
    		term: "lucalis", 
    		latitude: 40.762951,
    		longitude: -73.980833
    	},
    	debug_output: $stdout
    )
    parsed_body = JSON.parse(response.body)
    render json: parsed_body
  end
end
