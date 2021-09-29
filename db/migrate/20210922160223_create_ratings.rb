class CreateRatings < ActiveRecord::Migration[6.1]
  def change
    create_table :ratings do |t|
      t.integer :score
      t.string :note
      t.integer :user_id
      t.integer :show_id

      t.timestamps
    end
  end
end
