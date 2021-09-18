class CreateParks < ActiveRecord::Migration[6.1]
  def change
    create_table :parks do |t|
      t.jsonb :addresses
      t.jsonb :phones
      t.text :description
      t.string :park_type
      t.text :directions
      t.string :directions_url
      t.jsonb :enterance_fees
      t.jsonb :enterance_passes
      t.string :full_name
      t.string :external_id
      t.string :string
      t.jsonb :images_data
      t.float :latitude
      t.float :longitude
      t.string :name
      t.jsonb :hours
      t.string :code
      t.jsonb :states
      t.string :url
      t.text :weather

      t.timestamps
    end
  end
end
