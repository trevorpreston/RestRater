require 'test_helper'

class YelpApiControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get yelp_api_index_url
    assert_response :success
  end

end
