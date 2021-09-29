class CreateShows < ActiveRecord::Migration[6.1]
  def change
    create_table :shows do |t|
      t.string :title
      t.string :genre
      t.string :description
      t.string :image_url

      t.timestamps
    end
  end
end
