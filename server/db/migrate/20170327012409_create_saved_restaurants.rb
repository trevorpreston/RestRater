class CreateSavedRestaurants < ActiveRecord::Migration[5.0]
  def change
    create_table :saved_restaurants do |t|
      t.string :yelp_id
      t.string :nyc_id
      t.string :title
      t.string :location
      t.float :yelp_rating
      t.string :nyc_rating

      t.timestamps
    end
  end
end
