class YelpApiController < ApplicationController
	include HTTParty
  def index
    url = "https://api.yelp.com/v3/businesses/north-india-restaurant-san-francisco"
    response =  HTTParty.get(url, headers: {Authorization: "Bearer 2fO7NlMASnl0NTRpV6j75XHVhcrP3_QVsGBu7GgVSO9iZP6-r-sn-VpbzrdwSFRjz-AIeSi3pQn9G2U2vAd6FTlsZhuqz5LuO1FszS94B12ZK63vhwY9-V6gJEvYWHYx"})
    parsed_body = JSON.parse(response.body)
    render json: parsed_body
  end
end
